import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import classNames from 'classnames';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/style/primereact.css';
import './assets/style/flags.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/style/app/App.scss';

import AppRouter from './AppRouter';
import AppNews from './AppNews';
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';

import AppContentContext from './AppContentContext';
import { Toast } from './components/toast/Toast';
import PrimeReact from './components/api/PrimeReact';
import { AppChangelogDialog } from './AppChangelogDialog';

export class App extends Component {

    constructor(props) {
        super(props);

        this.news_key = 'primenews-react';

        this.state = {
            theme: 'saga-blue',
            inputStyle: 'outlined',
            ripple: true,
            darkTheme: false,
            themeCategory: null,
            sidebarActive: false,
            newsActive: this.isNewsStorageExpired(),
            configuratorActive: false,
            changelogActive: false,
            searchVal: null
        };

        this.onThemeChange = this.onThemeChange.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onHideNews = this.onHideNews.bind(this);
        this.onMaskClick = this.onMaskClick.bind(this);
        this.onInputStyleChange = this.onInputStyleChange.bind(this);
        this.onRippleChange = this.onRippleChange.bind(this);

        this.showChangelogDialog = this.showChangelogDialog.bind(this);
        this.hideChangelogDialog = this.hideChangelogDialog.bind(this);

        PrimeReact.ripple = true;
    }

    onThemeChange(event) {
        let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.state.theme, event.theme));
        let theme = event.theme;
        let themeCategory = /^(md-|mdc-)/i.test(theme) ? 'material' : (/^(bootstrap)/i.test(theme) ? 'bootstrap' : null);
        this.setState({
            theme,
            darkTheme: event.dark,
            themeCategory
        });

        event.originalEvent.preventDefault();
    }

    onMenuButtonClick() {
        this.menuClick = true;

        if (this.sidebarActive) {
            this.setState({ sidebarActive: false });
            this.removeClass(document.body, 'blocked-scroll');
        }
        else {
            this.setState({ sidebarActive: true });
            this.addClass(document.body, 'blocked-scroll');
        }
    }

    onMenuItemClick() {
        this.setState({ sidebarActive: false });
        this.removeClass(document.body, 'blocked-scroll');
    }

    onMaskClick() {
        this.setState({ sidebarActive: false });
        this.removeClass(document.body, 'blocked-scroll');
    }

    onHideNews(event) {
        this.setState({ newsActive: false }, () => {
            const now = new Date();
            const item = {
                value: false,
                expiry: now.getTime() + 604800000,
            }
            localStorage.setItem(this.news_key, JSON.stringify(item));
        });
        event.stopPropagation();
    }

    isNewsStorageExpired() {
        const newsString = localStorage.getItem(this.news_key);
        if (!newsString) {
            return true;
        }
        const newsItem = JSON.parse(newsString);
        const now = new Date()

        if (now.getTime() > newsItem.expiry) {
            localStorage.removeItem(this.news_key);
            return true;
        }

        return false;
    }

    onInputStyleChange(inputStyle) {
        this.setState({ inputStyle });
    }

    onRippleChange(value) {
        PrimeReact.ripple = value;

        this.setState({ ripple: value });
    }

    showChangelogDialog(searchVal) {
        this.setState({
            changelogActive: true,
            searchVal
        });
    }

    hideChangelogDialog() {
        this.setState({ changelogActive: false });
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    hasClass(element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }

    isOutdatedIE() {
        let ua = window.navigator.userAgent;
        if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
            return true;
        }

        return false;
    }

    componentDidMount() {
        if (this.isOutdatedIE()) {
            this.showcaseToast.show({ severity: 'warn', summary: 'Limited Functionality', detail: 'Although PrimeReact supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.', life: 6000 });
        }
    }

    render() {
        const wrapperClassName = classNames('layout-wrapper', {
            'layout-news-active': this.state.newsActive,
            'p-input-filled': this.state.inputStyle === 'filled',
            'p-ripple-disabled': this.state.ripple === false,
            [`theme-${this.state.themeCategory}`]: !!this.state.themeCategory
        });
        const maskClassName = classNames('layout-mask', {
            'layout-mask-active': this.state.sidebarActive
        });

        return (
            <div className={wrapperClassName}>
                <Toast ref={(el) => this.showcaseToast = el} />

                <AppNews newsActive={this.state.newsActive} onHideNews={this.onHideNews}/>

                <AppTopbar onMenuButtonClick={this.onMenuButtonClick} onThemeChange={this.onThemeChange} theme={this.state.theme} darkTheme={this.state.darkTheme} />

                <AppMenu active={this.state.sidebarActive} onMenuItemClick={this.onMenuItemClick} />

                <AppContentContext.Provider value={{
                    inputStyle: this.state.inputStyle,
                    darkTheme: this.state.darkTheme,
                    changelogText: "VIEW CHANGELOG",
                    onChangelogBtnClick: this.showChangelogDialog,
                    onInputStyleChange: this.onInputStyleChange
                }}>
                    <div className="layout-content">
                        <AppRouter />

                        <AppChangelogDialog visible={this.state.changelogActive} searchVal={this.state.searchVal} onHide={this.hideChangelogDialog} />

                        <AppFooter />
                    </div>

                    <AppConfig theme={this.state.theme} ripple={this.state.ripple} onThemeChange={this.onThemeChange} onRippleChange={this.onRippleChange} />
                </AppContentContext.Provider>

                <div className={maskClassName} onClick={this.onMaskClick}></div>
            </div>
        );
    }
}

export default App;

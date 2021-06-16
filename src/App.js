import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import { classNames } from './components/utils/ClassNames';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/style/primereact.css';
import './assets/style/flags.css';
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
import { VersionService } from './showcase/service/VersionService';

export class App extends Component {

    constructor(props) {
        super(props);

        this.news_key = 'primenews-react';
        this.theme_key = 'primetheme-react';

        this.state = {
            theme: 'saga-blue',
            inputStyle: 'outlined',
            ripple: false,
            darkTheme: false,
            themeCategory: null,
            menuMode: null,
            sidebarActive: false,
            newsActive: false,
            configuratorActive: false,
            changelogActive: false,
            searchVal: null,
            isRippleConfigDisabled: false,
            versions: []
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

        this.versionService = new VersionService();

        PrimeReact.ripple = false;
    }

    init() {
        const href = window.location.href;
        const queryParams = href.split('?');
        let theme = this.state.theme;

        if (queryParams && queryParams[1]) {
            const searchParams = new URLSearchParams(queryParams[1]);
            theme = searchParams.get('theme');

            const menuMode = searchParams.get('menu');
            if (menuMode) {
                this.setState({ menuMode });
            }
        }
        else {
            theme = localStorage.getItem(this.theme_key);
        }

        if (theme) {
            const dark = this.isDarkTheme(theme);
            this.onThemeChange({
                theme,
                dark
            });
        }

        this.versionService.getVersions().then(data => this.setState({
            versions: data,
            newsActive: (data && data[0].news) && this.isNewsStorageExpired(),
        }));
    }

    onThemeChange(event) {
        let { theme, dark: darkTheme} = event;
        let themeElement = document.getElementById('theme-link');
        let themeCategory = /^(md-|mdc-)/i.test(theme) ? 'material' : (/^(bootstrap)/i.test(theme) ? 'bootstrap' : null);
        let state = {};

        if (theme.startsWith('md')) {
            PrimeReact.ripple = true;
            state = { ripple: true };
        }

        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.state.theme, event.theme));

        state = {...state, ...{
                theme,
                darkTheme,
                themeCategory
            }
        };

        this.setState(state, () => {
            localStorage.setItem(this.theme_key, this.state.theme);
        });
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

    isDarkTheme(theme) {
        return /(dark|vela|arya|luna)/i.test(theme);
    }

    onInputStyleChange(inputStyle) {
        this.setState({ inputStyle });
    }

    onRippleChange(value, isRippleConfigDisabled) {
        PrimeReact.ripple = value;

        this.setState({ ripple: value, isRippleConfigDisabled });
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

        this.init();
    }

    render() {
        const wrapperClassName = classNames('layout-wrapper', {
            'layout-overlay': this.state.menuMode && this.state.menuMode === 'overlay',
            'layout-news-active': this.state.newsActive,
            'p-input-filled': this.state.inputStyle === 'filled',
            'p-ripple-disabled': this.state.ripple === false,
            [`theme-${this.state.themeCategory}`]: !!this.state.themeCategory,
        });
        const maskClassName = classNames('layout-mask', {
            'layout-mask-active': this.state.sidebarActive
        });

        return (
            <div className={wrapperClassName}>
                <Toast ref={(el) => this.showcaseToast = el} />

                <AppNews newsActive={this.state.newsActive} onHideNews={this.onHideNews}/>

                <AppTopbar onMenuButtonClick={this.onMenuButtonClick} onThemeChange={this.onThemeChange} theme={this.state.theme} darkTheme={this.state.darkTheme} versions={this.state.versions} />

                <AppMenu active={this.state.sidebarActive} onMenuItemClick={this.onMenuItemClick} />

                <AppContentContext.Provider value={{
                    ripple: this.state.ripple,
                    inputStyle: this.state.inputStyle,
                    darkTheme: this.state.darkTheme,
                    changelogText: "VIEW CHANGELOG",
                    onChangelogBtnClick: this.showChangelogDialog,
                    onInputStyleChange: this.onInputStyleChange,
                    onRippleChange: this.onRippleChange
                }}>
                    <div className="layout-content">
                        <AppRouter />

                        <AppChangelogDialog visible={this.state.changelogActive} searchVal={this.state.searchVal} onHide={this.hideChangelogDialog} />

                        <AppFooter />
                    </div>

                    <AppConfig theme={this.state.theme} ripple={this.state.ripple} isRippleConfigDisabled={this.state.isRippleConfigDisabled} onThemeChange={this.onThemeChange} onRippleChange={this.onRippleChange} />
                </AppContentContext.Provider>

                <div className={maskClassName} onClick={this.onMaskClick}></div>
            </div>
        );
    }
}

export default App;

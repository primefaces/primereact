import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import { Dialog } from './components/dialog/Dialog';
import { Button } from './components/button/Button';
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
/*import AppNews from './AppNews';*/
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';

import axios from 'axios';

import AppContentContext from './AppContentContext';
import { Growl } from './components/growl/Growl';
import PrimeReact from './components/utils/PrimeReact';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: 'saga-blue',
            inputStyle: 'outlined',
            ripple: true,
            darkTheme: false,
            sidebarActive: false,
            /*mobileMenuActive: false,
            themeMenuActive: false,
            themeMenuVisited: false,*/

            newsActive: sessionStorage.getItem('primenews-hidden') ? false : true,
            configuratorActive: false,
            changelog: null,
            changelogActive: false,
            totalVersion: 0,
            prevChangelog: null,
            currentChangelog: null,
            nextChangelog: null,
            filteredChangelog: null,
            searchVal: null
        };

        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onHideNews = this.onHideNews.bind(this);
        this.bindDocumentClick = this.bindDocumentClick.bind(this);
        this.onConfiguratorClick = this.onConfiguratorClick.bind(this)
        this.toggleConfigurator = this.toggleConfigurator.bind(this);
        this.hideConfigurator = this.hideConfigurator.bind(this);
        this.onMaskClick = this.onMaskClick.bind(this);
        this.onInputStyleChange = this.onInputStyleChange.bind(this);
        this.onRippleChange = this.onRippleChange.bind(this);

        this.showChangelogDialog = this.showChangelogDialog.bind(this);
        this.hideChangelogDialog = this.hideChangelogDialog.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);

        PrimeReact.ripple = true;
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if (this.state.activeTopbarItem === event.item)
            this.setState({ activeTopbarItem: null });
        else
            this.setState({ activeTopbarItem: event.item });

        //event.originalEvent.preventDefault();
    }

    onThemeChange(event) {
        let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.state.theme, event.theme));
        this.setState({
            theme: event.theme,
            darkTheme: event.dark
        });

        event.originalEvent.preventDefault();
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

    onMaskClick() {
        this.setState({ sidebarActive: false });
        this.removeClass(document.body, 'blocked-scroll');
    }

    onSidebarClick() {
        this.menuClick = true;
    }

    onMenuItemClick() {
        this.setState({ mobileMenuActive: false });
    }

    bindDocumentClick() {
        if (!this.topbarItemClick) {
            this.setState({
                activeTopbarItem: null,
                topbarMenuActive: false
            });
        }

        if (!this.menuClick) {
            this.setState({ mobileMenuActive: false });
        }

        if (!this.configClick) {
            this.setState({ configuratorActive: false });
        }

        this.topbarItemClick = false;
        this.menuClick = false;
        this.configClick = false;
    }

    onHideNews(event) {
        this.setState({ newsActive: false });
        sessionStorage.setItem('primenews-hidden', "true");
        event.stopPropagation();
    }

    onConfiguratorClick() {
        this.configClick = true;
    }

    toggleConfigurator() {
        this.configClick = true;
        this.setState({ configuratorActive: !this.state.configuratorActive })
    }

    hideConfigurator() {
        this.setState({ configuratorActive: false });
    }

    onInputStyleChange(inputStyle) {
        this.setState({ inputStyle });
    }

    onRippleChange(value) {
        PrimeReact.ripple = value;

        this.setState({ ripple: value });
    }

    getChangelog() {
        axios.get('showcase/changelog/changelog.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.data)
            .then(data => this.setState({ changelog: data }));
    }

    showChangelogDialog(searchVal) {
        const currentVersion = Object.keys(this.state.changelog)[0],
            totalVersion = Object.keys(this.state.changelog).length;

        this.setState({
            changelogActive: true,
            currentChangelog: { version: currentVersion, index: 0 },
            prevChangelog: { version: Object.keys(this.state.changelog)[1], index: 1 },
            filteredChangelog: this.state.changelog[currentVersion][searchVal.toLowerCase()],
            totalVersion,
            searchVal
        });
    }

    hideChangelogDialog() {
        this.setState({ changelogActive: false });
    }

    onPrev() {
        let state = {
            filteredChangelog: this.state.changelog[this.state.prevChangelog.version][this.state.searchVal.toLowerCase()],
            prevChangelog: null,
            currentChangelog: this.state.prevChangelog,
            nextChangelog: this.state.currentChangelog
        };

        if (this.state.totalVersion > this.state.prevChangelog.index + 1) {
            let prevIndex = this.state.prevChangelog.index + 1;
            let prevVersion = Object.keys(this.state.changelog)[prevIndex];
            state['prevChangelog'] = {
                version: prevVersion,
                index: prevIndex
            }
        }

        this.setState(state);
    }

    onNext() {
        let state = {
            filteredChangelog: this.state.changelog[this.state.nextChangelog.version][this.state.searchVal.toLowerCase()],
            prevChangelog: this.state.currentChangelog,
            currentChangelog: this.state.nextChangelog,
            nextChangelog: null
        };

        if (this.state.nextChangelog.index > 0) {
            let nextIndex = this.state.nextChangelog.index - 1;
            let nextVersion = Object.keys(this.state.changelog)[nextIndex];
            state['nextChangelog'] = {
                version: nextVersion,
                index: nextIndex
            }
        }

        this.setState(state);
    }

    componentDidMount() {
        this.getChangelog();

        if (this.isOutdatedIE()) {
            this.showcaseGrowl.show({ severity: 'warn', summary: 'Limited Functionality', detail: 'Although PrimeReact supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.' });
        }
    }

    render() {
        const wrapperClassName = classNames('layout-wrapper', {
            /*'layout-news-active': this.state.newsActive,*/
            'p-input-filled': this.state.inputStyle === 'filled',
            'p-ripple-disabled': this.state.ripple === false
        });
        const maskClassName = classNames('layout-mask', {
            'layout-mask-active': this.state.sidebarActive
        });

        return (
            <div className={wrapperClassName}>
                <Growl ref={(el) => this.showcaseGrowl = el} />

                {/* <AppNews newsActive={this.state.newsActive} onHideNews={this.onHideNews}/> */}

                <AppTopbar onMenuButtonClick={this.onMenuButtonClick} onThemeChange={this.onThemeChange} theme={this.state.theme} darkTheme={this.state.darkTheme} />

                <AppMenu active={this.state.sidebarActive} />

                <AppContentContext.Provider value={{
                    inputStyle: this.state.inputStyle,
                    darkTheme: this.state.darkTheme,
                    changelogText: "VIEW CHANGELOG",
                    onChangelogBtnClick: this.showChangelogDialog,
                    onInputStyleChange: this.onInputStyleChange
                }}>
                    <div className="layout-content">

                        <AppRouter />

                        <Dialog header={<span className="p-text-capitalize">{this.state.searchVal} changelog</span>} className="layout-changelog-dialog" visible={this.state.changelogActive} style={{ width: '50vw' }} onHide={this.hideChangelogDialog}>
                            {
                                this.state.currentChangelog && <div className="p-d-flex">
                                    <span className="p-text-bold" style={{ fontSize: '1.1rem'}}>{this.state.currentChangelog.version}</span>
                                    {this.state.currentChangelog.index === 0 && <span className="p-tag p-tag-rounded p-tag-info p-ml-2">current</span>}
                                    <a href="https://github.com/primefaces/primereact/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="p-ml-auto">View Full Changelog</a>
                                </div>
                            }
                            <ul className="p-reset p-my-4">
                                {
                                    this.state.filteredChangelog ?
                                        this.state.filteredChangelog.map((item, index) => {
                                            return (
                                                <li key={index} className="p-mt-2 p-mb-4">
                                                    <span className="p-d-flex p-ai-center">
                                                        <i className="pi pi-circle-on p-mr-2" style={{ fontSize: '.5rem' }}></i>
                                                        {item.title}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-ml-auto">#{item.number}</a>
                                                    </span>
                                                </li>
                                            )
                                        })
                                        :
                                        <li>No Change</li>
                                }
                            </ul>
                            <div className="p-d-flex p-ai-center p-jc-between p-mb-3">
                                {this.state.prevChangelog && <Button type="button" label={this.state.prevChangelog.version} onClick={this.onPrev} className="p-button-text" icon="pi pi-chevron-left" />}
                                {this.state.nextChangelog && <Button type="button" label={this.state.nextChangelog.version} onClick={this.onNext} className="p-button-text" icon="pi pi-chevron-right" iconPos="right" />}
                            </div>
                        </Dialog>

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

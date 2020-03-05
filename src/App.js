import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import {Dialog} from './components/dialog/Dialog';
import {Button} from './components/button/Button';
import classNames from 'classnames';
import 'babel-polyfill';
import './resources/style/primereact.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './resources/style/flags.css';
import './sass/App.scss';

import AppRouter from './AppRouter';
/*import AppNews from './AppNews';*/
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';

import axios from 'axios';

import AppContentContext from './AppContentContext';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            activeTheme: 'nova-light',
            mobileMenuActive: false,
            themeMenuActive: false,
            themeMenuVisited: false,
            newsActive: sessionStorage.getItem('primenews-hidden') ? false: true,
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
        this.onHideNews = this.onHideNews.bind(this);
        this.bindDocumentClick = this.bindDocumentClick.bind(this);
        this.onConfiguratorClick = this.onConfiguratorClick.bind(this)
        this.toggleConfigurator = this.toggleConfigurator.bind(this);
        this.hideConfigurator = this.hideConfigurator.bind(this);

        this.showChangelogDialog = this.showChangelogDialog.bind(this);
        this.hideChangelogDialog = this.hideChangelogDialog.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if(this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        //event.originalEvent.preventDefault();
    }

    onThemeChange(event) {
        let themeElement = document.getElementById('theme-link');
        let urlTokens = themeElement.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 2] = event.theme;
        let newURL = urlTokens.join('/');

        this.replaceLink(themeElement, newURL);

        const hasBodyDarkTheme = this.hasClass(document.body, 'dark-theme');
        if (event.dark) {
            if (!hasBodyDarkTheme) {
                this.addClass(document.body, 'dark-theme');
            }
        }
        else if (hasBodyDarkTheme) {
            this.removeClass(document.body, 'dark-theme');
        }

        this.setState({
            themeMenuActive: false,
            activeTheme: event.theme
        });
        event.originalEvent.preventDefault();
    }

    replaceLink(linkElement, href) {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);
        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');
        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            cloneLinkElement.setAttribute('id', id);
        });
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

    onMenuButtonClick() {
        this.menuClick = true;
        this.setState({ mobileMenuActive: !this.state.mobileMenuActive });
    }

    onSidebarClick() {
        this.menuClick = true;
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

    onHideNews() {
        this.setState({ newsActive: false });
        sessionStorage.setItem('primenews-hidden', "true");
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

    getChangelog() {
        axios.get('showcase/resources/changelog/changelog.json', { headers: { 'Cache-Control' : 'no-cache' } })
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
    }

    render() {
        const wrapperClassName = classNames('layout-wrapper', {
            /*'layout-news-active': this.state.newsActive,*/
            'layout-sidebar-mobile-active': this.state.mobileMenuActive,
            'layout-config-active': this.state.configuratorActive
        });

        return (
            <div className={wrapperClassName} onClick={this.bindDocumentClick}>

                {/*<AppNews newsActive={this.state.newsActive} onHideNews={this.onHideNews}/>*/}

                <AppTopbar activeTopbarItem={this.state.activeTopbarItem} onMenuButtonClick={this.onMenuButtonClick}
                    onTopbarItemClick={this.onTopbarItemClick} onThemeChange={this.onThemeChange} menuActive={this.state.mobileMenuActive}/>

                <AppMenu onSidebarClick={this.onSidebarClick}/>

                <div className="layout-content">
                    <AppContentContext.Provider value={{
                        changelogText: "VIEW CHANGELOG",
                        onChangelogBtnClick: this.showChangelogDialog
                    }}>
                        <AppRouter />

                    </AppContentContext.Provider>

                    <Dialog header={`${this.state.searchVal} changelog`} className="layout-changelog-dialog" visible={this.state.changelogActive} style={{width: '50vw'}} onHide={this.hideChangelogDialog}>
                        {
                            this.state.currentChangelog && <div className="layout-changelog-current-header">
                                    <span>
                                        <span className="layout-changelog-version">{this.state.currentChangelog.version}</span>
                                        { this.state.currentChangelog.index === 0 && <span className="layout-changelog-badge">current</span> }
                                    </span>
                                    <a href="https://github.com/primefaces/primereact/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="layout-changelog-full">View Full Changelog</a>
                                </div>
                        }
                        <ul className="layout-changelog-container">
                            {
                                this.state.filteredChangelog ?
                                    this.state.filteredChangelog.map((item, index) => {
                                        return <li key={index}>&#9679; {item.title} <a href={item.url} target="_blank" rel="noopener noreferrer" className="layout-changelog-issue-no">#{item.number}</a></li>
                                    })
                                    :
                                    <li>No Change</li>
                            }
                        </ul>
                        <div className="layout-changelog-actions">
                            { this.state.prevChangelog && <Button type="button" label={this.state.prevChangelog.version} onClick={this.onPrev} className="p-button-secondary" icon="pi pi-chevron-left" /> }
                            { this.state.nextChangelog && <Button type="button" label={this.state.nextChangelog.version} onClick={this.onNext} className="p-button-secondary" icon="pi pi-chevron-right" iconPos="right" /> }
                        </div>
                    </Dialog>

                    <AppFooter />
                </div>

                <AppConfig onConfiguratorClick={this.onConfiguratorClick} toggleConfigurator={this.toggleConfigurator}
                    hideConfigurator={this.hideConfigurator} onThemeChange={this.onThemeChange} activeTheme={this.state.activeTheme}/>

                { this.state.mobileMenuActive && <div className="layout-mask"></div> }
            </div>
        );
    }
}

export default App;

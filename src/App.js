import React, { Component } from 'react';
import { AppMenu } from './AppMenu';
import classNames from 'classnames';
import 'babel-polyfill';
import './resources/style/primereact.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './sass/App.scss';

import AppRouter from './AppRouter';
/*import AppNews from './AppNews';*/
import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            activeTheme: 'nova-light',
            mobileMenuActive: false,
            themeMenuActive: false,
            themeMenuVisited: false,
            newsActive: sessionStorage.getItem('primenews-hidden') ? false: true,
            configuratorActive: false
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
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if(this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        event.originalEvent.preventDefault();
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
                    onTopbarItemClick={this.onTopbarItemClick} onThemeChange={this.onThemeChange}/>

                <AppMenu onSidebarClick={this.onSidebarClick}/>

                <div className="layout-content">
                    <AppRouter />

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

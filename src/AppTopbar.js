import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export class AppTopbar extends Component {

    static defaultProps = {
        activeTopbarItem: null,
        menuActive: false,
        onMenuButtonClick: null,
        onTopbarItemClick: null,
        onThemeChange: null,
    }

    static propTypes = {
        activeTopbarItem: PropTypes.string,
        menuActive: PropTypes.bool,
        onMenuButtonClick: PropTypes.func,
        onTopbarItemClick: PropTypes.func,
        onThemeChange: PropTypes.func
    }

    constructor() {
        super();

        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
    }

    onMenuButtonClick(event) {
        if (this.props.onMenuButtonClick) {
            this.props.onMenuButtonClick(event);
        }
    }

    onTopbarItemClick(event, item) {
        if (this.onTopbarItemClick) {
            this.props.onTopbarItemClick({
                originalEvent: event,
                item
            })
        }
    }

    onThemeChange(event, theme, dark) {
        if (this.props.onThemeChange) {
            this.props.onThemeChange({
                originalEvent: event,
                theme,
                dark
            })
        }
    }

    render() {
        return (
            <div className="layout-topbar">
                <div className="layout-topbar-left">
                    <button type="button" className="p-link menu-button" onClick={this.onMenuButtonClick} aria-expanded={this.props.menuActive} aria-haspopup={true} aria-label="Menu">
                        <i className="pi pi-bars"></i>
                    </button>
                    <Link to="/" className="logo" aria-label="PrimeReact logo">
                        <img alt="logo" src="showcase/resources/images/primereact-logo.png" />
                    </Link>
                </div>

                <div className="layout-topbar-right">
                    <ul className="topbar-menu p-unselectable-text" role="menubar">
                        <li role="none">
                            <Link to="/setup" role="menuitem" aria-haspopup={false}>Get Started</Link>
                        </li>

                        <li role="none" className={classNames({ 'topbar-menuitem-active': this.props.activeTopbarItem === 'themes' })}
                            onClick={(e) => this.onTopbarItemClick(e, 'themes')}>
                            {/* eslint-disable */}
                            <button type="button" role="menuitem" aria-haspopup={true} aria-expanded={this.props.activeTopbarItem === 'themes'} className="p-link">Themes</button>
                            {/* eslint-enable */}
                            <CSSTransition classNames="topbar-submenu" timeout={{ enter: 0, exit: 0 }} in={this.props.activeTopbarItem === 'themes'}>
                                <ul role="menu" aria-label="Themes" className="topbar-submenu">
                                    <li role="none" className="topbar-submenu-header">THEMING</li>
                                    <li role="none"><Link to="/theming" onClick={this.onThemesMenuRouteChange} role="menuitem"><i className="pi pi-fw pi-file" /><span>Guide</span></Link></li>
                                    <li role="none"><a href="https://www.primefaces.org/designer/primereact" role="menuitem"><i className="pi pi-fw pi-cog" /><span>Designer</span></a></li>
                                    <li role="none"><Link to="/icons" onClick={this.onThemesMenuRouteChange} role="menuitem" className="no-border"><i className="pi pi-fw pi-search" /><span>Icons</span></Link></li>

                                    <li role="none" className="topbar-submenu-header">FREE COMPONENT THEMES</li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nova-light', false)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" /><span>Nova Light</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nova-dark', false)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" /><span>Nova Dark</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nova-colored', false)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" /><span>Nova Colored</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-amber', true)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-blue', true)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-green', true)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" /><span>Luna Green</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-pink', true)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></button></li>
                                    <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'rhea', false)} role="menuitem"><img src="showcase/resources/images/layouts/themeswitcher-rhea.png" alt="Rhea" /><span>Rhea</span></button></li>
                                </ul>
                            </CSSTransition>
                        </li>

                        <li role="none" className={classNames({ 'topbar-menuitem-active': this.props.activeTopbarItem === 'templates' })}
                            onClick={(e) => this.onTopbarItemClick(e, 'templates')}>
                            {/* eslint-disable */}
                            <button type="button" role="menuitem" aria-haspopup={true} aria-expanded={this.props.activeTopbarItem === 'templates'} className="p-link">Templates</button>
                            {/* eslint-enable */}
                            <CSSTransition classNames="topbar-submenu" timeout={{ enter: 0, exit: 0 }} in={this.props.activeTopbarItem === 'templates'}>
                                <ul role="menu" aria-label="Templates" className="topbar-submenu">
                                    <li role="none" className="topbar-submenu-header">FREE TEMPLATES</li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/sigma-react" role="menuitem" rel="noopener noreferrer" target="_blank" className="no-border">
                                            <img src="showcase/resources/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span>Sigma</span>
                                        </a>
                                    </li>

                                    <li role="none" className="topbar-submenu-header">PREMIUM TEMPLATES</li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/roma-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-roma.jpg" alt="Roma" /><span>Roma</span><span className="theme-badge new">NEW</span>
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/sapphire-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-sapphire.png" alt="Sapphire (Material)" /><span>Sapphire</span><span className="theme-badge material">MATERIAL</span>
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/serenity-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-serenity.png" alt="Serenity (Material)" /><span>Serenity</span><span className="theme-badge material">MATERIAL</span>
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/ultima-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-ultima.png" alt="Ultima (Material)" /><span>Ultima</span><span className="theme-badge material">MATERIAL</span>
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/avalon-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-avalon.png" alt="Avalon (Bootstrap)" /><span>Avalon</span><span className="theme-badge bootstrap">BOOTSTRAP</span>
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/babylon-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-babylon.png" alt="Babylon" /><span>Babylon</span>
                                        </a>
                                    </li>
                                    <li role="none">
                                        <a href="https://www.primefaces.org/layouts/apollo-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                            <img src="showcase/resources/images/layouts/themeswitcher-apollo.png" alt="Apollo" /><span>Apollo</span><span className="theme-badge darkmode">DARK MODE</span>
                                        </a>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>

                        <li role="none" className={classNames('topbar-resources-submenu', { 'topbar-menuitem-active': this.props.activeTopbarItem === 'resources' })}
                            onClick={(e) => this.onTopbarItemClick(e, 'resources')}>
                            {/* eslint-disable */}
                            <button type="button" role="menuitem" aria-haspopup={true} aria-expanded={this.props.activeTopbarItem === 'resources'} className="p-link">Resources</button>
                            {/* eslint-enable */}
                            <CSSTransition classNames="topbar-submenu" timeout={{ enter: 0, exit: 0 }} in={this.props.activeTopbarItem === 'resources'}>
                                <ul role="menu" aria-label="Resources" className="topbar-submenu">
                                    <li role="none"><Link to="/support" role="menuitem"><span>Support</span></Link></li>
                                    <li role="none"><a href="https://github.com/primefaces/primereact" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Source Code</span></a></li>
                                    <li role="none"><a href="https://www.primefaces.org/store" role="menuitem" target="_blank" rel="noopener noreferrer"><span>PrimeStore</span></a></li>
                                    <li role="none"><a href="https://www.primefaces.org/category/primereact/" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></li>
                                    <li role="none"><a href="https://twitter.com/primereact?lang=en" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a></li>
                                    <li role="none"><a href="https://www.primefaces.org/whouses" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Who Uses</span></a></li>
                                    <li role="none"><a href="https://www.primefaces.org/newsletter" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Newsletter</span></a></li>
                                    <li role="none"><a href="https://www.primetek.com.tr/" role="menuitem" target="_blank" rel="noopener noreferrer"><span>About PrimeTek</span></a></li>
                                </ul>
                            </CSSTransition>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AppTopbar;

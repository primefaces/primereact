import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export class AppTopbar extends Component {

    static defaultProps = {
        activeTopbarItem: null,
        onMenuButtonClick: null,
        onTopbarItemClick: null,
        onThemeChange: null
    }

    static propTypes = {
        activeTopbarItem: PropTypes.string,
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
                    <button className="p-link menu-button" onClick={this.onMenuButtonClick}>
                        <i className="pi pi-bars"></i>
                    </button>
                    <Link to="/" className="logo">
                        <img alt="logo" src="showcase/resources/images/primereact-logo.png" />
                    </Link>
                </div>

                <div className="layout-topbar-right">
                    <ul className="topbar-menu p-unselectable-text">
                        <li>
                            <Link to="/setup">Get Started</Link>
                        </li>

                        <li className={classNames({'topbar-menuitem-active': this.props.activeTopbarItem === 'themes'})}
                            onClick={(e) => this.onTopbarItemClick(e, 'themes')}>
                            <button className="p-link">Themes</button>

                            <ul>
                                <li className="topbar-submenu-header">THEMING</li>
                                <li><Link to="/theming" onClick={this.onThemesMenuRouteChange}><i className="pi pi-fw pi-file" /><span>Guide</span></Link></li>
                                <li><a href="https://www.primefaces.org/designer/primereact"><i className="pi pi-fw pi-cog" /><span>Designer</span></a></li>
                                <li><Link to="/icons" onClick={this.onThemesMenuRouteChange}><i className="pi pi-fw pi-search" /><span>Icons</span></Link></li>

                                <li className="topbar-submenu-header">FREE COMPONENT THEMES</li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'nova-light', false)}><img src="showcase/resources/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" /><span>Nova Light</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'nova-dark', false)}><img src="showcase/resources/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" /><span>Nova Dark</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'nova-colored', false)}><img src="showcase/resources/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" /><span>Nova Colored</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'luna-amber', true)}><img src="showcase/resources/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'luna-blue', true)}><img src="showcase/resources/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'luna-green', true)}><img src="showcase/resources/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" /><span>Luna Green</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'luna-pink', true)}><img src="showcase/resources/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></button></li>
                                <li><button className="p-link" onClick={e => this.onThemeChange(e, 'rhea', false)}><img src="showcase/resources/images/layouts/themeswitcher-rhea.png" alt="Rhea" /><span>Rhea</span></button></li>
                            </ul>
                        </li>

                        <li className={classNames({'topbar-menuitem-active': this.props.activeTopbarItem === 'templates'})}
                            onClick={(e) => this.onTopbarItemClick(e, 'templates')}>
                            <button className="p-link">Templates</button>

                            <ul>
                                <li className="topbar-submenu-header">FREE TEMPLATES</li>
                                <li><a href="https://www.primefaces.org/sigma-react"><img src="showcase/resources/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span>Sigma</span></a></li>

                                <li className="topbar-submenu-header">PREMIUM TEMPLATES</li>
                                <li><a href="https://www.primefaces.org/layouts/roma-react"><img src="showcase/resources/images/layouts/themeswitcher-roma.jpg" alt="Roma" /><span>Roma</span><span className="theme-badge new">new</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/sapphire-react"><img src="showcase/resources/images/layouts/themeswitcher-sapphire.png" alt="Sapphire (Material)" /><span>Sapphire</span><span className="theme-badge material">material</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/serenity-react"><img src="showcase/resources/images/layouts/themeswitcher-serenity.png" alt="Serenity (Material)" /><span>Serenity</span><span className="theme-badge material">material</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/ultima-react"><img src="showcase/resources/images/layouts/themeswitcher-ultima.png" alt="Ultima (Material)" /><span>Ultima</span><span className="theme-badge material">material</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/avalon-react"><img src="showcase/resources/images/layouts/themeswitcher-avalon.png" alt="Avalon (Bootstrap)" /><span>Avalon</span><span className="theme-badge bootstrap">bootstrap</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/babylon-react"><img src="showcase/resources/images/layouts/themeswitcher-babylon.png" alt="Babylon" /><span>Babylon</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/apollo-react"><img src="showcase/resources/images/layouts/themeswitcher-apollo.png" alt="Apollo" /><span>Apollo</span><span className="theme-badge darkmode">dark mode</span></a></li>
                            </ul>
                        </li>

                        <li className={classNames('topbar-resources-submenu', {'topbar-menuitem-active': this.props.activeTopbarItem === 'resources'})}
                            onClick={(e) => this.onTopbarItemClick(e, 'resources')}>
                            <button className="p-link">Resources</button>

                            <ul>
                                <li><Link to="/support"><span>Support</span></Link></li>
                                <li><a href="https://github.com/primefaces/primereact" target="_blank" rel="noopener noreferrer"><span>Source Code</span></a></li>
                                <li><a href="https://www.primefaces.org/store" target="_blank" rel="noopener noreferrer"><span>PrimeStore</span></a></li>
                                <li><a href="https://www.primefaces.org/category/primereact/" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></li>
                                <li><a href="https://twitter.com/primereact?lang=en" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a></li>
                                <li><a href="https://www.primefaces.org/whouses/" target="_blank" rel="noopener noreferrer"><span>Who Uses</span></a></li>
                                <li><a href="https://www.primetek.com.tr/" target="_blank" rel="noopener noreferrer"><span>About PrimeTek</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AppTopbar;

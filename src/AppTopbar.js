import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Tooltip } from './components/tooltip/Tooltip';
import { VersionService } from './showcase/service/VersionService';

export class AppTopbar extends Component {

    static defaultProps = {
        theme: null,
        darkTheme: false,
        onMenuButtonClick: null,
        onThemeChange: null
    }

    static propTypes = {
        theme: PropTypes.string,
        darkTheme: PropTypes.bool,
        onMenuButtonClick: PropTypes.func,
        onThemeChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            activeMenuIndex: null,
            versions: []
        };
        this.versionService = new VersionService();
        this.version = require('../package.json') && require('../package.json').version;

        this.logoMap = {
            'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
            'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
            'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
            'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
            'md-light-indigo': 'md-light-indigo.svg',
            'md-light-deeppurple': 'md-light-deeppurple.svg',
            'md-dark-indigo': 'md-dark-indigo.svg',
            'md-dark-deeppurple': 'md-dark-deeppurple.svg',
            'mdc-light-indigo': 'md-light-indigo.svg',
            'mdc-light-deeppurple': 'md-light-deeppurple.svg',
            'mdc-dark-indigo': 'md-dark-indigo.svg',
            'mdc-dark-deeppurple': 'md-dark-deeppurple.svg',
            'saga-blue': 'saga-blue.png',
            'saga-green': 'saga-green.png',
            'saga-orange': 'saga-orange.png',
            'saga-purple': 'saga-purple.png',
            'vela-blue': 'vela-blue.png',
            'vela-green': 'vela-green.png',
            'vela-orange': 'vela-orange.png',
            'vela-purple': 'vela-purple.png',
            'arya-blue': 'arya-blue.png',
            'arya-green': 'arya-green.png',
            'arya-orange': 'arya-orange.png',
            'arya-purple': 'arya-purple.png',
            'nova': 'nova.png',
            'nova-alt': 'nova-alt.png',
            'nova-accent': 'nova-accent.png',
            'luna-blue': 'luna-blue.png',
            'luna-green': 'luna-green.png',
            'luna-pink': 'luna-pink.png',
            'luna-amber': 'luna-amber.png',
            'rhea': 'rhea.png',
            'fluent-light': 'fluent-light.png',
            'soho-light': 'soho-light.png',
            'soho-dark': 'soho-dark.png',
            'viva-light': 'viva-light.svg',
            'viva-dark': 'viva-dark.svg',
            'mira': 'mira.jpg',
            'nano': 'nano.jpg'
        };

        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onMenuEnter = this.onMenuEnter.bind(this);
        this.resetMenuActive = this.resetMenuActive.bind(this);
    }

    componentDidMount() {
        this.versionService.getVersions().then(data => this.setState({ versions: data }));
    }

    onMenuButtonClick(event) {
        if (this.props.onMenuButtonClick) {
            this.props.onMenuButtonClick(event);
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

        this.resetMenuActive();
    }

    toggleMenu(event, index) {
        this.setState((prevState) => ({
            activeMenuIndex: (prevState.activeMenuIndex === index) ? null : index
        }));
        event.preventDefault();
    }

    onMenuEnter() {
        this.bindOutsideClickListener();
    }

    resetMenuActive() {
        this.setState({ activeMenuIndex: null });
    }

    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if ((this.state.activeMenuIndex != null && this.isOutsideTopbarMenuClicked(event))) {
                    this.setState({ activeMenuIndex: null }, () => {
                        this.unbindOutsideClickListener();
                    });

                }
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }

    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }

    isOutsideTopbarMenuClicked(event) {
        return !(this.topbarMenu.isSameNode(event.target) || this.topbarMenu.contains(event.target));
    }

    componentWillUnmount() {
        this.unbindOutsideClickListener();
    }

    render() {
        return (
            <div className="layout-topbar">
                <Tooltip target=".app-theme" position="bottom" />

                <button type="button" className="p-link menu-button" onClick={this.onMenuButtonClick} aria-haspopup aria-label="Menu">
                    <i className="pi pi-bars"></i>
                </button>
                <Link to="/" className="logo" aria-label="PrimeReact logo">
                    <img alt="logo" src={`showcase/images/primereact-logo${this.props.darkTheme ? '' : '-dark'}.png`} />
                </Link>
                <div className="app-theme" data-pr-tooltip={this.props.theme}>
                    <img alt={this.props.theme} src={`showcase/images/themes/${this.logoMap[this.props.theme]}`} />
                </div>

                <ul ref={(el) => this.topbarMenu = el} className="topbar-menu p-unselectable-text" role="menubar">
                    <li role="none">
                        <Link to="/setup" role="menuitem" className="topbar-root-link" aria-haspopup={false} onClick={this.resetMenuActive}>Get Started</Link>
                    </li>

                    <li role="none" className="topbar-submenu">
                        {/* eslint-disable */}
                        <button type="button" role="menuitem" onClick={(e) => this.toggleMenu(e, 0)} aria-haspopup aria-expanded={this.state.activeMenuIndex === 0} className="p-link">Themes</button>
                        {/* eslint-enable */}
                        <CSSTransition classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={this.state.activeMenuIndex === 0}
                            unmountOnExit onEntered={this.onMenuEnter}>
                            <ul role="menu" aria-label="Themes">
                                <li role="none" className="topbar-submenu-header">THEMING</li>
                                <li role="none"><Link to="/theming" onClick={this.onThemesMenuRouteChange} role="menuitem"><i className="pi pi-fw pi-file" /><span>Guide</span></Link></li>
                                <li role="none"><a href="https://www.primefaces.org/designer/primereact" role="menuitem"><i className="pi pi-fw pi-palette" /><span>Designer</span></a></li>
                                <li role="none"><a href="https://www.primefaces.org/designer-react" role="menuitem"><i className="pi pi-fw pi-desktop" /><span>Visual Editor</span></a></li>
                                <li role="none"><Link to="/icons" onClick={this.onThemesMenuRouteChange} role="menuitem" className="no-border"><i className="pi pi-fw pi-info-circle" /><span>Icons</span></Link></li>
                                <li role="none"><a href="https://www.figma.com/community/file/890589747170608208" role="menuitem"><i className="pi pi-fw pi-pencil" /><span>Figma UI Kit</span></a></li>
                                

                                <li role="none" className="topbar-submenu-header">BOOTSTRAP</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'bootstrap4-light-blue')} role="menuitem"><img src="showcase/images/themes/bootstrap4-light-blue.svg" alt="Blue Light" /><span>Blue Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'bootstrap4-light-purple')} role="menuitem"><img src="showcase/images/themes/bootstrap4-light-purple.svg" alt="Purple Light" /><span>Purple Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'bootstrap4-dark-blue', true)} role="menuitem"><img src="showcase/images/themes/bootstrap4-dark-blue.svg" alt="Blue Dark" /><span>Blue Dark</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'bootstrap4-dark-purple', true)} role="menuitem"><img src="showcase/images/themes/bootstrap4-dark-purple.svg" alt="Purple Dark" /><span>Purple Dark</span></button></li>

                                <li role="none" className="topbar-submenu-header">MATERIAL DESIGN</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'md-light-indigo')} role="menuitem"><img src="showcase/images/themes/md-light-indigo.svg" alt="Indigo Light" /><span>Indigo Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'md-light-deeppurple')} role="menuitem"><img src="showcase/images/themes/md-light-deeppurple.svg" alt="Deep Purple Light" /><span>Deep Purple Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'md-dark-indigo', true)} role="menuitem"><img src="showcase/images/themes/md-dark-indigo.svg" alt="Indigo Dark" /><span>Indigo Dark</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'md-dark-deeppurple', true)} role="menuitem"><img src="showcase/images/themes/md-dark-deeppurple.svg" alt="Deep Purple Dark" /><span>Deep Purple Dark</span></button></li>

                                <li role="none" className="topbar-submenu-header">MATERIAL DESIGN COMPACT</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'mdc-light-indigo')} role="menuitem"><img src="showcase/images/themes/md-light-indigo.svg" alt="Indigo Light" /><span>Indigo Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'mdc-light-deeppurple')} role="menuitem"><img src="showcase/images/themes/md-light-deeppurple.svg" alt="Deep Purple Light" /><span>Deep Purple Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'mdc-dark-indigo', true)} role="menuitem"><img src="showcase/images/themes/md-dark-indigo.svg" alt="Indigo Dark" /><span>Indigo Dark</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'mdc-dark-deeppurple', true)} role="menuitem"><img src="showcase/images/themes/md-dark-deeppurple.svg" alt="Deep Purple Dark" /><span>Deep Purple Dark</span></button></li>

                                <li role="none" className="topbar-submenu-header">FLUENT UI</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'fluent-light')} role="menuitem"><img src="showcase/images/themes/fluent-light.png" alt="Fluent Light" /><span>Fluent Light</span></button></li>

                                <li role="none" className="topbar-submenu-header">PRIMEONE</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'saga-blue')} role="menuitem"><img src="showcase/images/themes/saga-blue.png" alt="Saga Blue" /><span>Saga Blue</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'saga-green')} role="menuitem"><img src="showcase/images/themes/saga-green.png" alt="Saga Green" /><span>Saga Green</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'saga-orange')} role="menuitem"><img src="showcase/images/themes/saga-orange.png" alt="Saga Orange" /><span>Saga Orange</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'saga-purple')} role="menuitem"><img src="showcase/images/themes/saga-purple.png" alt="Saga Purple" /><span>Saga Purple</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'vela-blue', true)} role="menuitem"><img src="showcase/images/themes/vela-blue.png" alt="Vela Blue" /><span>Vela Blue</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'vela-green', true)} role="menuitem"><img src="showcase/images/themes/vela-green.png" alt="Vela Green" /><span>Vela Green</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'vela-orange', true)} role="menuitem"><img src="showcase/images/themes/vela-orange.png" alt="Vela Orange" /><span>Vela Orange</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'vela-purple', true)} role="menuitem"><img src="showcase/images/themes/vela-purple.png" alt="Vela Purple" /><span>Vela Purple</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'arya-blue', true)} role="menuitem"><img src="showcase/images/themes/arya-blue.png" alt="Arya Blue" /><span>Arya Blue</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'arya-green', true)} role="menuitem"><img src="showcase/images/themes/arya-green.png" alt="Arya Green" /><span>Arya Green</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'arya-orange', true)} role="menuitem"><img src="showcase/images/themes/arya-orange.png" alt="Arya Orange" /><span>Arya Orange</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'arya-purple', true)} role="menuitem"><img src="showcase/images/themes/arya-purple.png" alt="Arya Purple" /><span>Arya Purple</span></button></li>

                                <li role="none" className="topbar-submenu-header">PREMIUM</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'soho-light')} role="menuitem"><img src="showcase/images/themes/soho-light.png" alt="Soho Light" /><span>Soho Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'soho-dark', true)} role="menuitem"><img src="showcase/images/themes/soho-dark.png" alt="Soho Dark" /><span>Soho Dark</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'viva-light')} role="menuitem"><img src="showcase/images/themes/viva-light.svg" alt="Viva Light" /><span>Viva Light</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'viva-dark', true)} role="menuitem"><img src="showcase/images/themes/viva-dark.svg" alt="Viva Dark" /><span>Viva Dark</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'mira')} role="menuitem"><img src="showcase/images/themes/mira.jpg" alt="Mira" /><span>Mira</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nano')} role="menuitem"><img src="showcase/images/themes/nano.jpg" alt="Nano" /><span>Nano</span></button></li>

                                <li role="none" className="topbar-submenu-header">LEGACY</li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nova')} role="menuitem"><img src="showcase/images/themes/nova.png" alt="Nova" /><span>Nova</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nova-alt')} role="menuitem"><img src="showcase/images/themes/nova-alt.png" alt="Nova Alt" /><span>Nova Alt</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'nova-accent')} role="menuitem"><img src="showcase/images/themes/nova-accent.png" alt="Nova Accent" /><span>Nova Accent</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-amber', true)} role="menuitem"><img src="showcase/images/themes/luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-blue', true)} role="menuitem"><img src="showcase/images/themes/luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-green', true)} role="menuitem"><img src="showcase/images/themes/luna-green.png" alt="Luna Green" /><span>Luna Green</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'luna-pink', true)} role="menuitem"><img src="showcase/images/themes/luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></button></li>
                                <li role="none"><button type="button" className="p-link" onClick={e => this.onThemeChange(e, 'rhea')} role="menuitem"><img src="showcase/images/themes/rhea.png" alt="Rhea" /><span>Rhea</span></button></li>
                            </ul>
                        </CSSTransition>
                    </li>

                    <li role="none" className="topbar-submenu">
                        {/* eslint-disable */}
                        <button type="button" role="menuitem" onClick={(e) => this.toggleMenu(e, 1)} aria-haspopup aria-expanded={this.props.activeTopbarItem === 1} className="p-link">Templates</button>
                        {/* eslint-enable */}
                        <CSSTransition classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={this.state.activeMenuIndex === 1}
                            unmountOnExit onEntered={this.onMenuEnter}>
                            <ul role="menu" aria-label="Templates">
                                <li role="none" className="topbar-submenu-header">FREE ADMIN TEMPLATES</li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/sigma-react" role="menuitem" rel="noopener noreferrer" target="_blank" className="no-border">
                                        <img src="showcase/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span>Sigma</span>
                                    </a>
                                </li>

                                <li role="none" className="topbar-submenu-header">PREMIUM ADMIN TEMPLATES</li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/diamond-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-diamond.png" alt="Diamond" /><span>Diamond</span><span className="theme-badge new p-tag p-tag-success">NEW</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/roma-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-roma.jpg" alt="Roma" /><span>Roma</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/sapphire-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-sapphire.png" alt="Sapphire (Material)" /><span>Sapphire</span><span className="theme-badge material">MATERIAL</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/serenity-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-serenity.png" alt="Serenity (Material)" /><span>Serenity</span><span className="theme-badge material">MATERIAL</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/ultima-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-ultima.png" alt="Ultima (Material)" /><span>Ultima</span><span className="theme-badge material">MATERIAL</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/avalon-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-avalon.png" alt="Avalon (Bootstrap)" /><span>Avalon</span><span className="theme-badge bootstrap">BOOTSTRAP</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/babylon-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-babylon.png" alt="Babylon" /><span>Babylon</span>
                                    </a>
                                </li>
                                <li role="none">
                                    <a href="https://www.primefaces.org/layouts/apollo-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                        <img src="showcase/images/layouts/themeswitcher-apollo.png" alt="Apollo" /><span>Apollo</span><span className="theme-badge darkmode">DARK MODE</span>
                                    </a>
                                </li>
                            </ul>
                        </CSSTransition>
                    </li>

                    <li role="none" className="topbar-submenu">
                        {/* eslint-disable */}
                        <button type="button" role="menuitem" onClick={(e) => this.toggleMenu(e, 2)} aria-haspopup aria-expanded={this.state.activeMenuIndex === 2} className="p-link">Resources</button>
                        {/* eslint-enable */}
                        <CSSTransition classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={this.state.activeMenuIndex === 2}
                            unmountOnExit onEntered={this.onMenuEnter}>
                            <ul role="menu" aria-label="Resources">
                                <li role="none"><Link to="/support" role="menuitem"><span>Support</span></Link></li>
                                <li role="none"><a href="https://forum.primefaces.org/viewforum.php?f=57" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Forum</span></a></li>
                                <li role="none"><a href="https://discord.gg/gzKFYnpmCY" role="menuitem" target="_blank" rel="noopener noreferrer"><span>Discord Chat</span></a></li>
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

                    <li role="none" className="topbar-submenu">
                        {/* eslint-disable */}
                        <button type="button" role="menuitem" onClick={(e) => this.toggleMenu(e, 3)} aria-haspopup aria-expanded={this.state.activeMenuIndex === 3} className="p-link">v{this.version}</button>
                        {/* eslint-enable */}
                        <CSSTransition classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={this.state.activeMenuIndex === 3}
                            unmountOnExit onEntered={this.onMenuEnter}>
                            <ul role="menu" aria-label="Versions" style={{width: '100%'}}>
                                {
                                        this.state.versions.map(version => {
                                            return (
                                                <li role="none" key={version.version}>
                                                    <a href={version.url} role="menuitem">
                                                        {version.version}
                                                    </a>
                                                </li>
                                            )
                                        })
                                }
                            </ul>
                        </CSSTransition>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AppTopbar;

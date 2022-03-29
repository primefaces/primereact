import { Badge } from '../lib/badge/Badge';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { VersionService } from '../../service/VersionService';
import getConfig from 'next/config';

export default function Topbar(props) {
    const [activeMenuIndex,setActiveMenuIndex] = useState(null);
    const [versions,setVersions] = useState([]);
    const onMenuButtonClick = () => {
        props.onMenuButtonClick();
    }
    const resetMenuActive = () => {
        setActiveMenuIndex(null);
    }
    const toggleMenu = (index) => {
        setActiveMenuIndex(prevActiveMenuIndex => prevActiveMenuIndex === index ? null : index);
    }
    const bindOutsideClickListener = () => {
        if (!outsideClickListener.current) {
            outsideClickListener.current = (event) => {
                if ((activeMenuIndex != null && isOutsideTopbarMenuClicked(event))) {
                    setActiveMenuIndex(null);
                }
            };
            document.addEventListener('click', outsideClickListener.current);
        }
    }
    const unbindOutsideClickListener = () => {
        if (outsideClickListener.current) {
            document.removeEventListener('click', outsideClickListener.current);
            outsideClickListener.current = null;
        }
    }
    const isOutsideTopbarMenuClicked = (event) => {
        return !(topbarMenu.current.isSameNode(event.target) || topbarMenu.current.contains(event.target));
    }
    const onThemeChange = (theme, dark) => {
        props.onThemeChange({theme, dark});
        resetMenuActive();
    }
    useEffect(() => {
        if (activeMenuIndex == null)
            unbindOutsideClickListener();
        else
            bindOutsideClickListener();

        return function unbind() {
            unbindOutsideClickListener();
        }
    }, [activeMenuIndex]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        versionService.getVersions().then(data => setVersions(data));
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const containerElement = useRef(null);
    const scrollListener = useRef();
    const bindScrollListener = () => {
        scrollListener.current = () => {
            if (containerElement && containerElement.current) {
                if (window.scrollY > 0)
                    containerElement.current.classList.add('layout-topbar-sticky');
                else
                    containerElement.current.classList.remove('layout-topbar-sticky');
            }
        }
        window.addEventListener('scroll', scrollListener.current);
    }

    const unbindScrollListener = () => {
        if (scrollListener.current) {
            window.removeEventListener('scroll', scrollListener.current);
            scrollListener.current = null;
        }
    }

    useEffect(() => {
        bindScrollListener();
        return function unbind() {
            unbindScrollListener();
        }
    }, []);

    const topbarMenu = useRef();
    const themesOverlayRef = useRef();
    const templatesOverlayRef = useRef();
    const versionsOverlayRef = useRef();
    const outsideClickListener = useRef();
    const versionService = new VersionService();
    const logoMap = {
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
        'lara-light-blue': 'lara-light-blue.png',
        'lara-light-indigo': 'lara-light-indigo.png',
        'lara-light-purple': 'lara-light-purple.png',
        'lara-light-teal': 'lara-light-teal.png',
        'lara-dark-blue': 'lara-dark-blue.png',
        'lara-dark-indigo': 'lara-dark-indigo.png',
        'lara-dark-purple': 'lara-dark-purple.png',
        'lara-dark-teal': 'lara-dark-teal.png',
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
        'nano': 'nano.jpg',
        'tailwind-light': 'tailwind-light.png'
    };
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div ref={containerElement} className="layout-topbar">
            <button type="button" className="p-link menu-button" onClick={onMenuButtonClick} aria-haspopup aria-label="Menu">
                <i className="pi pi-bars"></i>
            </button>
            <div className="app-theme" data-pr-tooltip={props.theme}>
                <img alt={props.theme} src={`${contextPath}/images/themes/${logoMap[props.theme]}`} />
            </div>

            <ul ref={topbarMenu} className="topbar-menu p-unselectable-text" role="menubar">
                <li role="none" className="topbar-submenu">
                    <button type="button" role="menuitem" onClick={() => toggleMenu(0)} aria-haspopup className="p-link">Themes</button>
                    <CSSTransition nodeRef={themesOverlayRef} classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={activeMenuIndex === 0}
                        unmountOnExit>
                        <ul ref={themesOverlayRef} role="menu" aria-label="Themes">
                            <li role="none" className="topbar-submenu-header">THEMING</li>
                            <li role="none"><Link href="/theming"><a role="menuitem"><i className="pi pi-fw pi-file" /><span>Guide</span></a></Link></li>
                            <li role="none"><a href="https://www.primefaces.org/designer/primereact" role="menuitem"><i className="pi pi-fw pi-palette" /><span>Designer</span></a></li>
                            <li role="none"><a href="https://www.primefaces.org/designer-react" role="menuitem"><i className="pi pi-fw pi-desktop" /><span>Visual Editor</span></a></li>
                            <li role="none"><Link href="/icons"><a role="menuitem"><i className="pi pi-fw pi-info-circle" /><span>Icons</span></a></Link></li>
                            <li role="none"><a href="https://www.figma.com/community/file/890589747170608208" role="menuitem"><i className="pi pi-fw pi-pencil" /><span>Figma UI Kit</span></a></li>

                            <li role="none" className="topbar-submenu-header">BOOTSTRAP</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('bootstrap4-light-blue')} role="menuitem"><img src={`${contextPath}/images/themes/bootstrap4-light-blue.svg`} alt="Blue Light" /><span>Blue Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('bootstrap4-light-purple')} role="menuitem"><img src={`${contextPath}/images/themes/bootstrap4-light-purple.svg`} alt="Purple Light" /><span>Purple Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('bootstrap4-dark-blue', true)} role="menuitem"><img src={`${contextPath}/images/themes/bootstrap4-dark-blue.svg`} alt="Blue Dark" /><span>Blue Dark</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('bootstrap4-dark-purple', true)} role="menuitem"><img src={`${contextPath}/images/themes/bootstrap4-dark-purple.svg`} alt="Purple Dark" /><span>Purple Dark</span></button></li>

                            <li role="none" className="topbar-submenu-header">MATERIAL DESIGN</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('md-light-indigo')} role="menuitem"><img src={`${contextPath}/images/themes/md-light-indigo.svg`} alt="Indigo Light" /><span>Indigo Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('md-light-deeppurple')} role="menuitem"><img src={`${contextPath}/images/themes/md-light-deeppurple.svg`} alt="Deep Purple Light" /><span>Deep Purple Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('md-dark-indigo', true)} role="menuitem"><img src={`${contextPath}/images/themes/md-dark-indigo.svg`} alt="Indigo Dark" /><span>Indigo Dark</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('md-dark-deeppurple', true)} role="menuitem"><img src={`${contextPath}/images/themes/md-dark-deeppurple.svg`} alt="Deep Purple Dark" /><span>Deep Purple Dark</span></button></li>

                            <li role="none" className="topbar-submenu-header">MATERIAL DESIGN COMPACT</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('mdc-light-indigo')} role="menuitem"><img src={`${contextPath}/images/themes/md-light-indigo.svg`} alt="Indigo Light" /><span>Indigo Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('mdc-light-deeppurple')} role="menuitem"><img src={`${contextPath}/images/themes/md-light-deeppurple.svg`} alt="Deep Purple Light" /><span>Deep Purple Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('mdc-dark-indigo', true)} role="menuitem"><img src={`${contextPath}/images/themes/md-dark-indigo.svg`} alt="Indigo Dark" /><span>Indigo Dark</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('mdc-dark-deeppurple', true)} role="menuitem"><img src={`${contextPath}/images/themes/md-dark-deeppurple.svg`} alt="Deep Purple Dark" /><span>Deep Purple Dark</span></button></li>

                            <li role="none" className="topbar-submenu-header">TAILWIND</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('tailwind-light')} role="menuitem"><img src={`${contextPath}/images/themes/tailwind-light.png`} alt="Tailwind Light" /><span>Tailwind Light</span></button></li>

                            <li role="none" className="topbar-submenu-header">FLUENT UI</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('fluent-light')} role="menuitem"><img src={`${contextPath}/images/themes/fluent-light.png`} alt="Fluent Light" /><span>Fluent Light</span></button></li>

                            <li role="none" className="topbar-submenu-header">PRIMEONE 2022 <Badge value="New" severity="success" className="capitalize ml-2" /></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-light-indigo')} role="menuitem"><img src={`${contextPath}/images/themes/lara-light-indigo.png`} alt="Lara Light Indigo" /><span>Lara Indigo</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-light-blue')} role="menuitem"><img src={`${contextPath}/images/themes/lara-light-blue.png`} alt="Lara Light Blue" /><span>Lara Blue</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-light-purple')} role="menuitem"><img src={`${contextPath}/images/themes/lara-light-purple.png`} alt="Lara Light Purple" /><span>Lara Purple</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-light-teal')} role="menuitem"><img src={`${contextPath}/images/themes/lara-light-teal.png`} alt="Lara Light Teal" /><span>Lara Teal</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-dark-indigo', true)} role="menuitem"><img src={`${contextPath}/images/themes/lara-dark-indigo.png`} alt="Lara Dark Indigo" /><span>Lara Indigo</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-dark-blue', true)} role="menuitem"><img src={`${contextPath}/images/themes/lara-dark-blue.png`} alt="Lara Dark Blue" /><span>Lara Blue</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-dark-purple', true)} role="menuitem"><img src={`${contextPath}/images/themes/lara-dark-purple.png`} alt="Lara Dark Purple" /><span>Lara Purple</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('lara-dark-teal', true)} role="menuitem"><img src={`${contextPath}/images/themes/lara-dark-teal.png`} alt="Lara Dark Teal" /><span>Lara Teal</span></button></li>

                            <li role="none" className="topbar-submenu-header">PRIMEONE 2021</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('saga-blue')} role="menuitem"><img src={`${contextPath}/images/themes/saga-blue.png`} alt="Saga Blue" /><span>Saga Blue</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('saga-green')} role="menuitem"><img src={`${contextPath}/images/themes/saga-green.png`} alt="Saga Green" /><span>Saga Green</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('saga-orange')} role="menuitem"><img src={`${contextPath}/images/themes/saga-orange.png`} alt="Saga Orange" /><span>Saga Orange</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('saga-purple')} role="menuitem"><img src={`${contextPath}/images/themes/saga-purple.png`} alt="Saga Purple" /><span>Saga Purple</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('vela-blue', true)} role="menuitem"><img src={`${contextPath}/images/themes/vela-blue.png`} alt="Vela Blue" /><span>Vela Blue</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('vela-green', true)} role="menuitem"><img src={`${contextPath}/images/themes/vela-green.png`} alt="Vela Green" /><span>Vela Green</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('vela-orange', true)} role="menuitem"><img src={`${contextPath}/images/themes/vela-orange.png`} alt="Vela Orange" /><span>Vela Orange</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('vela-purple', true)} role="menuitem"><img src={`${contextPath}/images/themes/vela-purple.png`} alt="Vela Purple" /><span>Vela Purple</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('arya-blue', true)} role="menuitem"><img src={`${contextPath}/images/themes/arya-blue.png`} alt="Arya Blue" /><span>Arya Blue</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('arya-green', true)} role="menuitem"><img src={`${contextPath}/images/themes/arya-green.png`} alt="Arya Green" /><span>Arya Green</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('arya-orange', true)} role="menuitem"><img src={`${contextPath}/images/themes/arya-orange.png`} alt="Arya Orange" /><span>Arya Orange</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('arya-purple', true)} role="menuitem"><img src={`${contextPath}/images/themes/arya-purple.png`} alt="Arya Purple" /><span>Arya Purple</span></button></li>

                            <li role="none" className="topbar-submenu-header">PREMIUM</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('soho-light')} role="menuitem"><img src={`${contextPath}/images/themes/soho-light.png`} alt="Soho Light" /><span>Soho Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('soho-dark', true)} role="menuitem"><img src={`${contextPath}/images/themes/soho-dark.png`} alt="Soho Dark" /><span>Soho Dark</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('viva-light')} role="menuitem"><img src={`${contextPath}/images/themes/viva-light.svg`} alt="Viva Light" /><span>Viva Light</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('viva-dark', true)} role="menuitem"><img src={`${contextPath}/images/themes/viva-dark.svg`} alt="Viva Dark" /><span>Viva Dark</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('mira')} role="menuitem"><img src={`${contextPath}/images/themes/mira.jpg`} alt="Mira" /><span>Mira</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('nano')} role="menuitem"><img src={`${contextPath}/images/themes/nano.jpg`} alt="Nano" /><span>Nano</span></button></li>

                            <li role="none" className="topbar-submenu-header">LEGACY</li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('nova')} role="menuitem"><img src={`${contextPath}/images/themes/nova.png`} alt="Nova" /><span>Nova</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('nova-alt')} role="menuitem"><img src={`${contextPath}/images/themes/nova-alt.png`} alt="Nova Alt" /><span>Nova Alt</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('nova-accent')} role="menuitem"><img src={`${contextPath}/images/themes/nova-accent.png`} alt="Nova Accent" /><span>Nova Accent</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('luna-amber', true)} role="menuitem"><img src={`${contextPath}/images/themes/luna-amber.png`} alt="Luna Amber" /><span>Luna Amber</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('luna-blue', true)} role="menuitem"><img src={`${contextPath}/images/themes/luna-blue.png`} alt="Luna Blue" /><span>Luna Blue</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('luna-green', true)} role="menuitem"><img src={`${contextPath}/images/themes/luna-green.png`} alt="Luna Green" /><span>Luna Green</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('luna-pink', true)} role="menuitem"><img src={`${contextPath}/images/themes/luna-pink.png`} alt="Luna Pink" /><span>Luna Pink</span></button></li>
                            <li role="none"><button type="button" className="p-link" onClick={() => onThemeChange('rhea')} role="menuitem"><img src={`${contextPath}/images/themes/rhea.png`} alt="Rhea" /><span>Rhea</span></button></li>
                        </ul>
                    </CSSTransition>
                </li>

                <li role="none" className="topbar-submenu">
                    <button type="button" role="menuitem" onClick={() => toggleMenu(1)} aria-haspopup className="p-link">Templates</button>
                    <CSSTransition nodeRef={templatesOverlayRef} classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={activeMenuIndex === 1}
                        unmountOnExit>
                        <ul ref={templatesOverlayRef} role="menu" aria-label="Templates">
                            <li role="none" className="topbar-submenu-header">FREE ADMIN TEMPLATES</li>
                            <li role="none">
                                <a href="https://www.primefaces.org/sakai-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-sakai.svg`} alt="Sakai" /><span>Sakai</span><Badge value="New" severity="success"></Badge>
                                </a>
                            </li>

                            <li role="none" className="topbar-submenu-header">PREMIUM ADMIN TEMPLATES</li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/atlantis-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-atlantis.svg`} alt="Atlantis" /><span>Atlantis</span><Badge value="New" severity="success"></Badge>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/freya-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-freya.png`} alt="Freya" /><span>Freya</span>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/diamond-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-diamond.png`} alt="Diamond" /><span>Diamond</span>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/ultima-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-ultima.png`} alt="Ultima (Material)" /><span>Ultima</span><Badge value="Material" severity="info"></Badge>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/roma-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-roma.jpg`} alt="Roma" /><span>Roma</span>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/sapphire-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-sapphire.png`} alt="Sapphire (Material)" /><span>Sapphire</span><Badge value="Material" severity="info"></Badge>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/serenity-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-serenity.png`} alt="Serenity (Material)" /><span>Serenity</span><Badge value="Material" severity="info"></Badge>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/avalon-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-avalon.png`} alt="Avalon (Bootstrap)" /><span>Avalon</span><Badge value="Bootstrap" severity="info"></Badge>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/babylon-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-babylon.png`} alt="Babylon" /><span>Babylon</span>
                                </a>
                            </li>
                            <li role="none">
                                <a href="https://www.primefaces.org/layouts/apollo-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                                    <img src={`${contextPath}/images/layouts/themeswitcher-apollo.png`} alt="Apollo" /><span>Apollo</span><Badge value="Dark Mode" severity="warning"></Badge>
                                </a>
                            </li>
                        </ul>
                    </CSSTransition>
                </li>
                <li>
                    <a href="https://www.primefaces.org/primeblocks-react" role="menuitem" rel="noopener noreferrer" target="_blank">
                        <span className="p-overlay-badge">
                            Blocks
                        </span>
                    </a>
                </li>
                <li role="none" className="topbar-submenu">
                    <button type="button" role="menuitem" onClick={(e) => toggleMenu(3)} aria-haspopup className="p-link">{(versions && versions.length) ? versions[0].version : ''}</button>
                    <CSSTransition nodeRef={versionsOverlayRef} classNames="p-connected-overlay" timeout={{ enter: 120, exit: 100 }} in={activeMenuIndex === 3}unmountOnExit>
                        <ul ref={versionsOverlayRef} role="menu" aria-label="Versions" style={{width: '100%'}}>
                            {
                                    versions.map(version => {
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import 'nanoscroller';
import jQuery from "jquery";
import 'nanoscroller/bin/css/nanoscroller.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'font-awesome/css/font-awesome.css';
import './sass/App.scss';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="introduction">
                    <h1>Your Favorite UI Framework</h1>
                    <h2>for REACT</h2>

                    <Link to="/setup" className="home-button">Get Started</Link>
                </div>
                <div className="features">
                    <h3>Why Use PrimeReact?</h3>
                    <p className="features-tagline">Congratulations! 🎉 Your quest to find the UI library for React is complete.</p>

                    <p className="features-description">PrimeReact is a collection of rich UI components for React. All widgets are open source and free to use under MIT License. PrimeReact is developed by PrimeTek Informatics,
                        a vendor with years of expertise in developing open source UI solutions. For project news and updates, please <a href="https://twitter.com/primereact">follow us on twitter</a> and <a href="https://www.primefaces.org/category/primereact/">visit our blog</a>.</p>

                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-3">
                            <img alt="component" src="showcase/resources/images/home/icon-component.svg" />
                            <span className="feature-name">60+ COMPONENTS</span>
                            <p>The most complete set of native widgets featuring 60+ easy to use components for all your UI requirements.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="opensource" src="showcase/resources/images/home/icon-opensource.svg" />
                            <span className="feature-name">OPEN SOURCE</span>
                            <p>Hosted at GitHub, all widgets are open source and free to use under MIT license. Feel the power of open source.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="themes" src="showcase/resources/images/home/icon-themes.svg" />
                            <span className="feature-name">THEMES</span>
                            <p>Don’t get tied up in just one look&feel. Choose from a variety of options including material and flat design.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="community" src="showcase/resources/images/home/icon-community.svg" />
                            <span className="feature-name">COMMUNITY</span>
                            <p>Join PrimeReact community to become a part of an active, vibrant and growing open source foundation.</p>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <img alt="productive" src="showcase/resources/images/home/icon-productive.svg" />
                            <span className="feature-name">PRODUCTIVITY</span>
                            <p>Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.</p>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <img alt="mobile" src="showcase/resources/images/home/icon-mobile.svg" />
                            <span className="feature-name">MOBILE</span>
                            <p>Enhanced mobile user experience with  touch optimized responsive design elements.</p>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <img alt="templates" src="showcase/resources/images/home/icon-templates.svg" />
                            <span className="feature-name">TEMPLATES</span>
                            <p>Professionally designed highly customizable native React application templates to get started in no time. </p>
                        </div>
                    </div>
                </div>
                <div className="whouses">
                    <h3>Key Users</h3>
                    <p>Open source products of <a href="http://www.primetek.com.tr">PrimeTek</a> are used all around the world by 1M+ developers in corporations, government and educational
                        institutions.</p>
                    <div className="ui-g">
                        <div className="ui-g-3 ui-md-1"><img alt="users" src="showcase/resources/images/home/fox.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/airbus.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/bank-of-america.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/mercedes.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/ebay.svg"></img></div>
                        <div className="ui-g-3 ui-md-1"><img alt="users" src="showcase/resources/images/home/ford.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/vw.svg"></img></div>
                        <div className="ui-g-3 ui-md-1"><img alt="users" src="showcase/resources/images/home/unicredit.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/lufthansa.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/bmw.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/verizon.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/sap.svg"></img></div>
                        <div className="ui-g-3 ui-md-1"><img alt="users" src="showcase/resources/images/home/amex.svg"></img></div>
                        <div className="ui-g-3 ui-md-2"><img alt="users" src="showcase/resources/images/home/viacom.svg"></img></div>
                    </div>
                </div>
                <div className="templates">
                    <h3>Premium Application Templates for PrimeReact</h3>
                    <p>Based on <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>, develop awesome applications in no time using the premium templates 
                        of PrimeReact and impress your users.</p>
                    
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6">
                            <h4>Ultima with Material Design</h4>
                            <a href="https://www.primefaces.org/layouts/ultima-react">
                                <img alt="Avalon" src="showcase/resources/images/layouts/ultima-react.png" /> 
                            </a>
                        </div>
                        <div className="ui-g-12 ui-md-6">
                            <h4>Avalon with Bootstrap Styling</h4>
                            <a href="https://www.primefaces.org/layouts/avalon-react">
                                <img alt="Avalon" src="showcase/resources/images/layouts/avalon-react.png" /> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="prosupport">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6">
                            <h3>PrimeReact PRO Support</h3>
                            <p>With PrimeReact PRO, it is easy to support, tune and add features to PrimeReact as if it were an in-house framework.</p>
                            <p>PrimeReact PRO is a term based commercial support service. With the exclusive services of Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>
                            <a className="home-button2" href="mailto:contact@primetek.com.tr">
                                Get a Quote
                            </a>
                        </div>
                        <div className="ui-g-12 ui-md-6">
                            <img alt="PRO" src="showcase/resources/images/home/icon-pro.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class AppMenu extends Component {

    constructor() {
        super();
        this.state = { activeMenu: -1 };
    }

    openMenu(event, val) {
        this.setState({ activeMenu:this.state.activeMenu===val?-1: val });
        setTimeout(() => jQuery(this.scrollContainer).nanoScroller(), 350);
        event.preventDefault();
    }

    componentDidMount() {
        jQuery(this.scrollContainer).nanoScroller({ flash: true });
    }

    componentWillUnmount() {
        jQuery(this.scrollContainer).nanoScroller({ destroy: true });
    }

    render() {
        return (
            <div ref={(el) => this.scrollContainer = el} className="nano">
                <div className="nano-content">
                    <div className="layout-menu">
                        <a id="menu_input"  href="#" onClick={(event) => this.openMenu(event, 0)} className={classNames({ 'active-menuitem': this.state.activeMenu === 0 })}>
                            <img alt="input" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/input.svg"></img>
                            <img alt="input" className="layout-menu-icon-active" src="showcase/resources/images/mono/input-active.svg"></img>
                            <span>Input</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 0, 'submenushow': this.state.activeMenu === 0 })}>
                            <div>
                                <Link to="/autocomplete">&#9679; AutoComplete</Link>
                                <Link to="/calendar">&#9679; Calendar</Link>
                                <Link to="/checkbox">&#9679; Checkbox</Link>
                                <Link to="/colorpicker">&#9679; ColorPicker</Link>
                                <Link to="/chips">&#9679; Chips</Link>
                                <Link to="/dropdown">&#9679; Dropdown</Link>
                                <Link to="/editor">&#9679; Editor</Link>
                                <Link to="/inputmask">&#9679; InputMask</Link>
                                <Link to="/inputgroup">&#9679; InputGroup</Link>
                                <Link to="/inputswitch">&#9679; InputSwitch</Link>
                                <Link to="/inputtext">&#9679; InputText</Link>
                                <Link to="/inputtextarea">&#9679; InputTextarea</Link>
                                <Link to="/listbox">&#9679; Listbox</Link>
                                <Link to="/multiselect">&#9679; MultiSelect</Link>
                                <Link to="/password">&#9679; Password</Link>
                                <Link to="/radiobutton">&#9679; RadioButton</Link>
                                <Link to="/rating">&#9679; Rating</Link>
                                <Link to="/selectbutton">&#9679; SelectButton</Link>
                                <Link to="/slider">&#9679; Slider</Link>
                                <Link to="/spinner">&#9679; Spinner</Link>
                                <Link to="/tristatecheckbox">&#9679; TriState</Link>
                                <Link to="/togglebutton">&#9679; ToggleButton</Link>
                            </div>
                        </div>

                        <a href="#" id="button_menutitle" onClick={(event) => this.openMenu(event, 1)} className={classNames({ 'active-menuitem': this.state.activeMenu === 1 })}>
                            <img alt="button" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/button.svg"></img>
                            <img alt="button" className="layout-menu-icon-active" src="showcase/resources/images/mono/button-active.svg"></img>
                            <span>Button</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 1, 'submenushow': this.state.activeMenu === 1 })}>
                            <div>
                                <Link to="/button">&#9679; Button</Link>
                                <Link to="/splitbutton">&#9679; SplitButton</Link>
                            </div>
                        </div>

                        <a href="#" id="data_menutitle" onClick={(event) => this.openMenu(event, 2)} className={classNames({ 'active-menuitem': this.state.activeMenu === 2 })}>
                            <img alt="data" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/data.svg"></img>
                            <img alt="data" className="layout-menu-icon-active" src="showcase/resources/images/mono/data-active.svg"></img>
                            <span>Data</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 2, 'submenushow': this.state.activeMenu === 2 })}>
                            <div>
                                <Link to="/datagrid">&#9679; DataGrid</Link>
                                <Link to="/datalist">&#9679; DataList</Link>
                                <Link to="/datatable">&#9679; DataTable</Link>
                                <Link to="/datascroller">&#9679; DataScroller</Link>
                                <Link to="/orderlist">&#9679; OrderList</Link>
                                <Link to="/organizationchart">&#9679; Org Chart</Link>
                                <Link to="/paginator">&#9679; Paginator</Link>
                                <Link to="/picklist">&#9679; PickList</Link>
                                <Link to="/schedule">&#9679; Schedule</Link>
                                <Link to="/tree">&#9679; Tree</Link>
                                <Link to="/treetable">&#9679; TreeTable</Link>
                                
                            </div>
                        </div>

                        <a href="#" id="menu_panel" onClick={(event) => this.openMenu(event, 3)} className={classNames({ 'active-menuitem': this.state.activeMenu === 3 })}>
                            <img alt="panel" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/panel.svg"></img>
                            <img alt="panel" className="layout-menu-icon-active" src="showcase/resources/images/mono/panel-active.svg"></img>
                            <span>Panel</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 3, 'submenushow': this.state.activeMenu === 3 })}>
                            <div>
                                <Link to="/accordion">&#9679; Accordion</Link>
                                <Link to="/fieldset">&#9679; Fieldset</Link>
                                <Link to="/grid">&#9679; Grid</Link>
                                <Link to="/panel">&#9679; Panel</Link>
                                <Link to="/tabview">&#9679; TabView</Link>
                                <Link to="/toolbar">&#9679; Toolbar</Link>
                            </div>
                        </div>

                        <a href="#" id="menu_overlay"  onClick={(event) => this.openMenu(event, 4)} className={classNames({ 'active-menuitem': this.state.activeMenu === 4 })}>
                            <img alt="overlay" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/overlay.svg"></img>
                            <img alt="overlay" className="layout-menu-icon-active" src="showcase/resources/images/mono/overlay-active.svg"></img>
                            <span>Overlay</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 4, 'submenushow': this.state.activeMenu === 4 })}>
                            <div>
                                <Link to="/dialog">&#9679; Dialog</Link>
                                <Link to="/lightbox">&#9679; Lightbox</Link>
                                <Link to="/overlaypanel">&#9679; OverlayPanel</Link>
                                <Link to="/tooltip">&#9679; Tooltip</Link>
                            </div>
                        </div>

                        <a href="#" id="menu_file" onClick={(event) => this.openMenu(event, 5)} className={classNames({ 'active-menuitem': this.state.activeMenu === 5 })}>
                            <img alt="file" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/file.svg"></img>
                            <img alt="file" className="layout-menu-icon-active" src="showcase/resources/images/mono/file-active.svg"></img>
                            <span>File</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 5, 'submenushow': this.state.activeMenu === 5 })}>
                            <div>
                                <Link to="/fileupload">&#9679; Upload</Link>
                            </div>
                        </div>

                        <a href="#" id="menu_menu" onClick={(event) => this.openMenu(event, 6)} className={classNames({ 'active-menuitem': this.state.activeMenu === 6 })}>
                            <img alt="menu" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/menu.svg"></img>
                            <img alt="menu" className="layout-menu-icon-active" src="showcase/resources/images/mono/menu-active.svg"></img>
                            <span>Menu</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 6, 'submenushow': this.state.activeMenu === 6 })}>
                            <div>
                                <Link to="/menumodel">&#9679; MenuModel</Link>
                                <Link to="/menu">&#9679; Menu</Link>
                                <Link to="/tabmenu">&#9679; TabMenu</Link>
                                <Link to="/breadcrumb">&#9679; Breadcrumb</Link>
                                <Link to="/tieredmenu">&#9679; TieredMenu</Link>
                                <Link to="/menubar">&#9679; Menubar</Link>
                                <Link to="/contextmenu">&#9679; ContextMenu</Link>
                                <Link to="/panelmenu">&#9679; PanelMenu</Link>
                                <Link to="/steps">&#9679; Steps</Link>
                                <Link to="/megamenu">&#9679; MegaMenu</Link>
                                <Link to="/slidemenu">&#9679; SlideMenu</Link>
                            </div>
                        </div>

                        <a href="#" id="menu_chart" onClick={(event) => this.openMenu(event, 7)} className={classNames({ 'active-menuitem': this.state.activeMenu === 7 })}>
                            <img alt="charts" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/charts.svg"></img>
                            <img alt="charts" className="layout-menu-icon-active" src="showcase/resources/images/mono/charts-active.svg"></img>
                            <span>Chart</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 7, 'submenushow': this.state.activeMenu === 7 })}>
                            <div>
                                <Link to="/chartdemo">&#9679; ChartModel</Link>
                                <Link to="/piechart">&#9679; Pie</Link>
                                <Link to="/doughnutchart">&#9679; Doughnut</Link>
                                <Link to="/barchart">&#9679; Bar</Link>
                                <Link to="/linechart">&#9679; Line</Link>
                                <Link to="/polarareachart">&#9679; PolarArea</Link>
                                <Link to="/radarchart">&#9679; Radar</Link>
                            </div>
                        </div>

                        <a href="#" id="menu_messages" onClick={(event) => this.openMenu(event, 8)} className={classNames({ 'active-menuitem': this.state.activeMenu === 8 })}>
                            <img alt="message" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/message.svg"></img>
                            <img alt="message" className="layout-menu-icon-active" src="showcase/resources/images/mono/message-active.svg"></img>
                            <span>Messages</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 8, 'submenushow': this.state.activeMenu === 8 })}>
                            <div>
                                <Link to="/messages">&#9679; Messages</Link>
                                <Link to="/growl">&#9679; Growl</Link>
                            </div>
                        </div>

                        <a href="#" id="menu_multimedia" onClick={(event) => this.openMenu(event, 9)} className={classNames({ 'active-menuitem': this.state.activeMenu === 9 })} style={{ display: 'none' }}>
                            <img alt="multimedia" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/multimedia.svg"></img>
                            <img alt="multimedia" className="layout-menu-icon-active" src="showcase/resources/images/mono/multimedia-active.svg"></img>
                            <span>Multimedia</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 9, 'submenushow': this.state.activeMenu === 9 })} style={{ display: 'none' }}>

                        </div>

                        <a href="#" id="menu_dnd" onClick={(event) => this.openMenu(event, 10)} className={classNames({ 'active-menuitem': this.state.activeMenu === 10 })} style={{ display: 'none' }}>
                            <img alt="dragdrop" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/dragdrop.svg"></img>
                            <img alt="dragdrop" className="layout-menu-icon-active" src="showcase/resources/images/mono/dragdrop-active.svg"></img>
                            <span>DragDrop</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 10, 'submenushow': this.state.activeMenu === 10 })} style={{ display: 'none' }}>

                        </div>

                        <a href="#" id="menu_misc" onClick={(event) => this.openMenu(event, 11)} className={classNames({ 'active-menuitem': this.state.activeMenu === 11 })}>
                            <img alt="misc" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/misc.svg"></img>
                            <img alt="misc" className="layout-menu-icon-active" src="showcase/resources/images/mono/misc-active.svg"></img>
                            <span>Misc</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 11, 'submenushow': this.state.activeMenu === 11 })}>
                            <div>
                                <Link to="/progressbar">&#9679; ProgressBar</Link>
                                <Link to="/captcha">&#9679; Captcha</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = {};
        this.theme = 'omega';
        this.changeTheme = this.changeTheme.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
    }

    changeTheme(event) {
        var theme = event.currentTarget.dataset.theme;
        var themeElement = document.getElementById('theme-link');
        var oldThemeURL = themeElement.getAttribute('href');
        var newThemeURL = oldThemeURL.replace(this.theme, theme);
        this.theme = theme;
        themeElement.setAttribute('href', newThemeURL);
        event.preventDefault();
    }

    openMenu(event) {
        this.setState({ menuActive:!this.state.menuActive });
        event.preventDefault();
    }

    closeMenu(event) {
        this.setState({ menuActive:false});
        event.preventDefault();
    }

    onSidebarClick(event) {
        if (event.target.nodeName === 'A' && event.target.parentNode.className.indexOf('layout-menu') === -1) {
            this.closeMenu(event);
        }
    }

    render() {

        return (
            <div className='layout-wrapper'>
                <div id="layout-topbar">
                    <a href="#" className="menu-button" onClick={this.openMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                    <a href="#" className="logo">
                        <img alt="logo" src="showcase/resources/images/primereact-logo.png" />
                    </a>

                    <ul className="topbar-menu">
                        <li>
                            <Link to="/setup" > GET STARTED </Link>
                        </li>

                        <li className="topbar-menu-themes">
                            <a href="#">THEMES</a>
                            <ul>
                                <li className="topbar-submenu-header">THEMING</li>
                                <li><Link to="/theming"><span className="ui-text">Guide</span></Link></li>
                                <li className="topbar-submenu-header">PREMIUM</li>
                                <li><a href="https://www.primefaces.org/layouts/ultima-react"><img src="showcase/resources/images/layouts/themeswitcher-ultima.png" alt="Ultima (Material)" /><span className="ui-text">Ultima</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/avalon-react"><img src="showcase/resources/images/layouts/themeswitcher-avalon.png" alt="Avalon (Bootstrap)" /><span className="ui-text">Avalon</span></a></li>
                                <li className="topbar-submenu-header">THEMES</li>
                                <li><a href="#" data-theme="omega" onClick={this.changeTheme}><span className="ui-text">Omega</span></a></li>
                                <li><a href="#" data-theme="cruze" onClick={this.changeTheme}><span className="ui-text">Cruze</span></a></li>
                                <li><a href="#" data-theme="cupertino" onClick={this.changeTheme}><span className="ui-text">Cupertino</span></a></li>
                                <li><a href="#" data-theme="darkness" onClick={this.changeTheme}><span className="ui-text">Darkness</span></a></li>
                                <li><a href="#" data-theme="flick" onClick={this.changeTheme}><span className="ui-text">Flick</span></a></li>
                                <li><a href="#" data-theme="home" onClick={this.changeTheme}><span className="ui-text">Home</span></a></li>
                                <li><a href="#" data-theme="kasper" onClick={this.changeTheme}><span className="ui-text">Kasper</span></a></li>
                                <li><a href="#" data-theme="lightness" onClick={this.changeTheme}><span className="ui-text">Lightness</span></a></li>
                                <li><a href="#" data-theme="ludvig" onClick={this.changeTheme}><span className="ui-text">Ludvig</span></a></li>
                                <li><a href="#" data-theme="pepper-grinder" onClick={this.changeTheme}><span className="ui-text">Pepper-Grinder</span></a></li>
                                <li><a href="#" data-theme="redmond" onClick={this.changeTheme}><span className="ui-text">Redmond</span></a></li>
                                <li><a href="#" data-theme="rocket" onClick={this.changeTheme}><span className="ui-text">Rocket</span></a></li>
                                <li><a href="#" data-theme="south-street" onClick={this.changeTheme}><span className="ui-text">South-Street</span></a></li>
                                <li><a href="#" data-theme="start" onClick={this.changeTheme}><span className="ui-text">Start</span></a></li>
                                <li><a href="#" data-theme="trontastic" onClick={this.changeTheme}><span className="ui-text">Trontastic</span></a></li>
                                <li><a href="#" data-theme="voclain" onClick={this.changeTheme}><span className="ui-text">Voclain</span></a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="http://forum.primefaces.org/viewforum.php?f=57">SUPPORT</a>
                        </li>
                    </ul>
                </div>

                <div id="layout-sidebar" className={classNames({ 'active': this.state.menuActive === true })} onClick={this.onSidebarClick}>
                    <AppMenu />
                </div>

                <div className={classNames({ 'layout-mask': this.state.menuActive === true })}>
                </div>

                <div id="layout-content">
                    <div>
                        {this.props.children || <Home />}
                    </div>

                    <div className="content-section layout-footer clearfix">
                        <span>Released under the MIT License,  Copyright © 2017 PrimeTek</span>
                        <div className="footer-links">
                            <a href="https://github.com/primefaces/primereact"><i className=" icon-github fa fa-github-square"></i></a>
                            <a href="https://twitter.com/primereact"><i className="icon-twitter fa fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;

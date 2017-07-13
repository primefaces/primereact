import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import 'nanoscroller';
import jQuery from "jquery";
import 'nanoscroller/bin/css/nanoscroller.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'font-awesome/css/font-awesome.css';
import 'prismjs/themes/prism-coy.css';
import './App.css';

class Home extends Component {

    render() {
        return (
            <div className="homepage">
                <div className="ui-g">
                    <div className="ui-g-12">
                        <h1 className="homepage-title">PRIME<span>REACT</span></h1>

                        <p>PrimeReact is a collection of rich UI components for React. PrimeReact is a sibling of the popular
                            <a href="https://www.primefaces.org/primeng">PrimeNG</a> (Angular) and <a href="https://www.primefaces.org/showcase">PrimeFaces</a> (JSF) components suites. All widgets are open source and free to use under MIT License.</p>

                        <p>PrimeReact is developed by <a href="http://www.primetek.com.tr">PrimeTek Informatics</a>, a company with years of expertise in developing open source UI components. For project news and updates, follow us on twitter.</p>

                        <div className="ui-g">
                            <div className="ui-g-12 ui-md-4">
                                <a href="https://www.npmjs.com/package/primereact" className="homepage-btn download-btn">
                                    Download
                                    <i className="fa fa-caret-down" />
                                </a>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <a href="https://github.com/primefaces/primereact" className="homepage-btn github-btn">
                                    View On GitHub
                                    <i className="fa fa-github" />
                                </a>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <a href="https://www.twitter.com/prime_ng" className="homepage-btn twitter-btn">
                                    Twitter
                                    <i className="fa fa-twitter" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="ui-g-12 homepage-widgets">
                        <div className="ui-g">
                            <div className="ui-g-12 ui-md-4">
                                <img src="showcase/resources/images/icon-ui.svg" alt="Prime UI" />
                                <h3>PRIME UI</h3>
                                <ul>
                                    <li>Spin-off from PrimeFaces, PrimeNG and PrimeUI</li>
                                </ul>
                            </div>

                            <div className="ui-g-12 ui-md-4">
                                <img src="showcase/resources/images/icon-widgets.svg" alt="Widgets" />
                                <h3>WIDGETS</h3>
                                <ul>
                                    <li>40+ Components</li>
                                    <li>Easy to Use</li>
                                    <li>Accessible</li>
                                </ul>
                            </div>

                            <div className="ui-g-12 ui-md-4">
                                <img src="showcase/resources/images/icon-productivity.svg" alt="Producitivity" />
                                <h3>PRODUCTIVITY</h3>
                                <ul>
                                    <li>Simple</li>
                                    <li>Lightweight</li>
                                    <li>Powerful</li>
                                </ul>
                            </div>

                            <div className="ui-g-12 ui-md-4">
                                <img src="showcase/resources/images/icon-mobile.svg" alt="Mobile" />
                                <h3>MOBILE</h3>
                                <ul>
                                    <li>Responsive</li>
                                    <li>Cross Platform</li>
                                    <li>Touch Optimized</li>
                                </ul>
                            </div>

                            <div className="ui-g-12 ui-md-4">
                                <img src="showcase/resources/images/icon-community.svg" alt="Community" />
                                <h3>COMMUNITY</h3>
                                <ul>
                                    <li>Active</li>
                                    <li>Vibrant</li>
                                    <li>Open Source</li>
                                </ul>
                            </div>

                            <div className="ui-g-12 ui-md-4">
                                <img src="showcase/resources/images/icon-themes.svg" alt="Themes" />
                                <h3>THEMES</h3>
                                <ul>
                                    <li>Free Themes</li>
                                    <li>Premium Templates</li>
                                </ul>
                            </div>
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
        this.setState({ activeMenu: val });
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
                        <a href="#" onClick={(event) => this.openMenu(event, 0)} className={classNames({ 'active-menuitem': this.state.activeMenu === 0 })}>
                            <img alt="input" src="showcase/resources/images/mono/input.svg"></img>
                            <span>Input</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 0, 'submenu-visible': this.state.activeMenu === 0 })}>
                            <Link to="/autocomplete">&#9679; AutoComplete</Link>
                            <Link to="/checkbox">&#9679; Checkbox</Link>
                            <Link to="/chips">&#9679; Chips</Link>
                            <Link to="/dropdown">&#9679; Dropdown</Link>
                            <Link to="/inputtext">&#9679; InputText</Link>
                            <Link to="/inputtextarea">&#9679; InputTextarea</Link>
                            <Link to="/listbox">&#9679; Listbox</Link>
                            <Link to="/multiselect">&#9679; MultiSelect</Link>
                            <Link to="/radiobutton">&#9679; RadioButton</Link>
                            <Link to="/togglebutton">&#9679; ToggleButton</Link>
                            <Link to="/selectbutton">&#9679; SelectButton</Link>
                            <Link to="/inputswitch">&#9679; InputSwitch</Link>
                            <Link to="/slider">&#9679; Slider</Link>
                            <Link to="/spinner">&#9679; Spinner</Link>
                            <Link to="/tristatecheckbox">&#9679; TriState</Link>
                            <Link to="/inputmask">&#9679; InputMask</Link>
                            <Link to="/calendar">&#9679; Calendar</Link>
                            <Link to="/colorpicker">&#9679; ColorPicker</Link>
                            <Link to="/rating">&#9679; Rating</Link>
                            <Link to="/password">&#9679; Password</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 1)} className={classNames({ 'active-menuitem': this.state.activeMenu === 1 })}>
                            <img alt="button" src="showcase/resources/images/mono/button.svg"></img>
                            <span>Button</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 1, 'submenu-visible': this.state.activeMenu === 1 })}>
                            <Link to="/button">&#9679; Button</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 2)} className={classNames({ 'active-menuitem': this.state.activeMenu === 2 })}>
                            <img alt="button" src="showcase/resources/images/mono/data.svg"></img>
                            <span>Data</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 2, 'submenu-visible': this.state.activeMenu === 2 })}>
                            <Link to="/paginator">&#9679; Paginator</Link>
                            <Link to="/datalist">&#9679; DataList</Link>
                            <Link to="/datagrid">&#9679; DataGrid</Link>
                            <Link to="/orderlist">&#9679; OrderList</Link>
                            <Link to="/picklist">&#9679; PickList</Link>
                            <Link to="/schedule">&#9679; Schedule</Link>
                            <Link to="/tree">&#9679; Tree</Link>
                            <Link to="/treetable">&#9679; TreeTable</Link>
                            <Link to="/datascroller">&#9679; DataScroller</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 3)} className={classNames({ 'active-menuitem': this.state.activeMenu === 3 })}>
                            <img alt="button" src="showcase/resources/images/mono/panel.svg"></img>
                            <span>Panel</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 3, 'submenu-visible': this.state.activeMenu === 3 })}>
                            <Link to="/accordion">&#9679; Accordion</Link>
                            <Link to="/fieldset">&#9679; Fieldset</Link>
                            <Link to="/grid">&#9679; Grid</Link>
                            <Link to="/panel">&#9679; Panel</Link>
                            <Link to="/tabview">&#9679; TabView</Link>
                            <Link to="/toolbar">&#9679; Toolbar</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 4)} className={classNames({ 'active-menuitem': this.state.activeMenu === 4 })}>
                            <img alt="button" src="showcase/resources/images/mono/overlay.svg"></img>
                            <span>Overlay</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 4, 'submenu-visible': this.state.activeMenu === 4 })}>
                            <Link to="/dialog">&#9679; Dialog</Link>
                            <Link to="/overlaypanel">&#9679; OverlayPanel</Link>
                            <Link to="/lightbox">&#9679; Lightbox</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 5)} className={classNames({ 'active-menuitem': this.state.activeMenu === 5 })}>
                            <img alt="button" src="showcase/resources/images/mono/file.svg"></img>
                            <span>File</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 5, 'submenu-visible': this.state.activeMenu === 5 })}>
                            <Link to="/fileupload">&#9679; Upload</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 6)} className={classNames({ 'active-menuitem': this.state.activeMenu === 6 })}>
                            <img alt="button" src="showcase/resources/images/mono/menu.svg"></img>
                            <span>Menu</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 6, 'submenu-visible': this.state.activeMenu === 6 })}>
                            <Link to="/menu">&#9679; Menu</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 7)} className={classNames({ 'active-menuitem': this.state.activeMenu === 7 })}>
                            <img alt="button" src="showcase/resources/images/mono/charts.svg"></img>
                            <span>Chart</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 7, 'submenu-visible': this.state.activeMenu === 7 })}>
                            <Link to="/chartdemo">&#9679; ChartModel</Link>
                            <Link to="/piechart">&#9679; Pie</Link>
                            <Link to="/doughnutchart">&#9679; Doughnut</Link>
                            <Link to="/barchart">&#9679; Bar</Link>
                            <Link to="/linechart">&#9679; Line</Link>
                            <Link to="/polarareachart">&#9679; PolarArea</Link>
                            <Link to="/radarchart">&#9679; Radar</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 8)} className={classNames({ 'active-menuitem': this.state.activeMenu === 8 })}>
                            <img alt="button" src="showcase/resources/images/mono/message.svg"></img>
                            <span>Messages</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 8, 'submenu-visible': this.state.activeMenu === 8 })}>
                            <Link to="/messages">&#9679; Messages</Link>
                            <Link to="/growl">&#9679; Growl</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 9)} className={classNames({ 'active-menuitem': this.state.activeMenu === 9 })} style={{ display: 'none' }}>
                            <img alt="button" src="showcase/resources/images/mono/multimedia.svg"></img>
                            <span>Multimedia</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 9, 'submenu-visible': this.state.activeMenu === 9 })} style={{ display: 'none' }}>

                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 10)} className={classNames({ 'active-menuitem': this.state.activeMenu === 10 })} style={{ display: 'none' }}>
                            <img alt="button" src="showcase/resources/images/mono/dragdrop.svg"></img>
                            <span>DragDrop</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 10, 'submenu-visible': this.state.activeMenu === 10 })} style={{ display: 'none' }}>

                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event, 11)} className={classNames({ 'active-menuitem': this.state.activeMenu === 11 })}>
                            <img alt="button" src="showcase/resources/images/mono/misc.svg"></img>
                            <span>Misc</span>
                        </a>
                        <div className={classNames({ 'submenu-hidden': this.state.activeMenu !== 11, 'submenu-visible': this.state.activeMenu === 11 })}>
                            <Link to="/progressbar">&#9679; ProgressBar</Link>
                            <Link to="/captcha">&#9679; Captcha</Link>
                            <Link to="/codehighlight">&#9679; CodeHighlight</Link>
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
        document.body.style.overflow = 'hidden';
        this.setState({ mobileMenuActive: true });
        event.preventDefault();
    }

    closeMenu(event) {
        document.body.style.overflow = 'auto';
        this.setState({ mobileMenuActive: false });
        event.preventDefault();
    }

    onSidebarClick(event) {
        if (event.target.nodeName === 'A' && event.target.parentNode.className.indexOf('layout-menu') === -1) {
            this.closeMenu(event);
        }
    }

    render() {
        var layoutClass = classNames('layout-wrapper', { 'active': this.state.mobileMenuActive });

        return (
            <div className={layoutClass}>
                <div id="layout-sidebar" onClick={this.onSidebarClick}>
                    <span className="layout-logo">
                        <a href="#" className="sidebar-logo">
                            <img alt="logo" src="showcase/resources/images/logo.png" />
                        </a>
                        <a href="#" id="menu-button-mobile" onClick={this.closeMenu}>
                            <img alt="logo" src="showcase/resources/images/menuicon.svg" />
                        </a>
                    </span>

                    <AppMenu />
                </div>

                <div id="layout-content">
                    <div id="topbar">
                        <a href="#" id="menu-button" onClick={this.openMenu}>
                            <img alt="logo" src="showcase/resources/images/menuicon.svg" />
                        </a>

                        <a href="http://forum.primefaces.org/viewforum.php?f=57" className="topbar-link">
                            <img alt="mockosx" src="showcase/resources/images/forum.png" />
                        </a>

                        <span id="themeswitcher" className="topbar-link">
                            <img alt="themeswitcher" src="showcase/resources/images/themes.png" />
                            <div>
                                <span>Themes</span>
                                <a href="#" data-theme="omega" onClick={this.changeTheme}><span className="ui-text">Omega</span></a>
                                <a href="#" data-theme="bootstrap" onClick={this.changeTheme}><span className="ui-text">Bootstrap</span></a>
                                <a href="#" data-theme="cruze" onClick={this.changeTheme}><span className="ui-text">Cruze</span></a>
                                <a href="#" data-theme="cupertino" onClick={this.changeTheme}><span className="ui-text">Cupertino</span></a>
                                <a href="#" data-theme="darkness" onClick={this.changeTheme}><span className="ui-text">Darkness</span></a>
                                <a href="#" data-theme="flick" onClick={this.changeTheme}><span className="ui-text">Flick</span></a>
                                <a href="#" data-theme="home" onClick={this.changeTheme}><span className="ui-text">Home</span></a>
                                <a href="#" data-theme="kasper" onClick={this.changeTheme}><span className="ui-text">Kasper</span></a>
                                <a href="#" data-theme="lightness" onClick={this.changeTheme}><span className="ui-text">Lightness</span></a>
                                <a href="#" data-theme="ludvig" onClick={this.changeTheme}><span className="ui-text">Ludvig</span></a>
                                <a href="#" data-theme="pepper-grinder" onClick={this.changeTheme}><span className="ui-text">Pepper-Grinder</span></a>
                                <a href="#" data-theme="redmond" onClick={this.changeTheme}><span className="ui-text">Redmond</span></a>
                                <a href="#" data-theme="rocket" onClick={this.changeTheme}><span className="ui-text">Rocket</span></a>
                                <a href="#" data-theme="south-street" onClick={this.changeTheme}><span className="ui-text">South-Street</span></a>
                                <a href="#" data-theme="start" onClick={this.changeTheme}><span className="ui-text">Start</span></a>
                                <a href="#" data-theme="trontastic" onClick={this.changeTheme}><span className="ui-text">Trontastic</span></a>
                                <a href="#" data-theme="voclain" onClick={this.changeTheme}><span className="ui-text">Voclain</span></a>
                            </div>
                        </span>

                        <Link to="/setup" className="topbar-link">
                            <img alt="mockosx" src="showcase/resources/images/setup.png" />
                        </Link>
                    </div>

                    <div>
                        {this.props.children || <Home />}
                    </div>

                    <div className="content-section footer clearfix">
                        <span><a href="http://www.primetek.com.tr">PrimeTek</a>, Copyright &copy; 2017</span>
                        <span>All rights reserved</span>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;

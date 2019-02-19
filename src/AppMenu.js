import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export class AppMenu extends Component {

    constructor() {
        super();
        this.state = { activeMenu: -1 };
    }

    toggleMenu(val) {
        let active = this.state.activeMenu === val;

        this.setState({ activeMenu: active ? -1 : val });
    }

    render() {
        return (
            <div className="layout-menu">
                <button id="menu_input" onClick={() => this.toggleMenu(0)} className={classNames({ 'active-menuitem': this.state.activeMenu === 0 })}>
                    <img alt="input" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/input.svg"></img>
                    <img alt="input" className="layout-menu-icon-active" src="showcase/resources/images/mono/input-active.svg"></img>
                    <span>Input</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 0}>
                    <div className="layout-submenu">
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
                            <Link to="/keyfilter">&#9679; KeyFilter</Link>
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
                </CSSTransition>

                <button id="button_menutitle" onClick={() => this.toggleMenu(1)} className={classNames({ 'active-menuitem': this.state.activeMenu === 1 })}>
                    <img alt="button" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/button.svg"></img>
                    <img alt="button" className="layout-menu-icon-active" src="showcase/resources/images/mono/button-active.svg"></img>
                    <span>Button</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 1}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/button">&#9679; Button</Link>
                            <Link to="/splitbutton">&#9679; SplitButton</Link>
                        </div>
                    </div>
                </CSSTransition>

                <button id="data_menutitle" onClick={() => this.toggleMenu(2)} className={classNames({ 'active-menuitem': this.state.activeMenu === 2 })}>
                    <img alt="data" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/data.svg"></img>
                    <img alt="data" className="layout-menu-icon-active" src="showcase/resources/images/mono/data-active.svg"></img>
                    <span>Data</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 2}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/dataview">&#9679; DataView</Link>
                            <Link to="/datatable">&#9679; DataTable</Link>
                            <Link to="/datascroller">&#9679; DataScroller</Link>
                            <Link to="/gmap">&#9679; Google Maps</Link>
                            <Link to="/fullcalendar">&#9679; FullCalendar</Link>
                            <Link to="/orderlist">&#9679; OrderList</Link>
                            <Link to="/organizationchart">&#9679; Org Chart</Link>
                            <Link to="/paginator">&#9679; Paginator</Link>
                            <Link to="/picklist">&#9679; PickList</Link>
                            <Link to="/tree">&#9679; Tree</Link>
                            <Link to="/treetable">&#9679; TreeTable</Link>
                        </div>
                    </div>
                </CSSTransition>

                <button id="menu_panel" onClick={() => this.toggleMenu(3)} className={classNames({ 'active-menuitem': this.state.activeMenu === 3 })}>
                    <img alt="panel" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/panel.svg"></img>
                    <img alt="panel" className="layout-menu-icon-active" src="showcase/resources/images/mono/panel-active.svg"></img>
                    <span>Panel</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 3}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/accordion">&#9679; Accordion</Link>
                            <Link to="/card">&#9679; Card</Link>
                            <Link to="/deferredcontent">&#9679; Deferred</Link>
                            <Link to="/fieldset">&#9679; Fieldset</Link>
                            <Link to="/panel">&#9679; Panel</Link>
                            <Link to="/flexgrid">&#9679; FlexGrid</Link>
                            <Link to="/scrollpanel">&#9679; ScrollPanel</Link>
                            <Link to="/tabview">&#9679; TabView</Link>
                            <Link to="/toolbar">&#9679; Toolbar</Link>
                        </div>
                    </div>
                </CSSTransition>

                <button id="menu_overlay" onClick={() => this.toggleMenu(4)} className={classNames({ 'active-menuitem': this.state.activeMenu === 4 })}>
                    <img alt="overlay" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/overlay.svg"></img>
                    <img alt="overlay" className="layout-menu-icon-active" src="showcase/resources/images/mono/overlay-active.svg"></img>
                    <span>Overlay</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 4}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/dialog">&#9679; Dialog</Link>
                            <Link to="/lightbox">&#9679; Lightbox</Link>
                            <Link to="/overlaypanel">&#9679; OverlayPanel</Link>
                            <Link to="/sidebar">&#9679; Sidebar</Link>
                            <Link to="/tooltip">&#9679; Tooltip</Link>
                        </div>
                    </div>
                </CSSTransition>

                <button id="menu_file" onClick={() => this.toggleMenu(5)} className={classNames({ 'active-menuitem': this.state.activeMenu === 5 })}>
                    <img alt="file" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/file.svg"></img>
                    <img alt="file" className="layout-menu-icon-active" src="showcase/resources/images/mono/file-active.svg"></img>
                    <span>File</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 5}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/fileupload">&#9679; Upload</Link>
                        </div>
                    </div>
                </CSSTransition>

                <button id="menu_menu" onClick={() => this.toggleMenu(6)} className={classNames({ 'active-menuitem': this.state.activeMenu === 6 })}>
                    <img alt="menu" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/menu.svg"></img>
                    <img alt="menu" className="layout-menu-icon-active" src="showcase/resources/images/mono/menu-active.svg"></img>
                    <span>Menu</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 6}>
                    <div className="layout-submenu">
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
                </CSSTransition>

                <button id="menu_chart" onClick={() => this.toggleMenu(7)} className={classNames({ 'active-menuitem': this.state.activeMenu === 7 })}>
                    <img alt="charts" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/charts.svg"></img>
                    <img alt="charts" className="layout-menu-icon-active" src="showcase/resources/images/mono/charts-active.svg"></img>
                    <span>Chart</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 7}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/chartdemo">&#9679; ChartModel</Link>
                            <Link to="/piechart">&#9679; Pie</Link>
                            <Link to="/doughnutchart">&#9679; Doughnut</Link>
                            <Link to="/barchart">&#9679; Bar</Link>
                            <Link to="/linechart">&#9679; Line</Link>
                            <Link to="/polarareachart">&#9679; PolarArea</Link>
                            <Link to="/radarchart">&#9679; Radar</Link>
                            <Link to="/combochart">&#9679; Combo</Link>
                        </div>
                    </div>
                </CSSTransition>
                    

                <button id="menu_messages" onClick={() => this.toggleMenu(8)} className={classNames({ 'active-menuitem': this.state.activeMenu === 8 })}>
                    <img alt="message" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/message.svg"></img>
                    <img alt="message" className="layout-menu-icon-active" src="showcase/resources/images/mono/message-active.svg"></img>
                    <span>Messages</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 8}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/messages">&#9679; Messages</Link>
                            <Link to="/growl">&#9679; Growl</Link>
                        </div>
                    </div>
                </CSSTransition>
                   
                <button id="menu_misc" onClick={() => this.toggleMenu(9)} className={classNames({ 'active-menuitem': this.state.activeMenu === 9 })}>
                    <img alt="misc" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/misc.svg"></img>
                    <img alt="misc" className="layout-menu-icon-active" src="showcase/resources/images/mono/misc-active.svg"></img>
                    <span>Misc</span>
                </button>
                <CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={this.state.activeMenu === 9}>
                    <div className="layout-submenu">
                        <div>
                            <Link to="/progressbar">&#9679; ProgressBar</Link>
                            <Link to="/captcha">&#9679; Captcha</Link>
                            <Link to="/inplace">&#9679; Inplace</Link>
                            <Link to="/progressspinner">&#9679; ProgressSpinner</Link>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import 'nanoscroller';
import jQuery from "jquery";
import './resources/style/primereact.css';
import 'nanoscroller/bin/css/nanoscroller.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'font-awesome/css/font-awesome.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './sass/App.css';

import { AccordionDemo } from './showcase/accordion/AccordionDemo';
import { AutoCompleteDemo } from './showcase/autocomplete/AutoCompleteDemo';
import { ButtonDemo } from './showcase/button/ButtonDemo';
import { SplitButtonDemo } from './showcase/splitbutton/SplitButtonDemo';
import { CheckboxDemo } from './showcase/checkbox/CheckboxDemo';
import { ChipsDemo } from './showcase/chips/ChipsDemo';
import { DialogDemo } from './showcase/dialog/DialogDemo';
import { DropdownDemo } from './showcase/dropdown/DropdownDemo';
import { FieldsetDemo } from './showcase/fieldset/FieldsetDemo';
import { FileUploadDemo } from './showcase/fileupload/FileUploadDemo';
import { GMapDemo } from './showcase/gmap/GMapDemo';
import { GridDemo } from './showcase/grid/GridDemo';
import { GrowlDemo } from './showcase/growl/GrowlDemo';
import { InputTextDemo } from './showcase/inputtext/InputTextDemo';
import { InputTextareaDemo } from './showcase/inputtextarea/InputTextareaDemo';
import { ListBoxDemo } from './showcase/listbox/ListBoxDemo';
import { MessagesDemo } from './showcase/messages/MessagesDemo';
import { MultiSelectDemo } from './showcase/multiselect/MultiSelectDemo';
import { OverlayPanelDemo } from './showcase/overlaypanel/OverlayPanelDemo';
import { PanelDemo } from './showcase/panel/PanelDemo';
import { ScrollPanelDemo } from './showcase/scrollpanel/ScrollPanelDemo';
import { ProgressBarDemo } from './showcase/progressbar/ProgressBarDemo';
import { RadioButtonDemo } from './showcase/radiobutton/RadioButtonDemo';
import { TabViewDemo } from './showcase/tabview/TabViewDemo';
import { ToggleButtonDemo } from './showcase/togglebutton/ToggleButtonDemo';
import { TriStateCheckboxDemo } from './showcase/tristatecheckbox/TriStateCheckboxDemo';
import { SelectButtonDemo } from './showcase/selectbutton/SelectButtonDemo';
import { InputSwitchDemo } from './showcase/inputswitch/InputSwitchDemo';
import { SliderDemo } from './showcase/slider/SliderDemo';
import { SpinnerDemo } from './showcase/spinner/SpinnerDemo';
import { InputMaskDemo } from './showcase/inputmask/InputMaskDemo';
import { CalendarDemo } from './showcase/calendar/CalendarDemo';
import { ChartDemo } from './showcase/chart/ChartDemo';
import { PieChartDemo } from './showcase/chart/PieChartDemo';
import { BarChartDemo } from './showcase/chart/BarChartDemo';
import { LineChartDemo } from './showcase/chart/LineChartDemo';
import { DoughnutChartDemo } from './showcase/chart/DoughnutChartDemo';
import { RadarChartDemo } from './showcase/chart/RadarChartDemo';
import { PolarAreaChartDemo } from './showcase/chart/PolarAreaChartDemo';
import { PaginatorDemo } from './showcase/paginator/PaginatorDemo';
import { DataListDemo } from './showcase/datalist/DataListDemo';
import { DataGridDemo } from './showcase/datagrid/DataGridDemo';
import { DataTableDemo } from './showcase/datatable/DataTableDemo';
import { DataTableLazyDemo } from './showcase/datatable/DataTableLazyDemo';
import { DataTableExportDemo } from './showcase/datatable/DataTableExportDemo';
import { DataTableCrudDemo } from './showcase/datatable/DataTableCrudDemo';
import { DataTableTemplatingDemo } from './showcase/datatable/DataTableTemplatingDemo';
import { DataTablePaginatorDemo } from './showcase/datatable/DataTablePaginatorDemo';
import { DataTableSortDemo } from './showcase/datatable/DataTableSortDemo';
import { DataTableFilterDemo } from './showcase/datatable/DataTableFilterDemo';
import { DataTableColTogglerDemo } from './showcase/datatable/DataTableColTogglerDemo';
import { DataTableScrollDemo } from './showcase/datatable/DataTableScrollDemo';
import { DataTableSelectionDemo } from './showcase/datatable/DataTableSelectionDemo';
import { DataTableColGroupDemo } from './showcase/datatable/DataTableColGroupDemo';
import { DataTableRowExpansionDemo } from './showcase/datatable/DataTableRowExpansionDemo';
import { DataTableColResizeDemo } from './showcase/datatable/DataTableColResizeDemo';
import { DataTableReorderDemo } from './showcase/datatable/DataTableReorderDemo';
import { DataTableContextMenuDemo } from './showcase/datatable/DataTableContextMenuDemo';
import { DataTableResponsiveDemo } from './showcase/datatable/DataTableResponsiveDemo';
import { DataTableEditDemo } from './showcase/datatable/DataTableEditDemo';
import { DataTableRowGroupDemo } from './showcase/datatable/DataTableRowGroupDemo';
import { DataTableStyleDemo } from './showcase/datatable/DataTableStyleDemo';
import { OrderListDemo } from './showcase/orderlist/OrderListDemo';
import { PickListDemo } from './showcase/picklist/PickListDemo';
import { ScheduleDemo } from './showcase/schedule/ScheduleDemo';
import { TreeDemo } from './showcase/tree/TreeDemo';
import { TreeTableDemo } from './showcase/treetable/TreeTableDemo';
import { TreeTableSortDemo } from './showcase/treetable/TreeTableSortDemo';
import { TreeTableSelectionDemo } from './showcase/treetable/TreeTableSelectionDemo';
import { CaptchaDemo } from './showcase/captcha/CaptchaDemo';
import { ColorPickerDemo } from './showcase/colorpicker/ColorPickerDemo';
import { PasswordDemo } from './showcase/password/PasswordDemo';
import { HomeComponent } from './showcase/home/HomeComponent';
import { IconsPage } from './showcase/icons/IconsPage';
import { SetupPage } from './showcase/setup/SetupPage';
import { SupportPage } from './showcase/support/SupportPage';
import { RatingDemo } from './showcase/rating/RatingDemo';
import { ToolbarDemo } from './showcase/toolbar/ToolbarDemo';
import { InplaceDemo } from './showcase/inplace/InplaceDemo';
import { LightboxDemo } from './showcase/lightbox/LightboxDemo';
import { DataScrollerDemo } from './showcase/datascroller/DataScrollerDemo';
import { DataScrollerInlineDemo } from './showcase/datascroller/DataScrollerInlineDemo';
import { DataScrollerLoaderDemo } from './showcase/datascroller/DataScrollerLoaderDemo';
import { MenuDemo } from './showcase/menu/MenuDemo';
import { TabMenuDemo } from './showcase/tabmenu/TabMenuDemo';
import { BreadcrumbDemo } from './showcase/breadcrumb/BreadcrumbDemo';
import { TieredMenuDemo } from './showcase/tieredmenu/TieredMenuDemo';
import { MenubarDemo } from './showcase/menubar/MenubarDemo';
import { ContextMenuDemo } from './showcase/contextmenu/ContextMenuDemo';
import { PanelMenuDemo } from './showcase/panelmenu/PanelMenuDemo';
import { StepsDemo } from './showcase/steps/StepsDemo';
import { MegaMenuDemo } from './showcase/megamenu/MegaMenuDemo';
import { SlideMenuDemo } from './showcase/slidemenu/SlideMenuDemo';
import { OrganizationChartDemo } from './showcase/organizationchart/OrganizationChartDemo';
import { ThemingPage } from "./showcase/theming/ThemingPage"
import { InputGroupDemo } from "./showcase/inputgroup/InputGroupDemo";
import { EditorDemo } from "./showcase/editor/EditorDemo";
import { TooltipDemo } from "./showcase/tooltip/TooltipDemo";
import { MenuModelDemo } from "./showcase/menumodel/MenuModelDemo";
import { SidebarDemo } from "./showcase/sidebar/SidebarDemo";
import { ProgressSpinnerDemo } from "./showcase/progressspinner/ProgressSpinnerDemo";
import { CardDemo } from "./showcase/card/CardDemo";
import { KeyFilterDemo } from "./showcase/keyfilter/KeyFilterDemo";
import { DataViewDemo } from "./showcase/dataview/DataViewDemo";

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
                        <a id="menu_input"  onClick={(event) => this.openMenu(event, 0)} className={classNames({ 'active-menuitem': this.state.activeMenu === 0 })}>
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

                        <a id="button_menutitle" onClick={(event) => this.openMenu(event, 1)} className={classNames({ 'active-menuitem': this.state.activeMenu === 1 })}>
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

                        <a id="data_menutitle" onClick={(event) => this.openMenu(event, 2)} className={classNames({ 'active-menuitem': this.state.activeMenu === 2 })}>
                            <img alt="data" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/data.svg"></img>
                            <img alt="data" className="layout-menu-icon-active" src="showcase/resources/images/mono/data-active.svg"></img>
                            <span>Data</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 2, 'submenushow': this.state.activeMenu === 2 })}>
                            <div>
                                <Link to="/dataview">&#9679; DataView</Link>
                                <Link to="/datatable">&#9679; DataTable</Link>
                                <Link to="/datascroller">&#9679; DataScroller</Link>
                                <Link to="/gmap">&#9679; Google Maps</Link>
                                <Link to="/orderlist">&#9679; OrderList</Link>
                                <Link to="/organizationchart">&#9679; Org Chart</Link>
                                <Link to="/paginator">&#9679; Paginator</Link>
                                <Link to="/picklist">&#9679; PickList</Link>
                                <Link to="/schedule">&#9679; Schedule</Link>
                                <Link to="/tree">&#9679; Tree</Link>
                                <Link to="/treetable">&#9679; TreeTable</Link>
                            </div>
                        </div>

                        <a id="menu_panel" onClick={(event) => this.openMenu(event, 3)} className={classNames({ 'active-menuitem': this.state.activeMenu === 3 })}>
                            <img alt="panel" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/panel.svg"></img>
                            <img alt="panel" className="layout-menu-icon-active" src="showcase/resources/images/mono/panel-active.svg"></img>
                            <span>Panel</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 3, 'submenushow': this.state.activeMenu === 3 })}>
                            <div>
                                <Link to="/accordion">&#9679; Accordion</Link>
                                <Link to="/card">&#9679; Card</Link>
                                <Link to="/fieldset">&#9679; Fieldset</Link>
                                <Link to="/grid">&#9679; Grid</Link>
                                <Link to="/panel">&#9679; Panel</Link>
                                <Link to="/scrollpanel">&#9679; ScrollPanel</Link>
                                <Link to="/tabview">&#9679; TabView</Link>
                                <Link to="/toolbar">&#9679; Toolbar</Link>
                            </div>
                        </div>

                        <a id="menu_overlay"  onClick={(event) => this.openMenu(event, 4)} className={classNames({ 'active-menuitem': this.state.activeMenu === 4 })}>
                            <img alt="overlay" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/overlay.svg"></img>
                            <img alt="overlay" className="layout-menu-icon-active" src="showcase/resources/images/mono/overlay-active.svg"></img>
                            <span>Overlay</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 4, 'submenushow': this.state.activeMenu === 4 })}>
                            <div>
                                <Link to="/dialog">&#9679; Dialog</Link>
                                <Link to="/lightbox">&#9679; Lightbox</Link>
                                <Link to="/overlaypanel">&#9679; OverlayPanel</Link>
                                <Link to="/sidebar">&#9679; Sidebar</Link>
                                <Link to="/tooltip">&#9679; Tooltip</Link>
                            </div>
                        </div>

                        <a id="menu_file" onClick={(event) => this.openMenu(event, 5)} className={classNames({ 'active-menuitem': this.state.activeMenu === 5 })}>
                            <img alt="file" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/file.svg"></img>
                            <img alt="file" className="layout-menu-icon-active" src="showcase/resources/images/mono/file-active.svg"></img>
                            <span>File</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 5, 'submenushow': this.state.activeMenu === 5 })}>
                            <div>
                                <Link to="/fileupload">&#9679; Upload</Link>
                            </div>
                        </div>

                        <a id="menu_menu" onClick={(event) => this.openMenu(event, 6)} className={classNames({ 'active-menuitem': this.state.activeMenu === 6 })}>
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

                        <a id="menu_chart" onClick={(event) => this.openMenu(event, 7)} className={classNames({ 'active-menuitem': this.state.activeMenu === 7 })}>
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

                        <a id="menu_messages" onClick={(event) => this.openMenu(event, 8)} className={classNames({ 'active-menuitem': this.state.activeMenu === 8 })}>
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

                        <a id="menu_multimedia" onClick={(event) => this.openMenu(event, 9)} className={classNames({ 'active-menuitem': this.state.activeMenu === 9 })} style={{ display: 'none' }}>
                            <img alt="multimedia" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/multimedia.svg"></img>
                            <img alt="multimedia" className="layout-menu-icon-active" src="showcase/resources/images/mono/multimedia-active.svg"></img>
                            <span>Multimedia</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 9, 'submenushow': this.state.activeMenu === 9 })} style={{ display: 'none' }}>

                        </div>

                        <a id="menu_dnd" onClick={(event) => this.openMenu(event, 10)} className={classNames({ 'active-menuitem': this.state.activeMenu === 10 })} style={{ display: 'none' }}>
                            <img alt="dragdrop" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/dragdrop.svg"></img>
                            <img alt="dragdrop" className="layout-menu-icon-active" src="showcase/resources/images/mono/dragdrop-active.svg"></img>
                            <span>DragDrop</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 10, 'submenushow': this.state.activeMenu === 10 })} style={{ display: 'none' }}>

                        </div>

                        <a id="menu_misc" onClick={(event) => this.openMenu(event, 11)} className={classNames({ 'active-menuitem': this.state.activeMenu === 11 })}>
                            <img alt="misc" className="layout-menu-icon-inactive" src="showcase/resources/images/mono/misc.svg"></img>
                            <img alt="misc" className="layout-menu-icon-active" src="showcase/resources/images/mono/misc-active.svg"></img>
                            <span>Misc</span>
                        </a>
                        <div className={classNames({ 'submenuhide': this.state.activeMenu !== 11, 'submenushow': this.state.activeMenu === 11 })}>
                            <div>
                                <Link to="/progressbar">&#9679; ProgressBar</Link>
                                <Link to="/captcha">&#9679; Captcha</Link>
                                <Link to="/inplace">&#9679; Inplace</Link>
                                <Link to="/progressspinner">&#9679; ProgressSpinner</Link>
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
                    <a className="menu-button" onClick={this.openMenu}>
                        <i className="fa fa-bars"></i>
                    </a>
                    <Link to="/" className="logo">
                        <img alt="logo" src="showcase/resources/images/primereact-logo.png" />
                    </Link>

                    <ul className="topbar-menu">
                        <li>
                            <Link to="/setup" > GET STARTED </Link>
                        </li>

                        <li className="topbar-menu-themes">
                            <a>THEMES</a>
                            <ul>
                                <li className="topbar-submenu-header">THEMING</li>
                                <li><Link to="/theming"><i className="fa fa-fw fa-book" /><span className="ui-text">Guide</span></Link></li>
                                <li><Link to="/icons"><i className="fa fa-fw fa-info" /><span className="ui-text">Icons</span></Link></li>
                                <li className="topbar-submenu-header">PREMIUM TEMPLATES</li>
                                <li><a href="https://www.primefaces.org/layouts/serenity-react"><img src="showcase/resources/images/layouts/themeswitcher-serenity.png" alt="Serenity (Material)" /><span className="ui-text">Serenity</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/ultima-react"><img src="showcase/resources/images/layouts/themeswitcher-ultima.png" alt="Ultima (Material)" /><span className="ui-text">Ultima</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/avalon-react"><img src="showcase/resources/images/layouts/themeswitcher-avalon.png" alt="Avalon (Bootstrap)" /><span className="ui-text">Avalon</span></a></li>
                                <li className="topbar-submenu-header">FREE TEMPLATES</li>
                                <li><a href="https://www.primefaces.org/sigma-react"><img src="showcase/resources/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span className="ui-text">Sigma</span></a></li>
                                <li className="topbar-submenu-header">FREE THEMES</li>
                                <li><a data-theme="omega" onClick={this.changeTheme}><span className="ui-text">Omega</span></a></li>
                                <li><a data-theme="cruze" onClick={this.changeTheme}><span className="ui-text">Cruze</span></a></li>
                                <li><a data-theme="cupertino" onClick={this.changeTheme}><span className="ui-text">Cupertino</span></a></li>
                                <li><a data-theme="darkness" onClick={this.changeTheme}><span className="ui-text">Darkness</span></a></li>
                                <li><a data-theme="flick" onClick={this.changeTheme}><span className="ui-text">Flick</span></a></li>
                                <li><a data-theme="home" onClick={this.changeTheme}><span className="ui-text">Home</span></a></li>
                                <li><a data-theme="kasper" onClick={this.changeTheme}><span className="ui-text">Kasper</span></a></li>
                                <li><a data-theme="lightness" onClick={this.changeTheme}><span className="ui-text">Lightness</span></a></li>
                                <li><a data-theme="ludvig" onClick={this.changeTheme}><span className="ui-text">Ludvig</span></a></li>
                                <li><a data-theme="pepper-grinder" onClick={this.changeTheme}><span className="ui-text">Pepper-Grinder</span></a></li>
                                <li><a data-theme="redmond" onClick={this.changeTheme}><span className="ui-text">Redmond</span></a></li>
                                <li><a data-theme="rocket" onClick={this.changeTheme}><span className="ui-text">Rocket</span></a></li>
                                <li><a data-theme="south-street" onClick={this.changeTheme}><span className="ui-text">South-Street</span></a></li>
                                <li><a data-theme="start" onClick={this.changeTheme}><span className="ui-text">Start</span></a></li>
                                <li><a data-theme="trontastic" onClick={this.changeTheme}><span className="ui-text">Trontastic</span></a></li>
                                <li><a data-theme="voclain" onClick={this.changeTheme}><span className="ui-text">Voclain</span></a></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/support">SUPPORT</Link>
                        </li>
                    </ul>
                </div>

                <div id="layout-sidebar" className={classNames({ 'active': this.state.menuActive === true })} onClick={this.onSidebarClick}>
                    <AppMenu />
                </div>

                <div className={classNames({ 'layout-mask': this.state.menuActive === true })}>
                </div>

                <div id="layout-content">
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/icons" component={IconsPage} />
                    <Route path="/support" component={SupportPage} />
                    <Route path="/accordion" component={AccordionDemo} />
                    <Route path="/autocomplete" component={AutoCompleteDemo} />
                    <Route path="/button" component={ButtonDemo} />
                    <Route path="/checkbox" component={CheckboxDemo} />
                    <Route path="/chips" component={ChipsDemo} />
                    <Route path="/dialog" component={DialogDemo} />
                    <Route path="/dropdown" component={DropdownDemo} />
                    <Route path="/grid" component={GridDemo} />
                    <Route path="/growl" component={GrowlDemo} />
                    <Route path="/fieldset" component={FieldsetDemo} />
                    <Route path="/fileupload" component={FileUploadDemo} />
                    <Route path="/inputtext" component={InputTextDemo} />
                    <Route path="/inputtextarea" component={InputTextareaDemo} />
                    <Route path="/listbox" component={ListBoxDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/multiselect" component={MultiSelectDemo} />
                    <Route path="/overlaypanel" component={OverlayPanelDemo} />
                    <Route path="/panel" component={PanelDemo} />
                    <Route path="/progressbar" component={ProgressBarDemo} />
                    <Route path="/radiobutton" component={RadioButtonDemo} />
                    <Route path="/tabview" component={TabViewDemo} />
                    <Route path="/togglebutton" component={ToggleButtonDemo} />
                    <Route path="/tristatecheckbox" component={TriStateCheckboxDemo} />
                    <Route path="/selectbutton" component={SelectButtonDemo} />
                    <Route path="/inputswitch" component={InputSwitchDemo} />
                    <Route path="/inputmask" component={InputMaskDemo} />
                    <Route path="/slider" component={SliderDemo} />
                    <Route path="/spinner" component={SpinnerDemo} />
                    <Route path="/calendar" component={CalendarDemo} />
                    <Route path="/chartdemo" component={ChartDemo} />
                    <Route path="/piechart" component={PieChartDemo} />
                    <Route path="/doughnutchart" component={DoughnutChartDemo} />
                    <Route path="/linechart" component={LineChartDemo} />
                    <Route path="/barchart" component={BarChartDemo} />
                    <Route path="/polarareachart" component={PolarAreaChartDemo} />
                    <Route path="/radarchart" component={RadarChartDemo} />
                    <Route path="/paginator" component={PaginatorDemo} />
                    <Route path="/datalist" component={DataListDemo} />
                    <Route path="/datagrid" component={DataGridDemo} />
                    <Route exact path="/datatable" component={DataTableDemo} />
                    <Route path="/datatable/templating" component={DataTableTemplatingDemo} />
                    <Route path="/datatable/paginator" component={DataTablePaginatorDemo} />
                    <Route path="/datatable/sort" component={DataTableSortDemo} />
                    <Route path="/datatable/filter" component={DataTableFilterDemo} />
                    <Route path="/datatable/scroll" component={DataTableScrollDemo} />
                    <Route path="/datatable/lazy" component={DataTableLazyDemo} />
                    <Route path="/datatable/selection" component={DataTableSelectionDemo} />
                    <Route path="/datatable/colgroup" component={DataTableColGroupDemo} />
                    <Route path="/datatable/contextmenu" component={DataTableContextMenuDemo} />
                    <Route path="/datatable/coltoggle" component={DataTableColTogglerDemo} />
                    <Route path="/datatable/rowexpand" component={DataTableRowExpansionDemo} />
                    <Route path="/datatable/responsive" component={DataTableResponsiveDemo} />
                    <Route path="/datatable/colresize" component={DataTableColResizeDemo} />
                    <Route path="/datatable/reorder" component={DataTableReorderDemo} />
                    <Route path="/datatable/export" component={DataTableExportDemo} />
                    <Route path="/datatable/edit" component={DataTableEditDemo} />
                    <Route path="/datatable/rowgroup" component={DataTableRowGroupDemo} />
                    <Route path="/datatable/crud" component={DataTableCrudDemo} />
                    <Route path="/datatable/style" component={DataTableStyleDemo} />
                    <Route path="/orderlist" component={OrderListDemo} />
                    <Route path="/picklist" component={PickListDemo} />
                    <Route path="/schedule" component={ScheduleDemo} />
                    <Route path="/tree" component={TreeDemo} />
                    <Route exact path="/treetable" component={TreeTableDemo} />
                    <Route path="/treetable/sort" component={TreeTableSortDemo} />
                    <Route path="/treetable/selection" component={TreeTableSelectionDemo} />
                    <Route path="/captcha" component={CaptchaDemo} />
                    <Route path="/colorpicker" component={ColorPickerDemo} />
                    <Route path="/password" component={PasswordDemo} />
                    <Route path="/toolbar" component={ToolbarDemo} />
                    <Route path="/lightbox" component={LightboxDemo} />
                    <Route path="/rating" component={RatingDemo} />
                    <Route exact path="/datascroller" component={DataScrollerDemo} />
                    <Route path="/datascroller/inline" component={DataScrollerInlineDemo} />
                    <Route path="/datascroller/loader" component={DataScrollerLoaderDemo} />
                    <Route path="/menumodel" component={MenuModelDemo} />
                    <Route path="/menu" component={MenuDemo} />
                    <Route path="/tabmenu" component={TabMenuDemo} />
                    <Route path="/breadcrumb" component={BreadcrumbDemo} />
                    <Route path="/tieredmenu" component={TieredMenuDemo} />
                    <Route path="/menubar" component={MenubarDemo} />
                    <Route path="/contextmenu" component={ContextMenuDemo} />
                    <Route path="/panelmenu" component={PanelMenuDemo} />
                    <Route path="/slidemenu" component={SlideMenuDemo} />
                    <Route path="/steps" component={StepsDemo} />
                    <Route path="/megamenu" component={MegaMenuDemo} />
                    <Route path="/setup" component={SetupPage} />
                    <Route path="/splitbutton" component={SplitButtonDemo} />
                    <Route path="/organizationchart" component={OrganizationChartDemo} />
                    <Route path="/theming" component={ThemingPage} />
                    <Route path="/inputgroup" component={InputGroupDemo} />
                    <Route path="/editor" component={EditorDemo} />
                    <Route path="/tooltip" component={TooltipDemo} />
                    <Route path="/sidebar" component={SidebarDemo} />
                    <Route path="/gmap" component={GMapDemo} />
                    <Route path="/progressspinner" component={ProgressSpinnerDemo} />
                    <Route path="/scrollpanel" component={ScrollPanelDemo} />
                    <Route path="/card" component={CardDemo}/>
                    <Route path="/keyfilter" component={KeyFilterDemo}/>
                    <Route path="/dataview" component={DataViewDemo}/>
                    <Route path="/inplace" component={InplaceDemo}/>

                    <div className="content-section layout-footer clearfix">
                        <span>Released under the MIT License,  Copyright © 2018 <a href="http://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeTek</a></span>
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

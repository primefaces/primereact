import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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

import { AccordionDemo } from './showcase/accordion/AccordionDemo';
import { AutoCompleteDemo } from './showcase/autocomplete/AutoCompleteDemo';
import { ButtonDemo } from './showcase/button/ButtonDemo';
import { SplitButtonDemo } from './showcase/splitbutton/SplitButtonDemo';
import { CheckboxDemo } from './showcase/checkbox/CheckboxDemo';
import { ChipsDemo } from './showcase/chips/ChipsDemo';
import { DialogDemo } from './showcase/dialog/DialogDemo';
import { DeferredContentDemo } from './showcase/deferredcontent/DeferredContentDemo';
import { DropdownDemo } from './showcase/dropdown/DropdownDemo';
import { FieldsetDemo } from './showcase/fieldset/FieldsetDemo';
import { FileUploadDemo } from './showcase/fileupload/FileUploadDemo';
import { FlexGridDemo } from './showcase/flexgrid/FlexGridDemo';
import { GMapDemo } from './showcase/gmap/GMapDemo';
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
import { ComboChartDemo } from './showcase/chart/ComboChartDemo';
import { PieChartDemo } from './showcase/chart/PieChartDemo';
import { BarChartDemo } from './showcase/chart/BarChartDemo';
import { LineChartDemo } from './showcase/chart/LineChartDemo';
import { DoughnutChartDemo } from './showcase/chart/DoughnutChartDemo';
import { RadarChartDemo } from './showcase/chart/RadarChartDemo';
import { PolarAreaChartDemo } from './showcase/chart/PolarAreaChartDemo';
import { PaginatorDemo } from './showcase/paginator/PaginatorDemo';
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
import { DataTableStateDemo } from './showcase/datatable/DataTableStateDemo';
import { OrderListDemo } from './showcase/orderlist/OrderListDemo';
import { PickListDemo } from './showcase/picklist/PickListDemo';
import { FullCalendarDemo } from './showcase/fullcalendar/FullCalendarDemo';
import { TreeDemo } from './showcase/tree/TreeDemo';
import { TreeSelectionDemo } from './showcase/tree/TreeSelectionDemo';
import { TreeEventsDemo } from './showcase/tree/TreeEventsDemo';
import { TreeLazyDemo } from './showcase/tree/TreeLazyDemo';
import { TreeTemplatingDemo } from './showcase/tree/TreeTemplatingDemo';
import { TreeDragDropDemo } from './showcase/tree/TreeDragDropDemo';
import { TreeContextMenuDemo } from './showcase/tree/TreeContextMenuDemo';
import { TreeFilterDemo } from './showcase/tree/TreeFilterDemo';
import { TreeTableDemo } from './showcase/treetable/TreeTableDemo';
import { TreeTableTemplatingDemo } from './showcase/treetable/TreeTableTemplatingDemo';
import { TreeTablePageDemo } from './showcase/treetable/TreeTablePageDemo';
import { TreeTableSortDemo } from './showcase/treetable/TreeTableSortDemo';
import { TreeTableSelectionDemo } from './showcase/treetable/TreeTableSelectionDemo';
import { TreeTableColGroupDemo } from './showcase/treetable/TreeTableColGroupDemo';
import { TreeTableLazyDemo } from './showcase/treetable/TreeTableLazyDemo';
import { TreeTableEditDemo } from './showcase/treetable/TreeTableEditDemo';
import { TreeTableScrollDemo } from './showcase/treetable/TreeTableScrollDemo';
import { TreeTableColResizeDemo } from './showcase/treetable/TreeTableColResizeDemo';
import { TreeTableColReorderDemo } from './showcase/treetable/TreeTableColReorderDemo';
import { TreeTableColTogglerDemo } from './showcase/treetable/TreeTableColTogglerDemo';
import { TreeTableContextMenuDemo } from './showcase/treetable/TreeTableContextMenuDemo';
import { TreeTableStyleDemo } from './showcase/treetable/TreeTableStyleDemo';
import { TreeTableResponsiveDemo } from './showcase/treetable/TreeTableResponsiveDemo';
import { TreeTableFilterDemo } from './showcase/treetable/TreeTableFilterDemo';
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

export class App extends Component {

    constructor() {
        super();
        this.state = {
            mobileMenuActive: false,
            themeMenuActive: false,
            themeMenuVisited: false
        };

        this.version = require('../package.json') && require('../package.json').version;

        this.theme = 'nova-light';
        this.changeTheme = this.changeTheme.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onMenuButtonKeyDown = this.onMenuButtonKeyDown.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onThemesLinkClick = this.onThemesLinkClick.bind(this);
        this.onThemesLinkKeyDown = this.onThemesLinkKeyDown.bind(this);
        this.onThemeChangerKeyDown = this.onThemeChangerKeyDown.bind(this);
        this.onThemesMenuRouteChange = this.onThemesMenuRouteChange.bind(this);
    }

    changeTheme(event, theme, dark) {
        let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
        this.theme = theme;
        
        if (dark) {
            if (!this.darkDemoStyle) {
                this.darkDemoStyle = document.createElement('style');
                this.darkDemoStyle.type = 'text/css';
                this.darkDemoStyle.innerHTML = '.implementation { background-color: #3f3f3f !important; color: #dedede !important} .implementation > h3, .implementation > h4{ color: #dedede !important}';
                document.body.appendChild(this.darkDemoStyle);
            }
        }
        else if(this.darkDemoStyle) {
            document.body.removeChild(this.darkDemoStyle);
            this.darkDemoStyle = null;
        }

        this.setState({
            themeMenuActive: false
        });
        this.unbindThemesMenuDocumentClickListener();
        event.preventDefault();
    }

    toggleMenu() {
        this.setState({
            mobileMenuActive: !this.state.mobileMenuActive
        }, () => {
            if (this.state.mobileMenuActive)
                this.bindMenuDocumentClickListener();
            else    
                this.unbindMenuDocumentClickListener();
        });
    }

    onMenuButtonClick() {
        this.toggleMenu();
    } 

    onMenuButtonKeyDown(event) {
        if (event.key === 'Enter') {
            this.toggleMenu();
        }
    }

    onSidebarClick(event) {
        if (event.target.nodeName === 'A') {
            this.setState({ mobileMenuActive: false});
        }
    }

    onThemesLinkClick() {
        this.setState({
            themeMenuActive: !this.state.themeMenuActive,
            themeMenuVisited: true
        }, () => {
            if (this.state.themeMenuActive)
                this.bindThemesMenuDocumentClickListener();
            else    
                this.unbindThemesMenuDocumentClickListener();
        });
    }

    onThemesLinkKeyDown(event) {
        if (event.key === 'Enter') {
            this.onThemesLinkClick();
        }
    }

    onThemeChangerKeyDown(event) {
        if (event.key === 'Enter') {
            event.target.click();
        }
    }

    onThemesMenuRouteChange() {
        this.setState({themeMenuActive: false}, () => {
            this.unbindThemesMenuDocumentClickListener();
        });
    }

    bindMenuDocumentClickListener() {
        if (!this.menuDocumentClickListener) {
            this.menuDocumentClickListener = (event) => {
                if (!this.isMenuButtonClicked(event) && !this.sidebar.contains(event.target)) {
                    this.setState({mobileMenuActive: false});
                    this.unbindMenuDocumentClickListener();
                }
            };

            document.addEventListener('click', this.menuDocumentClickListener);
        }
    }
    
    unbindMenuDocumentClickListener() {
        if (this.menuDocumentClickListener) {
            document.removeEventListener('click', this.menuDocumentClickListener);
            this.menuDocumentClickListener = null;
        }
    }

    isMenuButtonClicked(event) {
        return event.target === this.menuButton || this.menuButton.contains(event.target);
    }

    bindThemesMenuDocumentClickListener() {
        if (!this.themesMenuDocumentClickListener) {
            this.themesMenuDocumentClickListener = (event) => {
                if (this.themeMenu && event.target !== this.themeMenuLink && !this.themeMenu.contains(event.target)) {
                    this.setState({themeMenuActive: null});
                    this.unbindThemesMenuDocumentClickListener();
                }
            };

            document.addEventListener('click', this.themesMenuDocumentClickListener);
        }
    }
    
    unbindThemesMenuDocumentClickListener() {
        if (this.themesMenuDocumentClickListener) {
            document.removeEventListener('click', this.themesMenuDocumentClickListener);
            this.themesMenuDocumentClickListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindThemesMenuDocumentClickListener();
        this.unbindMenuDocumentClickListener();
    }

    render() {
        return (
            <div className="layout-wrapper">
                <div className="layout-topbar">
                    <span ref={el => this.menuButton = el} className="menu-button" tabIndex="0" onClick={this.onMenuButtonClick} onKeyDown={this.onMenuButtonKeyDown}>
                        <i className="pi pi-bars"></i>
                    </span>
                    <Link to="/" className="logo">
                        <img alt="logo" src="showcase/resources/images/primereact-logo.png" />
                    </Link>

                    <ul className="topbar-menu p-unselectable-text">
                        <li>
                            <Link to="/setup" > GET STARTED </Link>
                        </li>
   
                        <li ref={el => this.themeMenu = el} className="topbar-menu-themes">
                            {!this.state.themeMenuVisited && <i className="topbar-menu-badge"></i>}
                            <span ref={el => this.themeMenuLink = el} tabIndex="0" onClick={this.onThemesLinkClick} onKeyDown={this.onThemesLinkKeyDown}>THEMES</span>
                            <ul className={classNames({'active-top-menu': this.state.themeMenuActive})}>
                                <li className="topbar-submenu-header">THEMING</li>
                                <li><Link to="/theming" onClick={this.onThemesMenuRouteChange}><i className="pi pi-fw pi-file"/><span>Guide</span></Link></li>
                                <li><a href="https://www.primefaces.org/designer/primereact"><i className="pi pi-fw pi-cog" /><span>Designer</span></a></li>
                                <li><Link to="/icons" onClick={this.onThemesMenuRouteChange}><i className="pi pi-fw pi-search"/><span>Icons</span></Link></li>
                                <li className="topbar-submenu-header">PREMIUM TEMPLATES</li>
                                <li><a href="https://www.primefaces.org/layouts/serenity-react"><img src="showcase/resources/images/layouts/themeswitcher-serenity.png" alt="Serenity (Material)" /><span>Serenity</span><span className="theme-badge material">material</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/ultima-react"><img src="showcase/resources/images/layouts/themeswitcher-ultima.png" alt="Ultima (Material)" /><span>Ultima</span><span className="theme-badge material">material</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/avalon-react"><img src="showcase/resources/images/layouts/themeswitcher-avalon.png" alt="Avalon (Bootstrap)" /><span>Avalon</span><span className="theme-badge bootstrap">bootstrap</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/babylon-react"><img src="showcase/resources/images/layouts/themeswitcher-babylon.png" alt="Babylon" /><span>Babylon</span><span className="theme-badge new">new</span></a></li>
                                <li><a href="https://www.primefaces.org/layouts/apollo-react"><img src="showcase/resources/images/layouts/themeswitcher-apollo.png" alt="Apollo" /><span>Apollo</span></a></li>
                                <li className="topbar-submenu-header">FREE TEMPLATES</li>
                                <li><a href="https://www.primefaces.org/sigma-react"><img src="showcase/resources/images/layouts/themeswitcher-sigma.png" alt="Sigma" /><span>Sigma</span></a></li>
                                <li className="topbar-submenu-header">FREE THEMES</li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'nova-light', false)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" /><span>Nova Light</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'nova-dark', false)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" /><span>Nova Dark</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'nova-colored', false)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" /><span>Nova Colored</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'luna-amber', true)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" /><span>Luna Amber</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'luna-blue', true)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" /><span>Luna Blue</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'luna-green', true)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" /><span>Luna Green</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'luna-pink', true)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" /><span>Luna Pink</span></span></li>
                                <li><span tabIndex="0" onClick={e => this.changeTheme(e, 'rhea', false)} onKeyDown={this.onThemeChangerKeyDown}><img src="showcase/resources/images/layouts/themeswitcher-rhea.png" alt="Rhea" /><span>Rhea</span></span></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/support">SUPPORT</Link>
                        </li>
                    </ul>
                </div>

                <div id="layout-sidebar" ref={el => this.sidebar = el} className={classNames({'active': this.state.mobileMenuActive})} onClick={this.onSidebarClick}>
                    <AppMenu />
                </div>

                <div className={classNames({'layout-mask': this.state.mobileMenuActive})}></div>

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
                    <Route path="/growl" component={GrowlDemo} />
                    <Route path="/flexgrid" component={FlexGridDemo} />
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
                    <Route path="/combochart" component={ComboChartDemo} />
                    <Route path="/piechart" component={PieChartDemo} />
                    <Route path="/doughnutchart" component={DoughnutChartDemo} />
                    <Route path="/linechart" component={LineChartDemo} />
                    <Route path="/barchart" component={BarChartDemo} />
                    <Route path="/polarareachart" component={PolarAreaChartDemo} />
                    <Route path="/radarchart" component={RadarChartDemo} />
                    <Route path="/paginator" component={PaginatorDemo} />
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
                    <Route path="/datatable/state" component={DataTableStateDemo} />
                    <Route path="/orderlist" component={OrderListDemo} />
                    <Route path="/picklist" component={PickListDemo} />
                    <Route path="/fullcalendar" component={FullCalendarDemo} />
                    <Route exact path="/tree" component={TreeDemo} />
                    <Route path="/tree/selection" component={TreeSelectionDemo} />
                    <Route path="/tree/events" component={TreeEventsDemo} />
                    <Route path="/tree/lazy" component={TreeLazyDemo} />
                    <Route path="/tree/templating" component={TreeTemplatingDemo} />
                    <Route path="/tree/dragdrop" component={TreeDragDropDemo} />
                    <Route path="/tree/contextmenu" component={TreeContextMenuDemo} />
                    <Route path="/tree/filter" component={TreeFilterDemo} />
                    <Route exact path="/treetable" component={TreeTableDemo} />
                    <Route path="/treetable/templating" component={TreeTableTemplatingDemo} />
                    <Route path="/treetable/page" component={TreeTablePageDemo} />
                    <Route path="/treetable/sort" component={TreeTableSortDemo} />
                    <Route path="/treetable/selection" component={TreeTableSelectionDemo} />
                    <Route path="/treetable/colgroup" component={TreeTableColGroupDemo} />
                    <Route path="/treetable/lazy" component={TreeTableLazyDemo} />
                    <Route path="/treetable/edit" component={TreeTableEditDemo} />
                    <Route path="/treetable/scroll" component={TreeTableScrollDemo} />
                    <Route path="/treetable/resize" component={TreeTableColResizeDemo} />
                    <Route path="/treetable/reorder" component={TreeTableColReorderDemo} />
                    <Route path="/treetable/toggle" component={TreeTableColTogglerDemo} />
                    <Route path="/treetable/style" component={TreeTableStyleDemo} />
                    <Route path="/treetable/contextmenu" component={TreeTableContextMenuDemo} />
                    <Route path="/treetable/responsive" component={TreeTableResponsiveDemo} />
                    <Route path="/treetable/filter" component={TreeTableFilterDemo} />
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
                    <Route path="/deferredcontent" component={DeferredContentDemo}/>

                    <div className="content-section layout-footer clearfix">
                        <span>PrimeReact {this.version} by <a href="http://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeTek</a></span>
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

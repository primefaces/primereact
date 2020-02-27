import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import { AccordionDemo } from './showcase/accordion/AccordionDemo';
import { AutoCompleteDemo } from './showcase/autocomplete/AutoCompleteDemo';
import { ButtonDemo } from './showcase/button/ButtonDemo';
import { CarouselDemo } from './showcase/carousel/CarouselDemo';
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
import { DataTableBasicDemo } from './showcase/datatable/DataTableBasicDemo';
import { DataTableDynamicDemo } from './showcase/datatable/DataTableDynamicDemo';
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
import { GalleriaDemo } from './showcase/galleria/GalleriaDemo';
import { GalleriaBasicDemo } from './showcase/galleria/GalleriaBasicDemo';
import { GalleriaCaptionDemo } from './showcase/galleria/GalleriaCaptionDemo';
import { GalleriaIndicatorDemo } from './showcase/galleria/GalleriaIndicatorDemo';
import { GalleriaCircularDemo } from './showcase/galleria/GalleriaCircularDemo';
import { GalleriaResponsiveDemo } from './showcase/galleria/GalleriaResponsiveDemo';
import { GalleriaThumbnailDemo } from './showcase/galleria/GalleriaThumbnailDemo';
import { GalleriaPreviewDemo } from './showcase/galleria/GalleriaPreviewDemo';
import { GalleriaFullScreenDemo } from './showcase/galleria/GalleriaFullScreenDemo';

class AppRouter extends Component {

    addPagePath(path) {
        window['gtag']('config', 'UA-93461466-1', {
            'page_path': '/primereact' + path
        });
    }

    componentDidMount() {
        this.addPagePath(this.props.location.pathname);

        this.unlisten = this.props.history.listen((location) => {
            if (this.props.location.pathname !== location.pathname) {
                this.addPagePath(location.pathname);
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <React.Fragment>
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
                <Route path="/carousel" component={CarouselDemo} />
                <Route path="/chartdemo" component={ChartDemo} />
                <Route path="/combochart" component={ComboChartDemo} />
                <Route path="/piechart" component={PieChartDemo} />
                <Route path="/doughnutchart" component={DoughnutChartDemo} />
                <Route path="/linechart" component={LineChartDemo} />
                <Route path="/barchart" component={BarChartDemo} />
                <Route path="/polarareachart" component={PolarAreaChartDemo} />
                <Route path="/radarchart" component={RadarChartDemo} />
                <Route path="/paginator" component={PaginatorDemo} />
                <Route exact path="/galleria" component={GalleriaDemo} />
                <Route path="/galleria/basic" component={GalleriaBasicDemo} />
                <Route path="/galleria/caption" component={GalleriaCaptionDemo} />
                <Route path="/galleria/indicator" component={GalleriaIndicatorDemo} />
                <Route path="/galleria/circular" component={GalleriaCircularDemo} />
                <Route path="/galleria/responsive" component={GalleriaResponsiveDemo} />
                <Route path="/galleria/thumbnail" component={GalleriaThumbnailDemo} />
                <Route path="/galleria/preview" component={GalleriaPreviewDemo} />
                <Route path="/galleria/fullscreen" component={GalleriaFullScreenDemo} />
                <Route exact path="/datatable" component={DataTableDemo} />
                <Route path="/datatable/basic" component={DataTableBasicDemo} />
                <Route path="/datatable/dynamiccolumns" component={DataTableDynamicDemo} />
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
                <Route path="/card" component={CardDemo} />
                <Route path="/keyfilter" component={KeyFilterDemo} />
                <Route path="/dataview" component={DataViewDemo} />
                <Route path="/inplace" component={InplaceDemo} />
                <Route path="/deferredcontent" component={DeferredContentDemo} />
            </React.Fragment>
        );
    }
}

export default withRouter(AppRouter);

import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/datatable/accessibilitydoc';
import { BasicDoc } from '../../components/doc/datatable/basicdoc';
import { DisabledCellSelectionDoc } from '../../components/doc/datatable/cellselection/disableddoc';
import { CellSelectEventsDoc } from '../../components/doc/datatable/cellselection/eventsdoc';
import { MultipleCellsSelectionDoc } from '../../components/doc/datatable/cellselection/multipledoc';
import { SingleCellSelectionDoc } from '../../components/doc/datatable/cellselection/singledoc';
import { ColGroupDoc } from '../../components/doc/datatable/colgroupdoc';
import { ChooseResizableColumnsDoc } from '../../components/doc/datatable/colresize/chooseresizablecolumnsdoc';
import { ExpandModeDoc } from '../../components/doc/datatable/colresize/expandmodedoc';
import { FitModeDoc } from '../../components/doc/datatable/colresize/fitmodedoc';
import { ColToggleDoc } from '../../components/doc/datatable/coltoggledoc';
import { ContextMenuDoc } from '../../components/doc/datatable/contextmenudoc';
import { DatatableProductsDoc } from '../../components/doc/datatable/datatableproducts';
import { DynamicColumnsDoc } from '../../components/doc/datatable/dynamiccolumnsdoc';
import { CellEditDoc } from '../../components/doc/datatable/edit/celleditdoc';
import { RowEditDoc } from '../../components/doc/datatable/edit/roweditdoc';
import { ExportDoc } from '../../components/doc/datatable/export/exportdoc';
import { ExportImportDoc } from '../../components/doc/datatable/export/importdoc';
import { AdvancedFilterDoc } from '../../components/doc/datatable/filter/advanceddoc';
import { BasicFilterDoc } from '../../components/doc/datatable/filter/basicdoc';
import { FlexScrollDoc } from '../../components/doc/datatable/flexscrolldoc';
import { GridLinesDoc } from '../../components/doc/datatable/gridlinesdoc';
import { ImportDoc } from '../../components/doc/datatable/importdoc';
import { LazyDoc } from '../../components/doc/datatable/lazydoc';
import { PaginatorBasicDoc } from '../../components/doc/datatable/paginator/basicdoc';
import { PaginatorTemplateDoc } from '../../components/doc/datatable/paginator/templatedoc';
import { ReorderDoc } from '../../components/doc/datatable/reorderdoc';
import { ResponsiveDoc } from '../../components/doc/datatable/responsivedoc';
import { RowExpandDoc } from '../../components/doc/datatable/rowexpanddoc';
import { ExpandableRowGroupsDoc } from '../../components/doc/datatable/rowgroup/expandablerowgroupsdoc';
import { RowSpanGroupingDoc } from '../../components/doc/datatable/rowgroup/rowspangroupingdoc';
import { SubHeaderGroupingDoc } from '../../components/doc/datatable/rowgroup/subheadergroupingdoc';
import { CheckboxRowSelectionDoc } from '../../components/doc/datatable/rowselection/checkboxdoc';
import { DisabledRowSelectionDoc } from '../../components/doc/datatable/rowselection/disableddoc';
import { RowSelectEventsDoc } from '../../components/doc/datatable/rowselection/eventsdoc';
import { MultipleRowsSelectionDoc } from '../../components/doc/datatable/rowselection/multipledoc';
import { RadioButtonRowSelectionDoc } from '../../components/doc/datatable/rowselection/radiobuttondoc';
import { SingleRowSelectionDoc } from '../../components/doc/datatable/rowselection/singledoc';
import { CustomersDoc } from '../../components/doc/datatable/samplesdoc';
import { ScrollFlexibleDoc } from '../../components/doc/datatable/scroll/flexibledoc';
import { ScrollFrozenColumnsDoc } from '../../components/doc/datatable/scroll/frozencolumnsdoc';
import { ScrollFrozenRowsDoc } from '../../components/doc/datatable/scroll/frozenrowsdoc';
import { ScrollHorizontalAndVerticalWithFooterDoc } from '../../components/doc/datatable/scroll/horizontalandverticalwithfooterdoc';
import { ScrollSubHeaderGroupingDoc } from '../../components/doc/datatable/scroll/subheadergroupingdoc';
import { ScrollVerticalDoc } from '../../components/doc/datatable/scroll/verticaldoc';
import { SizeDoc } from '../../components/doc/datatable/sizedoc';
import { MultipleColumnsDoc } from '../../components/doc/datatable/sort/multiplecolumnsdoc';
import { PresortDoc } from '../../components/doc/datatable/sort/presortdoc';
import { RemovableSortDoc } from '../../components/doc/datatable/sort/removablesortdoc';
import { SingleColumnDoc } from '../../components/doc/datatable/sort/singlecolumndoc';
import { CustomStorageDoc } from '../../components/doc/datatable/state/customstoragedoc';
import { LocalStorageDoc } from '../../components/doc/datatable/state/localdoc';
import { SessionStorageDoc } from '../../components/doc/datatable/state/sessionstoragedoc';
import { StripedRowsDoc } from '../../components/doc/datatable/stripedrowsdoc';
import { StyledDataTableDoc } from '../../components/doc/datatable/styleddatatabledoc';
import { StyleDoc } from '../../components/doc/datatable/styledoc';
import { TemplateDoc } from '../../components/doc/datatable/templatedoc';
import { LazyLoadingFromRemoteDataSourceDoc } from '../../components/doc/datatable/virtualscroll/lazyloadfromremotedatadoc';
import { PreloadedDataDoc } from '../../components/doc/datatable/virtualscroll/preloadeddatadoc';

const DataTableDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'dynamic_columns',
            label: 'Dynamic Columns',
            component: DynamicColumnsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'gridlines',
            label: 'Grid Lines',
            component: GridLinesDoc
        },
        {
            id: 'striped',
            label: 'Striped Rows',
            component: StripedRowsDoc
        },
        {
            id: 'paginator',
            label: 'Paginator',
            children: [
                {
                    id: 'paginator_basic',
                    label: 'Basic',
                    component: PaginatorBasicDoc
                },
                {
                    id: 'paginator_template',
                    label: 'Template',
                    component: PaginatorTemplateDoc
                }
            ]
        },
        {
            id: 'sort',
            label: 'Sort',
            children: [
                {
                    id: 'single_sort',
                    label: 'Single Column',
                    component: SingleColumnDoc
                },
                {
                    id: 'multiple_sort',
                    label: 'Multiple Columns',
                    component: MultipleColumnsDoc
                },
                {
                    id: 'pre_sort',
                    label: 'Presort',
                    component: PresortDoc
                },
                {
                    id: 'removable_sort',
                    label: 'Removable',
                    component: RemovableSortDoc
                }
            ]
        },
        {
            id: 'filter',
            label: 'Filter',
            children: [
                {
                    id: 'basic_filter',
                    label: 'Basic',
                    component: BasicFilterDoc
                },
                {
                    id: 'advanced_filter',
                    label: 'Advanced',
                    component: AdvancedFilterDoc
                }
            ]
        },
        {
            id: 'row_selection',
            label: 'Row Selection',
            children: [
                {
                    id: 'single_row_selection',
                    label: 'Single',
                    component: SingleRowSelectionDoc
                },
                {
                    id: 'multiple_rows_selection',
                    label: 'Multiple',
                    component: MultipleRowsSelectionDoc
                },
                {
                    id: 'radiobutton_row_selection',
                    label: 'RadioButton',
                    component: RadioButtonRowSelectionDoc
                },
                {
                    id: 'checkbox_row_selection',
                    label: 'Checkbox',
                    component: CheckboxRowSelectionDoc
                },
                {
                    id: 'row_selection_events',
                    label: 'Events',
                    component: RowSelectEventsDoc
                },
                {
                    id: 'disabled_row_selection',
                    label: 'Disabled',
                    component: DisabledRowSelectionDoc
                }
            ]
        },
        {
            id: 'cell_selection',
            label: 'Cell Selection',
            children: [
                {
                    id: 'single_cell_selection',
                    label: 'Single',
                    component: SingleCellSelectionDoc
                },
                {
                    id: 'multiple_cells_selection',
                    label: 'Multiple',
                    component: MultipleCellsSelectionDoc
                },
                {
                    id: 'cell_selection_events',
                    label: 'Events',
                    component: CellSelectEventsDoc
                },
                {
                    id: 'disabled_cells_selection',
                    label: 'Disabled',
                    component: DisabledCellSelectionDoc
                }
            ]
        },
        {
            id: 'edit',
            label: 'Edit',
            children: [
                {
                    id: 'cell_edit',
                    label: 'Cell',
                    component: CellEditDoc
                },
                {
                    id: 'row_edit',
                    label: 'Row',
                    component: RowEditDoc
                }
            ]
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'scroll',
            label: 'Scroll',
            description: 'Data scrolling with fixed header is available horizontally, vertically or both. Certain columns and rows can be frozen as well.',
            children: [
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: ScrollVerticalDoc
                },
                {
                    id: 'scrollflexible',
                    label: 'Flexible',
                    component: ScrollFlexibleDoc
                },
                {
                    id: 'scrollhorizontalandverticalwithfooter',
                    label: 'Horizontal and Vertical with Footer',
                    component: ScrollHorizontalAndVerticalWithFooterDoc
                },
                {
                    id: 'scrollfrozenrows',
                    label: 'Frozen Rows',
                    component: ScrollFrozenRowsDoc
                },
                {
                    id: 'scrollfrozencolumns',
                    label: 'Frozen Columns',
                    component: ScrollFrozenColumnsDoc
                },
                {
                    id: 'scrollsubheadergrouping',
                    label: 'SubHeader Grouping',
                    component: ScrollSubHeaderGroupingDoc
                }
            ]
        },
        {
            id: 'flexscroll',
            label: 'Flex Scroll',
            component: FlexScrollDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            description: 'VirtualScroller is a performant approach to handle huge data efficiently.',
            children: [
                {
                    id: 'preload',
                    label: 'Preloaded Data (100000 Rows)',
                    component: PreloadedDataDoc
                },
                {
                    id: 'lazyloading',
                    label: 'Lazy Loading from a Remote Datasource (100000 Rows)',
                    component: LazyLoadingFromRemoteDataSourceDoc
                }
            ]
        },
        {
            id: 'colgroup',
            label: 'ColGroup',
            component: ColGroupDoc
        },
        {
            id: 'rowgroup',
            label: 'RowGroup',
            description: 'Rows can either be grouped by a separate grouping row or using rowspan.',
            children: [
                {
                    id: 'subheadergrouping',
                    label: 'Subheader Grouping',
                    component: SubHeaderGroupingDoc
                },
                {
                    id: 'expandablerowgroups',
                    label: 'Expandable Row Groups',
                    component: ExpandableRowGroupsDoc
                },
                {
                    id: 'rowspangrouping',
                    label: 'RowSpan Grouping',
                    component: RowSpanGroupingDoc
                }
            ]
        },
        {
            id: 'rowexpand',
            label: 'Expand',
            component: RowExpandDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'styleddatatable',
            label: 'Styled DataTable',
            component: StyledDataTableDoc
        },
        {
            id: 'colresize',
            label: 'ColResize',
            description:
                'Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. In "expand" mode, table width also changes along with the column width. onColumnResize is a callback that passes the resized column header as a parameter.',
            children: [
                {
                    id: 'fitmode',
                    label: 'Fit Mode',
                    component: FitModeDoc
                },
                {
                    id: 'expandmode',
                    label: 'Expand Mode',
                    component: ExpandModeDoc
                },
                {
                    id: 'chooseresizablecolumns',
                    label: 'Choose Resizable Columns',
                    component: ChooseResizableColumnsDoc
                }
            ]
        },
        {
            id: 'reorder',
            label: 'Reorder',
            component: ReorderDoc
        },
        {
            id: 'coltoggle',
            label: 'ColToggle',
            component: ColToggleDoc
        },
        {
            id: 'datatableexport',
            label: 'Import/Export',
            description: 'DataTable can export its data to various formats',
            children: [
                {
                    id: 'importdoc',
                    label: 'Import',
                    component: ExportImportDoc
                },
                {
                    id: 'export',
                    label: 'Export',
                    component: ExportDoc
                }
            ]
        },
        {
            id: 'contextmenu',
            label: 'Context Menu',
            component: ContextMenuDoc
        },
        {
            id: 'state',
            label: 'State',
            description: 'Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using its last settings.',
            children: [
                {
                    id: 'sessionstorage',
                    label: 'Session Storage',
                    component: SessionStorageDoc
                },
                {
                    id: 'localstorage',
                    label: 'Local Storage',
                    component: LocalStorageDoc
                },
                {
                    id: 'customstorage',
                    label: 'Custom Storage',
                    component: CustomStorageDoc
                }
            ]
        },
        {
            id: 'samples',
            label: 'Samples',
            children: [
                {
                    id: 'customers',
                    label: 'Customers',
                    component: CustomersDoc
                },
                {
                    id: 'dtproducts',
                    label: 'Products',
                    component: DatatableProductsDoc
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React Table Component" header="DataTable" description="DataTable displays data in tabular format." componentDocs={docs} apiDocs={['DataTable', 'Column', 'Row', 'ColumnGroup']} />;
};

export default DataTableDemo;

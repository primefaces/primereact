import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/datatable/apidoc';
import { BasicDoc } from '../../components/doc/datatable/basicdoc';
import { ColGroupDoc } from '../../components/doc/datatable/colgroupdoc';
import { ChooseResizableColumnsDoc } from '../../components/doc/datatable/colresize/chooseresizablecolumnsdoc';
import { ExpandModeDoc } from '../../components/doc/datatable/colresize/expandmodedoc';
import { FitModeDoc } from '../../components/doc/datatable/colresize/fitmodedoc';
import { ColToggleDoc } from '../../components/doc/datatable/coltoggledoc';
import { ContextMenuDoc } from '../../components/doc/datatable/contextmenudoc';
import { CrudDoc } from '../../components/doc/datatable/cruddoc';
import { DynamicDoc } from '../../components/doc/datatable/dynamiccolumnsdoc';
import { CellEditingDoc } from '../../components/doc/datatable/edit/celleditingdoc';
import { CellEditWithSortAndFilterDoc } from '../../components/doc/datatable/edit/celleditwithsortandfilterdoc';
import { ProgrammaticDoc } from '../../components/doc/datatable/edit/programmaticdoc';
import { RowEditingDoc } from '../../components/doc/datatable/edit/roweditingdoc';
import { ExportDoc } from '../../components/doc/datatable/export/exportdoc';
import { ExportImportDoc } from '../../components/doc/datatable/export/importdoc';
import { FilterMenuDoc } from '../../components/doc/datatable/filter/filtermenudoc';
import { FilterRowDoc } from '../../components/doc/datatable/filter/filterrowdoc';
import { FlexScrollDoc } from '../../components/doc/datatable/flexscrolldoc';
import { GridLinesDoc } from '../../components/doc/datatable/gridlinesdoc';
import { ImportDoc } from '../../components/doc/datatable/importdoc';
import { LazyDoc } from '../../components/doc/datatable/lazydoc';
import { PaginatorBasicDoc } from '../../components/doc/datatable/paginator/basicdoc';
import { CustomPaginatorTemplateDoc } from '../../components/doc/datatable/paginator/custompaginatortemplatedoc';
import { ReorderDoc } from '../../components/doc/datatable/reorderdoc';
import { ScrollDoc } from '../../components/doc/datatable/responsive/scrolldoc';
import { StackDoc } from '../../components/doc/datatable/responsive/stackdoc';
import { RowExpandDoc } from '../../components/doc/datatable/rowexpanddoc';
import { ExpandableRowGroupsDoc } from '../../components/doc/datatable/rowgroup/expandablerowgroupsdoc';
import { RowSpanGroupingDoc } from '../../components/doc/datatable/rowgroup/rowspangroupingdoc';
import { SubHeaderGroupingDoc } from '../../components/doc/datatable/rowgroup/subheadergroupingdoc';
import { ScrollFlexibleDoc } from '../../components/doc/datatable/scroll/flexibledoc';
import { ScrollFrozenColumnsDoc } from '../../components/doc/datatable/scroll/frozencolumnsdoc';
import { ScrollFrozenRowsDoc } from '../../components/doc/datatable/scroll/frozenrowsdoc';
import { ScrollHorizontalAndVerticalWithFooterDoc } from '../../components/doc/datatable/scroll/horizontalandverticalwithfooterdoc';
import { ScrollSubHeaderGroupingDoc } from '../../components/doc/datatable/scroll/subheadergroupingdoc';
import { ScrollVerticalDoc } from '../../components/doc/datatable/scroll/verticaldoc';
import { CheckboxDoc } from '../../components/doc/datatable/selection/checkboxdoc';
import { ControlledSelectionDoc } from '../../components/doc/datatable/selection/controlledselectiondoc';
import { EventsDoc } from '../../components/doc/datatable/selection/eventsdoc';
import { MultipleDoc } from '../../components/doc/datatable/selection/multipledoc';
import { RadioButtonDoc } from '../../components/doc/datatable/selection/radiobuttondoc';
import { SingleDoc } from '../../components/doc/datatable/selection/singledoc';
import { LargeTableDoc } from '../../components/doc/datatable/size/largetabledoc';
import { NormalTableDoc } from '../../components/doc/datatable/size/normaltabledoc';
import { SmallTableDoc } from '../../components/doc/datatable/size/smalltabledoc';
import { MultipleColumnsDoc } from '../../components/doc/datatable/sort/multiplecolumnsdoc';
import { PresortDoc } from '../../components/doc/datatable/sort/presortdoc';
import { RemovableSortDoc } from '../../components/doc/datatable/sort/removablesortdoc';
import { SingleColumnDoc } from '../../components/doc/datatable/sort/singlecolumndoc';
import { SortableDisabledDoc } from '../../components/doc/datatable/sort/sortabledisableddoc';
import { CustomStorageDoc } from '../../components/doc/datatable/state/customstoragedoc';
import { LocalStorageDoc } from '../../components/doc/datatable/state/localdoc';
import { SessionStorageDoc } from '../../components/doc/datatable/state/sessionstoragedoc';
import { StripedDoc } from '../../components/doc/datatable/stripeddoc';
import { StyleDoc } from '../../components/doc/datatable/styledoc';
import { TemplatingDoc } from '../../components/doc/datatable/templatingdoc';
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
            id: 'dynamiccolsdoc',
            label: 'Dynamic Columns',
            component: DynamicDoc
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
        },
        {
            id: 'size',
            label: 'Size',
            description: 'In addition to a regular table, alternatives with alternative sizes are available.',
            options: [
                {
                    id: 'smalltable',
                    label: 'Small Table',
                    component: SmallTableDoc
                },
                {
                    id: 'normaltable',
                    label: 'Normal Table',
                    component: NormalTableDoc
                },
                {
                    id: 'largetable',
                    label: 'Large Table',
                    component: LargeTableDoc
                }
            ]
        },
        {
            id: 'gridlines',
            label: 'GridLines',
            component: GridLinesDoc
        },
        {
            id: 'striped',
            label: 'Striped',
            component: StripedDoc
        },
        {
            id: 'Sort',
            label: 'Sort',
            description: 'Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.',
            children: [
                {
                    id: 'singlecolumn',
                    label: 'Single Column',
                    component: SingleColumnDoc
                },
                {
                    id: 'multiplecolumns',
                    label: 'Multiple Columns',
                    component: MultipleColumnsDoc
                },
                {
                    id: 'presort',
                    label: 'Presort',
                    component: PresortDoc
                },
                {
                    id: 'removablesort',
                    label: 'Removable Sort',
                    component: RemovableSortDoc
                },
                {
                    id: 'sortabledisabled',
                    label: 'Sortable Disabled',
                    component: SortableDisabledDoc
                }
            ]
        },
        {
            id: 'paginator',
            label: 'Paginator',
            description: 'Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.',
            children: [
                {
                    id: 'sortbasic',
                    label: 'Basic',
                    component: PaginatorBasicDoc
                },
                {
                    id: 'custompaginatortemplate',
                    label: 'Custom Paginator Template',
                    component: CustomPaginatorTemplateDoc
                }
            ]
        },
        {
            id: 'filter',
            label: 'Filter',
            description: 'Filtering feature provides advanced and flexible options to query the data.',
            children: [
                {
                    id: 'filtermenu',
                    label: 'Filter Menu',
                    component: FilterMenuDoc
                },
                {
                    id: 'filterrow',
                    label: 'Filter Row',
                    component: FilterRowDoc
                }
            ]
        },
        {
            id: 'selection',
            label: 'Selection',
            description:
                'DataTable provides single, multiple, radiobutton and checkbox selection modes. Selected rows or cells are bound to the selection property and onRowSelect-onRowUnselect/onCellSelect-onCellUnselect events are provided as optional callbacks. In addition built-in radio button and checkbox based selections are available as alternatives.',
            children: [
                {
                    id: 'singleselection',
                    label: 'Single',
                    component: SingleDoc
                },
                {
                    id: 'multipleselection',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'eventsselection',
                    label: 'Events',
                    component: EventsDoc
                },
                {
                    id: 'radiobuttonselection',
                    label: 'RadioButton',
                    component: RadioButtonDoc
                },
                {
                    id: 'checkboxselection',
                    label: 'Checkbox',
                    component: CheckboxDoc
                },
                {
                    id: 'controlledselectiondoc',
                    label: 'Controlled Selection',
                    component: ControlledSelectionDoc
                }
            ]
        },
        {
            id: 'edit',
            label: 'Edit',
            description: 'Cell and Row editing provides a rapid and user friendly way to manipulate data.',
            children: [
                {
                    id: 'cellediting',
                    label: 'Cell Editing',
                    component: CellEditingDoc
                },
                {
                    id: 'rowediting',
                    label: 'Row Editing',
                    component: RowEditingDoc
                },
                {
                    id: 'rowediting',
                    label: 'Programmatic',
                    component: ProgrammaticDoc
                },
                {
                    id: 'celleditwithsortandfilterDoc',
                    label: 'Cell Editing with Sorting and Filter',
                    component: CellEditWithSortAndFilterDoc
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
            description: 'DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens and second one is defining a breakpoint to display the cells of a row as stacked.',
            options: [
                {
                    id: 'scroll',
                    label: 'Scroll',
                    component: ScrollDoc
                },
                {
                    id: 'stack',
                    label: 'Stack',
                    component: StackDoc
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
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
            id: 'export',
            label: 'Import/Export',
            description: 'DataTable can export its data to various formats',
            children: [
                {
                    id: 'import',
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
            id: 'crud',
            label: 'Crud',
            component: CrudDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Table Component</title>
                <meta name="description" content="DataTable displays data in tabular format" />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable</h1>
                    <p>DataTable displays data in tabular format.</p>
                </div>

                <DocActions github="datatable/index.js" />
            </div>

            <div className="content-section doc datatable-doc-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DataTableDemo;

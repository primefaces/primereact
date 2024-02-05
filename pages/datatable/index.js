import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/datatable/accessibilitydoc';
import { BasicDoc } from '@/components/doc/datatable/basicdoc';
import { DisabledCellSelectionDoc } from '@/components/doc/datatable/cellselection/disableddoc';
import { CellSelectEventsDoc } from '@/components/doc/datatable/cellselection/eventsdoc';
import { MultipleCellsSelectionDoc } from '@/components/doc/datatable/cellselection/multipledoc';
import { SingleCellSelectionDoc } from '@/components/doc/datatable/cellselection/singledoc';
import { ExpandModeDoc } from '@/components/doc/datatable/colresize/expandmodedoc';
import { FitModeDoc } from '@/components/doc/datatable/colresize/fitmodedoc';
import { ColumnGroupDoc } from '@/components/doc/datatable/columngroupdoc';
import { ColumnToggleDoc } from '@/components/doc/datatable/columntoggledoc';
import { ConditionalStyleDoc } from '@/components/doc/datatable/conditionalstyledoc';
import { ContextMenuDoc } from '@/components/doc/datatable/contextmenudoc';
import { DynamicColumnsDoc } from '@/components/doc/datatable/dynamiccolumnsdoc';
import { CellEditDoc } from '@/components/doc/datatable/edit/celleditdoc';
import { RowEditDoc } from '@/components/doc/datatable/edit/roweditdoc';
import { ExportDoc } from '@/components/doc/datatable/exportdoc';
import { AdvancedFilterDoc } from '@/components/doc/datatable/filter/advanceddoc';
import { BasicFilterDoc } from '@/components/doc/datatable/filter/basicdoc';
import { CustomFilterDoc } from '@/components/doc/datatable/filter/customdoc';
import { GridLinesDoc } from '@/components/doc/datatable/gridlinesdoc';
import { ImportDoc } from '@/components/doc/datatable/importdoc';
import { LazyLoadDoc } from '@/components/doc/datatable/lazyloaddoc';
import { PaginatorBasicDoc } from '@/components/doc/datatable/paginator/basicdoc';
import { PaginatorTemplateDoc } from '@/components/doc/datatable/paginator/templatedoc';
import { PTDoc } from '@/components/doc/datatable/pt/ptdoc';
import { Wireframe } from '@/components/doc/datatable/pt/wireframe';
import { ReorderDoc } from '@/components/doc/datatable/reorderdoc';
import { RowExpansionDoc } from '@/components/doc/datatable/rowexpansiondoc';
import { ExpandableRowGroupDoc } from '@/components/doc/datatable/rowgroup/expandabledoc';
import { RowSpanRowGroupDoc } from '@/components/doc/datatable/rowgroup/rowspandoc';
import { SubHeaderRowGroupDoc } from '@/components/doc/datatable/rowgroup/subheaderdoc';
import { CheckboxRowSelectionDoc } from '@/components/doc/datatable/rowselection/checkboxdoc';
import { DisabledRowSelectionDoc } from '@/components/doc/datatable/rowselection/disableddoc';
import { RowSelectEventsDoc } from '@/components/doc/datatable/rowselection/eventsdoc';
import { MultipleRowsSelectionDoc } from '@/components/doc/datatable/rowselection/multipledoc';
import { RadioButtonRowSelectionDoc } from '@/components/doc/datatable/rowselection/radiobuttondoc';
import { SingleRowSelectionDoc } from '@/components/doc/datatable/rowselection/singledoc';
import { CustomersDoc } from '@/components/doc/datatable/samples/customersdoc';
import { ProductsDoc } from '@/components/doc/datatable/samples/productsdoc';
import { FlexibleScrollDoc } from '@/components/doc/datatable/scroll/flexibledoc';
import { FrozenColumnsDoc } from '@/components/doc/datatable/scroll/frozencolumnsdoc';
import { FrozenRowsDoc } from '@/components/doc/datatable/scroll/frozenrowsdoc';
import { HorizontalScrollDoc } from '@/components/doc/datatable/scroll/horizontaldoc';
import { VerticalScrollDoc } from '@/components/doc/datatable/scroll/verticaldoc';
import { SizeDoc } from '@/components/doc/datatable/sizedoc';
import { MultipleColumnsDoc } from '@/components/doc/datatable/sort/multiplecolumnsdoc';
import { PresortDoc } from '@/components/doc/datatable/sort/presortdoc';
import { RemovableSortDoc } from '@/components/doc/datatable/sort/removablesortdoc';
import { SingleColumnDoc } from '@/components/doc/datatable/sort/singlecolumndoc';
import { StatefulDoc } from '@/components/doc/datatable/statefuldoc';
import { StripedRowsDoc } from '@/components/doc/datatable/stripedrowsdoc';
import { TemplateDoc } from '@/components/doc/datatable/templatedoc';
import { StyledDoc } from '@/components/doc/datatable/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/datatable/theming/tailwinddoc';
import { LazyVirtualScrollDoc } from '@/components/doc/datatable/virtualscroll/lazydoc';
import { PreloadVirtualScrollDoc } from '@/components/doc/datatable/virtualscroll/preloaddoc';

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
                },
                {
                    id: 'custom_filter',
                    label: 'Custom',
                    component: CustomFilterDoc
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
            id: 'row_expansion',
            label: 'Row Expansion',
            component: RowExpansionDoc
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
            id: 'lazy_load',
            label: 'Lazy Load',
            component: LazyLoadDoc
        },
        {
            id: 'scroll',
            label: 'Scroll',
            children: [
                {
                    id: 'vertical_scroll',
                    label: 'Vertical',
                    component: VerticalScrollDoc
                },
                {
                    id: 'flex_scroll',
                    label: 'Flexible',
                    component: FlexibleScrollDoc
                },
                {
                    id: 'horizontal_scroll',
                    label: 'Horizontal',
                    component: HorizontalScrollDoc
                },
                {
                    id: 'frozen_rows',
                    label: 'Frozen Rows',
                    component: FrozenRowsDoc
                },
                {
                    id: 'frozen_columns',
                    label: 'Frozen Columns',
                    component: FrozenColumnsDoc
                }
            ]
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            children: [
                {
                    id: 'preload_virtualscroll',
                    label: 'Preload',
                    component: PreloadVirtualScrollDoc
                },
                {
                    id: 'lazy_virtualscroll',
                    label: 'Lazy',
                    component: LazyVirtualScrollDoc
                }
            ]
        },
        {
            id: 'column_group',
            label: 'Column Group',
            component: ColumnGroupDoc
        },
        {
            id: 'row_group',
            label: 'Row Group',
            children: [
                {
                    id: 'rowgroup_subheader',
                    label: 'Subheader',
                    component: SubHeaderRowGroupDoc
                },
                {
                    id: 'rowgroup_expandable',
                    label: 'Expandable',
                    component: ExpandableRowGroupDoc
                },
                {
                    id: 'rowgroup_rowspan',
                    label: 'RowSpan',
                    component: RowSpanRowGroupDoc
                }
            ]
        },
        {
            id: 'conditional_style',
            label: 'Conditional Style',
            component: ConditionalStyleDoc
        },
        {
            id: 'column_resize',
            label: 'Column Resize',
            children: [
                {
                    id: 'resize_fitmode',
                    label: 'Fit Mode',
                    component: FitModeDoc
                },
                {
                    id: 'resize_expandmode',
                    label: 'Expand Mode',
                    component: ExpandModeDoc
                }
            ]
        },
        {
            id: 'reorder',
            label: 'Reorder',
            component: ReorderDoc
        },
        {
            id: 'column_toggle',
            label: 'Column Toggle',
            component: ColumnToggleDoc
        },
        {
            id: 'export',
            label: 'Export',
            component: ExportDoc
        },
        {
            id: 'contextmenu',
            label: 'Context Menu',
            component: ContextMenuDoc
        },
        {
            id: 'stateful',
            label: 'Stateful',
            component: StatefulDoc
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
                    component: ProductsDoc
                }
            ]
        },

        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.datatable.options',
            label: 'DataTable PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.column.options',
            label: 'Column PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.columngroup.options',
            label: 'ColumnGroup PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.row.options',
            label: 'Row PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent title="React Table Component" header="DataTable" description="DataTable displays data in tabular format." componentDocs={docs} apiDocs={['DataTable', 'Column', 'Row', 'ColumnGroup']} ptDocs={ptDocs} themingDocs={themingDocs} />
    );
};

export default DataTableDemo;

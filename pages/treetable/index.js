import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/treetable/accessibilitydoc';
import { BasicDoc } from '@/components/doc/treetable/basicdoc';
import { ColumnGroupDoc } from '@/components/doc/treetable/columngroupdoc';
import { ColumnToggleDoc } from '@/components/doc/treetable/columntoggledoc';
import { ConditionalStyleDoc } from '@/components/doc/treetable/conditionalstyledoc';
import { ContextMenuDoc } from '@/components/doc/treetable/contextmenudoc';
import { ControlledDoc } from '@/components/doc/treetable/controlleddoc';
import { DynamicColumnsDoc } from '@/components/doc/treetable/dynamiccolumnsdoc';
import { EditDoc } from '@/components/doc/treetable/editdoc';
import { FilterDoc } from '@/components/doc/treetable/filterdoc';
import { ImportDoc } from '@/components/doc/treetable/importdoc';
import { LazyLoadDoc } from '@/components/doc/treetable/lazyloaddoc';
import { PaginatorBasicDoc } from '@/components/doc/treetable/paginator/basicdoc';
import { PaginatorTemplateDoc } from '@/components/doc/treetable/paginator/templatedoc';
import { PTDoc } from '@/components/doc/treetable/pt/ptdoc';
import { Wireframe } from '@/components/doc/treetable/pt/wireframe';
import { ReorderDoc } from '@/components/doc/treetable/reorderdoc';
import { ExpandModeDoc } from '@/components/doc/treetable/resize/expandmodedoc';
import { FitModeDoc } from '@/components/doc/treetable/resize/fitmodedoc';
import { FrozenColumnsDoc } from '@/components/doc/treetable/scroll/frozencolumnsdoc';
import { HorizontalScrollDoc } from '@/components/doc/treetable/scroll/horizontaldoc';
import { VerticalScrollDoc } from '@/components/doc/treetable/scroll/verticaldoc';
import { CheckboxRowSelectionDoc } from '@/components/doc/treetable/selection/checkboxdoc';
import { RowSelectionEventsDoc } from '@/components/doc/treetable/selection/eventsdoc';
import { MultipleRowsSelectionDoc } from '@/components/doc/treetable/selection/multipledoc';
import { SingleRowSelectionDoc } from '@/components/doc/treetable/selection/singledoc';
import { MultipleColumnsDoc } from '@/components/doc/treetable/sort/multiplecolumnsdoc';
import { SingleColumnDoc } from '@/components/doc/treetable/sort/singlecolumndoc';
import { TemplateDoc } from '@/components/doc/treetable/templatedoc';
import { StyledDoc } from '@/components/doc/treetable/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/treetable/theming/tailwinddoc';

const TreeTableDemo = () => {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
                }
            ]
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'selection',
            label: 'Selection',
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
                    id: 'checkbox_row_selection',
                    label: 'Checkbox',
                    component: CheckboxRowSelectionDoc
                },
                {
                    id: 'row_selection_events',
                    label: 'Events',
                    component: RowSelectionEventsDoc
                }
            ]
        },
        {
            id: 'column_group',
            label: 'Column Group',
            component: ColumnGroupDoc
        },
        {
            id: 'lazy_load',
            label: 'Lazy Load',
            component: LazyLoadDoc
        },
        {
            id: 'edit',
            label: 'Edit',
            component: EditDoc
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
                    id: 'horizontal_scroll',
                    label: 'Horizontal',
                    component: HorizontalScrollDoc
                },
                {
                    id: 'frozen_columns',
                    label: 'Frozen Columns',
                    component: FrozenColumnsDoc
                }
            ]
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
            id: 'conditional_style',
            label: 'Conditional Style',
            component: ConditionalStyleDoc
        },
        {
            id: 'contextmenu',
            label: 'Context Menu',
            component: ContextMenuDoc
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
            id: 'pt.treetable.options',
            label: 'TreeTable PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.column.options',
            label: 'Column PT Options',
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
        <DocComponent
            title="React TreeTable Component"
            header="TreeTable"
            description="TreeTable is used to display hierarchical data in tabular format."
            componentDocs={docs}
            apiDocs={['TreeTable', 'Column', 'TreeNode']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default TreeTableDemo;

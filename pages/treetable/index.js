import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/treetable/accessibilitydoc';
import { BasicDoc } from '../../components/doc/treetable/basicdoc';
import { ColToggleDoc } from '../../components/doc/treetable/coltoggledoc';
import { ColumnGroupDoc } from '../../components/doc/treetable/columngroupdoc';
import { ContextMenuDoc } from '../../components/doc/treetable/contextmenudoc';
import { ControlledDoc } from '../../components/doc/treetable/controlleddoc';
import { DynamicColumnsDoc } from '../../components/doc/treetable/dynamiccolumnsdoc';
import { EditDoc } from '../../components/doc/treetable/editdoc';
import { FilterDoc } from '../../components/doc/treetable/filterdoc';
import { ImportDoc } from '../../components/doc/treetable/importdoc';
import { LazyDoc } from '../../components/doc/treetable/lazydoc';
import { PaginatorBasicDoc } from '../../components/doc/treetable/paginator/basicdoc';
import { PaginatorTemplateDoc } from '../../components/doc/treetable/paginator/templatedoc';
import { ReorderDoc } from '../../components/doc/treetable/reorderdoc';
import { ExpandModeDoc } from '../../components/doc/treetable/resize/expandmodedoc';
import { FitModeDoc } from '../../components/doc/treetable/resize/fitmodedoc';
import { ScrollableDoc } from '../../components/doc/treetable/resize/scrollabledoc';
import { ScrollableWithVariableWidthDoc } from '../../components/doc/treetable/resize/scrollablewithvariabledoc';
import { ResponsiveDoc } from '../../components/doc/treetable/responsivedoc';
import { FrozenColumnsDoc } from '../../components/doc/treetable/scroll/frozencolsdoc';
import { HorizontalAndVerticalDoc } from '../../components/doc/treetable/scroll/horizontalandverticaldoc';
import { HorizontalDoc } from '../../components/doc/treetable/scroll/horizontaldoc';
import { VerticalDoc } from '../../components/doc/treetable/scroll/verticaldoc';
import { CheckboxRowSelectionDoc } from '../../components/doc/treetable/selection/checkboxdoc';
import { RowSelectionEventsDoc } from '../../components/doc/treetable/selection/eventsdoc';
import { MultipleRowsSelectionDoc } from '../../components/doc/treetable/selection/multipledoc';
import { SingleRowSelectionDoc } from '../../components/doc/treetable/selection/singledoc';
import { MultipleColumnsDoc } from '../../components/doc/treetable/sort/multiplecolumnsdoc';
import { SingleColumnDoc } from '../../components/doc/treetable/sort/singlecolumndoc';
import { StyleDoc } from '../../components/doc/treetable/styledoc';
import { StyledTreeTableDoc } from '../../components/doc/treetable/styledtreetabledoc';
import { TemplateDoc } from '../../components/doc/treetable/templatedoc';

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
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'edit',
            label: 'Edit',
            component: EditDoc
        },
        {
            id: 'scroll',
            label: 'Scroll',
            description: 'Scrolling data is available horizontally, vertically or both with optional support for frozen columns.',
            children: [
                {
                    id: 'vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'horizontal',
                    label: 'Horizontal',
                    component: HorizontalDoc
                },
                {
                    id: 'horizontalandvertical',
                    label: 'Horizontal and Vertical',
                    component: HorizontalAndVerticalDoc
                },
                {
                    id: 'frozencolumns',
                    label: 'Frozen Columns',
                    component: FrozenColumnsDoc
                }
            ]
        },
        {
            id: 'resize',
            label: 'Resize',
            description:
                'Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized whereas in "expand" mode, table width also changes along with the column width.',
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
                    id: 'scrollable',
                    label: 'Scrollable',
                    component: ScrollableDoc
                },
                {
                    id: 'scrollablewithvariable',
                    label: 'Scrollable with Variable Width',
                    component: ScrollableWithVariableWidthDoc
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
            id: 'styledtreetable',
            label: 'Styled TreeTable',
            component: StyledTreeTableDoc
        },
        {
            id: 'contextmenu',
            label: 'ContextMenu',
            component: ContextMenuDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
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

    return <DocComponent title="React TreeTable Component" header="TreeTable" description="TreeTable is used to display hierarchical data in tabular format." componentDocs={docs} apiDocs={['TreeTable', 'Column']} />;
};

export default TreeTableDemo;

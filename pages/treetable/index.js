import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/treetable/apidoc';
import { AccessibilityDoc } from '../../components/doc/treetable/accessibilitydoc';
import { StyleDoc } from '../../components/doc/treetable/styledoc';
import { PaginatorDoc } from '../../components/doc/treetable/paginatordoc';
import { TemplatingDoc } from '../../components/doc/treetable/templatingdoc';
import { ImportDoc } from '../../components/doc/treetable/importdoc';
import { BasicDoc } from '../../components/doc/treetable/basicdoc';
import { ProgrammaticDoc } from '../../components/doc/treetable/programmaticdoc';
import { ColGroupDoc } from '../../components/doc/treetable/colgroupdoc';
import { LazyDoc } from '../../components/doc/treetable/lazydoc';
import { EditDoc } from '../../components/doc/treetable/editdoc';
import { ReorderDoc } from '../../components/doc/treetable/reorderdoc';
import { ColToggleDoc } from '../../components/doc/treetable/coltoggledoc';
import { StyledTreeTableDoc } from '../../components/doc/treetable/styledtreetabledoc';
import { ContextMenuDoc } from '../../components/doc/treetable/contextmenudoc';
import { ResponsiveDoc } from '../../components/doc/treetable/responsivedoc';
import { LenientFilterDoc } from '../../components/doc/treetable/filter/lenientfilterdoc';
import { StrictFilterDoc } from '../../components/doc/treetable/filter/strictfilterdoc';
import { VerticalDoc } from '../../components/doc/treetable/scroll/verticaldoc';
import { HorizontalDoc } from '../../components/doc/treetable/scroll/horizontaldoc';
import { HorizontalAndVerticalDoc } from '../../components/doc/treetable/scroll/horizontalandverticaldoc';
import { FrozenColumnsDoc } from '../../components/doc/treetable/scroll/frozencolsdoc';
import { SingleDoc } from '../../components/doc/treetable/sort/singledoc';
import { MultipleDoc } from '../../components/doc/treetable/sort/multipledoc';
import { FitModeDoc } from '../../components/doc/treetable/resize/fitmodedoc';
import { ExpandModeDoc } from '../../components/doc/treetable/resize/expandmodedoc';
import { ScrollableDoc } from '../../components/doc/treetable/resize/scrollabledoc';
import { ScrollableWithVariableWidthDoc } from '../../components/doc/treetable/resize/scrollablewithvariabledoc';
import { CheckboxDoc } from '../../components/doc/treetable/selection/checkboxdoc';
import { EventsDoc } from '../../components/doc/treetable/selection/eventsdoc';
import { MultipleSelectionDoc } from '../../components/doc/treetable/selection/multipledoc';
import { MultipleWithMetaKeysDoc } from '../../components/doc/treetable/selection/multiplewithmetadoc';
import { SingleSelectionDoc } from '../../components/doc/treetable/selection/singledoc';

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
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'paginator',
            label: 'Paginator',
            component: PaginatorDoc
        },
        {
            id: 'sort',
            label: 'Sort',
            description: 'TreeTable supports both single column and multiple column sorting.',
            children: [
                {
                    id: 'single',
                    label: 'Single',
                    component: SingleDoc
                },
                {
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                }
            ]
        },
        {
            id: 'filter',
            label: 'Filter',
            description:
                'Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword. By default input fields are generated as filter elements and using templating any component can be used as a filter.',
            children: [
                {
                    id: 'lenientfilter',
                    label: 'Lenient Filter',
                    component: LenientFilterDoc
                },
                {
                    id: 'strictfilter',
                    label: 'Strict Filter',
                    component: StrictFilterDoc
                }
            ]
        },
        {
            id: 'selection',
            label: 'Selection',
            description: 'TreeTable supports single, multiple and checkbox based selection modes.',
            children: [
                {
                    id: 'singleselection',
                    label: 'Single',
                    component: SingleSelectionDoc
                },
                {
                    id: 'checkboxselection',
                    label: 'Checkbox',
                    component: CheckboxDoc
                },
                {
                    id: 'eventselection',
                    label: 'Events',
                    component: EventsDoc
                },
                {
                    id: 'multipleselection',
                    label: 'Multiple ',
                    component: MultipleSelectionDoc
                },
                {
                    id: 'multiplewithmetakeys',
                    label: 'Multiple With Meta Keys',
                    component: MultipleWithMetaKeysDoc
                }
            ]
        },
        {
            id: 'colgroup',
            label: 'ColGroup',
            component: ColGroupDoc
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
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'treenodeapi',
                    label: 'TreeNode API'
                },
                {
                    id: 'columncomponent',
                    label: 'Column Component'
                },
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React TreeTable Component</title>
                <meta name="description" content="TreeTable is used to display hierarchical data in tabular format." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable</h1>
                    <p>TreeTable is used to display hierarchical data in tabular format.</p>
                </div>

                <DocActions github="treetable/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeTableDemo;

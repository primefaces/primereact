import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/tree/importdoc';
import { ApiDoc } from '../../components/doc/tree/apidoc';
import { AccessibilityDoc } from '../../components/doc/tree/accessibilitydoc';
import { StyleDoc } from '../../components/doc/tree/styledoc';
import { BasicDoc } from '../../components/doc/tree/basicdoc';
import { ProgrammaticDoc } from '../../components/doc/tree/programmaticdoc';
import { TreeEventsDoc } from '../../components/doc/tree/eventsdoc';
import { LazyDoc } from '../../components/doc/tree/lazydoc';
import { TemplatingDoc } from '../../components/doc/tree/templatingdoc';
import { DragAndDropDoc } from '../../components/doc/tree/draganddropdoc';
import { ContextMenuDoc } from '../../components/doc/tree/contextmenudoc';
import { LenientFilterDoc } from '../../components/doc/tree/filter/lenientfilterdoc';
import { StrictFilterDoc } from '../../components/doc/tree/filter/strictfilterdoc';
import { SingleSelectionDoc } from '../../components/doc/tree/selection/singleselectiondoc';
import { MultipleSelectionWithKeyDoc } from '../../components/doc/tree/selection/multipleselectionwithkeydoc';
import { MultipleSelectionWithoutKeyDoc } from '../../components/doc/tree/selection/multipleselectionwithoutkeydoc';
import { CheckboxSelectionDoc } from '../../components/doc/tree/selection/checkboxselectiondoc';

const TreeDemo = () => {
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
            id: 'selection',
            label: 'Selection',
            description: 'Tree supports "single", "multiple" and "checkbox" as selection modes.',
            children: [
                {
                    id: 'singleselection',
                    label: 'Single',
                    component: SingleSelectionDoc
                },
                {
                    id: 'multipleselectionwithkey',
                    label: 'Multiple Selection with MetaKey',
                    component: MultipleSelectionWithKeyDoc
                },
                {
                    id: 'multipleselectionwithoutkey',
                    label: 'Multiple Selection without MetaKey',
                    component: MultipleSelectionWithoutKeyDoc
                },
                {
                    id: 'checkboxselection',
                    label: 'Checkbox',
                    component: CheckboxSelectionDoc
                }
            ]
        },
        {
            id: 'events',
            label: 'Events',
            component: TreeEventsDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
        },
        {
            id: 'draganddrop',
            label: 'Drag and Drop',
            component: DragAndDropDoc
        },
        {
            id: 'contextmenu',
            label: 'ContextMenu',
            component: ContextMenuDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            description: 'Filtering updates the node based on the constraints.',
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
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'event',
                    label: 'Events'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Tree Component</title>
                <meta name="description" content="Tree is used to display hierarchical data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tree</h1>
                    <p>Tree is used to display hierarchical data.</p>
                </div>

                <DocActions github="tree/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeDemo;

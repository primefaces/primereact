import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/tree/importdoc';
import { ApiDoc } from '../../components/doc/tree/apidoc';
import { BasicDoc } from '../../components/doc/tree/basicdoc';
import { ProgrammaticDoc } from '../../components/doc/tree/programmaticdoc';
import { TreeEventsDoc } from '../../components/doc/tree/eventsdoc';
import { LazyDoc } from '../../components/doc/tree/lazydoc';
import { TemplatingDoc } from '../../components/doc/tree/templatingdoc';
import { DragAndDropDoc } from '../../components/doc/tree/draganddropdoc';
import { ContextMenuDoc } from '../../components/doc/tree/contextmenudoc';

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
            label: 'Selection',
            to: '/tree/selection'
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
            label: 'Filter',
            to: '/tree/filter'
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

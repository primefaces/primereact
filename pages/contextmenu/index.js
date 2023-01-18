import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/contextmenu/importdoc';
import { BasicDoc } from '../../components/doc/contextmenu/basicdoc';
import { ApiDoc } from '../../components/doc/contextmenu/apidoc';
import { AccessibilityDoc } from '../../components/doc/contextmenu/accessibilitydoc';
import { StyleDoc } from '../../components/doc/contextmenu/styledoc';
import { DocumentDoc } from '../../components/doc/contextmenu/documentdoc';

const ContextMenuDemo = () => {
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
            id: 'document',
            label: 'Document',
            component: DocumentDoc
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
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'methods',
                    label: 'Methods'
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
                <title>React ContextMenu Component</title>
                <meta name="description" content="ContextMenu displays an overlay menu on right click of its target." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>ContextMenu</h1>
                    <p>
                        ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a
                        special integration.
                    </p>
                </div>
                <DocActions github="contextmenu/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ContextMenuDemo;

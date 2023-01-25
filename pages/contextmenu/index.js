import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/contextmenu/accessibilitydoc';
import { ApiDoc } from '../../components/doc/contextmenu/apidoc';
import { BasicDoc } from '../../components/doc/contextmenu/basicdoc';
import { DocumentDoc } from '../../components/doc/contextmenu/documentdoc';
import { ImportDoc } from '../../components/doc/contextmenu/importdoc';
import { StyleDoc } from '../../components/doc/contextmenu/styledoc';

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
            component: ApiDoc
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
                <DocActions github="/contextmenu" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ContextMenuDemo;

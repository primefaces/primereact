import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/toolbar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/toolbar/basicdoc';
import { ImportDoc } from '../../components/doc/toolbar/importdoc';
import { StyleDoc } from '../../components/doc/toolbar/styledoc';

const ToolbarDemo = () => {
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
            doc: [{ name: 'Toolbar', pathname: '/modules/toolbar.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Toolbar Component</title>
                <meta name="description" content="Toolbar is a grouping component for buttons and other content." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Toolbar</h1>
                        <p>Toolbar is a grouping component for buttons and other content.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToolbarDemo;

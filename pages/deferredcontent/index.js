import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/deferredcontent/accessibilitydoc';
import { BasicDoc } from '../../components/doc/deferredcontent/basicdoc';
import { DataTableDoc } from '../../components/doc/deferredcontent/datatabledoc';
import { ImportDoc } from '../../components/doc/deferredcontent/importdoc';
import { StyleDoc } from '../../components/doc/deferredcontent/styledoc';

const DeferredContentDemo = () => {
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
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDoc
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
            doc: [{ name: 'DeferredContent', pathname: '/modules/deferredcontent.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Deferred Content Component</title>
                <meta name="description" content="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>DeferredContent</h1>
                        <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DeferredContentDemo;

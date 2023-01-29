import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/datascroller/accessibilitydoc';
import { BasicDoc } from '../../components/doc/datascroller/basicdoc';
import { ImportDoc } from '../../components/doc/datascroller/importdoc';
import { InlineDataScrollerDoc } from '../../components/doc/datascroller/inlinedoc';
import { LoaderDataScrollerDoc } from '../../components/doc/datascroller/loaderdoc';
import { StyleDoc } from '../../components/doc/datascroller/styledoc';

const DataScrollerDemo = () => {
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
            id: 'inline',
            label: 'Inline',
            component: InlineDataScrollerDoc
        },
        {
            id: 'loader',
            label: 'Loader',
            component: LoaderDataScrollerDoc
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
            doc: [{ name: 'DataScroller', pathname: '/modules/datascroller.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React DataScroller Component</title>
                <meta name="description" content="DataScroller displays data with on demand loading using scroll." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>DataScroller</h1>
                        <p>DataScroller displays data with on demand loading using scroll.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DataScrollerDemo;

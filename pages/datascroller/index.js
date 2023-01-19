import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/datascroller/apidoc';
import { AccessibilityDoc } from '../../components/doc/datascroller/accessibilitydoc';
import { StyleDoc } from '../../components/doc/datascroller/styledoc';
import { BasicDoc } from '../../components/doc/datascroller/basicdoc';
import { ImportDoc } from '../../components/doc/datascroller/importdoc';
import { InlineDataScrollerDoc } from '../../components/doc/datascroller/inlinedoc';
import { LoaderDataScrollerDoc } from '../../components/doc/datascroller/loaderdoc';

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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React DataScroller Component</title>
                <meta name="description" content="DataScroller displays data with on demand loading using scroll." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataScroller</h1>
                    <p>DataScroller displays data with on demand loading using scroll.</p>
                </div>

                <DocActions github="datascroller/index.js" />
            </div>

            <div className="content-section doc datascroller-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DataScrollerDemo;

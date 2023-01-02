import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/deferredcontent/importdoc';
import { DeferredContentDoc } from '../../components/doc/deferredcontent/contentdoc';
import { ApiDoc } from '../../components/doc/deferredcontent/apidoc';

const DeferredContentDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'deferredcontent',
            label: 'DeferredContent',
            component: DeferredContentDoc
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
                    id: 'events',
                    label: 'Events'
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
                <title>React Deferred Content Component</title>
                <meta name="description" content="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>DeferredContent</h1>
                    <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.</p>
                </div>
                <DocActions github="deferredcontent/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DeferredContentDemo;

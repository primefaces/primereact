import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/paginator/apidoc';
import { ImportDoc } from '../../components/doc/paginator/importdoc';
import { BasicDoc } from '../../components/doc/paginator/basicdoc';
import { CustomDoc } from '../../components/doc/paginator/customdoc';
import { ContentDoc } from '../../components/doc/paginator/contentdoc';

const PaginatorDemo = () => {
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
            id: 'custom',
            label: 'Custom Template',
            component: CustomDoc
        },
        {
            id: 'content',
            label: 'Left and Right Content',
            component: ContentDoc
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
                <title>React Paginator Component</title>
                <meta name="description" content="Paginator is a generic widget to display content in paged format." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Paginator</h1>
                    <p>Paginator is a generic widget to display content in paged format.</p>
                </div>

                <DocActions github="paginator/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PaginatorDemo;

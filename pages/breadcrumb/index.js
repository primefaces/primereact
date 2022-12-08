import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/breadcrumb/importdoc';
import { DefaultDoc } from '../../components/doc/breadcrumb/basicdoc';
import { ApiDoc } from '../../components/doc/breadcrumb/apipdoc';

const BreadCrumbDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'Default',
            label: 'Default',
            component: DefaultDoc
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
                <title>React BreadCrumb Component</title>
                <meta name="description" content="Breadcrumb provides contextual information about page hierarchy." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Breadcrumb</h1>
                    <p>Breadcrumb provides contextual information about page hierarchy.</p>
                </div>
                <DocActions github="breadcrumb/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BreadCrumbDemo;

import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/breadcrumb/accessibilitydoc';
import { BasicDoc } from '../../components/doc/breadcrumb/basicdoc';
import { ImportDoc } from '../../components/doc/breadcrumb/importdoc';
import { StyleDoc } from '../../components/doc/breadcrumb/styledoc';
import { TemplateDoc } from '../../components/doc/breadcrumb/templatedoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const BreadCrumbDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            doc: [{ name: 'Breadcrumb', pathname: '/modules/breadcrumb.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React BreadCrumb Component</title>
                <meta name="description" content="Breadcrumb provides contextual information about page hierarchy." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Breadcrumb</h1>
                        <p>Breadcrumb provides contextual information about page hierarchy.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BreadCrumbDemo;

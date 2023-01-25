import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/breadcrumb/accessibilitydoc';
import { ApiDoc } from '../../components/doc/breadcrumb/apidoc';
import { BasicDoc } from '../../components/doc/breadcrumb/basicdoc';
import { ImportDoc } from '../../components/doc/breadcrumb/importdoc';
import { StyleDoc } from '../../components/doc/breadcrumb/styledoc';
import { TemplateDoc } from '../../components/doc/breadcrumb/templatedoc';
import { DocActions } from '../../components/doc/common/docactions';
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
            component: ApiDoc
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
                <DocActions github="/breadcrumb" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BreadCrumbDemo;

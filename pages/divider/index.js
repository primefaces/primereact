import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/divider/importdoc';
import { BasicDoc } from '../../components/doc/divider/basicdoc';
import { TypeDoc } from '../../components/doc/divider/typedoc';
import { ContentDoc } from '../../components/doc/divider/contentdoc';
import { VerticalDoc } from '../../components/doc/divider/verticaldoc';
import { LoginDoc } from '../../components/doc/divider/logindoc';
import { ApiDoc } from '../../components/doc/divider/apidoc';
import { AccessibilityDoc } from '../../components/doc/divider/accessibilitydoc';
import { StyleDoc } from '../../components/doc/divider/styledoc';

const DividerDemo = () => {
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
            id: 'type',
            label: 'Type',
            component: TypeDoc
        },
        {
            id: 'content',
            label: 'Content',
            component: ContentDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'login',
            label: 'Login',
            component: LoginDoc
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
                <title>React Divider Component</title>
                <meta name="description" content="Divider is used to separate contents." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <div>
                        <h1>Divider</h1>
                        <p>Divider is used to separate contents.</p>
                    </div>
                </div>
                <DocActions github="divider/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DividerDemo;

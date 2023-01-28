import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/megamenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/megamenu/basicdoc';
import { ImportDoc } from '../../components/doc/megamenu/importdoc';
import { StyleDoc } from '../../components/doc/megamenu/styledoc';
import { TemplateDoc } from '../../components/doc/megamenu/templatedoc';
import { VerticalDoc } from '../../components/doc/megamenu/verticaldoc';

const MegaMenuDemo = () => {
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
            id: 'Vertical',
            label: 'Vertical',
            component: VerticalDoc
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
            doc: [{ name: 'MegaMenu', pathname: '/modules/megamenu.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React MegaMenu Component</title>
                <meta name="description" content="MegaMenu is navigation component that displays submenus together." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>MegaMenu</h1>
                    <p>MegaMenu is navigation component that displays submenus together.</p>
                </div>
                <DocActions github="/megamenu" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MegaMenuDemo;

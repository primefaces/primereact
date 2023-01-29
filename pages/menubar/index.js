import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/menubar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/menubar/basicdoc';
import { ImportDoc } from '../../components/doc/menubar/importdoc';
import { StyleDoc } from '../../components/doc/menubar/styledoc';
import { TemplateDoc } from '../../components/doc/menubar/templatedoc';

const MenubarDemo = () => {
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
            doc: [{ name: 'Menubar', pathname: '/modules/menubar.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Navbar Component</title>
                <meta name="description" content="Menubar is a horizontal menu component." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Menubar</h1>
                        <p>Menubar also known as Navbar, is a horizontal menu component.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MenubarDemo;

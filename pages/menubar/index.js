import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/menubar/importdoc';
import { BasicDoc } from '../../components/doc/menubar/basicdoc';
import { CustomDoc } from '../../components/doc/menubar/customdoc';
import { ApiDoc } from '../../components/doc/menubar/apidoc';
import { AccessibilityDoc } from '../../components/doc/menubar/accessibilitydoc';
import { StyleDoc } from '../../components/doc/menubar/styledoc';

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
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
        },
        {
            id: 'styling',
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
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Navbar Component</title>
                <meta name="description" content="Menubar is a horizontal menu component." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Menubar</h1>
                    <p>Menubar also known as Navbar, is a horizontal menu component.</p>
                </div>
                <DocActions github="menubar/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MenubarDemo;

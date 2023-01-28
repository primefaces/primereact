import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/tieredmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tieredmenu/basicdoc';
import { ImportDoc } from '../../components/doc/tieredmenu/importdoc';
import { PopupDoc } from '../../components/doc/tieredmenu/popupdoc';
import { StyleDoc } from '../../components/doc/tieredmenu/styledoc';

const TieredMenuDemo = () => {
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
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
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
            doc: [{ name: 'TieredMenu', pathname: '/modules/tieredmenu.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React TieredMenu Component</title>
                <meta name="description" content="TieredMenu displays submenus in nested overlays." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>TieredMenu</h1>
                    <p>TieredMenu displays submenus in nested overlays.</p>
                </div>
                <DocActions github="/tieredmenu" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TieredMenuDemo;

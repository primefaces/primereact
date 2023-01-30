import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/slidemenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/slidemenu/basicdoc';
import { ImportDoc } from '../../components/doc/slidemenu/importdoc';
import { PopupDoc } from '../../components/doc/slidemenu/popupdoc';
import { StyleDoc } from '../../components/doc/slidemenu/styledoc';

const SlideMenuDemo = () => {
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
            doc: [{ name: 'Slide Menu', pathname: '/modules/slidemenu.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React SlideMenu Component</title>
                <meta name="description" content="SlideMenu displays submenus with a slide animation." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Slide Menu</h1>
                        <p>SlideMenu displays submenus with a slide animation.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SlideMenuDemo;

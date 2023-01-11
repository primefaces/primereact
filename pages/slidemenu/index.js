import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/slidemenu/importdoc';
import { BasicDoc } from '../../components/doc/slidemenu/basicdoc';
import { PopupDoc } from '../../components/doc/slidemenu/popupdoc';
import { ApiDoc } from '../../components/doc/slidemenu/apidoc';
import { AccessibilityDoc } from '../../components/doc/slidemenu/accessibilitydoc';
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
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React SlideMenu Component</title>
                <meta name="description" content="SlideMenu displays submenus with a slide animation." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Slide Menu</h1>
                    <p>SlideMenu displays submenus with a slide animation.</p>
                </div>
                <DocActions github="slidemenu/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SlideMenuDemo;

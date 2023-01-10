import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/tieredmenu/importdoc';
import { BasicDoc } from '../../components/doc/tieredmenu/basicdoc';
import { PopupDoc } from '../../components/doc/tieredmenu/popupdoc';
import { ApiDoc } from '../../components/doc/tieredmenu/apidoc';
import { AccessibilityDoc } from '../../components/doc/tieredmenu/accessibilitydoc';
import { StylingDoc } from '../../components/doc/tieredmenu/stylingdoc';

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
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
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
                <title>React TieredMenu Component</title>
                <meta name="description" content="TieredMenu displays submenus in nested overlays." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>TieredMenu</h1>
                    <p>TieredMenu displays submenus in nested overlays.</p>
                </div>
                <DocActions github="tieredmenu/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TieredMenuDemo;

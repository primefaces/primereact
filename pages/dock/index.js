import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/dock/importdoc';
import { BasicDoc } from '../../components/doc/dock/basicdoc';
import { AdvanceDoc } from '../../components/doc/dock/advancedoc';
import { ApiDoc } from '../../components/doc/dock/apidoc';
import { AccessibilityDoc } from '../../components/doc/dock/accessibilitydoc';
import { StylingDoc } from '../../components/doc/dock/stylingdoc';

const DockDemo = () => {
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
            id: 'advance',
            label: 'Advanced',
            component: AdvanceDoc
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
                    id: 'menumodelapi',
                    label: 'MenuModel API'
                },
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
                <title>React Dock Component</title>
                <meta name="description" content="Dock is a navigation component consisting of menuitems." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Dock</h1>
                    <p>Dock is a navigation component consisting of menuitems.</p>
                </div>

                <DocActions github="dock/index.js" />
            </div>

            <div className="content-section doc dock-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DockDemo;

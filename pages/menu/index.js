import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/menu/importdoc';
import { BasicDoc } from '../../components/doc/menu/basicdoc';
import { InlineDoc } from '../../components/doc/menu/inlinedoc';
import { OverlayDoc } from '../../components/doc/menu/overlaydoc';
import { ApiDoc } from '../../components/doc/menu/apidoc';

const MenuDemo = () => {
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
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'overlay',
            label: 'Overlay',
            component: OverlayDoc
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
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Menu Component</title>
                <meta name="description" content="Menu is a navigation/command component that supports dynamic and static positioning." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Menu</h1>
                    <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                </div>
                <DocActions github="menu/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MenuDemo;

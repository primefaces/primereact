import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/tieredmenu/importdoc';
import { InlineDoc } from '../../components/doc/tieredmenu/inlinedoc';
import { OverlayDoc } from '../../components/doc/tieredmenu/overlaydoc';
import { ApiDoc } from '../../components/doc/tieredmenu/apidoc';

const TieredMenuDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
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

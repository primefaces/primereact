import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/megamenu/importdoc';
import { HorizontalDoc } from '../../components/doc/megamenu/horizontaldoc';
import { VerticalDoc } from '../../components/doc/megamenu/verticaldoc';
import { TemplatingDoc } from '../../components/doc/megamenu/templatingdoc';
import { ApiDoc } from '../../components/doc/megamenu/apidoc';

const MegaMenuDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'Vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
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
                <title>React MegaMenu Component</title>
                <meta name="description" content="MegaMenu is navigation component that displays submenus together." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>MegaMenu</h1>
                    <p>MegaMenu is navigation component that displays submenus together.</p>
                </div>
                <DocActions github="megamenu/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MegaMenuDemo;

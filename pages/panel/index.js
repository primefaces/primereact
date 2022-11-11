import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/panel/importdoc';
import { RegularDoc } from '../../components/doc/panel/regulardoc';
import { ToggleableDoc } from '../../components/doc/panel/toggleabledoc';
import { TemplateDoc } from '../../components/doc/panel/templatedoc';
import { ApiDoc } from '../../components/doc/panel/apidoc';

const PanelDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'regular',
            label: 'Regular',
            component: RegularDoc
        },
        {
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Panel Component</title>
                <meta name="description" content="Panel is a grouping component providing with content toggle feature." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Panel</h1>
                    <p>Panel is a grouping component providing with content toggle feature.</p>
                </div>
                <DocActions github="panel/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PanelDemo;

import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/toolbar/importdoc';
import { ToolbarDoc } from '../../components/doc/toolbar/toolbardoc';
import { ApiDoc } from '../../components/doc/toolbar/apidoc';

const ToolbarDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'toolbar',
            label: 'Toolbar',
            component: ToolbarDoc
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
                <title>React Toolbar Component</title>
                <meta name="description" content="Toolbar is a grouping component for buttons and other content." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Toolbar</h1>
                    <p>Toolbar is a grouping component for buttons and other content.</p>
                </div>
                <DocActions github="toolbar/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToolbarDemo;

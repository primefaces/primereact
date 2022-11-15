import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/multiselect/apidoc';
import { ImportDoc } from '../../components/doc/overlaypanel/importdoc';
import { OverlayPanelDoc } from '../../components/doc/overlaypanel/overlaypaneldoc';

const OverlayPanelDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'overlaypanel',
            label: 'OverlayPanel',
            component: OverlayPanelDoc
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
                <title>React Popover Component</title>
                <meta name="description" content="OverlayPanel also known as Popover, is a container component that can overlay other components on page." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>OverlayPanel</h1>
                    <p>OverlayPanel also known as Popover, is a container component that can overlay other components on page.</p>
                </div>
                <DocActions github="overlaypanel/index.js" />
            </div>
            <div className="content-section doc multiselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default OverlayPanelDemo;

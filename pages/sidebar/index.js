import Head from 'next/head';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocActions } from '../../components/doc/common/docactions';
import { BasicDoc } from '../../components/doc/sidebar/basicdoc';
import { ImportDoc } from '../../components/doc/sidebar/importdoc';
import { PositionDoc } from '../../components/doc/sidebar/positiondoc';
import { CustomDoc } from '../../components/doc/sidebar/customdoc';
import { FullScreenDoc } from '../../components/doc/sidebar/fullscreendoc';
import { ApiDoc } from '../../components/doc/sidebar/apidoc';
import { SizeDoc } from '../../components/doc/sidebar/sizedoc';

const SidebarDemo = () => {
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
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            component: FullScreenDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
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
                <title>React Sidebar Component</title>
                <meta name="description" content="Sidebar is a panel component displayed as an overlay." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h3>Sidebar</h3>
                    <p>Sidebar is a panel component displayed as an overlay.</p>
                </div>
                <DocActions github="sidebar/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SidebarDemo;

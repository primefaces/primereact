import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/sidebar/accessibilitydoc';
import { ApiDoc } from '../../components/doc/sidebar/apidoc';
import { BasicDoc } from '../../components/doc/sidebar/basicdoc';
import { FullScreenDoc } from '../../components/doc/sidebar/fullscreendoc';
import { ImportDoc } from '../../components/doc/sidebar/importdoc';
import { PositionDoc } from '../../components/doc/sidebar/positiondoc';
import { SizeDoc } from '../../components/doc/sidebar/sizedoc';
import { StyleDoc } from '../../components/doc/sidebar/styledoc';
import { TemplateDoc } from '../../components/doc/sidebar/templatedoc';

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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Sidebar Component</title>
                <meta name="description" content="Sidebar, also known as Drawer, is a container component displayed as an overlay." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Sidebar</h1>
                    <p>Sidebar, also known as Drawer, is a container component displayed as an overlay.</p>
                </div>
                <DocActions github="/sidebar" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SidebarDemo;

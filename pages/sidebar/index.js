import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/sidebar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/sidebar/basicdoc';
import { FullScreenDoc } from '../../components/doc/sidebar/fullscreendoc';
import { ImportDoc } from '../../components/doc/sidebar/importdoc';
import { PositionDoc } from '../../components/doc/sidebar/positiondoc';
import { SizeDoc } from '../../components/doc/sidebar/sizedoc';
import { StyleDoc } from '../../components/doc/sidebar/styledoc';
import { TemplateDoc } from '../../components/doc/sidebar/templatedoc';
import { Wireframe } from '../../components/doc/sidebar/pt/wireframe';
import { PTDoc } from '../../components/doc/sidebar/pt/ptdoc';

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
        }
    ];

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.sidebar.options',
            label: 'Sidebar PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Sidebar Component" header="Sidebar" description="Sidebar, also known as Drawer, is a container component displayed as an overlay." componentDocs={docs} apiDocs={['Sidebar']} ptDocs={ptDocs} />;
};

export default SidebarDemo;

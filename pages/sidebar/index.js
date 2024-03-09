import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/sidebar/accessibilitydoc';
import { BasicDoc } from '@/components/doc/sidebar/basicdoc';
import { FullScreenDoc } from '@/components/doc/sidebar/fullscreendoc';
import { ImportDoc } from '@/components/doc/sidebar/importdoc';
import { PositionDoc } from '@/components/doc/sidebar/positiondoc';
import { PTDoc } from '@/components/doc/sidebar/pt/ptdoc';
import { Wireframe } from '@/components/doc/sidebar/pt/wireframe';
import { SizeDoc } from '@/components/doc/sidebar/sizedoc';
import { TemplateDoc } from '@/components/doc/sidebar/templatedoc';
import { StyledDoc } from '@/components/doc/sidebar/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/sidebar/theming/tailwinddoc';
import { HeadlessDoc } from '@/components/doc/sidebar/headlessdoc';

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
            id: 'headless',
            label: 'Headless',
            component: HeadlessDoc
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

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="React Sidebar Component"
            header="Sidebar"
            description="Sidebar, also known as Drawer, is a container component displayed as an overlay."
            componentDocs={docs}
            apiDocs={['Sidebar']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default SidebarDemo;

import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/menubar/accessibilitydoc';
import { BasicDoc } from '@/components/doc/menubar/basicdoc';
import { CommandDoc } from '@/components/doc/menubar/commanddoc';
import { ImportDoc } from '@/components/doc/menubar/importdoc';
import { PTDoc } from '@/components/doc/menubar/pt/ptdoc';
import { Wireframe } from '@/components/doc/menubar/pt/wireframe';
import { RouterDoc } from '@/components/doc/menubar/routerdoc';
import { TemplateDoc } from '@/components/doc/menubar/templatedoc';
import { StyledDoc } from '@/components/doc/menubar/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/menubar/theming/tailwinddoc';

const MenubarDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'command',
            label: 'Command',
            component: CommandDoc
        },
        {
            id: 'router',
            label: 'Router',
            component: RouterDoc
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
            id: 'pt.menubar.options',
            label: 'Menubar PT Options',
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

    return <DocComponent title="React Navbar Component" header="Menubar" description="Menubar also known as Navbar, is a horizontal menu component" componentDocs={docs} apiDocs={['Menubar', 'MenuItem']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default MenubarDemo;

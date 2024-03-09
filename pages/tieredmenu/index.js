import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/tieredmenu/accessibilitydoc';
import { BasicDoc } from '@/components/doc/tieredmenu/basicdoc';
import { CommandDoc } from '@/components/doc/tieredmenu/commanddoc';
import { ImportDoc } from '@/components/doc/tieredmenu/importdoc';
import { PopupDoc } from '@/components/doc/tieredmenu/popupdoc';
import { PTDoc } from '@/components/doc/tieredmenu/pt/ptdoc';
import { Wireframe } from '@/components/doc/tieredmenu/pt/wireframe';
import { RouterDoc } from '@/components/doc/tieredmenu/routerdoc';
import { TemplateDoc } from '@/components/doc/tieredmenu/templatedoc';
import { StyledDoc } from '@/components/doc/tieredmenu/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/tieredmenu/theming/tailwinddoc';

const TieredMenuDemo = () => {
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
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
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
            id: 'pt.tieredmenu.options',
            label: 'TieredMenu PT Options',
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

    return <DocComponent title="React TieredMenu Component" header="TieredMenu" description="TieredMenu displays submenus in nested overlays." componentDocs={docs} apiDocs={['TieredMenu', 'MenuItem']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default TieredMenuDemo;

import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/menu/accessibilitydoc';
import { BasicDoc } from '@/components/doc/menu/basicdoc';
import { CommandDoc } from '@/components/doc/menu/commanddoc';
import { GroupDoc } from '@/components/doc/menu/groupdoc';
import { ImportDoc } from '@/components/doc/menu/importdoc';
import { PopupDoc } from '@/components/doc/menu/popupdoc';
import { PTDoc } from '@/components/doc/menu/pt/ptdoc';
import { Wireframe } from '@/components/doc/menu/pt/wireframe';
import { RouterDoc } from '@/components/doc/menu/routerdoc';
import { TemplateDoc } from '@/components/doc/menu/templatedoc';
import { StyledDoc } from '@/components/doc/menu/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/menu/theming/tailwinddoc';

const MenuDemo = () => {
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
            id: 'group',
            label: 'Group',
            component: GroupDoc
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
            id: 'pt.menu.options',
            label: 'Menu PT Options',
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
            title="React Menu Component"
            header="Menu"
            description="Menu is a navigation/command component that supports dynamic and static positioning."
            componentDocs={docs}
            apiDocs={['Menu', 'MenuItem']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default MenuDemo;

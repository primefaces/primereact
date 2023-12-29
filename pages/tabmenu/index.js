import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/tabmenu/accessibilitydoc';
import { BasicDoc } from '@/components/doc/tabmenu/basicdoc';
import { CommandDoc } from '@/components/doc/tabmenu/commanddoc';
import { ControlledDoc } from '@/components/doc/tabmenu/controlleddoc';
import { ImportDoc } from '@/components/doc/tabmenu/importdoc';
import { PTDoc } from '@/components/doc/tabmenu/pt/ptdoc';
import { Wireframe } from '@/components/doc/tabmenu/pt/wireframe';
import { RouterDoc } from '@/components/doc/tabmenu/routerdoc';
import { TemplateDoc } from '@/components/doc/tabmenu/templatedoc';
import { StyledDoc } from '@/components/doc/tabmenu/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/tabmenu/theming/tailwinddoc';

const TabMenuDemo = () => {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
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
            id: 'pt.tabmenu.options',
            label: 'TabMenu PT Options',
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
            title="React TabMenu Component"
            header="TabMenu"
            description="TabMenu is a navigation component that displays menu items as tab headers."
            componentDocs={docs}
            apiDocs={['TabMenu', 'MenuItem']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default TabMenuDemo;

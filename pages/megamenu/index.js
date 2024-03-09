import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/megamenu/accessibilitydoc';
import { BasicDoc } from '@/components/doc/megamenu/basicdoc';
import { CommandDoc } from '@/components/doc/megamenu/commanddoc';
import { ImportDoc } from '@/components/doc/megamenu/importdoc';
import { PTDoc } from '@/components/doc/megamenu/pt/ptdoc';
import { Wireframe } from '@/components/doc/megamenu/pt/wireframe';
import { RouterDoc } from '@/components/doc/megamenu/routerdoc';
import { TemplateDoc } from '@/components/doc/megamenu/templatedoc';
import { StyledDoc } from '@/components/doc/megamenu/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/megamenu/theming/tailwinddoc';
import { VerticalDoc } from '@/components/doc/megamenu/verticaldoc';

const MegaMenuDemo = () => {
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
            id: 'Vertical',
            label: 'Vertical',
            component: VerticalDoc
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
            id: 'pt.megamenu.options',
            label: 'MegaMenu PT Options',
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
            title="React MegaMenu Component"
            header="MegaMenu"
            description="MegaMenu is navigation component that displays submenus together."
            componentDocs={docs}
            apiDocs={['MegaMenu', 'MenuItem']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default MegaMenuDemo;

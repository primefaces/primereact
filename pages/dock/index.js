import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/dock/accessibilitydoc';
import { AdvancedDoc } from '@/components/doc/dock/advanceddoc';
import { BasicDoc } from '@/components/doc/dock/basicdoc';
import { ImportDoc } from '@/components/doc/dock/importdoc';
import { PTDoc } from '@/components/doc/dock/pt/ptdoc';
import { Wireframe } from '@/components/doc/dock/pt/wireframe';
import { StyledDoc } from '@/components/doc/dock/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/dock/theming/tailwinddoc';

const DockDemo = () => {
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
            id: 'advance',
            label: 'Advanced',
            component: AdvancedDoc
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
            id: 'pt.dock.options',
            label: 'Dock PT Options',
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
            title="React Dock Component"
            header="Dock"
            description="Dock is a navigation component consisting of menuitems."
            componentDocs={docs}
            apiDocs={['Dock', 'MenuItem']}
            className="dock-demo"
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default DockDemo;

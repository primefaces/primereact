import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/panel/accessibilitydoc';
import { BasicDoc } from '@/components/doc/panel/basicdoc';
import { ImportDoc } from '@/components/doc/panel/importdoc';
import { PTDoc } from '@/components/doc/panel/pt/ptdoc';
import { Wireframe } from '@/components/doc/panel/pt/wireframe';
import { TemplateDoc } from '@/components/doc/panel/templatedoc';
import { StyledDoc } from '@/components/doc/panel/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/panel/theming/tailwinddoc';
import { ToggleableDoc } from '@/components/doc/panel/toggleabledoc';

const PanelDemo = () => {
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
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.panel.options',
            label: 'Panel PT Options',
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
            title="React Panel Component"
            header="Panel"
            description="Panel is a container component with an optional content toggle feature."
            componentDocs={docs}
            apiDocs={['Panel']}
            ptDocs={ptDocs}
            ptDescription={''}
            themingDocs={themingDocs}
        />
    );
};

export default PanelDemo;

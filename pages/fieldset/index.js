import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/fieldset/accessibilitydoc';
import { BasicDoc } from '@/components/doc/fieldset/basicdoc';
import { ImportDoc } from '@/components/doc/fieldset/importdoc';
import { PTDoc } from '@/components/doc/fieldset/pt/ptdoc';
import { Wireframe } from '@/components/doc/fieldset/pt/wireframe';
import { TemplateDoc } from '@/components/doc/fieldset/templatedoc';
import { StyledDoc } from '@/components/doc/fieldset/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/fieldset/theming/tailwinddoc';
import { ToggleableDoc } from '@/components/doc/fieldset/toggleabledoc';

const FieldsetDemo = () => {
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
            id: 'pt.fieldset.options',
            label: 'Fieldset PT Options',
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

    return <DocComponent title="React Fieldset Component" header="Fieldset" description="Fieldset is a grouping component with a content toggle feature." componentDocs={docs} apiDocs={['Fieldset']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default FieldsetDemo;

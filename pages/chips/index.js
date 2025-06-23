import { AccessibilityDoc } from '@/components/doc/chips/accessibilitydoc';
import { BasicDoc } from '@/components/doc/chips/basicdoc';
import { DisabledDoc } from '@/components/doc/chips/disableddoc';
import { FilledDoc } from '@/components/doc/chips/filleddoc';
import { FloatLabelDoc } from '@/components/doc/chips/floatlabeldoc';
import { ImportDoc } from '@/components/doc/chips/importdoc';
import { InvalidDoc } from '@/components/doc/chips/invaliddoc';
import { KeyFilterDoc } from '@/components/doc/chips/keyfilterdoc';
import { Wireframe } from '@/components/doc/chips/pt/wireframe';
import { SeparatorDoc } from '@/components/doc/chips/separatordoc';
import { TemplateDoc } from '@/components/doc/chips/templatedoc';
import { StyledDoc } from '@/components/doc/chips/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/chips/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const ChipsDemo = () => {
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
            id: 'separator',
            label: 'Separator',
            component: SeparatorDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'float',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
            id: 'pt.chips.options',
            label: 'Chips PT Options',
            component: DocApiTable
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

    return <DocComponent title="React Chips Component" header="Chips" description="Chips is used to enter multiple values on an input field." componentDocs={docs} apiDocs={['Chips']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ChipsDemo;

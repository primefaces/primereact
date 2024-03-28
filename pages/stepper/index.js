import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/stepper/accessibilitydoc';
import { BasicDoc } from '@/components/doc/stepper/basicdoc';
import { ImportDoc } from '@/components/doc/stepper/importdoc';
import { LinearDoc } from '@/components/doc/stepper/lineardoc';
import { Wireframe } from '@/components/doc/stepper/pt/wireframe';
import { StyledDoc } from '@/components/doc/stepper/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/stepper/theming/tailwinddoc';
import { VerticalDoc } from '@/components/doc/stepper/verticaldoc';

const StepperDemo = () => {
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
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'linear',
            label: 'Linear',
            component: LinearDoc
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
            id: 'pt.stepper.options',
            label: 'Stepper PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.stepperpanel.options',
            label: 'StepperPanel PT Options',
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

    return (
        <DocComponent
            title="React Input Component"
            header="Stepper"
            description="The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression."
            componentDocs={docs}
            apiDocs={['InputText']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default StepperDemo;

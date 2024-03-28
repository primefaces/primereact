import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/stepper/accessibilitydoc';
import { BasicDoc } from '@/components/doc/stepper/basicdoc';
import { ImportDoc } from '@/components/doc/stepper/importdoc';
import { LinearDoc } from '@/components/doc/stepper/lineardoc';
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
        // {
        //     id: 'pt.wireframe',
        //     label: 'Wireframe',
        //     component: Wireframe
        // },
        // {
        //     id: 'pt.inputtext.options',
        //     label: 'InputText PT Options',
        //     component: DocApiTable
        // },
        // {
        //     id: 'pt.demo',
        //     label: 'Example',
        //     component: PTDoc
        // }
    ];

    const themingDocs = [
        // {
        //     id: 'styled',
        //     label: 'Styled',
        //     component: StyledDoc
        // },
        // {
        //     id: 'unstyled',
        //     label: 'Unstyled',
        //     description: 'Theming is implemented with the pass through properties in unstyled mode.',
        //     children: [
        //         {
        //             id: 'tailwind',
        //             label: 'Tailwind',
        //             component: TailwindDoc
        //         }
        //     ]
        // }
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

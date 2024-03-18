import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/steps/accessibilitydoc';
import { BasicDoc } from '@/components/doc/steps/basicdoc';
import { ControlledDoc } from '@/components/doc/steps/controlleddoc';
import { ImportDoc } from '@/components/doc/steps/importdoc';
import { InteractiveDoc } from '@/components/doc/steps/interactivedoc';
import { PTDoc } from '@/components/doc/steps/pt/ptdoc';
import { Wireframe } from '@/components/doc/steps/pt/wireframe';
import { TemplateDoc } from '@/components/doc/steps/templatedoc';
import { StyledDoc } from '@/components/doc/steps/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/steps/theming/tailwinddoc';

const StepsDemo = () => {
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
            id: 'interactive',
            label: 'Interactive',
            component: InteractiveDoc
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
            id: 'pt.steps.options',
            label: 'Steps PT Options',
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
            title="React Stepper Component"
            header="Steps"
            description="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design."
            componentDocs={docs}
            apiDocs={['Steps', 'MenuItem']}
            className="steps-demo"
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default StepsDemo;

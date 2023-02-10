import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/steps/accessibilitydoc';
import { BasicDoc } from '../../components/doc/steps/basicdoc';
import { ImportDoc } from '../../components/doc/steps/importdoc';
import { InteractiveDoc } from '../../components/doc/steps/interactivedoc';
import { StyleDoc } from '../../components/doc/steps/styledoc';

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
            id: 'interactive',
            label: 'Interactive',
            component: InteractiveDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return (
        <DocComponent
            title="React Stepper Component"
            header="Steps"
            description="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design."
            componentDocs={docs}
            apiDocs={['Steps']}
            className="steps-demo"
        />
    );
};

export default StepsDemo;

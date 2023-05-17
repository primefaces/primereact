import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/steps/accessibilitydoc';
import { BasicDoc } from '../../components/doc/steps/basicdoc';
import { ImportDoc } from '../../components/doc/steps/importdoc';
import { InteractiveDoc } from '../../components/doc/steps/interactivedoc';
import { PTDoc } from '../../components/doc/steps/pt/ptdoc';
import { Wireframe } from '../../components/doc/steps/pt/wireframe';
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

    return (
        <DocComponent
            title="React Stepper Component"
            header="Steps"
            description="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design."
            componentDocs={docs}
            apiDocs={['Steps', 'MenuItem']}
            className="steps-demo"
            ptDocs={ptDocs}
        />
    );
};

export default StepsDemo;

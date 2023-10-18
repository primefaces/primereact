import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/togglebutton/pt/ptdoc';
import { Wireframe } from '../../components/doc/togglebutton/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/togglebutton/accessibilitydoc';
import { BasicDoc } from '../../components/doc/togglebutton/basicdoc';
import { CustomizedDoc } from '../../components/doc/togglebutton/customizeddoc';
import { FormikDoc } from '../../components/doc/togglebutton/form/formikdoc';
import { HookFormDoc } from '../../components/doc/togglebutton/form/hookformdoc';
import { ImportDoc } from '../../components/doc/togglebutton/importdoc';
import { StyleDoc } from '../../components/doc/togglebutton/styledoc';

const ToggleButtonDemo = () => {
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
            id: 'customized',
            label: 'Customized',
            component: CustomizedDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
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
            id: 'pt.togglebutton.options',
            label: 'ToggleButton PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React ToggleButton Component" header="ToggleButton" description="ToggleButton is used to select a boolean value using a button." componentDocs={docs} apiDocs={['ToggleButton']} ptDocs={ptDocs} />;
};

export default ToggleButtonDemo;

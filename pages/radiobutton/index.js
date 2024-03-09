import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/radiobutton/accessibilitydoc';
import { DisabledDoc } from '@/components/doc/radiobutton/disableddoc';
import { DynamicDoc } from '@/components/doc/radiobutton/dynamicdoc';
import { FormikDoc } from '@/components/doc/radiobutton/form/formikdoc';
import { HookFormDoc } from '@/components/doc/radiobutton/form/hookformdoc';
import { GroupDoc } from '@/components/doc/radiobutton/groupdoc';
import { ImportDoc } from '@/components/doc/radiobutton/importdoc';
import { InvalidDoc } from '@/components/doc/radiobutton/invaliddoc';
import { PTDoc } from '@/components/doc/radiobutton/pt/ptdoc';
import { Wireframe } from '@/components/doc/radiobutton/pt/wireframe';
import { StyledDoc } from '@/components/doc/radiobutton/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/radiobutton/theming/tailwinddoc';

const RadioButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
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
            id: 'pt.radiobutton.options',
            label: 'RadioButton PT Options',
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
            title="React RadioButton Component"
            header="RadioButton"
            description="RadioButton is an extension to standard radio button element with theming."
            componentDocs={docs}
            apiDocs={['RadioButton']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default RadioButtonDemo;

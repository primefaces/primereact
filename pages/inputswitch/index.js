import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputswitch/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputswitch/basicdoc';
import { DisabledDoc } from '@/components/doc/inputswitch/disableddoc';
import { FormikDoc } from '@/components/doc/inputswitch/form/formikdoc';
import { HookFormDoc } from '@/components/doc/inputswitch/form/hookformdoc';
import { ImportDoc } from '@/components/doc/inputswitch/importdoc';
import { InvalidDoc } from '@/components/doc/inputswitch/invaliddoc';
import { PreselectionDoc } from '@/components/doc/inputswitch/preselectiondoc';
import { PTDoc } from '@/components/doc/inputswitch/pt/ptdoc';
import { Wireframe } from '@/components/doc/inputswitch/pt/wireframe';
import { StyledDoc } from '@/components/doc/inputswitch/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inputswitch/theming/tailwinddoc';

const InputSwitchDemo = () => {
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
            id: 'preselection',
            label: 'Preselection',
            component: PreselectionDoc
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
            id: 'pt.inputswitch.options',
            label: 'InputSwitch PT Options',
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

    return <DocComponent title="React InputSwitch Component" header="InputSwitch" description="InputSwitch is used to select a boolean value." componentDocs={docs} apiDocs={['InputSwitch']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default InputSwitchDemo;

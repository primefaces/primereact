import { AccessibilityDoc } from '@/components/doc/checkbox/accessibilitydoc';
import { BasicDoc } from '@/components/doc/checkbox/basicdoc';
import { DisabledDoc } from '@/components/doc/checkbox/disableddoc';
import { DynamicDoc } from '@/components/doc/checkbox/dynamicdoc';
import { FormikDoc } from '@/components/doc/checkbox/form/formikdoc';
import { HookFormDoc } from '@/components/doc/checkbox/form/hookformdoc';
import { GroupDoc } from '@/components/doc/checkbox/groupdoc';
import { ImportDoc } from '@/components/doc/checkbox/importdoc';
import { InvalidDoc } from '@/components/doc/checkbox/invaliddoc';
import { PTDoc } from '@/components/doc/checkbox/pt/ptdoc';
import { Wireframe } from '@/components/doc/checkbox/pt/wireframe';
import { StyledDoc } from '@/components/doc/checkbox/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/checkbox/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const CheckboxDemo = () => {
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
            id: 'pt.checkbox.options',
            label: 'Checkbox PT Options',
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

    return <DocComponent title="React Checkbox Component" header="Checkbox" description="Checkbox is an extension to standard checkbox element with theming." componentDocs={docs} apiDocs={['Checkbox']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default CheckboxDemo;

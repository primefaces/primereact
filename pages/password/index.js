import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/password/accessibilitydoc';
import { BasicDoc } from '@/components/doc/password/basicdoc';
import { DisabledDoc } from '@/components/doc/password/disableddoc';
import { FloatLabelDoc } from '@/components/doc/password/floatlabeldoc';
import { FormikDoc } from '@/components/doc/password/form/formikdoc';
import { HookFormDoc } from '@/components/doc/password/form/hookformdoc';
import { ImportDoc } from '@/components/doc/password/importdoc';
import { InvalidDoc } from '@/components/doc/password/invaliddoc';
import { LocaleDoc } from '@/components/doc/password/localedoc';
import { MeterDoc } from '@/components/doc/password/meterdoc';
import { PTDoc } from '@/components/doc/password/pt/ptdoc';
import { Wireframe } from '@/components/doc/password/pt/wireframe';
import { TemplateDoc } from '@/components/doc/password/templatedoc';
import { StyledDoc } from '@/components/doc/password/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/password/theming/tailwinddoc';
import { ToggleMaskDoc } from '@/components/doc/password/togglemaskdoc';

const PasswordDemo = () => {
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
            id: 'meter',
            label: 'Meter',
            component: MeterDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'togglemask',
            label: 'Toggle Mask',
            component: ToggleMaskDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
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
            id: 'pt.password.options',
            label: 'Password PT Options',
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

    return <DocComponent title="React Password Component" header="Password" description="Password displays strength indicator for password fields." componentDocs={docs} apiDocs={['Password']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default PasswordDemo;

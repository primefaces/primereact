import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputtext/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputtext/basicdoc';
import { DisabledDoc } from '@/components/doc/inputtext/disableddoc';
import { FloatLabelDoc } from '@/components/doc/inputtext/floatlabeldoc';
import { FormikDoc } from '@/components/doc/inputtext/form/formikdoc';
import { HookFormDoc } from '@/components/doc/inputtext/form/hookformdoc';
import { HelpTextDoc } from '@/components/doc/inputtext/helptextdoc';
import { IconsDoc } from '@/components/doc/inputtext/iconsdoc';
import { ImportDoc } from '@/components/doc/inputtext/importdoc';
import { InvalidDoc } from '@/components/doc/inputtext/invaliddoc';
import { KeyFilterDoc } from '@/components/doc/inputtext/keyfilterdoc';
import { PTDoc } from '@/components/doc/inputtext/pt/ptdoc';
import { Wireframe } from '@/components/doc/inputtext/pt/wireframe';
import { SizesDoc } from '@/components/doc/inputtext/sizesdoc';
import { StyledDoc } from '@/components/doc/inputtext/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inputtext/theming/tailwinddoc';

const InputTextDemo = () => {
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
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
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
            id: 'pt.inputtext.options',
            label: 'InputText PT Options',
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
            title="React Input Component"
            header="InputText"
            description="InputText is an extension to standard input element with theming and keyfiltering."
            componentDocs={docs}
            apiDocs={['InputText']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default InputTextDemo;

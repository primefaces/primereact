import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputmask/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputmask/basicdoc';
import { DisabledDoc } from '@/components/doc/inputmask/disableddoc';
import { FloatLabelDoc } from '@/components/doc/inputmask/floatlabeldoc';
import { FormikDoc } from '@/components/doc/inputmask/form/formikdoc';
import { HookFormDoc } from '@/components/doc/inputmask/form/hookformdoc';
import { ImportDoc } from '@/components/doc/inputmask/importdoc';
import { InvalidDoc } from '@/components/doc/inputmask/invaliddoc';
import { MaskDoc } from '@/components/doc/inputmask/maskdoc';
import { OptionalDoc } from '@/components/doc/inputmask/optionaldoc';
import { PTDoc } from '@/components/doc/inputmask/pt/ptdoc';
import { Wireframe } from '@/components/doc/inputmask/pt/wireframe';
import { SlotCharDoc } from '@/components/doc/inputmask/slotchardoc';
import { StyledDoc } from '@/components/doc/inputmask/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inputmask/theming/tailwinddoc';
import Link from 'next/link';

const InputMaskDemo = () => {
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
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
        },
        {
            id: 'optional',
            label: 'Optional',
            component: OptionalDoc
        },
        {
            id: 'slotchar',
            label: 'Slot Char',
            component: SlotCharDoc
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
            id: 'pt.inputmask.options',
            label: 'InputMask PT Options',
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

    const ptDescription = (
        <span>
            InputMask does not have a specific API for PassThrough options, but it does support all the pass through options of{' '}
            <Link href="/inputtext/#pt.inputtext.options" target="_blank">
                InputText
            </Link>
        </span>
    );

    return (
        <DocComponent
            title="React Mask Component"
            header="InputMask"
            description="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone."
            componentDocs={docs}
            apiDocs={['InputMask']}
            ptDocs={ptDocs}
            ptDescription={ptDescription}
            themingDocs={themingDocs}
        />
    );
};

export default InputMaskDemo;

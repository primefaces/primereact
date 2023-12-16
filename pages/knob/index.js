import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/knob/accessibilitydoc';
import { BasicDoc } from '@/components/doc/knob/basicdoc';
import { ColorDoc } from '@/components/doc/knob/colordoc';
import { DisabledDoc } from '@/components/doc/knob/disableddoc';
import { FormikDoc } from '@/components/doc/knob/form/formikdoc';
import { HookFormDoc } from '@/components/doc/knob/form/hookformdoc';
import { ImportDoc } from '@/components/doc/knob/importdoc';
import { MinMaxDoc } from '@/components/doc/knob/minmaxdoc';
import { PTDoc } from '@/components/doc/knob/pt/ptdoc';
import { Wireframe } from '@/components/doc/knob/pt/wireframe';
import { ReactiveDoc } from '@/components/doc/knob/reactivedoc';
import { ReadOnlyDoc } from '@/components/doc/knob/readonlydoc';
import { SizeDoc } from '@/components/doc/knob/sizedoc';
import { StepDoc } from '@/components/doc/knob/stepdoc';
import { StrokeDoc } from '@/components/doc/knob/strokedoc';
import { TemplateDoc } from '@/components/doc/knob/templatedoc';
import { StyledDoc } from '@/components/doc/knob/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/knob/theming/tailwinddoc';

const KnobDemo = () => {
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
            id: 'minmax',
            label: 'Min/Max',
            component: MinMaxDoc
        },
        {
            id: 'step',
            label: 'Step',
            component: StepDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'stroke',
            label: 'Stroke',
            component: StrokeDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'color',
            label: 'Color',
            component: ColorDoc
        },
        {
            id: 'reactivec',
            label: 'Reactive',
            component: ReactiveDoc
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
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
            id: 'pt.knob.options',
            label: 'Knob PT Options',
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

    return <DocComponent title="React Knob Component" header="Knob" description="Knob is a form component to define number inputs with a dial." componentDocs={docs} apiDocs={['Knob']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default KnobDemo;

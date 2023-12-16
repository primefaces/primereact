import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/slider/accessibilitydoc';
import { BasicDoc } from '@/components/doc/slider/basicdoc';
import { ImportDoc } from '@/components/doc/slider/importdoc';
import { InputDoc } from '@/components/doc/slider/inputdoc';
import { PTDoc } from '@/components/doc/slider/pt/ptdoc';
import { Wireframe } from '@/components/doc/slider/pt/wireframe';
import { RangeDoc } from '@/components/doc/slider/rangedoc';
import { StepDoc } from '@/components/doc/slider/stepdoc';
import { StyledDoc } from '@/components/doc/slider/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/slider/theming/tailwinddoc';
import { VerticalDoc } from '@/components/doc/slider/verticaldoc';

const SliderDemo = () => {
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
            id: 'input',
            label: 'Input',
            component: InputDoc
        },
        {
            id: 'step',
            label: 'Step',
            component: StepDoc
        },
        {
            id: 'range',
            label: 'Range',
            component: RangeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
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
            id: 'pt.slider.options',
            label: 'Slider PT Options',
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

    return <DocComponent title="React Slider Component" header="Slider" description="Slider is a component to provide input with a drag handle." componentDocs={docs} apiDocs={['Slider']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default SliderDemo;

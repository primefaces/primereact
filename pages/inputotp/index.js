import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputotp/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputotp/basicdoc';
import { ImportDoc } from '@/components/doc/inputotp/importdoc';
import { IntegerOnlyDoc } from '@/components/doc/inputotp/integeronlydoc';
import { MaskDoc } from '@/components/doc/inputotp/maskdoc';
import { Wireframe } from '@/components/doc/inputotp/pt/wireframe';
import { SampleDoc } from '@/components/doc/inputotp/sampledoc';
import { TemplateDoc } from '@/components/doc/inputotp/templatedoc';
import { StyledDoc } from '@/components/doc/inputotp/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inputotp/theming/tailwinddoc';

const InputOtpDemo = () => {
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
            id: 'integeronly',
            label: 'Integer Only',
            component: IntegerOnlyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'sample',
            label: 'Sample',
            component: SampleDoc
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
            id: 'pt.inputotp.options',
            label: 'InputOtp PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.inputotptab.options',
            label: 'InputOtpTab PT Options',
            component: DocApiTable
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
            title="React InputOtp Component"
            header="InputOtp"
            description="InputOtp groups a collection of contents in tabs."
            componentDocs={docs}
            apiDocs={['InputOtp', 'InputOtpTab']}
            ptDocs={ptDocs}
            ptDescription=""
            themingDocs={themingDocs}
        />
    );
};

export default InputOtpDemo;

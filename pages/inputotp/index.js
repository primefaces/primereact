// import { AccessibilityDoc } from '@/components/doc/inputotp/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputotp/basicdoc';
// import { ControlledDoc } from '@/components/doc/inputotp/controlleddoc';
// import { DisabledDoc } from '@/components/doc/inputotp/disableddoc';
// import { DynamicDoc } from '@/components/doc/inputotp/dynamicdoc';
// import { ImportDoc } from '@/components/doc/inputotp/importdoc';
// import { MultipleDoc } from '@/components/doc/inputotp/multipledoc';
// import { PTDoc } from '@/components/doc/inputotp/pt/ptdoc';
// import { Wireframe } from '@/components/doc/inputotp/pt/wireframe';
// import { TemplateDoc } from '@/components/doc/inputotp/templatedoc';
// import { StyledDoc } from '@/components/doc/inputotp/theming/styleddoc';
// import { TailwindDoc } from '@/components/doc/inputotp/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const InputOtpDemo = () => {
    const docs = [
        // {
        //     id: 'import',
        //     label: 'Import',
        //     component: ImportDoc
        // },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        // {
        //     id: 'dynamic',
        //     label: 'Dynamic',
        //     component: DynamicDoc
        // },
        // {
        //     id: 'multiple',
        //     label: 'Multiple',
        //     component: MultipleDoc
        // },
        // {
        //     id: 'disabled',
        //     label: 'Disabled',
        //     component: DisabledDoc
        // },
        // {
        //     id: 'controlled',
        //     label: 'Controlled',
        //     component: ControlledDoc
        // },
        // {
        //     id: 'template',
        //     label: 'Template',
        //     component: TemplateDoc
        // },

        // {
        //     id: 'accessibility',
        //     label: 'Accessibility',
        //     component: AccessibilityDoc
        // }
    ];

    // const ptDocs = [
    //     {
    //         id: 'pt.wireframe',
    //         label: 'Wireframe',
    //         component: Wireframe
    //     },
    //     {
    //         id: 'pt.inputotp.options',
    //         label: 'InputOtp PT Options',
    //         component: DocApiTable
    //     },
    //     {
    //         id: 'pt.inputotptab.options',
    //         label: 'InputOtpTab PT Options',
    //         component: DocApiTable
    //     },
    //     {
    //         id: 'pt.demo',
    //         label: 'Example',
    //         component: PTDoc
    //     }
    // ];

    // const themingDocs = [
    //     {
    //         id: 'styled',
    //         label: 'Styled',
    //         component: StyledDoc
    //     },
    //     {
    //         id: 'unstyled',
    //         label: 'Unstyled',
    //         description: 'Theming is implemented with the pass through properties in unstyled mode.',
    //         children: [
    //             {
    //                 id: 'tailwind',
    //                 label: 'Tailwind',
    //                 component: TailwindDoc
    //             }
    //         ]
    //     }
    // ];

    return (
        <DocComponent
            title="React InputOtp Component"
            header="InputOtp"
            description="InputOtp groups a collection of contents in tabs."
            componentDocs={docs}
            apiDocs={['InputOtp', 'InputOtpTab']}
            // ptDocs={ptDocs}
            ptDescription=""
            // themingDocs={themingDocs}
        />
    );
};

export default InputOtpDemo;

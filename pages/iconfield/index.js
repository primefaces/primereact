import React from 'react';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
// import { AccessibilityDoc } from '@/components/doc/iconfield/accessibilitydoc';
import { BasicDoc } from '@/components/doc/iconfield/basicdoc';
// // import { DisabledDoc } from '@/components/doc/iconfield/disableddoc';
// import { FloatLabelDoc } from '@/components/doc/iconfield/floatlabeldoc';
// import { FormikDoc } from '@/components/doc/iconfield/form/formikdoc';
// import { HookFormDoc } from '@/components/doc/iconfield/form/hookformdoc';
// import { HelpTextDoc } from '@/components/doc/iconfield/helptextdoc';
// import { IconsDoc } from '@/components/doc/iconfield/iconsdoc';
// import { ImportDoc } from '@/components/doc/iconfield/importdoc';
// import { InvalidDoc } from '@/components/doc/iconfield/invaliddoc';
// import { KeyFilterDoc } from '@/components/doc/iconfield/keyfilterdoc';
// import { PTDoc } from '@/components/doc/iconfield/pt/ptdoc';
// import { Wireframe } from '@/components/doc/iconfield/pt/wireframe';
// import { SizesDoc } from '@/components/doc/iconfield/sizesdoc';
// import { StyledDoc } from '@/components/doc/iconfield/theming/styleddoc';
// import { TailwindDoc } from '@/components/doc/iconfield/theming/tailwinddoc';

const IconFieldDemo = () => {
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
        }
        //     {
        //         id: 'icons',
        //         label: 'Icons',
        //         component: IconsDoc
        //     },
        //     {
        //         id: 'keyfilter',
        //         label: 'Key Filter',
        //         component: KeyFilterDoc
        //     },
        //     {
        //         id: 'sizes',
        //         label: 'Sizes',
        //         component: SizesDoc
        //     },
        //     {
        //         id: 'helptext',
        //         label: 'Help Text',
        //         component: HelpTextDoc
        //     },
        //     {
        //         id: 'floatlabel',
        //         label: 'Float Label',
        //         component: FloatLabelDoc
        //     },
        //     {
        //         id: 'invalid',
        //         label: 'Invalid',
        //         component: InvalidDoc
        //     },
        //     {
        //         id: 'disabled',
        //         label: 'Disabled',
        //         component: DisabledDoc
        //     },
        //     {
        //         id: 'form',
        //         label: 'Form',
        //         description: 'Compatibility with popular React form libraries.',
        //         children: [
        //             {
        //                 id: 'formik',
        //                 label: 'Formik',
        //                 component: FormikDoc
        //             },
        //             {
        //                 id: 'hookform',
        //                 label: 'Hook Form',
        //                 component: HookFormDoc
        //             }
        //         ]
        //     },

        //     {
        //         id: 'accessibility',
        //         label: 'Accessibility',
        //         component: AccessibilityDoc
        //     }
        // ];
        // const ptDocs = [
        //     {
        //         id: 'pt.wireframe',
        //         label: 'Wireframe',
        //         component: Wireframe
        //     },
        //     {
        //         id: 'pt.iconfield.options',
        //         label: 'IconField PT Options',
        //         component: DocApiTable
        //     },
        //     {
        //         id: 'pt.demo',
        //         label: 'Example',
        //         component: PTDoc
        //     }
    ];

    const themingDocs = [
        // {
        //     id: 'styled',
        //     label: 'Styled',
        //     component: StyledDoc
        // },
        // {
        //     id: 'unstyled',
        //     label: 'Unstyled',
        //     description: 'Theming is implemented with the pass through properties in unstyled mode.',
        //     children: [
        //         {
        //             id: 'tailwind',
        //             label: 'Tailwind',
        //             component: TailwindDoc
        //         }
        //     ]
        // }
    ];

    return (
        <DocComponent
            title="React Input Component"
            header="IconField"
            description="IconField is an extension to standard input element with theming and keyfiltering."
            componentDocs={docs}
            apiDocs={['IconField']}
            // ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default IconFieldDemo;

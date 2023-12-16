import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/selectbutton/accessibilitydoc';
import { BasicDoc } from '@/components/doc/selectbutton/basicdoc';
import { DisabledDoc } from '@/components/doc/selectbutton/disableddoc';
import { FormikDoc } from '@/components/doc/selectbutton/form/formikdoc';
import { HookFormDoc } from '@/components/doc/selectbutton/form/hookformdoc';
import { ImportDoc } from '@/components/doc/selectbutton/importdoc';
import { InvalidDoc } from '@/components/doc/selectbutton/invaliddoc';
import { MultipleDoc } from '@/components/doc/selectbutton/multipledoc';
import { PTDoc } from '@/components/doc/selectbutton/pt/ptdoc';
import { Wireframe } from '@/components/doc/selectbutton/pt/wireframe';
import { TemplateDoc } from '@/components/doc/selectbutton/templatedoc';
import { StyledDoc } from '@/components/doc/selectbutton/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/selectbutton/theming/tailwinddoc';

const SelectButtonDemo = () => {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.selectbutton.options',
            label: 'SelectButton PT Options',
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
            title="React SelectButton Component"
            header="SelectButton"
            description="SelectButton is used to choose single or multiple items from a list using buttons."
            componentDocs={docs}
            apiDocs={['SelectButton']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default SelectButtonDemo;

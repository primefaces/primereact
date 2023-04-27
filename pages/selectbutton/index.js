import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/selectbutton/accessibilitydoc';
import { BasicDoc } from '../../components/doc/selectbutton/basicdoc';
import { DisabledDoc } from '../../components/doc/selectbutton/disableddoc';
import { FormikDoc } from '../../components/doc/selectbutton/form/formikdoc';
import { HookFormDoc } from '../../components/doc/selectbutton/form/hookformdoc';
import { ImportDoc } from '../../components/doc/selectbutton/importdoc';
import { InvalidDoc } from '../../components/doc/selectbutton/invaliddoc';
import { MultipleDoc } from '../../components/doc/selectbutton/multipledoc';
import { TemplateDoc } from '../../components/doc/selectbutton/templatedoc';

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

    return <DocComponent title="React SelectButton Component" header="SelectButton" description="SelectButton is used to choose single or multiple items from a list using buttons." componentDocs={docs} apiDocs={['SelectButton']} />;
};

export default SelectButtonDemo;

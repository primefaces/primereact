import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/colorpicker/pt/ptdoc';
import { Wireframe } from '../../components/doc/colorpicker/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/colorpicker/accessibilitydoc';
import { BasicDoc } from '../../components/doc/colorpicker/basicdoc';
import { DisabledDoc } from '../../components/doc/colorpicker/disableddoc';
import { FormikDoc } from '../../components/doc/colorpicker/form/formikdoc';
import { HookFormDoc } from '../../components/doc/colorpicker/form/hookformdoc';
import { FormatDoc } from '../../components/doc/colorpicker/formatdoc';
import { ImportDoc } from '../../components/doc/colorpicker/importdoc';
import { InlineDoc } from '../../components/doc/colorpicker/inlinedoc';
import { StyleDoc } from '../../components/doc/colorpicker/styledoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const ColorPickerDemo = () => {
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
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDoc
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
            id: 'style',
            label: 'Style',
            component: StyleDoc
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
            id: 'pt.colorpicker.options',
            label: 'ColorPicker PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React ColorPicker Component" header="ColorPicker" description="ColorPicker is an input component to select a color." componentDocs={docs} apiDocs={['ColorPicker']} ptDocs={ptDocs} />;
};

export default ColorPickerDemo;

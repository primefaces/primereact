import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tristatecheckbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tristatecheckbox/basicdoc';
import { DisabledDoc } from '../../components/doc/tristatecheckbox/disableddoc';
import { FormikDoc } from '../../components/doc/tristatecheckbox/form/formikdoc';
import { HookFormDoc } from '../../components/doc/tristatecheckbox/form/hookformdoc';
import { ImportDoc } from '../../components/doc/tristatecheckbox/importdoc';
import { InvalidDoc } from '../../components/doc/tristatecheckbox/invaliddoc';
import { StyleDoc } from '../../components/doc/tristatecheckbox/styledoc';

const TriStateCheckboxDemo = () => {
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

    return (
        <DocComponent
            title="React TriStateCheckbox Component"
            header="TriStateCheckbox"
            description="TriStateCheckbox is an extension to the Checkbox component with an additional state."
            componentDocs={docs}
            apiDocs={[{ name: 'TriStateCheckbox', pathname: '/modules/tristatecheckbox.html' }]}
        />
    );
};

export default TriStateCheckboxDemo;

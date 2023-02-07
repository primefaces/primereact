import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/inputtextarea/accessibilitydoc';
import { AutoResizeDoc } from '../../components/doc/inputtextarea/autoresizedoc';
import { BasicDoc } from '../../components/doc/inputtextarea/basicdoc';
import { DisabledDoc } from '../../components/doc/inputtextarea/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputtextarea/floatlabeldoc';
import { FormikDoc } from '../../components/doc/inputtextarea/form/formikdoc';
import { HookFormDoc } from '../../components/doc/inputtextarea/form/hookformdoc';
import { ImportDoc } from '../../components/doc/inputtextarea/importdoc';
import { InvalidDoc } from '../../components/doc/inputtextarea/invaliddoc';
import { KeyFilterDoc } from '../../components/doc/inputtextarea/keyfilterdoc';
import { StyleDoc } from '../../components/doc/inputtextarea/styledoc';

const InputTextareaDemo = () => {
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
            id: 'autoresize',
            label: 'Auto Resize',
            component: AutoResizeDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
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
            title="React Textarea Component"
            header="InputTextarea"
            description="InputTextarea adds styling and autoResize functionality to standard textarea element."
            componentDocs={docs}
            apiDocs={[{ name: 'InputTextarea', pathname: '/modules/inputtextarea.html' }]}
        />
    );
};

export default InputTextareaDemo;

import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/inputmask/accessibilitydoc';
import { BasicDoc } from '../../components/doc/inputmask/basicdoc';
import { DisabledDoc } from '../../components/doc/inputmask/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputmask/floatlabeldoc';
import { FormikDoc } from '../../components/doc/inputmask/form/formikdoc';
import { HookFormDoc } from '../../components/doc/inputmask/form/hookformdoc';
import { ImportDoc } from '../../components/doc/inputmask/importdoc';
import { InvalidDoc } from '../../components/doc/inputmask/invaliddoc';
import { MaskDoc } from '../../components/doc/inputmask/maskdoc';
import { OptionalDoc } from '../../components/doc/inputmask/optionaldoc';
import { SlotCharDoc } from '../../components/doc/inputmask/slotchardoc';
import { StyleDoc } from '../../components/doc/inputmask/styledoc';

const InputMaskDemo = () => {
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
            id: 'optional',
            label: 'Optional',
            component: OptionalDoc
        },
        {
            id: 'slotchar',
            label: 'Slot Char',
            component: SlotCharDoc
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

    return <DocComponent title="React Mask Component" header="InputMask" description="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone." componentDocs={docs} apiDocs={['InputMask']} />;
};

export default InputMaskDemo;

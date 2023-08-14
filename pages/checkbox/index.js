import React from 'react';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/checkbox/pt/ptdoc';
import { Wireframe } from '../../components/doc/checkbox/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/checkbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/checkbox/basicdoc';
import { DisabledDoc } from '../../components/doc/checkbox/disableddoc';
import { DynamicDoc } from '../../components/doc/checkbox/dynamicdoc';
import { FormikDoc } from '../../components/doc/checkbox/form/formikdoc';
import { HookFormDoc } from '../../components/doc/checkbox/form/hookformdoc';
import { GroupDoc } from '../../components/doc/checkbox/groupdoc';
import { ImportDoc } from '../../components/doc/checkbox/importdoc';
import { InvalidDoc } from '../../components/doc/checkbox/invaliddoc';
import { StyleDoc } from '../../components/doc/checkbox/styledoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const CheckboxDemo = () => {
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
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
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
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.checkbox.options',
            label: 'Checkbox PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Checkbox Component" header="Checkbox" description="Checkbox is an extension to standard checkbox element with theming." componentDocs={docs} apiDocs={['Checkbox']} ptDocs={ptDocs} />;
};

export default CheckboxDemo;

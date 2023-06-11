import React from 'react';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/cascadeselect/pt/ptdoc';
import { Wireframe } from '../../components/doc/cascadeselect/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/cascadeselect/accessibilitydoc';
import { BasicDoc } from '../../components/doc/cascadeselect/basicdoc';
import { DisabledDoc } from '../../components/doc/cascadeselect/disableddoc';
import { FloatLabelDoc } from '../../components/doc/cascadeselect/floatlabeldoc';
import { FormikDoc } from '../../components/doc/cascadeselect/form/formikdoc';
import { HookFormDoc } from '../../components/doc/cascadeselect/form/hookformdoc';
import { ImportDoc } from '../../components/doc/cascadeselect/importdoc';
import { InvalidDoc } from '../../components/doc/cascadeselect/invaliddoc';
import { StyleDoc } from '../../components/doc/cascadeselect/styledoc';
import { TemplateDoc } from '../../components/doc/cascadeselect/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const CascadeSelectDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.cascadeselect.options',
            label: 'CascadeSelect PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return (
        <DocComponent
            title="React CascadeSelect Component"
            header="CascadeSelect"
            description="CascadeSelect is a form component to select a value from a nested structure of options."
            componentDocs={docs}
            apiDocs={['CascadeSelect']}
            ptDocs={ptDocs}
        />
    );
};

export default CascadeSelectDemo;

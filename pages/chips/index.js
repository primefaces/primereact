import React from 'react';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/chips/pt/ptdoc';
import { Wireframe } from '../../components/doc/chips/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/chips/accessibilitydoc';
import { BasicDoc } from '../../components/doc/chips/basicdoc';
import { DisabledDoc } from '../../components/doc/chips/disableddoc';
import { FloatLabelDoc } from '../../components/doc/chips/floatlabeldoc';
import { FormikDoc } from '../../components/doc/chips/form/formikdoc';
import { HookFormDoc } from '../../components/doc/chips/form/hookformdoc';
import { ImportDoc } from '../../components/doc/chips/importdoc';
import { IconDoc } from '../../components/doc/chips/icondoc';
import { InvalidDoc } from '../../components/doc/chips/invaliddoc';
import { KeyFilterDoc } from '../../components/doc/chips/keyfilterdoc';
import { SeparatorDoc } from '../../components/doc/chips/separatordoc';
import { StyleDoc } from '../../components/doc/chips/styledoc';
import { TemplateDoc } from '../../components/doc/chips/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const ChipsDemo = () => {
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
            id: 'separator',
            label: 'Separator',
            component: SeparatorDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'float',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
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
            id: 'pt.chips.options',
            label: 'Chips PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Chips Component" header="Chips" description="Chips is used to enter multiple values on an input field." componentDocs={docs} apiDocs={['Chips']} ptDocs={ptDocs} />;
};

export default ChipsDemo;

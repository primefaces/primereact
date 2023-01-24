import Head from 'next/head';
import React, { useState } from 'react';
import { AccessibilityDoc } from '../../components/doc/chips/accessibilitydoc';
import { ApiDoc } from '../../components/doc/chips/apidoc';
import { BasicDoc } from '../../components/doc/chips/basicdoc';
import { DisabledDoc } from '../../components/doc/chips/disableddoc';
import { FloatLabelDoc } from '../../components/doc/chips/floatlabeldoc';
import { ImportDoc } from '../../components/doc/chips/importdoc';
import { InvalidDoc } from '../../components/doc/chips/invaliddoc';
import { KeyFilterDoc } from '../../components/doc/chips/keyfilterdoc';
import { SeparatorDoc } from '../../components/doc/chips/separatordoc';
import { StyleDoc } from '../../components/doc/chips/styledoc';
import { TemplateDoc } from '../../components/doc/chips/templatedoc';
import { FormikDoc } from '../../components/doc/chips/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/chips/validation/hookformdoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            id: 'validation',
            label: 'Validation',
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
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
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
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];

    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);
    const [values3, setValues3] = useState([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    };

    return (
        <div>
            <Head>
                <title>React Chips Component</title>
                <meta name="description" content="Chips is used to enter multiple values on an input field." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Chips</h1>
                    <p>Chips is used to enter multiple values on an input field.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipsDemo;

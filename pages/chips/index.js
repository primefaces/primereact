import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/chips/accessibilitydoc';
import { BasicDoc } from '../../components/doc/chips/basicdoc';
import { DisabledDoc } from '../../components/doc/chips/disableddoc';
import { FloatLabelDoc } from '../../components/doc/chips/floatlabeldoc';
import { FormikDoc } from '../../components/doc/chips/form/formikdoc';
import { HookFormDoc } from '../../components/doc/chips/form/hookformdoc';
import { ImportDoc } from '../../components/doc/chips/importdoc';
import { InvalidDoc } from '../../components/doc/chips/invaliddoc';
import { KeyFilterDoc } from '../../components/doc/chips/keyfilterdoc';
import { SeparatorDoc } from '../../components/doc/chips/separatordoc';
import { StyleDoc } from '../../components/doc/chips/styledoc';
import { TemplateDoc } from '../../components/doc/chips/templatedoc';
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Chips', pathname: '/modules/chips.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Chips Component</title>
                <meta name="description" content="Chips is used to enter multiple values on an input field." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an input field.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipsDemo;

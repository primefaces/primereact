import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/radiobutton/accessibilitydoc';
import { DisabledDoc } from '../../components/doc/radiobutton/disableddoc';
import { DynamicDoc } from '../../components/doc/radiobutton/dynamicdoc';
import { FormikDoc } from '../../components/doc/radiobutton/form/formikdoc';
import { HookFormDoc } from '../../components/doc/radiobutton/form/hookformdoc';
import { GroupDoc } from '../../components/doc/radiobutton/groupdoc';
import { ImportDoc } from '../../components/doc/radiobutton/importdoc';
import { InvalidDoc } from '../../components/doc/radiobutton/invaliddoc';
import { StyleDoc } from '../../components/doc/radiobutton/styledoc';

const RadioButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'RadioButton', pathname: '/modules/radiobutton.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React RadioButton Component</title>
                <meta name="description" content="RadioButton is an extension to standard radio button element with theming." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with theming.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RadioButtonDemo;

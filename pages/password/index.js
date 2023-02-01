import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/password/accessibilitydoc';
import { BasicDoc } from '../../components/doc/password/basicdoc';
import { DisabledDoc } from '../../components/doc/password/disableddoc';
import { FloatLabelDoc } from '../../components/doc/password/floatlabeldoc';
import { FormikDoc } from '../../components/doc/password/form/formikdoc';
import { HookFormDoc } from '../../components/doc/password/form/hookformdoc';
import { ImportDoc } from '../../components/doc/password/importdoc';
import { InvalidDoc } from '../../components/doc/password/invaliddoc';
import { LocaleDoc } from '../../components/doc/password/localedoc';
import { MeterDoc } from '../../components/doc/password/meterdoc';
import { StyleDoc } from '../../components/doc/password/styledoc';
import { TemplateDoc } from '../../components/doc/password/templatedoc';
import { ToggleMaskDoc } from '../../components/doc/password/togglemaskdoc';

const PasswordDemo = () => {
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
            id: 'meter',
            label: 'Meter',
            component: MeterDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'togglemask',
            label: 'Toggle Mask',
            component: ToggleMaskDoc
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Password', pathname: '/modules/password.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Password Component</title>
                <meta name="description" content="Password displays strength indicator for password fields." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Password</h1>
                        <p>Password displays strength indicator for password fields.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PasswordDemo;

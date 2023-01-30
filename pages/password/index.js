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
import { PasswordMeter } from '../../components/doc/password/passwordmeterdoc';
import { ShowPassword } from '../../components/doc/password/showpassworddoc';
import { StyleDoc } from '../../components/doc/password/styledoc';
import { Templating } from '../../components/doc/password/templatingdoc';

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
            id: 'passwordmeterdoc',
            label: 'Password Meter',
            component: PasswordMeter
        },
        {
            id: 'showpassword',
            label: 'Show Password',
            component: ShowPassword
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
            id: 'templating',
            label: 'Templating',
            component: Templating
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

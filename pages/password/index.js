import Head from 'next/head';
import React, { useState } from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/password/apidoc';
import { AccessibilityDoc } from '../../components/doc/password/accessibilitydoc';
import { StylingDoc } from '../../components/doc/password/stylingdoc';
import { BasicDoc } from '../../components/doc/password/basicdoc';
import { DisabledDoc } from '../../components/doc/password/disableddoc';
import { FloatLabelDoc } from '../../components/doc/password/floatlabeldoc';
import { ImportDoc } from '../../components/doc/password/importdoc';
import { InvalidDoc } from '../../components/doc/password/invaliddoc';
import { PasswordMeter } from '../../components/doc/password/passwordmeterdoc';
import { ShowPassword } from '../../components/doc/password/showpassworddoc';
import { Templating } from '../../components/doc/password/templatingdoc';
import { FormikDoc } from '../../components/doc/password/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/password/validation/hookformdoc';
import { Divider } from '../../components/lib/divider/Divider';

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
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
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
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div>
            <Head>
                <title>React Password Component</title>
                <meta name="description" content="Password displays strength indicator for password fields." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Password</h1>
                    <p>Password displays strength indicator for password fields.</p>
                </div>

                <DocActions github="password/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PasswordDemo;

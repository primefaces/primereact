import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/captcha/accessibilitydoc';
import { ApiDoc } from '../../components/doc/captcha/apidoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

import { CaptchaDoc } from '../../components/doc/captcha/captchadoc';
import { ImportDoc } from '../../components/doc/captcha/importdoc';
import { DocActions } from '../../components/doc/common/docactions';

const CaptchaDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'captcha',
            label: 'Captcha',
            component: CaptchaDoc
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

    return (
        <div>
            <Head>
                <title>React Captcha Component</title>
                <meta name="description" content="Captcha is a form validation component based on Recaptcha." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Captcha</h1>
                    <p>Captcha is a form validation component based on Recaptcha.</p>
                </div>
                <DocActions github="/captcha" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CaptchaDemo;

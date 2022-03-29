import React, { useRef } from 'react';
import { Captcha } from '../../components/lib/captcha/Captcha';
import { Toast } from '../../components/lib/toast/Toast';
import CaptchaDoc from '../../components/doc/captcha';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const CaptchaDemo = (props) => {

    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    }

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

                <DocActions github="captcha/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast}></Toast>

                <div className="card">
                    <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
                </div>
            </div>

            <CaptchaDoc />
        </div>
    )
}

export default CaptchaDemo;

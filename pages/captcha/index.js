import React, { Component } from 'react';
import { Captcha } from '../../components/lib/captcha/Captcha';
import { Toast } from '../../components/lib/toast/Toast';
import { CaptchaDoc } from '../../components/doc/captcha';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class CaptchaDemo extends Component {

    constructor(props) {
        super(props);
        this.showResponse = this.showResponse.bind(this);
    }

    showResponse() {
        this.toast.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    }

    render() {
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
                    <Toast ref={(el) => this.toast = el}></Toast>

                    <div className="card">
                        <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={this.showResponse} />
                    </div>
                </div>

                <CaptchaDoc />
            </div>
        )
    }
}

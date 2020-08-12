import React, { Component } from 'react';
import { Captcha } from '../../components/captcha/Captcha';
import { Growl } from '../../components/growl/Growl';
import { CaptchaDoc } from './CaptchaDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class CaptchaDemo extends Component {

    constructor(props) {
        super(props);
        this.showResponse = this.showResponse.bind(this);
    }

    showResponse() {
        this.growl.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="captcha">
                        <h1>Captcha</h1>
                        <p>Captcha is a form validation component based on Recaptcha.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <div className="card">
                        <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={this.showResponse} />
                    </div>
                </div>

                <CaptchaDoc />
            </div>
        )
    }
}

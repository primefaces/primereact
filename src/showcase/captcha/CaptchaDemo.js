import React, { Component } from 'react';
import { Captcha } from '../../components/captcha/Captcha';
import { Growl } from '../../components/growl/Growl';
import AppContentContext from '../../AppContentContext';
import { CaptchaDoc } from './CaptchaDoc';

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
                    <div className="feature-intro">
                        <h1>Captcha</h1>
                        <p>Captcha is a form validation component based on Recaptcha.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("captcha")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={this.showResponse} />
                </div>

                <CaptchaDoc />
            </div>
        )
    }
}

import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class CaptchaDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';

export class CaptchaDemo extends Component {

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
                <Toast ref={(el) => this.toast = el}></Toast>

                <div className="card">
                    <Captcha siteKey="YOUR_SITE_KEY" onResponse={this.showResponse} />
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useRef } from 'react';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';

const CaptchaDemo = () => {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import { Captcha } from 'primereact/captcha';
import { Toast } from 'primereact/toast';

const CaptchaDemo = () => {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
            </div>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Captcha } from 'primereact/captcha';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Captcha is used with a siteKey and a callback to verify the response.</p>
<CodeHighlight>
{`
<Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse}></Captcha>
`}
</CodeHighlight>

                        <h5>Verification</h5>
                        <p>In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href="https://developers.google.com/recaptcha/docs/verify">Read more</a> at
                        official documentation.</p>
<CodeHighlight lang="js">
{`
const showResponse = (response) => {
//call to a backend to verify against recaptcha with private key
}
`}
</CodeHighlight>

                        <p>In addition, include the captcha widget resource to your page.</p>
<CodeHighlight>
{`
<script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
`}
</CodeHighlight>

                        <h5>Properties</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>siteKey</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Public sitekey.</td>
                                    </tr>
                                    <tr>
                                        <td>theme</td>
                                        <td>string</td>
                                        <td>light</td>
                                        <td>The color scheme of the widget.</td>
                                    </tr>
                                    <tr>
                                        <td>type</td>
                                        <td>string</td>
                                        <td>image</td>
                                        <td>The type of CAPTCHA to serve.</td>
                                    </tr>
                                    <tr>
                                        <td>size</td>
                                        <td>string</td>
                                        <td>normal</td>
                                        <td>The size of the widget.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>The tabIndex of the widget and challenge.</td>
                                    </tr>
                                    <tr>
                                        <td>language</td>
                                        <td>string</td>
                                        <td>en</td>
                                        <td>Language of the widget.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onResponse</td>
                                        <td>event.response: The user response token.</td>
                                        <td>The callback function to be executed when the user submits a successful CAPTCHA response.</td>
                                    </tr>
                                    <tr>
                                        <td>onExpire</td>
                                        <td>-</td>
                                        <td>The callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Methods</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>reset</td>
                                        <td>-</td>
                                        <td>Resets the reCAPTCHA widget.</td>
                                    </tr>
                                    <tr>
                                        <td>getResponse</td>
                                        <td>-</td>
                                        <td>Gets the response for the reCAPTCHA widget.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>Google Recaptcha V2</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'CaptchaDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}

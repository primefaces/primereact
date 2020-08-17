import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class CaptchaDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Captcha } from 'primereact/captcha';
import { Growl } from 'primereact/growl';

export class CaptchaDemo extends Component {

    constructor() {
        super();
        this.showResponse = this.showResponse.bind(this);
    }

    showResponse() {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'User Responded'});
    }

    render() {
        return (
            <div className="button-demo">
                <Growl ref={(el) => this.growl = el}></Growl>

                <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={this.showResponse} />
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
import { Growl } from 'primereact/growl';

const CaptchaDemo = () => {
    let growl = useRef(null);

    const showResponse = () => {
        growl.current.show({severity: 'info', summary: 'Success', detail: 'User Responded'});
    }

    return (
        <div className="button-demo">
            <Growl ref={growl}></Growl>

            <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={showResponse} />
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
import { Growl } from 'primereact/growl';

const CaptchaDemo = () => {
    let growl = useRef<any>(null);

    const showResponse = () => {
        growl.current.show({severity: 'info', summary: 'Success', detail: 'User Responded'});
    }

    return (
        <div className="button-demo">
            <Growl ref={growl}></Growl>

            <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={showResponse} />
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.button-demo button {
    margin-right: .5em;
}
            `
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
                        <h3>Import</h3>
                        <CodeHighlight lang="js">
                            {`
import {Captcha} from 'primereact/captcha';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Captcha is used with a siteKey and a callback to verify the response.</p>
                        <CodeHighlight>
                            {`
<Captcha siteKey="YOUR_SITE_KEY" onResponse={this.showResponse}></Captcha>

`}
                        </CodeHighlight>

                        <h3>Verification</h3>
                        <p>In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href="https://developers.google.com/recaptcha/docs/verify">Read more</a> at
                        official documentation.</p>
                        <CodeHighlight lang="js">
                            {`
showResponse(response) {
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

                        <h3>Properties</h3>
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
                                        <td>The tabindex of the widget and challenge.</td>
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

                        <h3>Events</h3>
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

                        <h3>Methods</h3>
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

                        <h3>Dependencies</h3>
                        <p>Google Recaptcha V2</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="CaptchaDemo" sources={[key, value]} extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}

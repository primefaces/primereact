import React, {Component} from 'react';
import {Captcha} from '../../components/captcha/Captcha';
import {Growl} from '../../components/growl/Growl';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Captcha</h1>
                        <p>Captcha is a form validation component based on Recaptcha.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("captcha")} className="layout-changelog-button">{context.changelogText}</button> }
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

class CaptchaDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Captcha} from 'primereact/captcha';
import {Growl} from 'primereact/growl';

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
            <div>
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
import {Captcha} from 'primereact/captcha';
import {Growl} from 'primereact/growl';

const CaptchaDemo = () => {
    let growl = useRef(null);

    const showResponse = () => {
        growl.current.show({severity: 'info', summary: 'Success', detail: 'User Responded'});
    }

    return (
        <div>
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
import {Captcha} from 'primereact/captcha';
import {Growl} from 'primereact/growl';

const CaptchaDemo = () => {
    let growl = useRef<any>(null);

    const showResponse = () => {
        growl.current.show({severity: 'info', summary: 'Success', detail: 'User Responded'});
    }

    return (
        <div>
            <Growl ref={growl}></Growl>

            <Captcha siteKey="6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA" onResponse={showResponse} />
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/captcha" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="CaptchaDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Captcha} from 'primereact/captcha';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Captcha is used with a siteKey and a callback to verify the response.</p>
<CodeHighlight className="language-jsx">
{`
<Captcha siteKey="YOUR_SITE_KEY" onResponse={this.showResponse}></Captcha>

`}
</CodeHighlight>

                        <h3>Verification</h3>
                        <p>In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href="https://developers.google.com/recaptcha/docs/verify">Read more</a> at
                        official documentation.</p>
<CodeHighlight className="language-javascript">
{`
showResponse(response) {
    //call to a backend to verify against recaptcha with private key
}

`}
</CodeHighlight>

                        <p>In addition, include the captcha widget resource to your page.</p>
<CodeHighlight className="language-jsx">
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
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView >
            </div>
        )
    }
}

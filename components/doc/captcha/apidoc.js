import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <DocSubSection id="verification" label="Verification">
                <p>
                    In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href="https://developers.google.com/recaptcha/docs/verify">Read more</a> at official documentation.
                </p>
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
            </DocSubSection>

            <DocSubSection id="properties" label="Properties">
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
            </DocSubSection>
            <DocSubSection id="events" label="Events">
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
            </DocSubSection>
            <DocSubSection id="methods" label="Methods">
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
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <p>
                        Refer to the{' '}
                        <a alt="Recaptcha Accessibility " href="https://support.google.com/recaptcha/answer/6175971?hl=en">
                            Recaptcha Accessibility
                        </a>{' '}
                        documentation for more information.
                    </p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}

import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { CodeHighlight } from '../common/codehighlight';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
                <p>Password accepts all valid properties of an input element in addition the custom properties below.</p>

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
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the input element.</td>
                            </tr>
                            <tr>
                                <td>promptLabel</td>
                                <td>string</td>
                                <td>Please enter a password</td>
                                <td>Text to prompt password entry.</td>
                            </tr>
                            <tr>
                                <td>weakLabel</td>
                                <td>string</td>
                                <td>Weak</td>
                                <td>Text for a weak password.</td>
                            </tr>
                            <tr>
                                <td>mediumLabel</td>
                                <td>string</td>
                                <td>Medium</td>
                                <td>Text for a medium password.</td>
                            </tr>
                            <tr>
                                <td>strongLabel</td>
                                <td>string</td>
                                <td>Strong</td>
                                <td>Text for a strong password.</td>
                            </tr>
                            <tr>
                                <td>mediumRegex</td>
                                <td>string</td>
                                <td>{`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).`}</td>
                                <td>Regex for a medium level password.</td>
                            </tr>
                            <tr>
                                <td>strongRegex</td>
                                <td>string</td>
                                <td>{`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})`}</td>
                                <td>Regex for a strong level password.</td>
                            </tr>
                            <tr>
                                <td>feedback</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the strength indicator or not.</td>
                            </tr>
                            <tr>
                                <td>toggleMask</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to show an icon to display the password as plain text.</td>
                            </tr>
                            <tr>
                                <td>appendTo</td>
                                <td>DOM element | string</td>
                                <td>document.body</td>
                                <td>
                                    DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of panel header if "feedback" is enabled.</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of panel content if "feedback" is enabled.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of panel footer if "feedback" is enabled.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of mask icon if "toggleMask" is enabled.</td>
                            </tr>
                            <tr>
                                <td>tooltip</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Content of the tooltip.</td>
                            </tr>
                            <tr>
                                <td>tooltipOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>inputStyle</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Inline style of the input field.</td>
                            </tr>
                            <tr>
                                <td>inputClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the input field.</td>
                            </tr>
                            <tr>
                                <td>panelClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the overlay panel element.</td>
                            </tr>
                            <tr>
                                <td>panelStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the overlay panel element.</td>
                            </tr>
                            <tr>
                                <td>keyfilter</td>
                                <td>string/regex</td>
                                <td>null</td>
                                <td>Format definition of the keys to block.</td>
                            </tr>
                            <tr>
                                <td>transitionOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    The properties of{' '}
                                    <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">
                                        CSSTransition
                                    </a>{' '}
                                    can be customized, except for "nodeRef" and "in" properties.
                                </td>
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
                                <td>onShow</td>
                                <td>-</td>
                                <td>Callback to invoke when overlay becomes visible.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Callback to invoke when overlay becomes hidden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}

import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
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
                            <td>target</td>
                            <td>DomElement</td>
                            <td>null</td>
                            <td>Element to align the overlay. (Required)</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifies the visibility of the confirm popup.</td>
                        </tr>
                        <tr>
                            <td>message</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Message of the confirmation.</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon to display next to the message.</td>
                        </tr>
                        <tr>
                            <td>acceptLabel</td>
                            <td>string</td>
                            <td>Yes</td>
                            <td>Label of the accept button.</td>
                        </tr>
                        <tr>
                            <td>rejectLabel</td>
                            <td>string</td>
                            <td>No</td>
                            <td>Label of the reject button.</td>
                        </tr>
                        <tr>
                            <td>acceptIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon of the accept button.</td>
                        </tr>
                        <tr>
                            <td>rejectIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon of the reject button.</td>
                        </tr>
                        <tr>
                            <td>acceptClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the accept button.</td>
                        </tr>
                        <tr>
                            <td>rejectClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the reject button.</td>
                        </tr>
                        <tr>
                            <td>dismissable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables to hide the popup when outside is clicked.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Footer content of the confirm popup.</td>
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
                            <td>style</td>
                            <td>string</td>
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
                            <td>accept</td>
                            <td>null</td>
                            <td>Callback to execute when action is confirmed.</td>
                        </tr>
                        <tr>
                            <td>reject</td>
                            <td>null</td>
                            <td>Callback to execute when action is rejected.</td>
                        </tr>

                        <tr>
                            <td>onHide</td>
                            <td>
                                result: Indicates with which selection the popup was closed. <br />
                                Valid values are 'accept', 'reject' and undefined (outside click).
                            </td>
                            <td>Callback to invoke when confirm popup is hidden.</td>
                        </tr>
                        <tr>
                            <td>onShow</td>
                            <td>-</td>
                            <td>Callback to invoke when overlay panel becomes visible.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>
                Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
            </p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-confirm-popup</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-content</td>
                            <td>Content element.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-icon</td>
                            <td>Message icon.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-message</td>
                            <td>Message text.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-footer</td>
                            <td>Footer element for buttons.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    ConfirmPopup component uses <i>alertdialog</i> role and since any attribute is passed to the root element you may define attributes like <i>aria-label</i> or <i>aria-labelledby</i> to describe the popup contents. In addition{' '}
                    <i>aria-modal</i> is added since focus is kept within the popup.
                </p>
                <p>
                    It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary. ConfirmPopup adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to
                    the trigger so that the relation between the trigger and the popup is defined.
                </p>

                <h4>Overlay Keyboard Support</h4>
                <p>
                    When the popup gets opened, the first focusable element receives the focus and this can be customized by adding <i>autofocus</i> to an element within the popup.
                </p>

                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the next the focusable element within the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>tab</i>
                                </td>
                                <td>Moves focus to the previous the focusable element within the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup and moves focus to the trigger.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Buttons Keyboard Support</h4>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
            <h3>Dependencies</h3>
            <p>None.</p>
        </>
    );
}

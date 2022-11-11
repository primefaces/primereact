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
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>legend</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Header text of the fieldset.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>toggleable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, content can toggled by clicking the legend.</td>
                        </tr>
                        <tr>
                            <td>collapsed</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines the default visibility state of the content.</td>
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
                            <td>onCollapse</td>
                            <td>event.originalEvent: Browser event </td>
                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                        </tr>
                        <tr>
                            <td>onExpand</td>
                            <td>event.originalEvent: Browser event </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                        <tr>
                            <td>onToggle</td>
                            <td>
                                event.originalEvent: browser event <br />
                                event.value: Collapsed state as a boolean
                            </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>event Browser event </td>
                            <td>Callback to invoke when fieldset is clicked.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>
                Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
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
                            <td>p-fieldset</td>
                            <td>Fieldset element.</td>
                        </tr>
                        <tr>
                            <td>p-fieldset-toggleable</td>
                            <td>Toggleable fieldset element.</td>
                        </tr>
                        <tr>
                            <td>p-fieldset-legend</td>
                            <td>Legend element.</td>
                        </tr>
                        <tr>
                            <td>p-fieldset-content</td>
                            <td>Content element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Fieldset component uses the semantic <i>fieldset</i> element. When toggleable option is enabled, a clickable element with <i>button</i> role is included inside the <i>legend</i> element, this button has <i>aria-controls</i> to
                    define the id of the content section along with <i>aria-expanded</i> for the visibility state. The value to read the button defaults to the value of the <i>legend</i> property and can be customized by defining an <i>aria-label</i>{' '}
                    or <i>aria-labelledby</i> via the <i>toggleButtonProps</i> property.
                </p>
                <p>
                    The content uses <i>region</i>, defines an id that matches the <i>aria-controls</i> of the content toggle button and <i>aria-labelledby</i> referring to the id of the header.
                </p>

                <h4>Content Toggle Button Keyboard Support</h4>
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
                                <td>Moves focus to the next the focusable element in the page tab sequence.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>tab</i>
                                </td>
                                <td>Moves focus to the previous the focusable element in the page tab sequence.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Toggles the visibility of the content.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Toggles the visibility of the content.</td>
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

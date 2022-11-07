import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
            <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows;</p>
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
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>string|array</td>
                            <td>@</td>
                            <td>Set trigger keyword.</td>
                        </tr>
                        <tr>
                            <td>suggestions</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of suggestions to display.</td>
                        </tr>
                        <tr>
                            <td>field</td>
                            <td>string|array</td>
                            <td>null</td>
                            <td>Field of a suggested object to resolve and display.</td>
                        </tr>
                        <tr>
                            <td>inputStyle</td>
                            <td>object</td>
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
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the overlay panel element.</td>
                        </tr>
                        <tr>
                            <td>scrollHeight</td>
                            <td>string</td>
                            <td>200px</td>
                            <td>Maximum height of the suggestions panel.</td>
                        </tr>
                        <tr>
                            <td>autoHighlight</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When enabled, highlights the first item in the list by default.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Placeholder text for the input.</td>
                        </tr>
                        <tr>
                            <td>delay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay between keystrokes to wait before sending a query.</td>
                        </tr>
                        <tr>
                            <td>headerTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of header.</td>
                        </tr>
                        <tr>
                            <td>footerTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of footer.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Custom template for the items.</td>
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
                            <td>onChange</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when value changes.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the element receives focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the element loses focus.</td>
                        </tr>
                        <tr>
                            <td>onShow</td>
                            <td>-</td>
                            <td>Callback to invoke when overlay panel becomes visible.</td>
                        </tr>
                        <tr>
                            <td>onHide</td>
                            <td>-</td>
                            <td>Callback to invoke when overlay panel becomes hidden.</td>
                        </tr>
                        <tr>
                            <td>onSearch</td>
                            <td>
                                event.originalEvent: Browser event <br />
                                event.trigger: Current trigger keyword.
                            </td>
                            <td>Callback to invoke when search. </td>
                        </tr>
                        <tr>
                            <td>onSelect</td>
                            <td>
                                event.originalEvent: Browser event
                                <br />
                                event.suggestion: Selected item
                            </td>
                            <td>Callback to invoke when selection changes.</td>
                        </tr>
                        <tr>
                            <td>onInput</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke on input event of input field.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes</p>
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
                            <td>p-mention</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-mention-panel</td>
                            <td>Overlay panel of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-mention-items</td>
                            <td>List container of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-mention-item</td>
                            <td>List item of a suggestion.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role in addition to{' '}
                    <i>aria-autocomplete</i>, <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used to instruct
                    screen reader which option to read during keyboard navigation within the popup list.
                </p>
                <p>
                    The popup list has an id that refers to the <i>aria-controls</i> attribute of the input element and uses <i>listbox</i> as the role. Each list item has <i>option</i> role and an id to match the <i>aria-activedescendant</i> of the
                    input element.
                </p>
                <CodeHighlight>
                    {`
<label htmlFor="men1">Username</label>
<Mention inputId="men1" />

<span id="men2">Email</span>
<Mention aria-labelledby="men2" />

<Mention aria-label="City" />
`}
                </CodeHighlight>
                <h4>Keyboard Support</h4>
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
                                <td>Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Highlights the previous item if popup is visible.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Highlights the next item if popup is visible.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Selects the highlighted item and closes the popup if popup is visible.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>home</i>
                                </td>
                                <td>Highlights the first item if popup is visible.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>end</i>
                                </td>
                                <td>Highlights the last item if popup is visible.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Hides the popup.</td>
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

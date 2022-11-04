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
                            <td>Unique identifier of the component.</td>
                        </tr>
                        <tr>
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the focus input to match a label defined for the chips.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input field.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Advisory information to display on input.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of entries allowed.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
                        </tr>
                        <tr>
                            <td>readOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be read-only.</td>
                        </tr>
                        <tr>
                            <td>removable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether an item is removable.</td>
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
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                        </tr>
                        <tr>
                            <td>allowDuplicate</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to allow duplicate values or not.</td>
                        </tr>
                        <tr>
                            <td>separator</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Template function to return the content of a chip.</td>
                        </tr>
                        <tr>
                            <td>keyfilter</td>
                            <td>string/regex</td>
                            <td>null</td>
                            <td>Format definition of the keys to block.</td>
                        </tr>
                        <tr>
                            <td>addOnBlur</td>
                            <td>boolean</td>
                            <td>null</td>
                            <td>Whether to add an item when the input loses focus.</td>
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
                            <td>
                                originalEvent: Browser event <br />
                                value: New value of the component
                            </td>
                            <td>Callback to invoke when a chip is added or removed.</td>
                        </tr>
                        <tr>
                            <td>onAdd</td>
                            <td>
                                originalEvent: Browser event <br />
                                value: Added item value
                            </td>
                            <td>Callback to invoke when a chip is added. Return 'false' to prevent the item from being added.</td>
                        </tr>
                        <tr>
                            <td>onRemove</td>
                            <td>
                                originalEvent: Browser event <br />
                                value: Removed item value
                            </td>
                            <td>Callback to invoke when a chip is removed.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when the component gets focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when the component loses focus.</td>
                        </tr>
                        <tr>
                            <td>onKeyDown</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the key pressed.</td>
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
                            <td>p-chips</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-chips-token</td>
                            <td>Chip element container.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-icon</td>
                            <td>Icon of a chip.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-label</td>
                            <td>label of a chip.</td>
                        </tr>
                        <tr>
                            <td>p-chips-input-token</td>
                            <td>Container of input element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. Chip list uses <i>listbox</i> role with{' '}
                    <i>aria-orientation</i> set to horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.
                </p>
                <CodeHighlight>
                    {`
<label htmlFor="chips1">Tags</label>
<Chips inputId="chips1" />

<span id="chips2">Tags</span>
<Chips aria-labelledby="chips2" />

<Chips aria-label="Tags" />
`}
                </CodeHighlight>

                <h4>Input Field Keyboard Support</h4>
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
                                <td>Moves focus to the input element</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Adds a new chips using the input field value.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>backspace</i>
                                </td>
                                <td>Deletes the previous chip if the input field is empty.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>left arrow</i>
                                </td>
                                <td>Moves focus to the previous chip if available and input field is empty.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Chip Keyboard Support</h4>
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
                                    <i>left arrow</i>
                                </td>
                                <td>Moves focus to the previous chip if available.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>right arrow</i>
                                </td>
                                <td>Moves focus to the next chip, if there is none then input field receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>backspace</i>
                                </td>
                                <td>Deletes the chips and adds focus to the input field.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
            
            <h4>Dependencies</h4>
            <p>None.</p>
        </>
    );
}

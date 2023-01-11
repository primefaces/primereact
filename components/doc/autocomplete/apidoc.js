import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
                <p>Standard HTMLSpanElement properties are passed to the wrapping div element. In addition the component uses these properties:</p>
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
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the input element.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>text</td>
                                <td>Type of the input element.</td>
                            </tr>
                            <tr>
                                <td>suggestions</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of suggestions to display.</td>
                            </tr>
                            <tr>
                                <td>field</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Field of a suggested object to resolve and display.</td>
                            </tr>
                            <tr>
                                <td>optionGroupLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name or getter function to use as the label of an option group.</td>
                            </tr>
                            <tr>
                                <td>optionGroupChildren</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property name or getter function that refers to the children options of option group.</td>
                            </tr>
                            <tr>
                                <td>forceSelection</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.</td>
                            </tr>
                            <tr>
                                <td>autoHighlight</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, highlights the first item in the list by default.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>200px</td>
                                <td>Maximum height of the suggestions panel.</td>
                            </tr>
                            <tr>
                                <td>dropdown</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays a button next to the input field when enabled.</td>
                            </tr>
                            <tr>
                                <td>dropdownMode</td>
                                <td>string</td>
                                <td>blank</td>
                                <td>Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.</td>
                            </tr>
                            <tr>
                                <td>dropdownAutoFocus</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Focus the input field when the dropdown button is clicked if enabled.</td>
                            </tr>
                            <tr>
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies if multiple values can be selected.</td>
                            </tr>
                            <tr>
                                <td>selectionLimit</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of maximum options that can be selected.</td>
                            </tr>
                            <tr>
                                <td>showEmptyMessage</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to show the empty message or not.</td>
                            </tr>
                            <tr>
                                <td>emptyMessage</td>
                                <td>string</td>
                                <td>No results found.</td>
                                <td>Text to display when there is no data. Defaults to global value in i18n translation configuration.</td>
                            </tr>
                            <tr>
                                <td>minLength</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Minimum number of characters to initiate a search.</td>
                            </tr>
                            <tr>
                                <td>delay</td>
                                <td>number</td>
                                <td>300</td>
                                <td>Delay between keystrokes to wait before sending a query.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
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
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the input element.</td>
                            </tr>
                            <tr>
                                <td>inputStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the input field.</td>
                            </tr>
                            <tr>
                                <td>inputClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the input field.</td>
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
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Hint text for the input field.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the input cannot be typed.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>maxlength</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Maximum number of character allows in the input field.</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Size of the input field.</td>
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
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>autoFocus</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should automatically get focus on load.</td>
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
                                <td>itemTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of a list item.</td>
                            </tr>
                            <tr>
                                <td>selectedItemTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of a selected item.</td>
                            </tr>
                            <tr>
                                <td>optionGroupTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of an option group item.</td>
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
                            <tr>
                                <td>dropdownAriaLabel</td>
                                <td>string</td>
                                <td>Choose</td>
                                <td>ARIA label for the dropdown button. Defaults to placeholder then Locale "choose" label.</td>
                            </tr>
                            <tr>
                                <td>dropdownIcon</td>
                                <td>any</td>
                                <td>pi pi-chevron-down</td>
                                <td>Icon class of the dropdown icon.</td>
                            </tr>
                            <tr>
                                <td>removeIcon</td>
                                <td>any</td>
                                <td>pi pi-times-circle</td>
                                <td>Icon of the remove chip element in multiple mode.</td>
                            </tr>
                            <tr>
                                <td>virtualScrollerOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.
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
                                <td>completeMethod</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.query: Value to search with
                                </td>
                                <td>Callback to invoke to search for suggestions.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Value of the component
                                </td>
                                <td>Callback to invoke when autocomplete value changes.</td>
                            </tr>
                            <tr>
                                <td>onFocus</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when autocomplete gets focus.</td>
                            </tr>
                            <tr>
                                <td>onBlur</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when autocomplete loses focus.</td>
                            </tr>
                            <tr>
                                <td>onSelect</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Value of the component
                                </td>
                                <td>Callback to invoke when a suggestion is selected.</td>
                            </tr>
                            <tr>
                                <td>onUnselect</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Value of the component
                                </td>
                                <td>Callback to invoke when a selected value is removed.</td>
                            </tr>
                            <tr>
                                <td>onDropdownClick</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.query: Current value of the input field
                                </td>
                                <td>Callback to invoke to when dropdown button is clicked.</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>event: Browser event </td>
                                <td>Callback to invoke on click.</td>
                            </tr>
                            <tr>
                                <td>onDblClick</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on double click.</td>
                            </tr>
                            <tr>
                                <td>onMouseDown</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke to when a mouse button is pressed.</td>
                            </tr>
                            <tr>
                                <td>onKeyUp</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke to when a key is released.</td>
                            </tr>
                            <tr>
                                <td>onKeyPress</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke to when a key is pressed.</td>
                            </tr>
                            <tr>
                                <td>onContextMenu</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on right-click.</td>
                            </tr>
                            <tr>
                                <td>onClear</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when input is cleared by the user.</td>
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
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}

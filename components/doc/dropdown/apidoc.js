import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
            <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of selectitems to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>optionLabel</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                        </tr>
                        <tr>
                            <td>optionValue</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                        </tr>
                        <tr>
                            <td>optionDisabled</td>
                            <td>function | string</td>
                            <td>null</td>
                            <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
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
                            <td>valueTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of selected item.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of items.</td>
                        </tr>
                        <tr>
                            <td>filterTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of filter element.</td>
                        </tr>
                        <tr>
                            <td>optionGroupTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Template of an option group item.</td>
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
                            <td>scrollHeight</td>
                            <td>string</td>
                            <td>200px</td>
                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, displays an input field to filter the items on keyup.</td>
                        </tr>
                        <tr>
                            <td>filterBy</td>
                            <td>string</td>
                            <td>label</td>
                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                        </tr>
                        <tr>
                            <td>filterMatchMode</td>
                            <td>string</td>
                            <td>contains</td>
                            <td>Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</td>
                        </tr>
                        <tr>
                            <td>filterPlaceholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Placeholder text to show when filter input is empty.</td>
                        </tr>
                        <tr>
                            <td>filterLocale</td>
                            <td>string</td>
                            <td>undefined</td>
                            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                        </tr>
                        <tr>
                            <td>emptyMessage</td>
                            <td>string</td>
                            <td>No results found</td>
                            <td>Text to display when there are no options available.</td>
                        </tr>
                        <tr>
                            <td>emptyFilterMessage</td>
                            <td>any</td>
                            <td>No results found</td>
                            <td>Template to display when filtering does not return any results.</td>
                        </tr>
                        <tr>
                            <td>resetFilterOnHide</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Clears the filter value when hiding the dropdown.</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Default text to display when no option is selected.</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
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
                            <td>filterInputAutoFocus</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When the panel is opened, it specifies that the filter input should focus automatically.</td>
                        </tr>
                        <tr>
                            <td>showFilterClear</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, a clear icon is displayed to clear the filtered value.</td>
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
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely match the value in options for better performance.</td>
                        </tr>
                        <tr>
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the focusable input.</td>
                        </tr>
                        <tr>
                            <td>showClear</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, a clear icon is displayed to clear the value.</td>
                        </tr>
                        <tr>
                            <td>maxLength</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of characters to be typed on an editable input.</td>
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
                            <td>ariaLabel</td>
                            <td>string</td>
                            <td>false</td>
                            <td>Used to define a string that labels the component.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Contains the element IDs of labels.</td>
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
                            <td>dropdownIcon</td>
                            <td>string</td>
                            <td>pi pi-chevron-down</td>
                            <td>Icon class of the dropdown icon.</td>
                        </tr>
                        <tr>
                            <td>showOnFocus</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, overlay panel will be visible with input focus.</td>
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
                                event.originalEvent: Original event <br />
                                event.value: Value of the checkbox{' '}
                            </td>
                            <td>Callback to invoke on value change</td>
                        </tr>
                        <tr>
                            <td>onMouseDown</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke to when a mouse button is pressed.</td>
                        </tr>
                        <tr>
                            <td>onContextMenu</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke on right-click.</td>
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
                            <td>onFilter</td>
                            <td>
                                event.originalEvent: Original event <br />
                                event.filter: Value of the filter input
                            </td>
                            <td>Callback to invoke when the value is filtered.</td>
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
                            <td>checkValidity</td>
                            <td>-</td>
                            <td>Checks whether the native hidden select element has any constraints and returns a boolean for the result.</td>
                        </tr>
                        <tr>
                            <td>resetFilter</td>
                            <td>-</td>
                            <td>Reset the options filter.</td>
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
                            <td>p-dropdown</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-label</td>
                            <td>Element to display label of selected option.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-trigger</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-panel</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-items-wrapper</td>
                            <td>Wrapper element of items list.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-items</td>
                            <td>List element of items.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-item</td>
                            <td>An item in the list.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-filter</td>
                            <td>Filter element.</td>
                        </tr>
                        <tr>
                            <td>p-dropdown-open</td>
                            <td>Container element when overlay is visible.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The dropdown element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i>{' '}
                    attributes. If the editable option is enabled <i>aria-autocomplete</i> is also added. The relation between the combobox and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used to
                    instruct screen reader which option to read during keyboard navigation within the popup list.
                </p>
                <p>
                    The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>listbox</i> as the role. Each list item has an <i>option</i> role, an id to match the{' '}
                    <i>aria-activedescendant</i> of the input element along with <i>aria-label</i>, <i>aria-selected</i> and <i>aria-disabled</i> attributes.
                </p>

                <p>
                    If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the filter input element.
                </p>
                <CodeHighlight>
                    {`
<span id="dd1">Options</span>
<Dropdown aria-labelledby="dd1" />

<Dropdown aria-label="Options" />
`}
                </CodeHighlight>
                <h4>Closed State Keyboard Support</h4>
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
                                <td>Moves focus to the dropdown element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Popup Keyboard Support</h4>
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
                                <td>Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>tab</i>
                                </td>
                                <td>Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Selects the focused option and closes the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Selects the focused option and closes the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup, moves focus to the dropdown element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Moves focus to the next option, if there is none then visual focus does not change.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Moves focus to the previous option, if there is none then visual focus does not change.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>right arrow</i>
                                </td>
                                <td>If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character left.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>left arrow</i>
                                </td>
                                <td>If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character right.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>home</i>
                                </td>
                                <td>If the dropdown is editable, moves input cursor at the end, if not then moves focus to the first option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>end</i>
                                </td>
                                <td>If the dropdown is editable, moves input cursor at the beginning, if not then moves focus to the last option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>any printable character</i>
                                </td>
                                <td>Moves focus to the option whose label starts with the characters being typed if dropdown is not editable.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Filter Input Keyboard Support</h4>
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
                                <td>Closes the popup and moves focus to the dropdown element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup and moves focus to the dropdown element.</td>
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

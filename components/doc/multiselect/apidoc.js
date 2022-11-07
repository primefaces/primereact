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
                            <td>array</td>
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
                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>
                        </tr>
                        <tr>
                            <td>optionValue</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
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
                            <td>scrollHeight</td>
                            <td>string</td>
                            <td>200px</td>
                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label to display when there are no selections.</td>
                        </tr>
                        <tr>
                            <td>fixedPlaceholder</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display selected items in the label section or always display the placeholder as the default label.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>showClear</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, a clear icon is displayed to clear the value.</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>true</td>
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
                            <td>Defines how the items are filtered, valid values are "contains", (default) "startsWith", "endsWith", "equals" and "notEquals".</td>
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
                            <td>emptyFilterMessage</td>
                            <td>any</td>
                            <td>No records found</td>
                            <td>Template to display when filtering does not return any results.</td>
                        </tr>
                        <tr>
                            <td>resetFilterOnHide</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Clears the filter value when hiding the dropdown.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
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
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
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
                            <td>selectedItemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>panelHeaderTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Template of the panel header.</td>
                        </tr>
                        <tr>
                            <td>panelFooterTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Template of the panel footer.</td>
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
                            <td>maxSelectedLabels</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Decides how many selected item labels to show at most.</td>
                        </tr>
                        <tr>
                            <td>selectionLimit</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Number of maximum options that can be selected.</td>
                        </tr>
                        <tr>
                            <td>selectedItemsLabel</td>
                            <td>string</td>
                            <td>&#123;0&#125; items selected</td>
                            <td>Label to display after exceeding max selected labels.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                        </tr>
                        <tr>
                            <td>display</td>
                            <td>string</td>
                            <td>comma</td>
                            <td>Used mode to display the selected item. Valid values are 'comma' and 'chip'.</td>
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
                            <td>any</td>
                            <td>pi pi-chevron-down</td>
                            <td>Icon class of the dropdown icon.</td>
                        </tr>
                        <tr>
                            <td>removeIcon</td>
                            <td>any</td>
                            <td>pi pi-times-circle</td>
                            <td>Icon of the remove chip element.</td>
                        </tr>
                        <tr>
                            <td>virtualScrollerOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>
                                Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.
                            </td>
                        </tr>
                        <tr>
                            <td>showSelectAll</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to show the select all checkbox inside the panel's header.</td>
                        </tr>
                        <tr>
                            <td>selectAll</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether all data is selected.</td>
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
                                event.originalEvent: Browser event
                                <br />
                                event.value: Current selected values
                                <br />
                            </td>
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
                            <td>onFilter</td>
                            <td>
                                event.originalEvent: Browser event
                                <br />
                                event.filter: Filter value.
                            </td>
                            <td>Callback to invoke on filtering.</td>
                        </tr>
                        <tr>
                            <td>onSelectAll</td>
                            <td>
                                event.originalEvent: Browser event
                                <br />
                                event.checked: Whether all data is selected.
                            </td>
                            <td>Callback to invoke when all data is selected.</td>
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
                            <td>Checks whether the native hidden input element has any constraints and returns a boolean for the result.</td>
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
                            <td>p-multiselect</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-label-container</td>
                            <td>Container of the label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-label-container</td>
                            <td>Label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-trigger</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-panel</td>
                            <td>Overlay panel for items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-items</td>
                            <td>List container of items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-item</td>
                            <td>An item in the list.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-token</td>
                            <td>A selected item element container on display='chip' mode.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-icon</td>
                            <td>Icon of a selected item element on display='chip' mode.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-label</td>
                            <td>Label of a selected item element on display='chip' mode.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The multiselect component has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i>{' '}
                    attributes. The relation between the combobox and the popup is created with <i>aria-controls</i> attribute that refers to the id of the popup listbox.
                </p>
                <p>
                    The popup listbox uses <i>listbox</i> as the role with <i>aria-multiselectable</i> enabled. Each list item has an <i>option</i> role along with <i>aria-label</i>, <i>aria-selected</i> and <i>aria-disabled</i> attributes.
                </p>

                <p>
                    Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the <i>selectAll</i> and <i>unselectAll</i> keys of the <i>aria</i> property
                    from the <Link href="/locale">locale</Link> API.
                </p>

                <p>
                    If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the input element.
                </p>

                <p>
                    Close button uses <i>close</i> key of the <i>aria</i> property from the <Link href="/locale">locale</Link> API as the <i>aria-label</i> by default, this can be overriden with the <i>closeButtonProps</i>.
                </p>
                <CodeHighlight>
                    {`
<span id="dd1">Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />
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
                                <td>Moves focus to the multiselect element.</td>
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
                                <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
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
                                <td>Toggles the selection state of the focused option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Toggles the selection state of the focused option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup, moves focus to the multiselect element.</td>
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
                                    <i>home</i>
                                </td>
                                <td>Moves focus to the first option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>end</i>
                                </td>
                                <td>Moves focus to the last option.</td>
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

                <h4>Toggle All Checkbox Keyboard Support</h4>
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
                                    <i>space</i>
                                </td>
                                <td>Toggles the checked state.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup.</td>
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
                                <td>Closes the popup and moves focus to the multiselect element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup and moves focus to the multiselect element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Close Button Keyboard Support</h4>
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
                                <td>Closes the popup and moves focus to the multiselect element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Closes the popup and moves focus to the multiselect element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup and moves focus to the multiselect element.</td>
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

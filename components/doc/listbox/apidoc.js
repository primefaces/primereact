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
                            <td>value</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Selected value to display.</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
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
                            <td>itemTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Custom template for the items.</td>
                        </tr>
                        <tr>
                            <td>filterTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Custom template for the filter element.</td>
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
                            <td>listStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of inner list element.</td>
                        </tr>
                        <tr>
                            <td>listClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style class of inner list element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, disables the component.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>false</td>
                            <td>A property to uniquely match the value in options for better performance.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, allows selecting multiple values.</td>
                        </tr>
                        <tr>
                            <td>metaKeySelection</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>
                                Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices,
                                metaKeySelection is turned off automatically.
                            </td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, displays a filter input at header.</td>
                        </tr>
                        <tr>
                            <td>filterBy</td>
                            <td>string</td>
                            <td>label</td>
                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                        </tr>
                        <tr>
                            <td>filterValue</td>
                            <td>string</td>
                            <td>null</td>
                            <td>When specified, filter displays with this value.</td>
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
                            <td>filterInputProps</td>
                            <td>object</td>
                            <td>undefined</td>
                            <td>Props for the filter input, any prop is passed implicity to the filter input element.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
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
                                event.originalEvent: Browser event <br />
                                event.value: Single value or an array of values depending on the selection mode <br />
                            </td>
                            <td>Callback to invoke when value of listbox changes.</td>
                        </tr>
                        <tr>
                            <td>onFilterValueChange</td>
                            <td>
                                event.originalEvent: Browser event <br />
                                event.value: the filtered value <br />
                            </td>
                            <td>Callback to invoke when filter value changes.</td>
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
                            <td>p-listbox</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-header</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list-wrapper</td>
                            <td>Container of list element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-item</td>
                            <td>An item in the list element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can be provided <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute that sets to true when multiple selection
                    is enabled. Each list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.
                </p>
                <p>
                    If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the input element. Alternatively <i>filterPlaceholder</i> is usually utilized by the screen readers as well.
                </p>
                <CodeHighlight>
                    {`
<span id="lb">Options</span>
<ListBox aria-labelledby="lb" />

<ListBox aria-label="City" />
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
                                <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Moves focus to the previous option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Moves focus to the next option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Toggles the selected state of the focused option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Toggles the selected state of the focused option.</td>
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
                                    <i>shift</i> + <i>down arrow</i>
                                </td>
                                <td>Moves focus to the next option and toggles the selection state.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>up arrow</i>
                                </td>
                                <td>Moves focus to the previous option and toggles the selection state.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>space</i>
                                </td>
                                <td>Selects the items between the most recently selected option and the focused option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>control</i> + <i>shift</i> + <i>home</i>
                                </td>
                                <td>Selects the focused options and all the options up to the first one.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>control</i> + <i>shift</i> + <i>end</i>
                                </td>
                                <td>Selects the focused options and all the options down to the last one.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>control</i> + <i>a</i>
                                </td>
                                <td>Selects all options.</td>
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

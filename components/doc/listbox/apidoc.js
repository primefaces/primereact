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
            </DocSubSection>
        </>
    );
}

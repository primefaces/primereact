import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
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
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A single or an object of keys to control the selection state.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the input element.</td>
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
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of options to display.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>400px</td>
                                <td>Maximum height of the options panel.</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Hint text for the input field.</td>
                            </tr>
                            <tr>
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the input element.</td>
                            </tr>
                            <tr>
                                <td>ariaLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Used to define a string that labels the component.</td>
                            </tr>
                            <tr>
                                <td>ariaLabelledBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Contains the element IDs of labels.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
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
                                <td>appendTo</td>
                                <td>DOM element | string</td>
                                <td>document.body</td>
                                <td>
                                    DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
                            </tr>
                            <tr>
                                <td>emptyMessage</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text to display when there is no data.</td>
                            </tr>
                            <tr>
                                <td>display</td>
                                <td>string</td>
                                <td>comma</td>
                                <td>Defines how the selected items are displayed, valid values are "comma" and "chip".</td>
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
                                <td>valueTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of selected values.</td>
                            </tr>
                            <tr>
                                <td>filterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template for filter element.</td>
                            </tr>
                            <tr>
                                <td>panelHeaderTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of header.</td>
                            </tr>
                            <tr>
                                <td>panelFooterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of footer.</td>
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
                                <td>filter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, displays an input field to filter the items.</td>
                            </tr>
                            <tr>
                                <td>filterValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>When filtering is enabled, the value of input field.</td>
                            </tr>
                            <tr>
                                <td>filterBy</td>
                                <td>string</td>
                                <td>label</td>
                                <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                            </tr>
                            <tr>
                                <td>filterMode</td>
                                <td>string</td>
                                <td>lenient</td>
                                <td>Mode for filtering valid values are "lenient" and "strict". Default is lenient.</td>
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
                                <td>filterInputAutoFocus</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When the panel is opened, it specifies that the filter input should focus automatically.</td>
                            </tr>
                            <tr>
                                <td>resetFilterOnHide</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Clears the filter value when hiding the dropdown.</td>
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
                                <td>Callback to invoke when the overlay is shown.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Callback to invoke when the overlay is hidden.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: Selected node key(s).
                                </td>
                                <td>Callback to invoke when selection changes.</td>
                            </tr>
                            <tr>
                                <td>onToggle</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Toggled node instance.
                                </td>
                                <td>Callback to invoke when a node is toggled.</td>
                            </tr>
                            <tr>
                                <td>onNodeSelect</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Selected node instance.
                                </td>
                                <td>Callback to invoke when a node is selected.</td>
                            </tr>
                            <tr>
                                <td>onNodeUnselect</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Unselected node instance.
                                </td>
                                <td>Callback to invoke when a node is unselected.</td>
                            </tr>
                            <tr>
                                <td>onNodeExpand</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Expanded node instance.
                                </td>
                                <td>Callback to invoke when a node is expanded.</td>
                            </tr>
                            <tr>
                                <td>onNodeCollapse</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Collapsed node instance.
                                </td>
                                <td>Callback to invoke when a node is collapsed.</td>
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

            <DocSubSection id="methods" label="Methods">
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
                                <td>filter</td>
                                <td>value: the filter value</td>
                                <td>Filters the data.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}

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
                            <td>filter</td>
                            <td>value: the filter value</td>
                            <td>Filters the data.</td>
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
                            <td>p-treeselect</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-treeselect-label-container</td>
                            <td>Container of the label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-treeselect-label</td>
                            <td>Label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-treeselect-trigger</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>p-treeselect-panel</td>
                            <td>Overlay panel for items.</td>
                        </tr>
                        <tr>
                            <td>p-treeselect-items-wrapper</td>
                            <td>List container of items.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Accessibility</h3>
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The treeselect element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i>{' '}
                        attributes. The relation between the combobox and the popup is created with <i>aria-controls</i> that refers to the id of the popup.
                    </p>
                    <p>
                        The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>tree</i> as the role. Each list item has a <i>treeitem</i> role along with <i>aria-label</i>,{' '}
                        <i>aria-selected</i> and <i>aria-expanded</i> attributes. In checkbox selection, <i>aria-checked</i> is used instead of <i>aria-selected</i>. Checkbox and toggle icons are hidden from screen readers as their parent element
                        with <i>treeitem</i> role and attributes are used instead for readers and keyboard support. The container element of a treenode has the <i>group</i> role. The <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i>{' '}
                        attributes are calculated implicitly and added to each treeitem.
                    </p>

                    <p>
                        If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the filter input element.
                    </p>
                    <CodeHighlight>
                        {`
<span id="dd1">Options</span>
<TreeSelect aria-labelledby="dd1" />

<TreeSelect aria-label="Options" />
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
                                    <td>Moves focus to the treeselect element.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
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
                                    <td>Selects the focused option, closes the popup if selection mode is single.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Selects the focused option, closes the popup if selection mode is single.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Closes the popup, moves focus to the treeselect element.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>If node is closed, opens the node otherwise moves focus to the first child node.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>If node is open, closes the node otherwise moves focus to the parent node.</td>
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
                                    <td>Closes the popup and moves focus to the treeselect element.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Closes the popup and moves focus to the treeselect element.</td>
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
                                    <td>Closes the popup and moves focus to the treeselect element.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Closes the popup and moves focus to the treeselect element.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Closes the popup and moves focus to the treeselect element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
        </>
    );
}

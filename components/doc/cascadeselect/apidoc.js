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
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of selectitems to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>optionLabel</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property name or getter function to use as the label of an option.</td>
                        </tr>
                        <tr>
                            <td>optionValue</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
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
                            <td>Property name or getter function to retrieve the items of a group.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Default text to display when no option is selected.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely identify an option.</td>
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
                            <td>Identifier of the underlying input element.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                            <td>itemTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of items.</td>
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
                            <td>onGroupChange</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when a group changes.</td>
                        </tr>
                        <tr>
                            <td>onBeforeShow</td>
                            <td>-</td>
                            <td>Callback to invoke before the overlay is shown.</td>
                        </tr>
                        <tr>
                            <td>onBeforeHide</td>
                            <td>-</td>
                            <td>Callback to invoke before the overlay is hidden.</td>
                        </tr>
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
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>
                Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                            <td>p-cascadeselect</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-cascadeselect-label</td>
                            <td>Element to display label of selected option.</td>
                        </tr>
                        <tr>
                            <td>p-cascadeselect-trigger</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>p-cascadeselect-panel</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>p-cascadeselect-items-wrapper</td>
                            <td>Wrapper element of items list.</td>
                        </tr>
                        <tr>
                            <td>p-cascadeselect-items</td>
                            <td>List element of items.</td>
                        </tr>
                        <tr>
                            <td>p-cascadeselect-item</td>
                            <td>An item in the list.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The cascadeselect element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i>{' '}
                    attributes. The relation between the combobox and the popup is created with <i>aria-controls</i> that refers to the id of the popup.
                </p>
                <p>
                    The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>tree</i> as the role. Each list item has a <i>treeitem</i> role along with <i>aria-label</i>,{' '}
                    <i>aria-selected</i> and <i>aria-expanded</i> attributes. The container element of a treenode has the <i>group</i> role. The <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i> attributes are calculated implicitly and
                    added to each treeitem.
                </p>

                <p>
                    If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the filter input element.
                </p>
                <CodeHighlight>
                    {`
<span id="dd1">Options</span>
<CascadeSelect aria-labelledby="dd1" />

<CascadeSelect aria-label="Options" />
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
                                <td>Moves focus to the cascadeselect element.</td>
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
                                <td>Hides the popup and moves focus to the next tabbable element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>tab</i>
                                </td>
                                <td>Hides the popup and moves focus to the previous tabbable element.</td>
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
                                <td>Closes the popup, moves focus to the cascadeselect element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Moves focus to the next option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Moves focus to the previous option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>right arrow</i>
                                </td>
                                <td>If option is closed, opens the option otherwise moves focus to the first child option.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>left arrow</i>
                                </td>
                                <td>If option is open, closes the option otherwise moves focus to the parent option.</td>
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

import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { CodeHighlight } from '../common/codehighlight';
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
                                <td>source</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects for the source list.</td>
                            </tr>
                            <tr>
                                <td>target</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects for the target list.</td>
                            </tr>
                            <tr>
                                <td>sourceHeader</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template for the source list caption.</td>
                            </tr>
                            <tr>
                                <td>targetHeader</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template for the target list caption.</td>
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
                                <td>sourceStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the source list element.</td>
                            </tr>
                            <tr>
                                <td>targetStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the target list element.</td>
                            </tr>
                            <tr>
                                <td>sourceSelection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected item in the source list.</td>
                            </tr>
                            <tr>
                                <td>targetSelection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected items in the target list.</td>
                            </tr>
                            <tr>
                                <td>showSourceControls</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show buttons of source list.</td>
                            </tr>
                            <tr>
                                <td>showTargetControls</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show buttons of target list.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>
                                    Template that gets the options for both source and target items and returns the content for it. Useful if you want the same template for both lists else use the custom <b>sourceItemTemplate</b> or{' '}
                                    <b>targetItemTemplate</b> properties.
                                </td>
                            </tr>
                            <tr>
                                <td>sourceItemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Template that gets the options for the source items and returns the content for it.</td>
                            </tr>
                            <tr>
                                <td>targetItemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Template that gets the options for the target items and returns the content for it.</td>
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
                                <td>filterBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>When specified displays an input field to filter the items on keyup and decides which field to search (Accepts multiple fields with a comma).</td>
                            </tr>
                            <tr>
                                <td>filterMatchMode</td>
                                <td>string</td>
                                <td>contains</td>
                                <td>Defines how the items are filtered, valid values are "contains" (default) "startsWith", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt" and "gte".</td>
                            </tr>
                            <tr>
                                <td>filterLocale</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                            </tr>
                            <tr>
                                <td>sourceFilterValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Filter value in the target list.</td>
                            </tr>
                            <tr>
                                <td>targetFilterValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Filter value in the source list.</td>
                            </tr>
                            <tr>
                                <td>showSourceFilter</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show filter input for source list when filterBy is enabled.</td>
                            </tr>
                            <tr>
                                <td>showTargetFilter</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show filter input for target list when filterBy is enabled.</td>
                            </tr>
                            <tr>
                                <td>sourceFilterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text on source filter input.</td>
                            </tr>
                            <tr>
                                <td>targetFilterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text on target filter input.</td>
                            </tr>
                            <tr>
                                <td>sourceFilterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template for the source filter content.</td>
                            </tr>
                            <tr>
                                <td>targetFilterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template for the target filter content.</td>
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
                                <td>Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.</td>
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
                                    event.source: Source list <br />
                                    event.target: Target list{' '}
                                </td>
                                <td>Callback to invoke when items are moved from source to target.</td>
                            </tr>
                            <tr>
                                <td>onMoveToSource</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Moved items
                                </td>
                                <td>Callback to invoke when items are moved from target to source.</td>
                            </tr>
                            <tr>
                                <td>onMoveAllToSource</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Moved items
                                </td>
                                <td>Callback to invoke when all items are moved from target to source.</td>
                            </tr>
                            <tr>
                                <td>onMoveToTarget</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Moved items
                                </td>
                                <td>Callback to invoke when items are moved from source to target.</td>
                            </tr>
                            <tr>
                                <td>onMoveAllToTarget</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Moved items
                                </td>
                                <td>Callback to invoke when all items are moved from source to target.</td>
                            </tr>
                            <tr>
                                <td>onSourceSelectionChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    items: Selected items array
                                </td>
                                <td>Callback to invoke when items are selected within source list.</td>
                            </tr>
                            <tr>
                                <td>onTargetSelectionChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    items: Selected items array
                                </td>
                                <td>Callback to invoke when items are selected within target list.</td>
                            </tr>
                            <tr>
                                <td>onSourceFilterChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Filtered value
                                </td>
                                <td>Callback to invoke when items are filtered within source list.</td>
                            </tr>
                            <tr>
                                <td>onTargetFilterChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Filtered value
                                </td>
                                <td>Callback to invoke when items are filtered within target list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
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
                                <td>p-picklist</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-source-controls</td>
                                <td>Container of source list buttons.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-target-controls</td>
                                <td>Container of target list buttons.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-buttons</td>
                                <td>Container of buttons.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-listwrapper</td>
                                <td>Parent of a list element.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-picklist-item</td>
                                <td>An item in the list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Value to describe the source listbox and target listbox can be provided with <i>sourceListProps</i> and <i>targetListProps</i> by passing <i>aria-labelledby</i> or <i>aria-label</i> props. The list elements has a{' '}
                        <i>listbox</i> role with the <i>aria-multiselectable</i> attribute. Each list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.
                    </p>
                    <p>
                        Controls buttons are <i>button</i> elements with an <i>aria-label</i> that refers to the <i>aria.moveTop</i>, <i>aria.moveUp</i>, <i>aria.moveDown</i>, <i>aria.moveBottom</i>,<i>aria.moveTo</i>, <i>aria.moveAllTo</i>,{' '}
                        <i>aria.moveFrom</i> and <i>aria.moveAllFrom</i> properties of the <Link href="/locale">locale</Link> API by default, alternatively you may use
                        <i>moveTopButtonProps</i>, <i>moveUpButtonProps</i>, <i>moveDownButtonProps</i>, <i>moveToButtonProps</i>, <i>moveAllToButtonProps</i>, <i>moveFromButtonProps</i>, <i>moveFromButtonProps</i> and <i>moveAllFromButtonProps</i>{' '}
                        to customize the buttons like overriding the default <i>aria-label</i> attributes.
                    </p>
                    <CodeHighlight>
                        {`
<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />
`}
                    </CodeHighlight>
                    <h4>ListBox Keyboard Support</h4>
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
                                    <td>Selects the focused options and all the options down to the first one.</td>
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

                    <h4>Buttons Keyboard Support</h4>
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
                                    <td>Executes button action.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Executes button action.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}

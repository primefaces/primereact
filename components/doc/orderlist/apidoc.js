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
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects to reorder.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text for the caption</td>
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
                                <td>listStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the list element.</td>
                            </tr>
                            <tr>
                                <td>dragdrop</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to enable dragdrop based reordering.</td>
                            </tr>
                            <tr>
                                <td>dragdropScope</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique key of drag drop events to avoid conflict with other drag drop events on the page.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the list and returns the content for it.</td>
                            </tr>
                            <tr>
                                <td>filterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of filter element.</td>
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
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
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
                                    event.value: Reordered list
                                </td>
                                <td>Callback to invoke when list is reordered.</td>
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
                                <td>resetFilter</td>
                                <td>-</td>
                                <td>Reset the options filter.</td>
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
                                <td>p-orderlist</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-list</td>
                                <td>List container.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-item</td>
                                <td>An item in the list</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-filter-container</td>
                                <td>Container of filter input.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-filter</td>
                                <td>Filter element.</td>
                            </tr>
                            <tr>
                                <td>p-orderlist-filter-icon</td>
                                <td>Filter icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Value to describe the listbox can be provided with <i>listProps</i> by passing <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute. Each
                        list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.
                    </p>
                    <p>
                        Controls buttons are <i>button</i> elements with an <i>aria-label</i> that refers to the <i>aria.moveTop</i>, <i>aria.moveUp</i>, <i>aria.moveDown</i> and <i>aria.moveBottom</i> properties of the{' '}
                        <Link href="/locale">locale</Link> API by default, alternatively you may use
                        <i>moveTopButtonProps</i>, <i>moveUpButtonProps</i>, <i>moveDownButtonProps</i> and <i>moveBottomButtonProps</i> to customize the buttons like overriding the default <i>aria-label</i> attributes.
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

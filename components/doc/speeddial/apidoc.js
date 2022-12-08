import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="menumodelapi" label="MenuModel API">
                <p>
                    SpeedDial uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.
                </p>
            </DocSubSection>

            <DocSubSection id="type" label="Type">
                <p>
                    SpeedDial has 4 types; <i>linear</i>, <i>circle</i>, <i>semi-circle</i> and <i>quarter-circle</i>.
                </p>
            </DocSubSection>

            <DocSubSection id="direction" label="Direction">
                <p>
                    Specifies the opening direction of actions. For the <strong>linear</strong> and <strong>semi-circle</strong> types; <i>up</i>, <i>down</i>, <i>left</i> and <i>right</i>. For the <strong>quarter-circle</strong> type; <i>up-left</i>
                    , <i>up-right</i>, <i>down-left</i> and <i>down-right</i>.
                </p>
            </DocSubSection>

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
                                <td>model</td>
                                <td>object</td>
                                <td>null</td>
                                <td>MenuModel instance to define the action items.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the overlay.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>direction</td>
                                <td>string</td>
                                <td>up</td>
                                <td>Specifies the opening direction of actions. Valid values are 'up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and 'down-right'</td>
                            </tr>
                            <tr>
                                <td>transitionDelay</td>
                                <td>number</td>
                                <td>30</td>
                                <td>Transition delay step for each action item.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>linear</td>
                                <td>Specifies the opening type of actions.</td>
                            </tr>
                            <tr>
                                <td>radius</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Radius for *circle types.</td>
                            </tr>
                            <tr>
                                <td>mask</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to show a mask element behind the speeddial</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the component is disabled.</td>
                            </tr>
                            <tr>
                                <td>hideOnClickOutside</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the actions close when clicked outside.</td>
                            </tr>
                            <tr>
                                <td>buttonClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the button element.</td>
                            </tr>
                            <tr>
                                <td>buttonStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the button element.</td>
                            </tr>
                            <tr>
                                <td>buttonTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of button element.</td>
                            </tr>
                            <tr>
                                <td>maskClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the mask element.</td>
                            </tr>
                            <tr>
                                <td>maskStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the mask element.</td>
                            </tr>
                            <tr>
                                <td>showIcon</td>
                                <td>string</td>
                                <td>pi pi-plus</td>
                                <td>Show icon of the button element.</td>
                            </tr>
                            <tr>
                                <td>hideIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Hide icon of the button element.</td>
                            </tr>
                            <tr>
                                <td>rotateAnimation</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defined to rotate showIcon when hideIcon is not present.</td>
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
                                <td>onVisibleChange</td>
                                <td>visible: Whether the actions are visible.</td>
                                <td>Fired when the visibility of element changed.</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>event: Browser event.</td>
                                <td>Fired when the button element clicked.</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Fired when the actions are visible.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Fired when the actions are hidden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
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
                                <td>p-speeddial</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-speeddial-button</td>
                                <td>Button element of speeddial.</td>
                            </tr>
                            <tr>
                                <td>p-speeddial-mask</td>
                                <td>Mask element of speeddial.</td>
                            </tr>
                            <tr>
                                <td>p-speeddial-list</td>
                                <td>List of the actions.</td>
                            </tr>
                            <tr>
                                <td>p-speeddial-item</td>
                                <td>Each action item of list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the <i>aria-labelledby</i> or <i>aria-label</i> props. Addititonally the button
                        includes includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button.
                    </p>

                    <p>
                        The popup overlay uses <i>menu</i> role on the list and each action item has a <i>menuitem</i> role with an <i>aria-label</i> as the menuitem label. The id of the menu refers to the <i>aria-controls</i> of the button.
                    </p>

                    <CodeHighlight>
                        {`
<SpeedDial aria-label="Options" />
`}
                    </CodeHighlight>

                    <h4>Menu Button Keyboard Support</h4>
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
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Opens the menu and moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Opens the menu and moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Menu Keyboard Support</h4>
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
                                    <td>Actives the menuitem, closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>arrow keys</i>
                                    </td>
                                    <td>Navigates between the menu items.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}

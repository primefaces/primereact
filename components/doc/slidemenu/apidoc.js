import Link from 'next/link';
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
                                <td>model</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of menuitems.</td>
                            </tr>
                            <tr>
                                <td>popup</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if menu would displayed as a popup.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
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
                                <td>easing</td>
                                <td>string</td>
                                <td>ease-out</td>
                                <td>Easing animation to use for sliding.</td>
                            </tr>
                            <tr>
                                <td>effectDuration</td>
                                <td>any</td>
                                <td>250</td>
                                <td>Duration of the sliding animation in milliseconds.</td>
                            </tr>
                            <tr>
                                <td>backLabel</td>
                                <td>string</td>
                                <td>Back</td>
                                <td>Label of element to navigate back.</td>
                            </tr>
                            <tr>
                                <td>menuWidth</td>
                                <td>number</td>
                                <td>190</td>
                                <td>Width of the submenus.</td>
                            </tr>
                            <tr>
                                <td>viewportHeight</td>
                                <td>number</td>
                                <td>175</td>
                                <td>Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>autoZIndex</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to automatically manage layering.</td>
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
                                <td>toggle</td>
                                <td>event: Browser event</td>
                                <td>Toggles the visibility of the popup menu.</td>
                            </tr>
                            <tr>
                                <td>show</td>
                                <td>event: Browser event</td>
                                <td>Displays the popup menu.</td>
                            </tr>
                            <tr>
                                <td>hide</td>
                                <td>event: Browser event</td>
                                <td>Hides the popup menu.</td>
                            </tr>
                            <tr>
                                <td>navigateForward</td>
                                <td>void</td>
                                <td>Navigates the slide menu forward.</td>
                            </tr>
                            <tr>
                                <td>navigateBack</td>
                                <td>void</td>
                                <td>Navigates the slide menu backwards.</td>
                            </tr>
                            <tr>
                                <td>setLevelState</td>
                                <td>level: Number of the menu to set</td>
                                <td>Navigates the slide menu to this specific level.</td>
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
                                <td>event: Browser event</td>
                                <td>Callback to invoke when a popup menu is shown.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when a popup menu is hidden.</td>
                            </tr>
                            <tr>
                                <td>onNavigate</td>
                                <td>level: number</td>
                                <td>Callback to invoke when a menu is navigated to.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>Following is the list of structural style classes.</p>
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
                                <td>p-slidemenu</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-slidemenu-wrapper</td>
                                <td>Wrapper of content.</td>
                            </tr>
                            <tr>
                                <td>p-slidemenu-content</td>
                                <td>Content element.</td>
                            </tr>
                            <tr>
                                <td>p-slidemenu-backward</td>
                                <td>Element to navigate to previous menu on click.</td>
                            </tr>
                            <tr>
                                <td>p-menu-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-text</td>
                                <td>Label of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-icon</td>
                                <td>Icon of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-submenu-icon</td>
                                <td>Arrow icon of a submenu.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        SlideMenu component uses the <i>menubar</i> role with <i>aria-orientation</i> set to "vertical" and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item
                        has a <i>presentation</i> role whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled. A submenu within a
                        SlideMenu uses the <i>menu</i> role with an <i>aria-labelledby</i> defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have <i>aria-expanded</i> and <i>aria-controls</i> to define
                        the relation between the item and the submenu.
                    </p>

                    <p>
                        In popup mode, the component implicitly manages the <i>aria-expanded</i>, <i>aria-haspopup</i> and <i>aria-controls</i> attributes of the target element to define the relation between the target and the popup.
                    </p>

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
                                    <td>Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>tab</i>
                                    </td>
                                    <td>Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next menuitem within the submenu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous menuitem within the submenu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>Opens a submenu if there is one available and moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>Closes a submenu and moves focus to the root item of the closed submenu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the first menuitem within the submenu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the last menuitem within the submenu.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}

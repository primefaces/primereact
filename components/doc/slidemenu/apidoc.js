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
        </>
    );
}

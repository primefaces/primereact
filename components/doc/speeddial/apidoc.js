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
        </>
    );
}

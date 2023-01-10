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
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Title content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the dialog.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the dialog.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>center</td>
                                <td>Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".</td>
                            </tr>
                            <tr>
                                <td>modal</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines if background should be blocked when dialog is displayed.</td>
                            </tr>
                            <tr>
                                <td>resizable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Enables resizing of the content.</td>
                            </tr>
                            <tr>
                                <td>draggable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Enables dragging to change the position using header.</td>
                            </tr>
                            <tr>
                                <td>minX</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Minimum value for the left coordinate of dialog in dragging.</td>
                            </tr>
                            <tr>
                                <td>minY</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Minimum value for the top coordinate of dialog in dragging.</td>
                            </tr>
                            <tr>
                                <td>keepInViewport</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Keeps dialog in the viewport.</td>
                            </tr>
                            <tr>
                                <td>headerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Style of the header section.</td>
                            </tr>
                            <tr>
                                <td>headerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the header section.</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Style of the content section.</td>
                            </tr>
                            <tr>
                                <td>contentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the content section.</td>
                            </tr>
                            <tr>
                                <td>closeOnEscape</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Specifies if pressing escape key should hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>dismissableMask</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies if clicking the modal background should hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>rtl</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled dialog is displayed in RTL direction.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Adds a close icon to the header to hide the dialog.</td>
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
                                <td>maskStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the mask.</td>
                            </tr>
                            <tr>
                                <td>maskClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the mask.</td>
                            </tr>
                            <tr>
                                <td>showHeader</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the header or not.</td>
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
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>maximizable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the dialog can be displayed full screen.</td>
                            </tr>
                            <tr>
                                <td>blockScroll</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether background scroll should be blocked when dialog is visible.</td>
                            </tr>
                            <tr>
                                <td>icons</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Custom icons template for the header.</td>
                            </tr>
                            <tr>
                                <td>ariaCloseIconLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines a string that labels the close icon.</td>
                            </tr>
                            <tr>
                                <td>focusOnShow</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When enabled, first button receives focus on show.</td>
                            </tr>
                            <tr>
                                <td>maximized</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, the dialog is initially displayed full screen.</td>
                            </tr>
                            <tr>
                                <td>breakpoints</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Object literal to define widths per screen size.</td>
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
                                <td>onHide</td>
                                <td>null</td>
                                <td>Callback to invoke when dialog is hidden (Required).</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>null</td>
                                <td>Callback to invoke when dialog is showed.</td>
                            </tr>
                            <tr>
                                <td>onMaximize</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.maximized: Whether to show the dialog or not on fullscreen.
                                </td>
                                <td>Callback to invoke when toggle maximize icon is clicked.</td>
                            </tr>
                            <tr>
                                <td>onDragStart</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when dialog dragging is initiated.</td>
                            </tr>
                            <tr>
                                <td>onDrag</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when dragging dialog.</td>
                            </tr>
                            <tr>
                                <td>onDragEnd</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when dialog dragging is completed.</td>
                            </tr>
                            <tr>
                                <td>onResizeStart</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when dialog resizing is initiated.</td>
                            </tr>
                            <tr>
                                <td>onResize</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke while resizing dialog.</td>
                            </tr>
                            <tr>
                                <td>onResizeEnd</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when dialog resizing is completed.</td>
                            </tr>
                            <tr>
                                <td>onMaskClick</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when the mask is clicked.</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when dialog is clicked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}

import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
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

            <h3>Styling</h3>
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
                            <td>p-dialog</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-titlebar</td>
                            <td>Container of header.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-title</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-titlebar-icon</td>
                            <td>Icon container inside header.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-titlebar-close</td>
                            <td>Close icon element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-content</td>
                            <td>Content element</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Dialog component uses <i>dialog</i> role along with <i>aria-labelledby</i> referring to the header element however any attribute is passed to the root element so you may use <i>aria-labelledby</i> to override this default
                    behavior. In addition <i>aria-modal</i> is added since focus is kept within the popup.
                </p>
                <p>
                    It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.
                </p>
                <p>
                    Trigger element also requires <i>aria-expanded</i> and <i>aria-controls</i> to be handled explicitly.
                </p>
                <p>
                    Close element is a <i>button</i> with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API by default, you may use
                    <i>closeButtonProps</i> to customize the element and override the default <i>aria-label</i>.
                </p>

                <CodeHighlight>
                    {`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} aria-controls={visible ? 'dlg' : null} aria-expanded={visible ? true : false} />

<Dialog id="dlg" header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
    <p>Content</p>
</Dialog>
`}
                </CodeHighlight>

                <h4>Overlay Keyboard Support</h4>
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
                                <td>Moves focus to the next the focusable element within the dialog.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>tab</i>
                                </td>
                                <td>Moves focus to the previous the focusable element within the dialog.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>
                                    Closes the dialog if <i>closeOnEscape</i> is true.
                                </td>
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
                                <td>Closes the dialog.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Closes the dialog.</td>
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

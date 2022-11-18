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
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the dialog.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Specifies the position of the sidebar, valid values are "left" and "right".</td>
                            </tr>
                            <tr>
                                <td>fullScreen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Adds a close icon to the header to hide the dialog.</td>
                            </tr>
                            <tr>
                                <td>blockScroll</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to block scrolling of the document when sidebar is active.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>dismissable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to dismiss sidebar on click of the mask.</td>
                            </tr>
                            <tr>
                                <td>showCloseIcon</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display a close icon inside the panel.</td>
                            </tr>
                            <tr>
                                <td>ariaCloseLabel</td>
                                <td>string</td>
                                <td>close</td>
                                <td>Aria label of the close icon.</td>
                            </tr>
                            <tr>
                                <td>icons</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Custom icons template for the header.</td>
                            </tr>
                            <tr>
                                <td>modal</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to a modal layer behind the sidebar.</td>
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
                                <td>closeOnEscape</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Specifies if pressing escape key should hide the sidebar.</td>
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
                                <td>-</td>
                                <td>Callback to invoke when the actions used to close the sidebar are triggered. Exp; close icon, mask and esc key.</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Callback to invoke when sidebar gets shown.</td>
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
                                <td>p-sidebar</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-left</td>
                                <td>Container element of left sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-right</td>
                                <td>Container element of right sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-top</td>
                                <td>Container element of top sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-bottom</td>
                                <td>Container element of bottom sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-full</td>
                                <td>Container element of a full screen sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-active</td>
                                <td>Container element when sidebar is visible.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-close</td>
                                <td>Close anchor element.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-sm</td>
                                <td>Small sized sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-md</td>
                                <td>Medium sized sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-lg</td>
                                <td>Large sized sidebar.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-view</td>
                                <td>The page view is displayed according to the sidebar position.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-content</td>
                                <td>A content is displayed according to the sidebar position. To use this style, a sidebar must be created inside that content using the appendTo property and this content must have position:"relative" style.</td>
                            </tr>
                            <tr>
                                <td>p-sidebar-mask</td>
                                <td>Modal layer of the sidebar.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Sidebar component uses <i>complementary</i> role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like <i>aria-labelledby</i> can be
                        added. In addition <i>aria-modal</i> is added since focus is kept within the sidebar when opened.
                    </p>
                    <p>
                        It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.
                    </p>
                    <p>
                        Trigger element also requires <i>aria-expanded</i> and <i>aria-controls</i> to be handled explicitly.
                    </p>

                    <CodeHighlight>
                        {`
<Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} aria-controls={visible ? 'sbar' : null} aria-expanded={visible ? true : false}/>

<Sidebar id="sbar" visible={visible} onHide={() => setVisible(false)} role="region">
    Content
</Sidebar>
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
                                    <td>Moves focus to the next the focusable element within the sidebar.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>tab</i>
                                    </td>
                                    <td>Moves focus to the previous the focusable element within the sidebar.</td>
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
                                    <td>Closes the sidebar.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Closes the sidebar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}

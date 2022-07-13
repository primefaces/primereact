import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const SidebarDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export class SidebarDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFullScreen: false,
            visibleCustomToolbar: false
        };
    }

    render() {
        const customIcons = (
            <React.Fragment>
                <button className="p-sidebar-icon p-link mr-1">
                    <span className="pi pi-print" />
                </button>
                <button className="p-sidebar-icon p-link mr-1">
                    <span className="pi pi-arrow-right" />
                </button>
            </React.Fragment>
        );

        return (
            <div>
                <div className="card">
                    <Sidebar visible={this.state.visibleLeft} onHide={() => this.setState({ visibleLeft: false })}>
                        <h3>Left Sidebar</h3>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleRight} position="right" onHide={() => this.setState({ visibleRight: false })}>
                        <h3>Right Sidebar</h3>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleTop} position="top" onHide={() => this.setState({ visibleTop: false })}>
                        <h3>Top Sidebar</h3>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleBottom} position="bottom" onHide={() => this.setState({ visibleBottom: false })}>
                        <h3>Bottom Sidebar</h3>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleFullScreen} fullScreen onHide={() => this.setState({ visibleFullScreen: false })}>
                        <h3>Full Screen Sidebar</h3>
                    </Sidebar>

                    <Sidebar visible={this.state.visibleCustomToolbar} onHide={() => this.setState({ visibleCustomToolbar: false })} icons={customIcons}>
                        <h3>Sidebar with custom icons</h3>
                    </Sidebar>

                    <Button icon="pi pi-arrow-right" onClick={() => this.setState({ visibleLeft: true })} className="mr-2" />
                    <Button icon="pi pi-arrow-left" onClick={() => this.setState({ visibleRight: true })} className="mr-2" />
                    <Button icon="pi pi-arrow-down" onClick={() => this.setState({ visibleTop: true })} className="mr-2" />
                    <Button icon="pi pi-arrow-up" onClick={() => this.setState({ visibleBottom: true })} className="mr-2" />
                    <Button icon="pi pi-th-large" onClick={() => this.setState({ visibleFullScreen: true })} className="mr-2" />
                    <Button icon="pi pi-plus" onClick={() => this.setState({ visibleCustomToolbar: true })} />
                </div>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <h3>Full Screen Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h3>Sidebar with custom icons</h3>
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
                <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <h3>Full Screen Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h3>Sidebar with custom icons</h3>
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
                <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/sidebar/sidebar.min.js"></script>`,
            content: `
const { useState } = React;
const { Sidebar } = primereact.sidebar;
const { Button } = primereact.button;

const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <h3>Full Screen Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h3>Sidebar with custom icons</h3>
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
                <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Sidebar } from 'primereact/sidebar';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/sidebar/sidebar.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Sidebar is used as a container and visibility is controlled with <i>visible</i> property.</p>

<CodeHighlight>
{`
<Sidebar visible={visible} onHide={() => setVisible(false)}>
    Content
</Sidebar>

<Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)}/>
`}
</CodeHighlight>

                    <h5>Position</h5>
                    <p>Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>

<CodeHighlight>
{`
<Sidebar visible={visible} position="right" onHide={() => setVisible(false)}>
    Content
</Sidebar>
`}
</CodeHighlight>

                    <h5>Size</h5>
                    <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
<CodeHighlight>
{`
<Sidebar visible={visible} position="right" className="p-sidebar-sm" onHide={() => setVisible(false)}></Sidebar>
<Sidebar visible={visible} position="right" className="p-sidebar-md" onHide={() => setVisible(false)}></Sidebar>
<Sidebar visible={visible} position="right" className="p-sidebar-lg" onHide={() => setVisible(false)}></Sidebar>
<Sidebar visible={visible} position="right" style={{width:'30em'}} onHide={() => setVisible(false)}></Sidebar>
`}
</CodeHighlight>

                    <h5>Full Screen</h5>
                    <p>Full screen mode allows the sidebar to cover whole screen.</p>
<CodeHighlight>
{`
<Sidebar visible={visible} fullScreen onHide={() => setVisible(false)}}>
    Content
</Sidebar>
`}
</CodeHighlight>

                    <h5>Custom toolbar</h5>
                    <p>Additional content can be provided using the <i>icons</i> property.</p>

<CodeHighlight>
{`
<Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={() => (
    <React.Fragment>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-print"/>
        </button>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-arrow-right"/>
        </button>
    </React.Fragment>
)}>
    <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
    <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
    <Button type="button" onClick={(e) => setVisibleCustomToolbar(false)} label="Cancel" className="p-button-secondary"/>
</Sidebar>
`}
</CodeHighlight>

                    <h5>Properties</h5>
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
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
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
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
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

                    <h5>Styling</h5>
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
                                    <td>A content is displayed according to the sidebar position.
                                        To use this style, a sidebar must be created inside that content using the appendTo property and this content must have position:"relative" style.</td>
                                </tr>
                                <tr>
                                    <td>p-sidebar-mask</td>
                                    <td>Modal layer of the sidebar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Sidebar component uses <i>complementary</i> role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like <i>aria-labelledby</i> can be added. 
                    In addition <i>aria-modal</i> is added since focus is kept within the sidebar when opened.</p>
                    <p>It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.</p>
                    <p>Trigger element also requires <i>aria-expanded</i> and <i>aria-controls</i> to be handled explicitly.</p>

<CodeHighlight>
{`
<Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} aria-controls={visible ? 'sbar' : null} aria-expanded={visible ? true : false}/>

<Sidebar id="sbar" visible={visible} onHide={() => setVisible(false)} role="region">
    Content
</Sidebar>
`}
</CodeHighlight>

                    <h6>Overlay Keyboard Support</h6>
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
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the next the focusable element within the sidebar.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>tab</i></td>
                                    <td>Moves focus to the previous the focusable element within the sidebar.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the dialog if <i>closeOnEscape</i> is true.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Close Button Keyboard Support</h6>
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
                                    <td><i>enter</i></td>
                                    <td>Closes the sidebar.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Closes the sidebar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'SidebarDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default SidebarDoc;

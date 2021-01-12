import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class SidebarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
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
                <button className="p-sidebar-icon p-link p-mr-1">
                    <span className="pi pi-print" />
                </button>
                <button className="p-sidebar-icon p-link p-mr-1">
                    <span className="pi pi-arrow-right" />
                </button>
            </React.Fragment>
        );

        return (
            <div>
                <div className="card">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({ visibleLeft: false })}>
                        <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({ visibleLeft: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleLeft: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>

                    <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => this.setState({ visibleRight: false })}>
                        <h1 style={{ fontWeight: 'normal' }}>Right Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({ visibleRight: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleRight: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>

                    <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={() => this.setState({ visibleTop: false })}>
                        <h1 style={{ fontWeight: 'normal' }}>Top Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({ visibleTop: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleTop: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>

                    <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ visibleBottom: false })}>
                        <h1 style={{ fontWeight: 'normal' }}>Bottom Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({ visibleBottom: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleBottom: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>

                    <Sidebar visible={this.state.visibleFullScreen} fullScreen baseZIndex={1000000} onHide={() => this.setState({ visibleFullScreen: false })}>
                        <h1 style={{ fontWeight: 'normal' }}>Full Screen Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({ visibleFullScreen: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleFullScreen: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>

                    <Sidebar visible={this.state.visibleCustomToolbar} baseZIndex={1000000} onHide={() => this.setState({ visibleCustomToolbar: false })} icons={customIcons}>
                        <h1 style={{ fontWeight: 'normal' }}>Sidebar with custom icons</h1>
                        <Button type="button" onClick={() => this.setState({ visibleCustomToolbar: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                        <Button type="button" onClick={() => this.setState({ visibleCustomToolbar: false })} label="Cancel" className="p-button-secondary" />
                    </Sidebar>

                    <Button icon="pi pi-arrow-right" onClick={() => this.setState({ visibleLeft: true })} className="p-mr-2" />
                    <Button icon="pi pi-arrow-left" onClick={() => this.setState({ visibleRight: true })} className="p-mr-2" />
                    <Button icon="pi pi-arrow-down" onClick={() => this.setState({ visibleTop: true })} className="p-mr-2" />
                    <Button icon="pi pi-arrow-up" onClick={() => this.setState({ visibleBottom: true })} className="p-mr-2" />
                    <Button icon="pi pi-th-large" onClick={() => this.setState({ visibleFullScreen: true })} className="p-mr-2" />
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
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Right Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleRight(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleRight(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" baseZIndex={1000000} onHide={() => setVisibleTop(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Top Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleTop(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleTop(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => setVisibleBottom(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Bottom Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleBottom(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleBottom(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleFullScreen} fullScreen baseZIndex={1000000} onHide={() => setVisibleFullScreen(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Full Screen Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleFullScreen(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleFullScreen(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleCustomToolbar} baseZIndex={1000000} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h1 style={{ fontWeight: 'normal' }}>Sidebar with custom icons</h1>
                    <Button type="button" onClick={() => setVisibleCustomToolbar(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleCustomToolbar(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="p-mr-2" />
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="p-mr-2" />
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
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleLeft(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Right Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleRight(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleRight(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" baseZIndex={1000000} onHide={() => setVisibleTop(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Top Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleTop(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleTop(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => setVisibleBottom(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Bottom Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleBottom(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleBottom(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleFullScreen} fullScreen baseZIndex={1000000} onHide={() => setVisibleFullScreen(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Full Screen Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleFullScreen(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleFullScreen(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Sidebar visible={visibleCustomToolbar} baseZIndex={1000000} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h1 style={{ fontWeight: 'normal' }}>Sidebar with custom icons</h1>
                    <Button type="button" onClick={() => setVisibleCustomToolbar(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleCustomToolbar(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="p-mr-2" />
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="p-mr-2" />
                <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
            </div>
        </div>
    )
}
                `
            },
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Sidebar } from 'primereact/sidebar';
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
<Sidebar visible={visible} position="right" className="ui-sidebar-sm" onHide={() => setVisible(false)}></Sidebar>
<Sidebar visible={visible} position="right" className="ui-sidebar-md" onHide={() => setVisible(false)}></Sidebar>
<Sidebar visible={visible} position="right" className="ui-sidebar-lg" onHide={() => setVisible(false)}></Sidebar>
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
                                        <td>Whether clicking outside closes the panel.</td>
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
                                        <td>closeOnEscape</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Specifies if pressing escape key should hide the sidebar.</td>
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
                                        <td>Callback to invoke when sidebar gets hidden.</td>
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
                                        <td>p-sidebar-mask</td>
                                        <td>Modal layer of the sidebar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'SidebarDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}

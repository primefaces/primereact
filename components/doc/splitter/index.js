import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const SplitterDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

export class SplitterDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Horizontal</h5>
                    <Splitter style={{height: '300px'}} className="mb-5">
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </div>

                <div className="card">
                    <h5>Vertical</h5>
                    <Splitter style={{height: '300px'}} layout="vertical">
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </div>

                <div className="card">
                    <h5>Nested</h5>
                    <Splitter style={{height: '300px'}}>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel size={80}>
                            <Splitter layout="vertical">
                                <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                                    Panel 2
                                </SplitterPanel>
                                <SplitterPanel size={85}>
                                    <Splitter>
                                        <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                            Panel 3
                                        </SplitterPanel>
                                        <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                            Panel 4
                                        </SplitterPanel>
                                    </Splitter>
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
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
import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const SplitterDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Horizontal</h5>
                <Splitter style={{height: '300px'}} className="mb-5">
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div className="card">
                <h5>Vertical</h5>
                <Splitter style={{height: '300px'}} layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div className="card">
                <h5>Nested</h5>
                <Splitter style={{height: '300px'}}>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel size={80}>
                        <Splitter layout="vertical">
                            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                                Panel 2
                            </SplitterPanel>
                            <SplitterPanel size={85}>
                                <Splitter>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                        Panel 3
                                    </SplitterPanel>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                        Panel 4
                                    </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const SplitterDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Horizontal</h5>
                <Splitter style={{height: '300px'}} className="mb-5">
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div className="card">
                <h5>Vertical</h5>
                <Splitter style={{height: '300px'}} layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div className="card">
                <h5>Nested</h5>
                <Splitter style={{height: '300px'}}>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel size={80}>
                        <Splitter layout="vertical">
                            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                                Panel 2
                            </SplitterPanel>
                            <SplitterPanel size={85}>
                                <Splitter>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                        Panel 3
                                    </SplitterPanel>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                        Panel 4
                                    </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
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
        <script src="https://unpkg.com/primereact/splitter/splitter.min.js"></script>`,
            content: `
const { useState } = React;
const { Splitter, SplitterPanel } = primereact.splitter;

const SplitterDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Horizontal</h5>
                <Splitter style={{height: '300px'}} className="mb-5">
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div className="card">
                <h5>Vertical</h5>
                <Splitter style={{height: '300px'}} layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>

            <div className="card">
                <h5>Nested</h5>
                <Splitter style={{height: '300px'}}>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel size={80}>
                        <Splitter layout="vertical">
                            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                                Panel 2
                            </SplitterPanel>
                            <SplitterPanel size={85}>
                                <Splitter>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                        Panel 3
                                    </SplitterPanel>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                        Panel 4
                                    </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
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
import { Splitter, SplitterPanel } from 'primereact/splitter';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/splitter/splitter.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Splitter requires two SplitterPanel components to wrap.</p>

<CodeHighlight>
{`
<Splitter style={{height: '300px'}}>
    <SplitterPanel>
        Panel 1
    </SplitterPanel>
    <SplitterPanel>
        Panel 2
    </SplitterPanel>
</Splitter>
`}
</CodeHighlight>

                    <h5>Layout</h5>
                    <p>Default orientation is configured with the <i>layout</i> property and default is the "horizontal" whereas other alternative is the "vertical".</p>

<CodeHighlight>
{`
<Splitter style={{height: '300px'}} layout="vertical">
    <SplitterPanel>
        Panel 1
    </SplitterPanel>
    <SplitterPanel>
        Panel 2
    </SplitterPanel>
</Splitter>
`}
</CodeHighlight>

                    <h5>Initial Sizes</h5>
                    <p>When no size is defined, panels are split 50/50, use the <i>size</i> property to give relative widths e.g. 20/80.</p>

<CodeHighlight>
{`
<Splitter>
    <SplitterPanel size={20}>
        Panel 1
    </SplitterPanel>
    <SplitterPanel size={80}>
        Panel 2
    </SplitterPanel>
</Splitter>
`}
</CodeHighlight>

                    <h5>Minimum Size</h5>
                    <p>Minimum size defines the lowest boundary for the size of a panel.</p>

<CodeHighlight>
{`
<Splitter>
    <SplitterPanel size={20} minSize={10}>
        Panel 1
    </SplitterPanel>
    <SplitterPanel size={80} minSize={20}>
        Panel 2
    </SplitterPanel>
</Splitter>
`}
</CodeHighlight>

                    <h5>Nested Panels</h5>
                    <p>Splitters can be combined to create advanced layouts.</p>

<CodeHighlight>
{`
<Splitter style={{height: '300px'}}>
    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
        Panel 1
    </SplitterPanel>
    <SplitterPanel size={80}>
        <Splitter layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                Panel 2
            </SplitterPanel>
            <SplitterPanel size={85}>
                <Splitter>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                        Panel 3
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                        Panel 4
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </SplitterPanel>
</Splitter>
`}
</CodeHighlight>

                    <h5>Stateful</h5>
                    <p>Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes
                        can be restored. Define a <i>stateKey</i> to enable this feature. Default location of the state is
                        session storage and other option is the local storage which can be configured using the <i>stateStorage</i> property.</p>

<CodeHighlight>
{`
<Splitter stateKey={"mykey"} stateStorage={"local"}>
    <SplitterPanel>
        Panel 1
    </SplitterPanel>
    <SplitterPanel>
        Panel 2
    </SplitterPanel>
</Splitter>
`}
</CodeHighlight>

                    <h5>Properties of SplitterPanel</h5>
                    <p>Any property as style and class are passed to the main container element. Following are the
                        additional properties to configure the component.</p>
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
                                <td>size</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Size of the element relative to 100%.</td>
                            </tr>
                            <tr>
                                <td>minSize</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Minimum size of the element relative to 100%.</td>
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
                                <td>ClassName of the component.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Properties of Splitter</h5>
                    <p>Any property as style and class are passed to the main container element. Following are the
                        additional properties to configure the component.</p>
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
                                <td>ClassName of the component.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Orientation of the panels, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>gutterSize</td>
                                <td>number</td>
                                <td>4</td>
                                <td>Size of the divider in pixels.</td>
                            </tr>
                            <tr>
                                <td>stateKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Storage identifier of a stateful Splitter.</td>
                            </tr>
                            <tr>
                                <td>stateStorage</td>
                                <td>string</td>
                                <td>session</td>
                                <td>Defines where a stateful splitter keeps its state, valid values are "session"
                                    for sessionStorage and "local" for localStorage.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events of Splitter</h5>
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
                                <td>onResizeEnd</td>
                                <td>event.originalEvent: Browser event <br />
                                    event.sizes: Sizes of the panels as an array
                                </td>
                                <td>Callback to invoke when resize ends.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes</p>
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
                                <td>p-splitter</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-splitter</td>
                                <td>Container element during resize.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-horizontal</td>
                                <td>Container element with horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-vertical</td>
                                <td>Container element with vertical layout.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-panel</td>
                                <td>Splitter panel element.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-gutter</td>
                                <td>Gutter element to use when resizing the panels.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-gutter-handle</td>
                                <td>Handl element of the gutter.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Splitter bar defines <i>separator</i> as the role with <i>aria-orientation</i> set to either horizontal or vertical.</p>

                    <h6>Keyboard Support</h6>
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
                                    <td>Moves focus through the splitter bar.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves a vertical splitter down.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves a vertical splitter up.</td>
                                </tr>
                                <tr>
                                    <td><i>left arrow</i></td>
                                    <td>Moves a vertical splitter to the left.</td>
                                </tr>
                                <tr>
                                    <td><i>right arrow</i></td>
                                    <td>Moves a vertical splitter to the right.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'SplitterDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default SplitterDoc;

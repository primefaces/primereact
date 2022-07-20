import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const BlockUIDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import './BlockUIDemo.css';

export class BlockUIDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blockedPanel: false,
            blockedDocument: false
        };

        this.blockPanel = this.blockPanel.bind(this);
        this.unblockPanel = this.unblockPanel.bind(this);
        this.blockDocument = this.blockDocument.bind(this);
    }

    blockDocument() {
        this.setState({
            blockedDocument: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    blockedDocument: false
                });
            }, 3000);
        });
    }

    blockPanel() {
        this.setState({
            blockedPanel: true
        });
    }

    unblockPanel() {
        this.setState({
            blockedPanel: false
        });
    }

    render() {
        return (
            <div className="blockui-demo">
                <div className="card">
                    <h5>Document</h5>
                    <BlockUI blocked={this.state.blockedDocument} fullScreen />

                    <Button type="button" label="Block" onClick={this.blockDocument} />

                    <h5>Panel</h5>
                    <Button type="button" label="Block" onClick={this.blockPanel} />
                    <Button type="button" label="Unblock" onClick={this.unblockPanel} />

                    <BlockUI blocked={this.state.blockedPanel}>
                        <Panel header="Basic" style={{ marginTop: '20px' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Panel>
                    </BlockUI>

                    <BlockUI blocked={this.state.blockedPanel} template={<i className="pi pi-lock" style={{'fontSize': '3rem'}} />}>
                        <Panel header="Template" style={{ marginTop: '20px' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Panel>
                    </BlockUI>
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
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import './BlockUIDemo.css';

export const BlockUIDemo = () => {

    const [blockedPanel, setBlockedPanel] = useState(false);
    const [blockedDocument, setBlockedDocument] = useState(false);

    useEffect(() => {
        if(blockedDocument) {
            setTimeout(() => {
                setBlockedDocument(false);
            }, 3000);
        }
    }, [blockedDocument])

    const blockDocument = () => {
        setBlockedDocument(true);
    }

    const blockPanel = () => {
        setBlockedPanel(true);
    }

    const unblockPanel = () => {
        setBlockedPanel(false);
    }

    return (
        <div className="blockui-demo">
            <div className="card">
                <h5>Document</h5>
                <BlockUI blocked={blockedDocument} fullScreen />

                <Button type="button" label="Block" onClick={blockDocument} />

                <h5>Panel</h5>
                <Button type="button" label="Block" onClick={blockPanel} />
                <Button type="button" label="Unblock" onClick={unblockPanel} />

                <BlockUI blocked={blockedPanel}>
                    <Panel header="Basic" style={{ marginTop: '20px' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </BlockUI>

                <BlockUI blocked={blockedPanel} template={<i className="pi pi-lock" style={{'fontSize': '3rem'}} />}>
                    <Panel header="Template" style={{ marginTop: '20px' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </BlockUI>
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import './BlockUIDemo.css';

export const BlockUIDemo = () => {

    const [blockedPanel, setBlockedPanel] = useState<boolean>(false);
    const [blockedDocument, setBlockedDocument] = useState<boolean>(false);

    useEffect(() => {
        if(blockedDocument){
            setTimeout(() => {
                setBlockedDocument(false);
            }, 3000);
        }
    }, [blockedDocument])

    const blockDocument = () => {
        setBlockedDocument(true);
    }

    const blockPanel = () => {
        setBlockedPanel(true);
    }

    const unblockPanel = () => {
        setBlockedPanel(false);
    }

    return (
        <div className="blockui-demo">
            <div className="card">
                <h5>Document</h5>
                <BlockUI blocked={blockedDocument} fullScreen />

                <Button type="button" label="Block" onClick={blockDocument} />

                <h5>Panel</h5>
                <Button type="button" label="Block" onClick={blockPanel} />
                <Button type="button" label="Unblock" onClick={unblockPanel} />

                <BlockUI blocked={blockedPanel}>
                    <Panel header="Basic" style={{ marginTop: '20px' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </BlockUI>

                <BlockUI blocked={blockedPanel} template={<i className="pi pi-lock" style={{'fontSize': '3rem'}} />}>
                    <Panel header="Template" style={{ marginTop: '20px' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </BlockUI>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./BlockUIDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/blockui/blockui.min.js"></script>
        <script src="https://unpkg.com/primereact/panel/panel.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { BlockUI } = primereact.blockui;
const { Button } = primereact.button;
const { Panel } = primereact.panel;

const BlockUIDemo = () => {

    const [blockedPanel, setBlockedPanel] = useState(false);
    const [blockedDocument, setBlockedDocument] = useState(false);

    useEffect(() => {
        if(blockedDocument) {
            setTimeout(() => {
                setBlockedDocument(false);
            }, 3000);
        }
    }, [blockedDocument])

    const blockDocument = () => {
        setBlockedDocument(true);
    }

    const blockPanel = () => {
        setBlockedPanel(true);
    }

    const unblockPanel = () => {
        setBlockedPanel(false);
    }

    return (
        <div className="blockui-demo">
            <div className="card">
                <h5>Document</h5>
                <BlockUI blocked={blockedDocument} fullScreen />

                <Button type="button" label="Block" onClick={blockDocument} />

                <h5>Panel</h5>
                <Button type="button" label="Block" onClick={blockPanel} />
                <Button type="button" label="Unblock" onClick={unblockPanel} />

                <BlockUI blocked={blockedPanel}>
                    <Panel header="Basic" style={{ marginTop: '20px' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </BlockUI>

                <BlockUI blocked={blockedPanel} template={<i className="pi pi-lock" style={{'fontSize': '3rem'}} />}>
                    <Panel header="Template" style={{ marginTop: '20px' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </BlockUI>
            </div>
        </div>
    )
}
                `
            }
        }

    const extFiles = {
        'demo/BlockUIDemo.css': {
            content: `
.blockui-demo .p-panel p {
    line-height: 1.5;
    margin: 0;
}
.blockui-demo button {
    margin-right: 0.5rem;
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
import { BlockUI } from 'primereact/blockui';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/blockui/blockui.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>BlockUI is controlled using the <i>blocked</i> property, by default target element to block is the child component. In example below, panel gets blocked
                        with a mask when blockedPanel is enabled and gets unblock when the bound variable is set to false.
                    </p>

<CodeHighlight lang="js">
{`
export const BlockUIDemo = () => {

    const [blockedPanel, setBlockedPanel] = useState(false);

    const blockPanel = () => {
        setBlockedPanel(true);
    }

    const unblockPanel = () => {
        setBlockedPanel(false);
    }

    return (
        <BlockUI blocked={blockedPanel}>
            <Panel header="Header">
                // content
            </Panel>
        </BlockUI>
    );
}
`}
</CodeHighlight>

                    <h5>Full Screen</h5>
                    <p>In full screen mode, instead of a particular element, the whole document gets blocked. Set <i>fullScreen</i> as true in order to enable this functionality.</p>
<CodeHighlight>
{`
<BlockUI blocked={blockedPanel} fullScreen>
    // content
</BlockUI>
`}
</CodeHighlight>

                    <h5>Properties</h5>
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
                                    <td>blocked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Controls the blocked state.</td>
                                </tr>
                                <tr>
                                    <td>fullScreen</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, the whole document gets blocked.</td>
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
                                    <td>template</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of mask.</td>
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
                                    <td>onBlocked</td>
                                    <td>-</td>
                                    <td>Fired when the element gets blocked.</td>
                                </tr>
                                <tr>
                                    <td>onUnblocked</td>
                                    <td>-</td>
                                    <td>Fired when the element gets unblocked.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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
                                    <td>p-blockui</td>
                                    <td>Mask element.</td>
                                </tr>
                                <tr>
                                    <td>p-blockui-document</td>
                                    <td>Mask element in full screen mode.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>BlockUI manages <i>aria-busy</i> state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes 
                        like <i>role</i> and <i>aria-live</i> can be used to define live regions.</p>

                        <h5>Keyboard Support</h5>
                        <p>Component does not include any interactive elements.</p>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'BlockUIDemo', sources: sources, extFiles: extFiles })
                }

            </TabView>
        </div>
    )
})

export default BlockUIDoc;

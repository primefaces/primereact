import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const SpeedDialDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import './SpeedDialDemo.css'

export class SpeedDialDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.toast.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.toast.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.toast.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Linear</h5>
                    <div className="speeddial-linear-demo" style={{ position: 'relative', height: '500px' }}>
                        <SpeedDial model={this.items} direction="up" />
                        <SpeedDial model={this.items} direction="down" />
                        <SpeedDial model={this.items} direction="left" />
                        <SpeedDial model={this.items} direction="right" />
                    </div>
                </div>

                <div className="card">
                    <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                    <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                        <SpeedDial model={this.items} radius={80} type="circle" buttonClassName="p-button-warning" />
                        <SpeedDial model={this.items} radius={80} direction="up" type="semi-circle"  />
                        <SpeedDial model={this.items} radius={80} direction="down" type="semi-circle" />
                        <SpeedDial model={this.items} radius={80} direction="left" type="semi-circle" />
                        <SpeedDial model={this.items} radius={80} direction="right" type="semi-circle" />
                        <SpeedDial model={this.items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                        <SpeedDial model={this.items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                        <SpeedDial model={this.items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                        <SpeedDial model={this.items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
                    </div>
                </div>

                <div className="card">
                    <h5>Tooltip</h5>
                    <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
                        <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                        <SpeedDial model={this.items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

                        <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                        <SpeedDial model={this.items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
                    </div>
                </div>

                <div className="card">
                    <h5>Transition Duration, Icon and No Rotate Animation</h5>
                    <div className="speeddial-delay-demo" style={{ position: 'relative', height: '350px' }}>
                        <SpeedDial model={this.items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
                    </div>
                </div>

                <div className="card">
                    <h5>Mask</h5>
                    <div className="speeddial-mask-demo" style={{ position: 'relative', height: '350px' }}>
                        <SpeedDial model={this.items} direction="up" mask />
                    </div>
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
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import './SpeedDialDemo.css'

export const SpeedDialDemo = () => {

    const toast = useRef(null);

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Linear</h5>
                <div className="speeddial-linear-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} direction="up" />
                    <SpeedDial model={items} direction="down" />
                    <SpeedDial model={items} direction="left" />
                    <SpeedDial model={items} direction="right" />
                </div>
            </div>

            <div className="card">
                <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                    <SpeedDial model={items} radius={80} direction="up" type="semi-circle"  />
                    <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
                    <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
                </div>
            </div>

            <div className="card">
                <h5>Tooltip</h5>
                <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                    <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

                    <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
                </div>
            </div>

            <div className="card">
                <h5>Transition Duration, Icon and No Rotate Animation</h5>
                <div className="speeddial-delay-demo" style={{ position: 'relative', height: '350px' }}>
                    <SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
                </div>
            </div>

            <div className="card">
                <h5>Mask</h5>
                <div className="speeddial-mask-demo" style={{ position: 'relative', height: '350px' }}>
                    <SpeedDial model={items} direction="up" mask />
                </div>
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
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import './SpeedDialDemo.css'

export const SpeedDialDemo = () => {

    const toast = useRef<any>(null);

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Linear</h5>
                <div className="speeddial-linear-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} direction="up" />
                    <SpeedDial model={items} direction="down" />
                    <SpeedDial model={items} direction="left" />
                    <SpeedDial model={items} direction="right" />
                </div>
            </div>

            <div className="card">
                <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                    <SpeedDial model={items} radius={80} direction="up" type="semi-circle"  />
                    <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
                    <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
                </div>
            </div>

            <div className="card">
                <h5>Tooltip</h5>
                <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                    <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

                    <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
                </div>
            </div>

            <div className="card">
                <h5>Transition Duration, Icon and No Rotate Animation</h5>
                <div className="speeddial-delay-demo" style={{ position: 'relative', height: '350px' }}>
                    <SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
                </div>
            </div>

            <div className="card">
                <h5>Mask</h5>
                <div className="speeddial-mask-demo" style={{ position: 'relative', height: '350px' }}>
                    <SpeedDial model={items} direction="up" mask />
                </div>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./SpeedDialDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/speeddial/speeddial.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { SpeedDial } = primereact.speeddial;
const { Tooltip } = primereact.tooltip;
const { Toast } = primereact.toast;

const SpeedDialDemo = () => {

    const toast = useRef(null);

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Linear</h5>
                <div className="speeddial-linear-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} direction="up" />
                    <SpeedDial model={items} direction="down" />
                    <SpeedDial model={items} direction="left" />
                    <SpeedDial model={items} direction="right" />
                </div>
            </div>

            <div className="card">
                <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                    <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                    <SpeedDial model={items} radius={80} direction="up" type="semi-circle"  />
                    <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
                    <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
                </div>
            </div>

            <div className="card">
                <h5>Tooltip</h5>
                <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                    <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

                    <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
                </div>
            </div>

            <div className="card">
                <h5>Transition Duration, Icon and No Rotate Animation</h5>
                <div className="speeddial-delay-demo" style={{ position: 'relative', height: '350px' }}>
                    <SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
                </div>
            </div>

            <div className="card">
                <h5>Mask</h5>
                <div className="speeddial-mask-demo" style={{ position: 'relative', height: '350px' }}>
                    <SpeedDial model={items} direction="up" mask />
                </div>
            </div>
        </div>
    )
}
                `
        }
    }

    const extFiles = {
        'demo/SpeedDialDemo.css': {
            content: `
.speeddial-linear-demo .p-speeddial-direction-up {
    left: calc(50% - 2rem);
    bottom: 0;
}
.speeddial-linear-demo .p-speeddial-direction-down {
    left: calc(50% - 2rem);
    top: 0;
}
.speeddial-linear-demo .p-speeddial-direction-left {
    right: 0;
    top: calc(50% - 2rem);
}
.speeddial-linear-demo .p-speeddial-direction-right {
    left: 0;
    top: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-circle {
    top: calc(50% - 2rem);
    left: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-up {
    left: calc(50% - 2rem);
    bottom: 0;
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-down {
    left: calc(50% - 2rem);
    top: 0;
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-left {
    right: 0;
    top: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-right {
    left: 0;
    top: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-left {
    right: 0;
    bottom: 0;
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-right {
    left: 0;
    bottom: 0;
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-left {
    right: 0;
    top: 0;
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-right {
    left: 0;
    top: 0;
}
.speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-left {
    left: 0;
    bottom: 0;
}
.speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-right {
    right: 0;
    bottom: 0;
}
.speeddial-delay-demo .p-speeddial-direction-up {
    left: calc(50% - 2rem);
    bottom: 0;
}
.speeddial-mask-demo .p-speeddial-direction-up {
    right: 0;
    bottom: 0;
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
import { SpeedDial } from 'primereact/speeddial';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/speeddial/speeddial.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>When pressed, a floating action button can display multiple primary actions that can be performed on a page. It has a collection of additional options defined by the <i>model</i> property.
                    SpeedDial's position is calculated according to the container element with the position type style.</p>

<CodeHighlight lang="js">
{`
export const SpeedDialDemo = () => {

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        }
    ];

    return (
        <SpeedDial model={items} />
    );
}
`}
</CodeHighlight>

                    <h5>MenuModel API</h5>
                    <p>SpeedDial uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.</p>

                    <h5>Type</h5>
                    <p>SpeedDial has 4 types; <i>linear</i>, <i>circle</i>, <i>semi-circle</i> and <i>quarter-circle</i>.</p>

                    <h5>Direction</h5>
                    <p>Specifies the opening direction of actions. For the <strong>linear</strong> and <strong>semi-circle</strong> types; <i>up</i>, <i>down</i>, <i>left</i> and <i>right</i>. For the <strong>quarter-circle</strong> type; <i>up-left</i>, <i>up-right</i>, <i>down-left</i> and <i>down-right</i>.</p>

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
                                    <td>p-speeddial</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-speeddial-button</td>
                                    <td>Button element of speeddial.</td>
                                </tr>
                                <tr>
                                    <td>p-speeddial-mask</td>
                                    <td>Mask element of speeddial.</td>
                                </tr>
                                <tr>
                                    <td>p-speeddial-list</td>
                                    <td>List of the actions.</td>
                                </tr>
                                <tr>
                                    <td>p-speeddial-item</td>
                                    <td>Each action item of list.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the <i>aria-labelledby</i> or <i>aria-label</i> props.
                    Addititonally the button includes includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button.</p>

                    <p>The popup overlay uses <i>menu</i> role on the list and each action item has a <i>menuitem</i> role with an <i>aria-label</i> as the menuitem label. The id of the menu refers to the <i>aria-controls</i> of the button.</p>

<CodeHighlight>
{`
<SpeedDial aria-label="Options" />
`}
</CodeHighlight>


                    <h6>Menu Button Keyboard Support</h6>
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
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Opens the menu and moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Opens the menu and moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Menu Keyboard Support</h6>
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
                                    <td>Actives the menuitem, closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td><i>arrow keys</i></td>
                                    <td>Navigates between the menu items.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'SpeedDialDemo', sources: sources, extFiles: extFiles })
                }

            </TabView>
        </div>
    )
})

export default SpeedDialDoc;

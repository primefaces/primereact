import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class StepsDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import './StepsDemo.css';

export class StepsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        };

        this.items = [
            {
                label: 'Personal',
                command: (event) => {
                    this.toast.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.toast.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.toast.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.toast.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    }

    render() {
        return (
            <div className="steps-demo">
                <Toast ref={(el) => { this.toast = el }}></Toast>

                <div className="card">
                    <h5>Basic</h5>
                    <Steps model={this.items} />

                    <h5>Interactive</h5>
                    <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} />
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import './StepsDemo.css';

const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: 'Personal',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Seat',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    return (
        <div className="steps-demo">
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <Steps model={items} />

                <h5>Interactive</h5>
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import './StepsDemo.css';

const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: 'Personal',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Seat',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    return (
        <div className="steps-demo">
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <Steps model={items} />

                <h5>Interactive</h5>
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'src/demo/StepsDemo.css': {
                content: `
@media screen and (max-width: 640px) {
    .steps-demo .p-steps {
        height: 350px;
    }
    .steps-demo .p-steps > ul {
        flex-direction: column;
        height: 100%;
    }
    .steps-demo .p-steps > ul .p-steps-item {
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: center;
    }
    .steps-demo .p-steps > ul .p-steps-item:before {
        position: static;
        left: auto;
        top: auto;
        margin-top: 0;
        border-left: 1px solid var(--surface-d);
        border-top: 0 none;
        width: auto;
        height: 100%;
        margin-left: 1rem;
    }
    .steps-demo .p-steps > ul .p-steps-item .p-menuitem-link {
        flex-direction: row;
        overflow: visible;
    }
    .steps-demo .p-steps > ul .p-steps-item .p-menuitem-link .p-steps-title {
        margin: 0 .5rem 0;
    }
    .steps-demo .p-steps > ul .p-steps-item:last-child {
        flex-grow: 0;
    }
    .steps-demo .p-steps > ul .p-steps-item:last-child .p-menuitem-link {
        padding: 0;
    }
    .steps-demo .p-steps > ul .p-steps-item:last-child:before {
        display: none;
    }
}
                `
            }
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
import {Steps} from 'primereact/steps';
`}
</CodeHighlight>
                        <h5>MenuItem API</h5>
                        <p>Steps uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h5>Getting Started</h5>
                        <p>TabMenu requires a collection of menuitems as its model.</p>

<CodeHighlight lang="js">
{`
const items = [
    {label: 'Personal'},
    {label: 'Seat'},
    {label: 'Payment'},
    {label: 'Confirmation'}
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<Steps model={items} />
`}
</CodeHighlight>

                        <h5>interactive</h5>
                        <p>Items are readOnly by default, if you'd like to make them interactive then disable readonly, use command handlers of menuitem to respond to selection events and define activeIndex property along with the
                            onSelect event to use it as a controlled component.</p>

<CodeHighlight>
{`
<Steps model={interactiveItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const interactiveItems = [
    {
        label: 'Personal',
        command: (event) => {
            toast.current.show({severity:'info', summary:'First Step', detail: event.item.label});
        }
    },
    {
        label: 'Seat',
        command: (event) => {
            toast.current.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
        }
    },
    {
        label: 'Payment',
        command: (event) => {
            toast.current.show({severity:'info', summary:'Pay with CC', detail: event.item.label});
        }
    },
    {
        label: 'Confirmation',
        command: (event) => {
            toast.current.show({severity:'info', summary:'Last Step', detail: event.item.label});
        }
    }
];
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
                                        <td>model</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of menuitems.</td>
                                    </tr>
                                    <tr>
                                        <td>activeIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Index of the active item.</td>
                                    </tr>
                                    <tr>
                                        <td>readOnly</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether the items are clickable or not.</td>
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
                                        <td>onSelect</td>
                                        <td>event.originalEvent: Browser event<br />
                                        event.item: Selected item instance<br />
                                        event.index: Index of selected item instance</td>
                                        <td>Callback to invoke when the new step is selected.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>p-steps</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-steps-item</td>
                                        <td>Menuitem element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-steps-number</td>
                                        <td>Number of menuitem.</td>
                                    </tr>
                                    <tr>
                                        <td>p-steps-title</td>
                                        <td>Label of menuitem.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'StepsDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }

}

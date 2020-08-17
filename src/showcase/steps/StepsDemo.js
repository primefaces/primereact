import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Steps } from '../../components/steps/Steps';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { Growl } from "../../components/growl/Growl";
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

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
                    this.growl.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="steps">
                        <h1>Steps</h1>
                        <p>Steps component is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el }}></Growl>

                    <div className="card">
                        <h5>Basic</h5>
                        <Steps model={this.items} />

                        <h5>Interactive</h5>
                        <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} />
                    </div>
                </div>

                <StepsDoc />

            </div>
        );
    }
}

class StepsDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Steps} from 'primereact/steps';
import {Growl} from 'primereact/growl';

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
                    this.growl.show({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => {this.growl = el}}></Growl>

                <h3>Basic</h3>
                <Steps model={this.items} />

                <h3>Interactive</h3>
                <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />

                <h3>Custom Style</h3>
                <Steps model={this.items} className="steps-custom" />
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
import {Steps} from 'primereact/steps';
import {Growl} from 'primereact/growl';

const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    let growl = useRef(null);

    const items = [
        {
            label: 'Personal',
            command: (event) => {
                growl.current.show({severity:'info', summary:'First Step', detail: event.item.label});
            }
        },
        {
            label: 'Seat',
            command: (event) => {
                growl.current.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                growl.current.show({severity:'info', summary:'Pay with CC', detail: event.item.label});
            }
        },
        {
            label: 'Confirmation',
            command: (event) => {
                growl.current.show({severity:'info', summary:'Last Step', detail: event.item.label});
            }
        }
    ];

    return (
        <div>
            <Growl ref={growl}></Growl>

            <h3>Basic</h3>
            <Steps model={items} />

            <h3>Interactive</h3>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />

            <h3>Custom Style</h3>
            <Steps model={items} className="steps-custom" />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useRef } from 'react';
import {Steps} from 'primereact/steps';
import {Growl} from 'primereact/growl';

const StepsDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    let growl = useRef<any>(null);

    const items = [
        {
            label: 'Personal',
            command: (event: any) => {
                growl.current.show({severity:'info', summary:'First Step', detail: event.item.label});
            }
        },
        {
            label: 'Seat',
            command: (event: any) => {
                growl.current.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
            }
        },
        {
            label: 'Payment',
            command: (event: any) => {
                growl.current.show({severity:'info', summary:'Pay with CC', detail: event.item.label});
            }
        },
        {
            label: 'Confirmation',
            command: (event: any) => {
                growl.current.show({severity:'info', summary:'Last Step', detail: event.item.label});
            }
        }
    ];

    return (
        <div>
            <Growl ref={growl}></Growl>

            <h3>Basic</h3>
            <Steps model={items} />

            <h3>Interactive</h3>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />

            <h3>Custom Style</h3>
            <Steps model={items} className="steps-custom" />
        </div>
    );
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
                        <h3>Import</h3>
                        <CodeHighlight lang="js">
                            {`
import {Steps} from 'primereact/steps';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>Steps uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
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

                        <h3>interactive</h3>
                        <p>Items are readonly by default, if you'd like to make them interactive then disable readonly, use command handlers of menuitem to respond to selection events and define activeIndex property along with the
                            onSelect event to use it as a controlled component.</p>

                        <CodeHighlight>
                            {`
<Steps model={interactiveItems} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />

`}
                        </CodeHighlight>

                        <CodeHighlight lang="js">
                            {`
const interactiveItems = [{
    label: 'Personal',
    command: (event) => {
        this.growl.show({severity:'info', summary:'First Step', detail: event.item.label});
    }
},
{
    label: 'Seat',
    command: (event) => {
        this.growl.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
    }
},
{
    label: 'Payment',
    command: (event) => {
        this.growl.show({severity:'info', summary:'Pay with CC', detail: event.item.label});
    }
},
{
    label: 'Confirmation',
    command: (event) => {
        this.growl.show({severity:'info', summary:'Last Step', detail: event.item.label});
    }
}
];

`}
                        </CodeHighlight>

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
                                        <td>onSelect</td>
                                        <td>event.originalEvent: Browser event<br />
                                        event.item: Selected item instance<br />
                                        event.index: Index of selected item instance</td>
                                        <td>Callback to invoke when the new step is selected.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
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

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="StepsDemo" sources={this.sources} />
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Steps} from '../../components/steps/Steps';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Growl} from "../../components/growl/Growl";
import "./StepsDemo.css"
import { LiveEditor } from '../liveeditor/LiveEditor';

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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Steps</h1>
                        <p>Steps component is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("steps")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => {this.growl = el}}></Growl>

                    <h3>Basic</h3>
                    <Steps model={this.items} />

                    <h3>Interactive</h3>
                    <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />

                    <h3>Custom Style</h3>
                    <Steps model={this.items} className="steps-custom" />
                </div>

                <StepsDoc/>

            </div>
        );
    }
}

class StepsDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {Steps} from 'primereact/steps';
import {Growl} from "primereact/growl";

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
                content: `
import React, { useState, useRef } from 'react';
import {Steps} from 'primereact/steps';
import {Growl} from "primereact/growl";

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
                content: `
import React, { useState, useRef } from 'react';
import {Steps} from 'primereact/steps';
import {Growl} from "primereact/growl";

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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/steps" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="StepsDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Steps} from 'primereact/steps';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>Steps uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>TabMenu requires a collection of menuitems as its model.</p>

                        <CodeHighlight className="language-javascript">
                            {`
const items = [
    {label: 'Personal'},
    {label: 'Seat'},
    {label: 'Payment'},
    {label: 'Confirmation'}
];

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-jsx">
                            {`
<Steps model={items} />

`}
                        </CodeHighlight>

                        <h3>interactive</h3>
                        <p>Items are readonly by default, if you'd like to make them interactive then disable readonly, use command handlers of menuitem to respond to selection events and define activeIndex property along with the
                            onSelect event to use it as a controlled component.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Steps model={interactiveItems} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
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
                                    <td>event.originalEvent: Browser event<br/>
                                        event.item: Selected item instance<br/>
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

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { TabView,TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ToggleButtonDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

export class ToggleButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked1: false,
            checked2: false
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <ToggleButton checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} onIcon="pi pi-check" offIcon="pi pi-times" />

                    <h5>Customized</h5>
                    <ToggleButton checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '10em'}} />
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
import React, { useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

const ToggleButtonDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onIcon="pi pi-check" offIcon="pi pi-times" />

                <h5>Customized</h5>
                <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '10em'}} />
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

const ToggleButtonDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onIcon="pi pi-check" offIcon="pi pi-times" />

                <h5>Customized</h5>
                <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '10em'}} />
            </div>
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
            <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { ToggleButton } from 'primereact/togglebutton';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>ToggleButton is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} />
`}
</CodeHighlight>

            <h5>Labels and Icons</h5>
            <p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>

<CodeHighlight>
{`
<ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" checked={checked2} onChange={(e) => setChecked2(e.value)} />
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
                            <td>onIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon for the on state.</td>
                        </tr>
                        <tr>
                            <td>offIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon for the off state.</td>
                        </tr>
                        <tr>
                            <td>onLabel</td>
                            <td>string</td>
                            <td>yes</td>
                            <td>Label for the on state.</td>
                        </tr>
                        <tr>
                            <td>offLabel</td>
                            <td>string</td>
                            <td>no</td>
                            <td>Label for the off state.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifies the on/off state of the button.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>iconPos</td>
                            <td>string</td>
                            <td>left</td>
                            <td>Position of the icon, valid values are "left" and "right".</td>
                        </tr>
                        <tr>
                            <td>tooltip</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                            <td>onChange</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Value as the checked state.</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when autocomplete gets focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when autocomplete loses focus.</td>
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
                            <td>p-togglebutton</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-button-icon-left</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>p-button-text</td>
                            <td>Label element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Dependencies</h5>
            <p>None.</p>
        </TabPanel>

        {
            useLiveEditorTabs({ name: 'ToggleButtonDemo', sources: this.sources })
        }
    </TabView>
</div>
        );
    }
}

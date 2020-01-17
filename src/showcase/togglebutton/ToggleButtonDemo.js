import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ToggleButton} from '../../components/togglebutton/ToggleButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class ToggleButtonDemo extends Component {

    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: false
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("toggleButton")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} />
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Custom</h3>
                    <ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times"
                                checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} />
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>

                <ToggleButtonDoc />
            </div>
        );
    }
}

class ToggleButtonDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {ToggleButton} from 'primereact/togglebutton';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>ToggleButton is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>

<CodeHighlight className="language-jsx">
{`
<ToggleButton checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} />

`}
</CodeHighlight>

            <h3>Labels and Icons</h3>
            <p>Icons and Labels can be customized using <i>onLabel</i>, <i>offLabel</i>, <i>onIcon</i> and <i>offIcon</i> properties.</p>

<CodeHighlight className="language-jsx">
{`
ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times"
                                checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} />

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
                            <td>onChange</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Value as the checked state.</td>
                            <td>Callback to invoke on value change.</td>
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

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/togglebutton" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {ToggleButton} from 'primereact/togglebutton';

export class ToggleButtonDemo extends Component {

    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: false
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} />
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Custom</h3>
                    <ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times"
                                checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} />
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>
        </TabPanel>
    </TabView>
</div>
        );
    }
}

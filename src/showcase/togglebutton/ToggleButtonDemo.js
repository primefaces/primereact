import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ToggleButton} from '../../components/togglebutton/ToggleButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ToggleButtonDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeCustom = this.onChangeCustom.bind(this);
    }

    onChangeBasic(e) {
        this.setState({checked1:e.value});
    }

    onChangeCustom(e) {
        this.setState({checked2:e.value});
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
                    <ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={this.onChangeBasic}/>
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Custom</h3>
                    <ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="fa-check-square" offIcon="fa-square"
                                checked={this.state.checked2} onChange={this.onChangeCustom}/>
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
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {ToggleButton} from 'primereact/components/togglebutton/ToggleButton';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>ToggleButton is used as a controlled input with checked and onChange properties.</p>
                    
<CodeHighlight className="html">
{`
<ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={this.onChangeBasic}/>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
 constructor() {
    super();
    this.state = {};
    this.onChangeBasic = this.onChangeBasic.bind(this);
}

onChangeBasic(e) {
    this.setState({checked1:e.value});
}

render() {
    return (
        <ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={this.onChangeBasic}/>
    );
}
`}
</CodeHighlight>

            <h3>Customization</h3>
            <p>Icons and Labels can be customized using onLabel, offLabel, onIcon and OffIcon attributes.</p>
<CodeHighlight className="html">
{`
<ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="fa-check-square" offIcon="fa-square"
                                checked={this.state.checked2} onChange={this.onChangeCustom}/>

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
                            <td>Specifies whether a togglebutton should be checked or not.</td>
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
                            <td>event.originalEvent: browser event <br />
                                event.value: boolean value to represent checked state.</td>
                            <td>Callback to invoke on state change.</td>
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
                            <td>ui-togglebutton</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>ui-button-icon-left</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>ui-button-text</td>
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
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="javascript">
{`
export class ToggleButtonDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeCustom = this.onChangeCustom.bind(this);
    }

    onChangeBasic(e) {
        this.setState({checked1:e.value});
    }

    onChangeCustom(e) {
        this.setState({checked2:e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={this.onChangeBasic}/>
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Custom</h3>
                    <ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="fa-check-square" offIcon="fa-square"
                                checked={this.state.checked2} onChange={this.onChangeCustom}/>
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>

                <ToggleButtonDoc />
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
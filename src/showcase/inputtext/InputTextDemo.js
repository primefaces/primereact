import React, {Component} from 'react';
import {Link} from 'react-router';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class InputTextDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Disabled</h3>
                    <InputText disabled={this.state.disabled} style={{marginRight:'.25em'}}/>

                    <Button label="Toggle" onClick={this.toggle}/>
                </div>

                <InputTextDoc />
            </div>
        )
    }
}

class InputTextDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {InputText} from 'primereact/components/inputtext/InputText';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Component is defined using the InputText element with standard attributes of an input element.</p>
                        
<CodeHighlight className="html">
{`
<InputText />

`}
</CodeHighlight>

                        <h3>Controlled Input</h3>
                        <p>InputText is used as a controlled input with value and onChange properties.</p>
<CodeHighlight className="html">
{`
<InputText onChange={(e) => this.setState({value: e.target.value})}/>

`}
</CodeHighlight>

                        <h3>Attributes</h3>
                        <p>InputText passes any attribute to the underlying input element.</p>
                        
                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                        <td>ui-inputtext</td>
                                        <td>Input element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputtext" className="btn-viewsource" target="_blank">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="javascript">
{`
export class InputTextDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Disabled</h3>
                    <InputText disabled={this.state.disabled} style={{marginRight:'.25em'}}/>

                    <Button label="Toggle" onClick={this.toggle}/>
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}

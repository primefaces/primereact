import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class InputTextDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            value: ''
        };
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
                    <h3 className="first">Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Floating Label</h3>
                    <span className="ui-float-label">
                        <InputText id="float-input" type="text" size="30" />
                        <label htmlFor="float-input">Username</label>
                    </span>
                </div>

                <InputTextDoc />
            </div>
        )
    }
}

class InputTextDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

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

                        <h3>Float Label</h3>
                        <p>A floating label is implemented by wrapping the input and the label inside a container with .ui-float-label class.</p>
                        <CodeHighlight className="html">
                            {`
<span className="ui-float-label">
    <InputText id="float-input" type="text" size="30" />
    <label htmlFor="float-input">Username</label>
</span>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputtext" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="javascript">
{`
import React, {Component} from 'react';
import {InputText} from 'primereact/components/inputtext/InputText';
    
export class InputTextDemo extends Component {
    
    constructor() {
        super();
        this.state = {
            value: ''
        };
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
                    <h3 className="first">Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Floating Label</h3>
                    <span className="ui-float-label">
                        <InputText id="float-input" type="text" size="30" />
                        <label htmlFor="float-input">Username</label>
                    </span>
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

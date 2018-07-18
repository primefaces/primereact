import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from '../../components/spinner/Spinner';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SpinnerDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            value3: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Spinner</h1>
                        <p>Spinner is an input component to provide a numerical input.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic: {this.state.value1}</h3>
                    <Spinner value={this.state.value} size={30} onChange={(e) => this.setState({value1: e.value})} />

                    <h3>Min/Max: {this.state.value2}</h3>
                    <Spinner value={this.state.value2} size={30} onChange={(e) => this.setState({value2: e.value})} min={0} max={100} />

                    <h3>Step: {this.state.value3}</h3>
                    <Spinner value={this.state.value3} size={30} onChange={(e) => this.setState({value3: e.value})} step={0.25} />

                    <h3>Disabled</h3>
                    <Spinner value={this.state.value4} size={30} disabled={true} />
                </div>
                <SpinnerDoc></SpinnerDoc>
            </div>
        );
    }
}

class SpinnerDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Spinner} from 'primereact/spinner';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Spinner is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
                    
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
</CodeHighlight>

            <h3>Min-Max</h3>
            <p>Boundaries are specified with <i>min</i> and <i>max</i> attributes.</p>
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} min={0} max={100} />

`}
</CodeHighlight>

            <h3>Step</h3>
            <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} step={0.25} />

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
                            <td>value</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                         </tr>
                         <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
                        </tr>
                         <tr>
                            <td>step</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Step factor to increment/decrement the value.</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Mininum boundary value.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum boundary value.</td>
                        </tr>
                        <tr>
                           <td>disabled</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When present, it specifies that the element should be disabled.</td>
                         </tr>
                        <tr>
                           <td>readonly</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When present, it specifies that the element should be read-only.</td>
                         </tr>
                         <tr>
                            <td>maxlength</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of character allows in the input field.</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Size of the input field.</td>
                        </tr>
                        <tr>
                            <td>decimalSeparator</td>
                            <td>numstringber</td>
                            <td>.</td>
                            <td>Separator character for decimals.</td>
                        </tr>
                        <tr>
                            <td>thousandSeparator</td>
                            <td>string</td>
                            <td>,</td>
                            <td>Separator character for thousands.</td>
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
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the input element.</td>
                        </tr>
                        <tr>
                            <td>inputStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
                        </tr>
                        <tr>
                            <td>inputClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
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
                            <td>event.value: New value</td>
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
                            <td>ui-spinner</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>ui-spinner-up</td>
                            <td>Up icon.</td>
                        </tr>
                        <tr>
                            <td>ui-spinner-down</td>
                            <td>Down icon.</td>
                        </tr>
                        <tr>
                            <td>ui-spinner-input</td>
                            <td>Input element</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/spinner" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Spinner} from 'primereact/spinner';

export class SpinnerDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            value3: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Spinner</h1>
                        <p>Spinner is an input component to provide a numerical input.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic: {this.state.value1}</h3>
                    <Spinner value={this.state.value} size={30} onChange={(e) => this.setState({value1: e.value})} />

                    <h3>Min/Max: {this.state.value2}</h3>
                    <Spinner value={this.state.value2} size={30} onChange={(e) => this.setState({value2: e.value})} min={0} max={100} />

                    <h3>Step: {this.state.value3}</h3>
                    <Spinner value={this.state.value3} size={30} onChange={(e) => this.setState({value3: e.value})} step={0.25} />

                    <h3>Disabled</h3>
                    <Spinner value={this.state.value4} size={30} disabled={true} />
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
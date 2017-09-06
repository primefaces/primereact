import React, {Component} from 'react';
import {SelectButton} from '../../components/selectbutton/SelectButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SelectButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onOptionsChange = this.onOptionsChange.bind(this);
    }

    onOptionChange(e) {
        this.setState({option: e.value});
    }

    onOptionsChange(e) {
        this.setState({options: e.value});
    }
    
    render() {
        var option = [];
        option.push({label: 'Apartment', value: 'Apartment'});
        option.push({label: 'House', value: 'House'});
        option.push({label: 'Studio', value: 'Studio'});

        var options = [];
        options.push({label: 'Apartment', value: 'Apartment'});
        options.push({label: 'House', value: 'House'});
        options.push({label: 'Studio', value: 'Studio'});

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SelectButton value={this.state.option} options={option} onChange={this.onOptionChange}></SelectButton>
                    <p>Selected Value: {this.state.option}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.options} options={options} onChange={this.onOptionsChange} multiple={true}></SelectButton>
                </div>

                <SelectButtonDoc></SelectButtonDoc>
            </div>
        );
    }
}

class SelectButtonDoc extends Component {

    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    
<CodeHighlight className="html">
{`
<SelectButton value={this.state.option} options={option} onChange={this.onOptionChange}></SelectButton>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
constructor(props) {
    super(props);
    this.state = {};
    this.onOptionChange = this.onOptionChange.bind(this);
}

onOptionChange(e) {
    this.setState({option: e.value});
}

`}
</CodeHighlight>

            <h3>Multiple</h3>
            <p>SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array instance that is not null or undefined.</p>
<CodeHighlight className="html">
{`
<SelectButton value={this.state.options} options={options} onChange={this.onOptionsChange} multiple={true}></SelectButton>

`}
</CodeHighlight>

            <h3>Attributes</h3>
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
                            <td>activeIndex</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Active Index of the element.</td>
                        </tr>
                         <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>tabindex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, allows selecting multiple values.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
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
                                event.value: single value or an array of values that are selected.</td>
                                event.index: index of selected button  <br />
                            <td>Callback to invoke on state change.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/selectbutton" className="btn-viewsource" target="_blank">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="javascript">
{`
export class SelectButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onOptionsChange = this.onOptionsChange.bind(this);
    }

    onOptionChange(e) {
        this.setState({option: e.value});
    }

    onOptionsChange(e) {
        this.setState({options: e.value});
    }
    
    render() {
        var option = [];
        option.push({label: 'Apartment', value: 'Apartment'});
        option.push({label: 'House', value: 'House'});
        option.push({label: 'Studio', value: 'Studio'});

        var options = [];
        options.push({label: 'Apartment', value: 'Apartment'});
        options.push({label: 'House', value: 'House'});
        options.push({label: 'Studio', value: 'Studio'});

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SelectButton value={this.state.option} options={option} onChange={this.onOptionChange}></SelectButton>
                    <p>Selected Value: {this.state.option}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.options} options={options} onChange={this.onOptionsChange} multiple={true}></SelectButton>
                </div>

                <SelectButtonDoc></SelectButtonDoc>
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
import React, {Component} from 'react';
import {SelectButton} from '../../components/selectbutton/SelectButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SelectButtonDemo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value1: null,
            value2: null
        };
    }
    
    render() {
        const options = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <SelectButton value={this.state.value1} options={options} onChange={(e) => this.setState({value1: e.value})} />
                    <p>Selected Value: {this.state.value1}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.value2} multiple={true} options={options} onChange={(e) => this.setState({value2: e.value})} />
                    <p>Selected Values: {this.state.value2 && this.state.value2.map((val) => val + " ")}</p>
                </div>

                <SelectButtonDoc></SelectButtonDoc>
            </div>
        );
    }
}

class SelectButtonDoc extends Component {

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
import {SelectButton} from 'primereact/selectbutton';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>SelectButton is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives 
            of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
            whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> property to specify the field name of the option. SelectItem API is designed to have more 
            control on how the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice.</p>
                    
            <p><b>Options as SelectItems</b></p>
            <CodeHighlight className="language-javascript">
                {`
const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];

`}
            </CodeHighlight>
                    
<CodeHighlight className="language-jsx">
{`
<SelectButton value={this.state.city} options={citySelectItems} onChange={(e) => this.setState({city: e.value})}></SelectButton>

`}
</CodeHighlight>

            <p><b>Options as any type</b></p>
            <CodeHighlight className="language-javascript">
{`
const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

`}
</CodeHighlight>
                    
            <CodeHighlight className="language-jsx">
{`
<SelectButton optionLabel="name" value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})}></SelectButton>

`}
            </CodeHighlight>

            <h3>Multiple</h3>
            <p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.</p>
<CodeHighlight className="language-jsx">
{`
<SelectButton value={this.state.values} options={options} onChange={(e) => this.setState({values: e.value})}></SelectButton>

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
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display as the available options.</td>
                        </tr>
                        <tr>
                            <td>optionLabel</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
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
                        <tr>
                            <td>dataKey</td>
                            <td>string</td>
                            <td>null</td>
                            <td>A property to uniquely match the value in options for better performance.</td>
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
                                event.value: Single value or an array of values that are selected.</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/selectbutton" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {SelectButton} from 'primereact/selectbutton';

export class SelectButtonDemo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value1: null,
            value2: null
        };
    }
    
    render() {
        const options = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <SelectButton value={this.state.value1} options={options} onChange={(e) => this.setState({value1: e.value})} />
                    <p>Selected Value: {this.state.value1}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.value2} multiple={true} options={options} onChange={(e) => this.setState({value2: e.value})} />
                    <p>Selected Values: {this.state.value2 && this.state.value2.map((val) => val + " ")}</p>
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
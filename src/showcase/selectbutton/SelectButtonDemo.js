import React, {Component} from 'react';
import {SelectButton} from '../../components/selectbutton/SelectButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class SelectButtonDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: null,
            value2: ['Apartment', 'Studio'],
            value3: null,
            options: [
                {label: 'Apartment', value: 'Apartment'},
                {label: 'House', value: 'House'},
                {label: 'Studio', value: 'Studio'}
            ],
            cars: [
				{brand: 'Audi', key: 'A'},
				{brand: 'BMW', key: 'B'},
				{brand: 'Mercedes', key: 'M'}
			]
        };
    }

    carTemplate(option) {
        const logoPath = 'showcase/resources/demo/images/car/' + option.brand + '.png';

        return (
            <div style={{textAlign: 'center', padding: '1em', width: '125px'}}>
                <img alt={option.brand} src={logoPath} style={{width: '48px'}} />
                <div style={{marginTop: '1em'}}>{option.brand}</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("selectButton")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single</h3>
                    <SelectButton value={this.state.value1} options={this.state.options} onChange={(e) => this.setState({value1: e.value})} />
                    <br />
                    <p>Selected Value: <span style={{fontWeight: 'bold'}}>{this.state.value1}</span></p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.value2} multiple={true} options={this.state.options} onChange={(e) => this.setState({value2: e.value})} />
                    <br />
                    <p>Selected Values: <span style={{fontWeight: 'bold'}}>{this.state.value2 && this.state.value2.map((val) => val + " ")}</span></p>

                    <h3>Custom Content</h3>
                    <SelectButton value={this.state.value3} options={this.state.cars} onChange={(e) => this.setState({value3: e.value})} itemTemplate={this.carTemplate} optionLabel="brand" optionValue="brand" />
                    <br />
                    <p>Selected Value: <span style={{fontWeight: 'bold'}}>{this.state.value3}</span></p>
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
            <div className="content-section documentation">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {SelectButton} from 'primereact/selectbutton';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Dropdown is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
            of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
            whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition, 
            options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

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
<SelectButton optionLabel="name" optionValue="code" value={this.state.city} options={cities} onChange={(e) => this.setState({city: e.value})}></SelectButton>

`}
            </CodeHighlight>
            <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

            <h3>Multiple</h3>
            <p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.</p>

            <h3>Custom Content</h3>
            <p>Options support templating using the <i>itemTemplate</i> property that references a function to render the content. Notice
            the usage of optionLabel, although it is not rendered visually, it is still required to be used as the list key.</p>

<CodeHighlight className="language-jsx">
{`
<SelectButton value={this.state.value} options={this.state.cars} onChange={(e) => this.setState({value: e.value})} itemTemplate={this.carTemplate} optionLabel="brand" optionValue="brand" />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
carTemplate(option) {
    const logoPath = 'showcase/resources/demo/images/car/' + option.brand + '.png';

    return (
        <div style={{textAlign: 'center', padding: '1em', width: '125px'}}>
            <img alt={option.brand} src={logoPath} style={{width: '48px'}} />
            <div style={{marginTop: '1em'}}>{option.brand}</div>
        </div>
    )
}

`}
</CodeHighlight>

            <h3>SelectItem API</h3>
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
                            <td>label</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label of the option.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the option.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>ClassName of the option.</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Tooltip text of the option. (Not supported)</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the option is disabled or not. (Not supported)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                            <td>optionValue</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.</td>
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
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content.</td>
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
            value2: ['Apartment', 'Studio'],
            value3: null,
            options: [
                {label: 'Apartment', value: 'Apartment'},
                {label: 'House', value: 'House'},
                {label: 'Studio', value: 'Studio'}
            ],
            cars: [
				{brand: 'Audi', key: 'A'},
				{brand: 'BMW', key: 'B'},
				{brand: 'Mercedes', key: 'M'}
			]
        };
    }

    carTemplate(option) {
        const logoPath = 'showcase/resources/demo/images/car/' + option.brand + '.png';

        return (
            <div style={{textAlign: 'center', padding: '1em', width: '125px'}}>
                <img alt={option.brand} src={logoPath} style={{width: '48px'}} />
                <div style={{marginTop: '1em'}}>{option.brand}</div>
            </div>
        )
    }

    render() {
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
                    <SelectButton value={this.state.value1} options={this.state.options} onChange={(e) => this.setState({value1: e.value})} />
                    <br />
                    <p>Selected Value: <span style={{fontWeight: 'bold'}}>{this.state.value1}</span></p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.value2} multiple={true} options={this.state.options} onChange={(e) => this.setState({value2: e.value})} />
                    <br />
                    <p>Selected Values: <span style={{fontWeight: 'bold'}}>{this.state.value2 && this.state.value2.map((val) => val + " ")}</span></p>

                    <h3>Custom Content</h3>
                    <SelectButton value={this.state.value3} options={this.state.cars} onChange={(e) => this.setState({value3: e.value})} itemTemplate={this.carTemplate} optionLabel="brand" optionValue="brand" />
                    <br />
                    <p>Selected Value: <span style={{fontWeight: 'bold'}}>{this.state.value3}</span></p>
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

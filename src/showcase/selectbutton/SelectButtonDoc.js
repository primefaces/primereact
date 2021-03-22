import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class SelectButtonDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { SelectButton } from 'primereact/selectbutton';

export class SelectButtonDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 'Off',
            value2: null,
            value3: null,
        };

        this.options = ['Off', 'On'];
        this.paymentOptions = [
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3}
        ];
        this.justifyOptions = [
            {icon: 'pi pi-align-left', value: 'left'},
            {icon: 'pi pi-align-right', value: 'Right'},
            {icon: 'pi pi-align-center', value: 'Center'},
            {icon: 'pi pi-align-justify', value: 'Justify'}
        ];

        this.justifyTemplate = this.justifyTemplate.bind(this);
    }

    justifyTemplate(option) {
        return <i className={option.icon}></i>;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Single Selection</h5>
                    <SelectButton value={this.state.value1} options={this.options} onChange={(e) => this.setState({ value1: e.value })} />

                    <h5>Multiple Selection</h5>
                    <SelectButton value={this.state.value2} options={this.paymentOptions} onChange={(e) => this.setState({ value2: e.value })} optionLabel="name" multiple />

                    <h5>Custom Content</h5>
                    <SelectButton value={this.state.value3} options={this.justifyOptions} onChange={(e) => this.setState({ value3: e.value })} itemTemplate={this.justifyTemplate} />
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
import { SelectButton } from 'primereact/selectbutton';

const SelectButtonDemo = () => {
    const [value1, setValue1] = useState('Off');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const options = ['Off', 'On'];
    const paymentOptions = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];
    const justifyOptions = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div>
            <div className="card">
                <h5>Single Selection</h5>
                <SelectButton value={value1} options={options} onChange={(e) => setValue1(e.value)} />

                <h5>Multiple Selection</h5>
                <SelectButton value={value2} options={paymentOptions} onChange={(e) => setValue2(e.value)} optionLabel="name" multiple />

                <h5>Custom Content</h5>
                <SelectButton value={value3} options={justifyOptions} onChange={(e) => setValue3(e.value)} itemTemplate={justifyTemplate} />
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
import { SelectButton } from 'primereact/selectbutton';

const SelectButtonDemo = () => {
    const [value1, setValue1] = useState('Off');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const options = ['Off', 'On'];
    const paymentOptions = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];
    const justifyOptions = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div>
            <div className="card">
                <h5>Single Selection</h5>
                <SelectButton value={value1} options={options} onChange={(e) => setValue1(e.value)} />

                <h5>Multiple Selection</h5>
                <SelectButton value={value2} options={paymentOptions} onChange={(e) => setValue2(e.value)} optionLabel="name" multiple />

                <h5>Custom Content</h5>
                <SelectButton value={value3} options={justifyOptions} onChange={(e) => setValue3(e.value)} itemTemplate={justifyTemplate} />
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
import { SelectButton } from 'primereact/selectbutton';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>Dropdown is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
            of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
            whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition,
            options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

            <p><b>Options as SelectItems</b></p>
<CodeHighlight lang="js">
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

<CodeHighlight>
{`
<SelectButton value={city} options={citySelectItems} onChange={(e) => setValue(e.value)}></SelectButton>
`}
</CodeHighlight>

            <p><b>Options as any type</b></p>
<CodeHighlight lang="js">
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

<CodeHighlight>
{`
<SelectButton optionLabel="name" value={city} options={cities} onChange={(e) => setValue(e.value)}></SelectButton>
<SelectButton optionLabel="name" optionValue="code" value={city} options={cities} onChange={(e) => setValue(e.value)}></SelectButton>
`}
            </CodeHighlight>
            <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

            <h5>Multiple</h5>
            <p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.</p>

            <h5>Custom Content</h5>
            <p>Options support templating using the <i>itemTemplate</i> property that references a function to render the content. Notice
            the usage of optionLabel, although it is not rendered visually, it is still required to be used as the list key.</p>

<CodeHighlight>
{`
<SelectButton optionLabel="name" optionValue="code" value={city} options={cities} onChange={(e) => setValue(e.value)} itemTemplate={itemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const itemTemplate = (option) => {
    // custom item content
}
`}
</CodeHighlight>

            <h5>SelectItem API</h5>
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
                            <td>Whether the option is disabled or not.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                            <td>optionDisabled</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
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
                            <td>event.originalEvent: browser event <br />
                                event.value: Single value or an array of values that are selected.</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Dependencies</h5>
            <p>None.</p>
        </TabPanel>

        {
            useLiveEditorTabs({ name: 'SelectButtonDemo', sources: this.sources })
        }
    </TabView>
</div>
        );
    }
}

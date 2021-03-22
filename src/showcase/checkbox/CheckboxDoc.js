import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class CheckboxDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox';

export class CheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

        this.state = {
            checked: false,
            cities: [],
            selectedCategories: this.categories.slice(1,3)
        };

        this.onCityChange = this.onCityChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    onCategoryChange(e) {
        let selectedCategories = [...this.state.selectedCategories];

        if (e.checked) {
            selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < selectedCategories.length; i++) {
                const selectedCategory = selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        this.setState({ selectedCategories });
    }


    onCityChange(e) {
        let selectedCities = [...this.state.cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({ cities: selectedCities });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="binary" checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />
                        <label htmlFor="binary">{this.state.checked ? 'true' : 'false'}</label>
                    </div>

                    <h5>Multiple</h5>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city1" name="city" value="Chicago" onChange={this.onCityChange} checked={this.state.cities.indexOf('Chicago') !== -1} />
                        <label htmlFor="city1">Chicago</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.indexOf('Los Angeles') !== -1} />
                        <label htmlFor="city2">Los Angeles</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city3" name="city" value="New York" onChange={this.onCityChange} checked={this.state.cities.indexOf('New York') !== -1} />
                        <label htmlFor="city3">New York</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city4" name="city" value="San Francisco" onChange={this.onCityChange} checked={this.state.cities.indexOf('San Francisco') !== -1} />
                        <label htmlFor="city4">San Francisco</label>
                    </div>

                    <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                    {
                        this.categories.map((category) => {
                            return (
                                <div key={category.key} className="p-field-checkbox">
                                    <Checkbox inputId={category.key} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.key === category.key)} disabled={category.key === 'R'} />
                                    <label htmlFor={category.key}>{category.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const CheckboxDemo = () => {
    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    const [checked, setChecked] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(categories.slice(1,3));

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            _selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCategories.length; i++) {
                const selectedCategory = _selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    _selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCategories(_selectedCategories);
    }


    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                    <label htmlFor="binary">{checked ? 'true' : 'false'}</label>
                </div>

                <h5>Multiple</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city1" name="city" value="Chicago" onChange={onCityChange} checked={cities.indexOf('Chicago') !== -1} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city3" name="city" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city4" name="city" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1} />
                    <label htmlFor="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                {
                    categories.map((category) => {
                        return (
                            <div key={category.key} className="p-field-checkbox">
                                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} disabled={category.key === 'R'} />
                                <label htmlFor={category.key}>{category.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const CheckboxDemo = () => {
    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    const [checked, setChecked] = useState<boolean>(false);
    const [cities, setCities] = useState<any>([]);
    const [selectedCategories, setSelectedCategories] = useState<any>(categories.slice(1,3));

    const onCategoryChange = (e: { value: any, checked: boolean }) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            _selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCategories.length; i++) {
                const selectedCategory = _selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    _selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCategories(_selectedCategories);
    }


    const onCityChange = (e: { value: any, checked: boolean }) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                    <label htmlFor="binary">{checked ? 'true' : 'false'}</label>
                </div>

                <h5>Multiple</h5>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city1" name="city" value="Chicago" onChange={onCityChange} checked={cities.indexOf('Chicago') !== -1} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city3" name="city" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city4" name="city" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1} />
                    <label htmlFor="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                {
                    categories.map((category) => {
                        return (
                            <div key={category.key} className="p-field-checkbox">
                                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} disabled={category.key === 'R'} />
                                <label htmlFor={category.key}>{category.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
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
import {Checkbox} from 'primereact/checkbox';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Checkbox is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>
<CodeHighlight>
{`
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
`}
</CodeHighlight>

                        <h5>Multiple Values</h5>
                        <p>Multiple checkboxes can be grouped using a list of values.</p>
<CodeHighlight>
{`
<div className="p-col-12">
    <Checkbox inputId="cb1" value="New York" onChange={onCityChange} checked={cities.includes('New York')}></Checkbox>
    <label htmlFor="cb1" className="p-checkbox-label">New York</label>
</div>
<div className="p-col-12">
    <Checkbox inputId="cb2" value="San Francisco" onChange={onCityChange} checked={cities.includes('San Francisco')}></Checkbox>
    <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
</div>
<div className="p-col-12">
    <Checkbox inputId="cb3" value="Los Angeles" onChange={onCityChange} checked={cities.includes('Los Angeles')}></Checkbox>
    <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
</div>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const [cities, setCities] = useState([]);

const onCityChange = (e) => {
    let selectedCities = [...cities];
    if(e.checked)
        selectedCities.push(e.value);
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}
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
                                        <td>inputId</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the inner native radiobutton.</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Value of the checkbox.</td>
                                    </tr>
                                    <tr>
                                        <td>name</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the checkbox element .</td>
                                    </tr>
                                    <tr>
                                        <td>checked</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies whether a checkbox should be checked or not.</td>
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
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element value cannot be altered.</td>
                                    </tr>
                                    <tr>
                                        <td>required</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                                    </tr>
                                    <tr>
                                        <td>readOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element cannot be typed.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>number</td>
                                        <td>null</td>
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
                                        <td>event.originalEvent: Original event <br />
                                        event.value: Value of the checkbox <br />
                                        event.checked: Checked state as a boolean.</td>
                                        <td>Callback to invoke on value change</td>
                                    </tr>
                                    <tr>
                                        <td>onMouseDown</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke to when a mouse button is pressed.</td>
                                    </tr>
                                    <tr>
                                        <td>onContextMenu</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke on right-click.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
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
                                        <td>p-checkbox</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-checkbox-box</td>
                                        <td>Container of icon.</td>
                                    </tr>
                                    <tr>
                                        <td>p-checkbox-icon</td>
                                        <td>Icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-checkbox-label</td>
                                        <td>Label element and it is an external CSS class.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'CheckboxDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}

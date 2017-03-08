import React, {Component} from 'react';
import {Link} from 'react-router';
import {Checkbox} from '../../components/checkbox/Checkbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class CheckboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {cities: []};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        var selectedCities = [...this.state.cities];
        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities: selectedCities});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <Checkbox value="New York" label="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>
                        </div>
                    </div>
                    Selected Cities : {this.state.cities.map((city) => <span key={city}>{city}</span>)}
                </div>

                <CheckboxDoc />
            </div>
        )
    }
}

class CheckboxDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Checkbox} from 'primereact';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Checkbox is used as a controlled input with checked and onChange properties.</p>
<CodeHighlight className="language-markup">
{`
<Checkbox onChange={this.onChange} checked={this.state.checked}></Checkbox>

`}
</CodeHighlight>

                        <h4>Multiple Values</h4>
                        <p>Multiple checkboxes can be grouped by checking against a list of values.</p>
<CodeHighlight className="language-markup">
{`
<Checkbox value="New York" label="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
<Checkbox value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
<Checkbox value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {cities: []};
    this.onCityChange = this.onCityChange.bind(this);
}

onCityChange(e) {
    var selectedCities = [...this.state.cities];
    if(e.checked)
        selectedCities.push(e.value);
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    this.setState({cities: selectedCities});
}

`}
</CodeHighlight>

                    <h4>Label</h4>
                    <p>The label attribute provides a label text next the checkbox. This label is also clickable and toggles the checked state.</p>
<CodeHighlight className="language-markup">
{`
<Checkbox label="I accept the terms" onChange={this.onChange} checked={this.state.checked}></Checkbox>

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
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the checkbox.</td>
                                </tr>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Label of the checkbox.</td>
                                </tr>
                                <tr>
                                    <td>checked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies whether a checkbox should be checked or not.</td>
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
                                    <td>event.originalEvent: Original event <br />
                                        event.value: Value of the checkbox <br />
                                        event.checked: Checked state as a boolean.</td>
                                    <td>Callback to invoke on value change</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

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
                                    <td>ui-chkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>ui-chkbox-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>ui-chkbox-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>ui-chkbox-label</td>
                                    <td>Label element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Dependencies</h3>
                    <p>None.</p>
                </TabPanel>
                <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class CheckboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {cities: []};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        var selectedCities = [...this.state.cities];
        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities: selectedCities});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <Checkbox value="New York" label="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>
                        </div>
                    </div>
                    Selected Cities : {this.state.cities.map((city) => <span key={city}>{city}</span>)}
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
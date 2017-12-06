import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Checkbox} from '../../components/checkbox/Checkbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <Checkbox inputId="cb1" value="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
                            <label htmlFor="cb1">New York</label>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox inputId="cb2" value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
                            <label htmlFor="cb2">San Francisco</label>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox inputId="cb3" value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>
                            <label htmlFor="cb3">Los Angeles</label>
                        </div>
                    </div>
                    Selected Cities : {this.state.cities.map((city) => <span key={city}>{city} </span>)}
                </div>

                <CheckboxDoc />
            </div>
        )
    }
}

class CheckboxDoc extends Component {

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
import {Checkbox} from 'primereact/components/checkbox/Checkbox';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Checkbox is used as a controlled input with checked and onChange properties.</p>
<CodeHighlight className="html">
{`
<Checkbox onChange={this.onChange} checked={this.state.checked}></Checkbox>

`}
</CodeHighlight>

                        <h4>Multiple Values</h4>
                        <p>Multiple checkboxes can be grouped by checking against a list of values.</p>
<CodeHighlight className="html">
{`
<Checkbox value="New York" label="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
<Checkbox value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
<Checkbox value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
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
<CodeHighlight className="html">
{`
<Checkbox label="I accept the terms" onChange={this.onChange} checked={this.state.checked}></Checkbox>

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
                    <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/checkbox" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        <span>View on GitHub</span>
                    </a>
<CodeHighlight className="javascript">
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
                            <Checkbox inputId="cb1" value="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
                            <label htmlFor="cb1">New York</label>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox inputId="cb2" value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
                            <label htmlFor="cb2">San Francisco</label>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox inputId="cb3" value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>
                            <label htmlFor="cb3">Los Angeles</label>
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
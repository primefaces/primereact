import React, {Component} from 'react';
import {Link} from 'react-router';
import {RadioButton} from '../../components/radiobutton/RadioButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class RadioButtonDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <RadioButton value="New York" label="New York" onChange={this.onCityChange} checked={this.state.city === 'New York'} />
                        </div>
                        <div className="ui-g-12">
                            <RadioButton value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.city === 'San Francisco'} />
                        </div>
                        <div className="ui-g-12">
                            <RadioButton value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.city === 'Los Angeles'} />
                        </div>
                    </div>
                    Selected City : {this.state.city}
                </div>
                <RadioButtonDoc></RadioButtonDoc>
            </div>
        )
    }
}

class RadioButtonDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {RadioButton} from 'primereact/components/radiobutton/RadioButton';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>RadioButton is used as a controlled input with checked and onChange properties.</p>
<CodeHighlight className="language-markup">
{`
<RadioButton value="val1" onChange={this.onChange} checked={this.state.checked} />
<RadioButton value="val2" onChange={this.onChange} checked={this.state.checked} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {};
    this.onCityChange = this.onCityChange.bind(this);
}

onCityChange(e) {
    this.setState({city: e.value});
}

`}
</CodeHighlight>

                    <h4>Label</h4>
                    <p>The label attribute provides a label text for the radio button. This label is also clickable and selects value.</p>
<CodeHighlight className="language-markup">
{`
<RadioButton label="I accept the terms" onChange={this.onChange} checked={this.state.checked} />

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
                                    <td>Value of the radiobutton.</td>
                                </tr>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Label of the radiobutton.</td>
                                </tr>
                                <tr>
                                    <td>checked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies whether a radiobutton should be checked or not.</td>
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
                                        event.value: Value of the radiobutton <br />
                                        event.checked: Checked state as a boolean.</td>
                                    <td>Callback to invoke on radio button click.</td>
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
                                    <td>ui-radiobutton</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>ui-radiobutton-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>ui-radiobutton-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>ui-radiobutton-label</td>
                                    <td>Label element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Dependencies</h3>
                    <p>None.</p>
                </TabPanel>
                <TabPanel header="Source">
                    <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/radiobutton" className="btn-viewsource" target="_blank">
                        <i className="fa fa-github"></i>
                        <span>View on GitHub</span>
                    </a>
<CodeHighlight className="language-javascript">
{`
export class RadioButtonDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <RadioButton value="New York" label="New York" onChange={this.onCityChange} checked={this.state.city === 'New York'} />
                        </div>
                        <div className="ui-g-12">
                            <RadioButton value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.city === 'San Francisco'} />
                        </div>
                        <div className="ui-g-12">
                            <RadioButton value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.city === 'Los Angeles'} />
                        </div>
                    </div>
                    Selected City : {this.state.city}
                </div>
                <RadioButtonDoc></RadioButtonDoc>
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
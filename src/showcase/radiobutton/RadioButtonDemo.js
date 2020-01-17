import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {RadioButton} from '../../components/radiobutton/RadioButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class RadioButtonDemo extends Component {

    constructor() {
        super();
        this.state = {
            city: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("radioButton")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="p-grid" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="p-col-12">
                            <RadioButton inputId="rb1" name="city" value="New York" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'New York'} />
                            <label htmlFor="rb1" className="p-radiobutton-label">New York</label>
                        </div>
                        <div className="p-col-12">
                            <RadioButton inputId="rb2" name="city" value="San Francisco" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'San Francisco'} />
                            <label htmlFor="rb2" className="p-radiobutton-label">San Francisco</label>
                        </div>
                        <div className="p-col-12">
                            <RadioButton inputId="rb3" name="city" value="Los Angeles" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Los Angeles'} />
                            <label htmlFor="rb3" className="p-radiobutton-label">Los Angeles</label>
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

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {RadioButton} from 'primereact/radiobutton';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>RadioButton is used as a controlled input with checked and onChange properties.</p>
<CodeHighlight className="language-jsx">
{`
<RadioButton value="val1" name="city" onChange={(e) => this.setState({value: e.value})} checked={this.state.value === 'val1'} />
<RadioButton value="val2" name="city" onChange={(e) => this.setState({value: e.value})} checked={this.state.value === 'val1'} />

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
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the checkbox element .</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the radiobutton.</td>
                                </tr>
                                <tr>
                                    <td>checked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies whether a radiobutton should be checked or not.</td>
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
                                    <td>p-radiobutton</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-radiobutton-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>p-radiobutton-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>p-radiobutton-label</td>
                                    <td>Label element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Dependencies</h3>
                    <p>None.</p>
                </TabPanel>
                <TabPanel header="Source">
                    <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/radiobutton" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {RadioButton} from 'primereact/radiobutton';

export class RadioButtonDemo extends Component {

    constructor() {
        super();
        this.state = {
            city: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="p-grid" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="p-col-12">
                            <RadioButton inputId="rb1" name="city" value="New York" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'New York'} />
                            <label htmlFor="rb1" className="p-radiobutton-label">New York</label>
                        </div>
                        <div className="p-col-12">
                            <RadioButton inputId="rb2" name="city" value="San Francisco" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'San Francisco'} />
                            <label htmlFor="rb2" className="p-radiobutton-label">San Francisco</label>
                        </div>
                        <div className="p-col-12">
                            <RadioButton inputId="rb3" name="city" value="Los Angeles" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Los Angeles'} />
                            <label htmlFor="rb3" className="p-radiobutton-label">Los Angeles</label>
                        </div>
                    </div>
                    Selected City : {this.state.city}
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

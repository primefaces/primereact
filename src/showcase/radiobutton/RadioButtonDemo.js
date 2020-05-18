import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {RadioButton} from '../../components/radiobutton/RadioButton';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
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
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState } from 'react';
import {RadioButton} from 'primereact/radiobutton';

const RadioButtonDemo = () => {
    const [city, setCity] = useState(null);

    return (
        <div>
            <div className="p-grid" style={{width:'250px',marginBottom:'10px'}}>
                <div className="p-col-12">
                    <RadioButton inputId="rb1" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                    <label htmlFor="rb1" className="p-radiobutton-label">New York</label>
                </div>
                <div className="p-col-12">
                    <RadioButton inputId="rb2" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                    <label htmlFor="rb2" className="p-radiobutton-label">San Francisco</label>
                </div>
                <div className="p-col-12">
                    <RadioButton inputId="rb3" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                    <label htmlFor="rb3" className="p-radiobutton-label">Los Angeles</label>
                </div>
            </div>
            Selected City : {city}
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useState } from 'react';
import {RadioButton} from 'primereact/radiobutton';

const RadioButtonDemo = () => {
    const [city, setCity] = useState<string|undefined>(undefined);

    return (
        <div>
            <div className="p-grid" style={{width:'250px',marginBottom:'10px'}}>
                <div className="p-col-12">
                    <RadioButton inputId="rb1" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                    <label htmlFor="rb1" className="p-radiobutton-label">New York</label>
                </div>
                <div className="p-col-12">
                    <RadioButton inputId="rb2" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                    <label htmlFor="rb2" className="p-radiobutton-label">San Francisco</label>
                </div>
                <div className="p-col-12">
                    <RadioButton inputId="rb3" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                    <label htmlFor="rb3" className="p-radiobutton-label">Los Angeles</label>
                </div>
            </div>
            Selected City : {city}
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/radiobutton" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="RadioButtonDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

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

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}

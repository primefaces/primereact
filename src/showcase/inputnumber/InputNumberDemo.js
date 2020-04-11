import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {InputNumber} from '../../components/inputnumber/InputNumber';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class InputNumberDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: null,
            value10: null,
            value11: null,
            value12: null,
            value13: null,
            value14: null,
            value15: null,
            value16: null,
            value17: null,
            value18: null,
            value19: null,
            value20: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputNumber</h1>
                        <p>InputNumber is an input component to provide a numerical input.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("spinner")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Numerals</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value1} onChange={(e) => this.setState({value1: e.value})} type="decimal" placeholder="User Locale" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value2} onChange={(e) => this.setState({value2: e.value})} type="decimal" placeholder="United States Locale" locale="en-US" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value3} onChange={(e) => this.setState({value3: e.value})} type="decimal" placeholder="German Locale" locale="de-DE"/>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value4} onChange={(e) => this.setState({value4: e.value})} type="decimal" placeholder="Indian Locale" locale="en-IN"/>
                        </div>
                    </div>

                    <h3>Currency</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value5} onChange={(e) => this.setState({value5: e.value})} type="currency" currency="USD" placeholder="United States" locale="en-US" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value6} onChange={(e) => this.setState({value6: e.value})} type="currency" currency="EUR" placeholder="Germany" locale="de-DE" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value7} onChange={(e) => this.setState({value7: e.value})} type="currency" currency="INR" currencyDisplay="code" placeholder="India" locale="en-IN"/>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value8} onChange={(e) => this.setState({value8: e.value})} type="currency" currency="JPY" placeholder="Japan" locale="jp-JP"/>
                        </div>
                    </div>

                    <h3>Percent</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value9} onChange={(e) => this.setState({value9: e.value})} type="percent" placeholder="User Locale" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value10} onChange={(e) => this.setState({value10: e.value})} type="percent" placeholder="France" locale="fr-FR" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value11} onChange={(e) => this.setState({value11: e.value})} type="percent" placeholder="Italy" locale="it-IT" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value12} onChange={(e) => this.setState({value12: e.value})} type="percent" placeholder="Turkish" locale="tr-TR"/>
                        </div>
                    </div>

                    <h3>Unit</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value13} onChange={(e) => this.setState({value13: e.value})} type="unit" unit="mile" placeholder="Mile" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value14} onChange={(e) => this.setState({value14: e.value})} type="unit" unit="kilometer" placeholder="Kilometer" unitDisplay="short" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value15} onChange={(e) => this.setState({value15: e.value})} type="unit" unit="kilogram" placeholder="Kilogram" unitDisplay="short" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value16} onChange={(e) => this.setState({value16: e.value})} type="unit" unit="megabyte" placeholder="Megabyte" unitDisplay="short"/>
                        </div>
                    </div>

                    <h3>Spinner</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value17} onChange={(e) => this.setState({value17: e.value})} type="decimal" spinner placeholder="Standard" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value18} onChange={(e) => this.setState({value18: e.value})} type="decimal" spinner placeholder="Horizontal" spinnerMode="horizontal" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value19} onChange={(e) => this.setState({value19: e.value})} type="decimal" spinner placeholder="Vertical" spinnerMode="vertical"/>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputNumber value={this.state.value20} onChange={(e) => this.setState({value20: e.value})} type="decimal" spinner placeholder="Min/Max" min={0} max={100} />
                        </div>
                    </div>
                
                </div>

                <InputNumberDoc />
            </div>
        );
    }
}

class InputNumberDoc extends Component {

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
import {Spinner} from 'primereact/spinner';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Spinner is used as a controlled input with <i>value</i> and <i>onChange</i> properties. Note that onChange is triggered on blur instead of on key input</p>

<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
</CodeHighlight>

            <h3>Min-Max</h3>
            <p>Boundaries are specified with <i>min</i> and <i>max</i> attributes.</p>
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} min={0} max={100} />

`}
</CodeHighlight>

            <h3>Step</h3>
            <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} step={0.25} />

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
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                         </tr>
                         <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
                        </tr>
                         <tr>
                            <td>step</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Step factor to increment/decrement the value.</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Mininum boundary value.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum boundary value.</td>
                        </tr>
                        <tr>
                           <td>disabled</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When present, it specifies that the element should be disabled.</td>
                         </tr>
                        <tr>
                           <td>readonly</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When present, it specifies that the element should be read-only.</td>
                         </tr>
                         <tr>
                            <td>maxlength</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of character allows in the input field.</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Size of the input field.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the input element.</td>
                        </tr>
                        <tr>
                            <td>inputStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
                        </tr>
                        <tr>
                            <td>inputClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
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
                            <td>decimalSeparator</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Separator character for decimals, defaults to settings at user locale.</td>
                        </tr>
                        <tr>
                            <td>thousandSeparator</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Separator character for thousands, defaults to settings at user locale.</td>
                        </tr>
                        <tr>
                            <td>formatInput</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, formats the user input at blur event.</td>
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
                            <td>event.value: New value</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when Spinner loses focus.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                            <td>p-spinner</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-spinner-up</td>
                            <td>Up icon.</td>
                        </tr>
                        <tr>
                            <td>p-spinner-down</td>
                            <td>Down icon.</td>
                        </tr>
                        <tr>
                            <td>p-spinner-input</td>
                            <td>Input element</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/spinner" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Spinner} from 'primereact/spinner';

export class SpinnerDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            value3: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Spinner</h1>
                        <p>Spinner is an input component to provide a numerical input.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Spinner value={this.state.value1} size={30} onChange={(e) => this.setState({value1: e.value})} />

                    <h3>Min/Max</h3>
                    <Spinner value={this.state.value2} size={30} onChange={(e) => this.setState({value2: e.value})} min={0} max={100} />

                    <h3>Step</h3>
                    <Spinner value={this.state.value3} size={30} onChange={(e) => this.setState({value3: e.value})} step={0.25} />

                    <h3>Disabled</h3>
                    <Spinner value={this.state.value4} size={30} disabled={true} />
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

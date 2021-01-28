import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class InputMaskDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { InputMask } from 'primereact/inputmask';

export class InputMaskDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
            val6: null
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="basic">Basic</label>
                            <InputMask id="basic" mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={(e) => this.setState({val1: e.value})}></InputMask>
                        </div>

                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="ssn">SSN</label>
                            <InputMask id="ssn" mask="999-99-9999" value={this.state.val2} placeholder="999-99-9999" onChange={(e) => this.setState({val2: e.value})}></InputMask>
                        </div>

                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="date">Date</label>
                            <InputMask id="date" mask="99/99/9999" value={this.state.val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => this.setState({val3: e.value})}></InputMask>
                        </div>

                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="phone">Phone</label>
                            <InputMask id="phone" mask="(999) 999-9999" value={this.state.val4} placeholder="(999) 999-9999" onChange={(e) => this.setState({val4: e.value})}></InputMask>
                        </div>

                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="phoneext">Phone Ext</label>
                            <InputMask id="phoneext" mask="(999) 999-9999? x99999" value={this.state.val5} placeholder="(999) 999-9999? x99999" onChange={(e) => this.setState({val5: e.value})}></InputMask>
                        </div>

                        <div className="p-field p-col-12 p-md-4">
                            <label htmlFor="serial">Serial</label>
                            <InputMask id="serial" mask="a*-999-a999" value={this.state.val6} placeholder="a*-999-a999" onChange={(e) => this.setState({val6: e.value})}></InputMask>
                        </div>
                    </div>
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
import { InputMask } from 'primereact/inputmask';

const InputMaskDemo = () => {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [val3, setVal3] = useState();
    const [val4, setVal4] = useState();
    const [val5, setVal5] = useState();
    const [val6, setVal6] = useState();

    return (
        <div>
            <div className="card">
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="basic">Basic</label>
                        <InputMask id="basic" mask="99-999999" value={val1} placeholder="99-999999" onChange={(e) => setVal1(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="ssn">SSN</label>
                        <InputMask id="ssn" mask="999-99-9999" value={val2} placeholder="999-99-9999" onChange={(e) => setVal2(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="date">Date</label>
                        <InputMask id="date" mask="99/99/9999" value={val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => setVal3(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="phone">Phone</label>
                        <InputMask id="phone" mask="(999) 999-9999" value={val4} placeholder="(999) 999-9999" onChange={(e) => setVal4(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="phoneext">Phone Ext</label>
                        <InputMask id="phoneext" mask="(999) 999-9999? x99999" value={val5} placeholder="(999) 999-9999? x99999" onChange={(e) => setVal5(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="serial">Serial</label>
                        <InputMask id="serial" mask="a*-999-a999" value={val6} placeholder="a*-999-a999" onChange={(e) => setVal6(e.value)}></InputMask>
                    </div>
                </div>
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
import { InputMask } from 'primereact/inputmask';

const InputMaskDemo = () => {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [val3, setVal3] = useState();
    const [val4, setVal4] = useState();
    const [val5, setVal5] = useState();
    const [val6, setVal6] = useState();

    return (
        <div>
            <div className="card">
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="basic">Basic</label>
                        <InputMask id="basic" mask="99-999999" value={val1} placeholder="99-999999" onChange={(e) => setVal1(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="ssn">SSN</label>
                        <InputMask id="ssn" mask="999-99-9999" value={val2} placeholder="999-99-9999" onChange={(e) => setVal2(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="date">Date</label>
                        <InputMask id="date" mask="99/99/9999" value={val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => setVal3(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="phone">Phone</label>
                        <InputMask id="phone" mask="(999) 999-9999" value={val4} placeholder="(999) 999-9999" onChange={(e) => setVal4(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="phoneext">Phone Ext</label>
                        <InputMask id="phoneext" mask="(999) 999-9999? x99999" value={val5} placeholder="(999) 999-9999? x99999" onChange={(e) => setVal5(e.value)}></InputMask>
                    </div>

                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="serial">Serial</label>
                        <InputMask id="serial" mask="a*-999-a999" value={val6} placeholder="a*-999-a999" onChange={(e) => setVal6(e.value)}></InputMask>
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
            },
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
import { InputMask } from 'primereact/inputmask';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>InputMask is used as a controlled component with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<InputMask mask="99-999999" value={value} onChange={(e) => setValue(e.value)}></InputMask>
`}
</CodeHighlight>

                        <h5>Mask</h5>
                        <p>Mask format can be a combination of the the following built-in definitions.</p>

                        <ul>
                            <li>
                                a - Alpha character (A-Z,a-z)
                            </li>
                            <li>
                                9 - Numeric character (0-9)
                            </li>
                            <li>
                                * - Alpha numberic character (A-Z,a-z,0-9)
                            </li>
                        </ul>

<CodeHighlight>
{`
<InputMask mask="a*-999-a999" value={value} onChange={(e) => setValue(e.value)}></InputMask>
`}
</CodeHighlight>

                        <h5>SlotChar</h5>
                        <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>

<CodeHighlight>
{`
<InputMask mask="99/99/9999" slotChar="mm/dd/yyyy" value={value} onChange={(e) => setValue(e.value)}></InputMask>
`}
</CodeHighlight>

                        <h5>Optional Values</h5>
                        <p>If the input does not complete the mask definition, it is cleared by default.
                        Use <i>autoClear</i> property to control this behavior. In addition, certain part of
                        a mask can be made optional by using ? symbol where anything after the question
                        mark becomes optional.</p>

<CodeHighlight>
{`
<InputMask mask="(999) 999-9999? x99999" value={value} onChange={(e) => setValue(e.value)}></InputMask>
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
                                        <td>value</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Value of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>type</td>
                                        <td>string</td>
                                        <td>text</td>
                                        <td>HTML5 input type</td>
                                    </tr>
                                    <tr>
                                        <td>mask</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Mask pattern.</td>
                                    </tr>
                                    <tr>
                                        <td>slotChar</td>
                                        <td>string</td>
                                        <td>-</td>
                                        <td>Placeholder character in mask, default is underscore.</td>
                                    </tr>
                                    <tr>
                                        <td>autoClear</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Clears the incomplete value on blur.</td>
                                    </tr>
                                    <tr>
                                        <td>unmask</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines if model sets the raw unmasked value to bound value or the formatted mask value.</td>
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
                                        <td>placeholder</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Advisory information to display on input.</td>
                                    </tr>
                                    <tr>
                                        <td>size</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Size of the input field.</td>
                                    </tr>
                                    <tr>
                                        <td>maxlength</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Maximum number of character allows in the input field.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Specifies tab order of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element value cannot be altered.</td>
                                    </tr>
                                    <tr>
                                        <td>readOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that an input field is read-only.</td>
                                    </tr>
                                    <tr>
                                        <td>name</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the input field.</td>
                                    </tr>
                                    <tr>
                                        <td>required</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element must be filled out before submitting the form.</td>
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
                                        <td>onFocus</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when input receives focus.</td>
                                    </tr>
                                    <tr>
                                        <td>onBlur</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when input loses focus.</td>
                                    </tr>
                                    <tr>
                                        <td>onComplete</td>
                                        <td>event: Browser event<br/>
                                            value: New value of the component</td>
                                        <td>Callback to invoke on when user completes the mask pattern.</td>
                                    </tr>
                                    <tr>
                                        <td>onChange</td>
                                        <td>originalEvent: Browser event <br/>
                                            value: New value of the component</td>
                                        <td>Callback to invoke on value change.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Styling is same as <Link to="/inputtext"> inputtext component</Link>, for theming classes visit <Link to="/theming"> theming page.</Link></p>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'InputMaskDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}

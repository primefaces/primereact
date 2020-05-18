import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {InputMask} from '../../components/inputmask/InputMask';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class InputMaskDemo extends Component {

    constructor() {
        super();
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputMask</h1>
                        <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("inputMask")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation inputgrid-demo">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Basic {this.state.val1}</h3>
                            <InputMask mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={(e) => this.setState({val1: e.value})}></InputMask>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <h3>SSN {this.state.val2}</h3>
                            <InputMask mask="999-99-9999" value={this.state.val2} placeholder="999-99-9999" onChange={(e) => this.setState({val2: e.value})}></InputMask>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <h3>Date {this.state.val3}</h3>
                            <InputMask mask="99/99/9999" value={this.state.val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => this.setState({val3: e.value})}></InputMask>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <h3>Phone {this.state.val4}</h3>
                            <InputMask mask="(999) 999-9999" value={this.state.val4} placeholder="(999) 999-9999" onChange={(e) => this.setState({val4: e.value})}></InputMask>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <h3>Phone Ext {this.state.val5}</h3>
                            <InputMask mask="(999) 999-9999? x99999" value={this.state.val5} placeholder="(999) 999-9999? x99999" onChange={(e) => this.setState({val5: e.value})}></InputMask>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <h3>Serial Number {this.state.val6}</h3>
                            <InputMask mask="a*-999-a999" value={this.state.val6} placeholder="a*-999-a999" onChange={(e) => this.setState({val6: e.value})}></InputMask>
                        </div>
                    </div>
                </div>
                <InputMaskDoc></InputMaskDoc>
            </div>
        );
    }
}

class InputMaskDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {InputMask} from 'primereact/inputmask';

export class InputMaskDemo extends Component {

    constructor() {
        super();
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
            <div className="inputgrid-demo">
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <h3>Basic {this.state.val1}</h3>
                        <InputMask mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={(e) => this.setState({val1: e.value})}></InputMask>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>SSN {this.state.val2}</h3>
                        <InputMask mask="999-99-9999" value={this.state.val2} placeholder="999-99-9999" onChange={(e) => this.setState({val2: e.value})}></InputMask>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Date {this.state.val3}</h3>
                        <InputMask mask="99/99/9999" value={this.state.val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => this.setState({val3: e.value})}></InputMask>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Phone {this.state.val4}</h3>
                        <InputMask mask="(999) 999-9999" value={this.state.val4} placeholder="(999) 999-9999" onChange={(e) => this.setState({val4: e.value})}></InputMask>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Phone Ext {this.state.val5}</h3>
                        <InputMask mask="(999) 999-9999? x99999" value={this.state.val5} placeholder="(999) 999-9999? x99999" onChange={(e) => this.setState({val5: e.value})}></InputMask>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <h3>Serial Number {this.state.val6}</h3>
                        <InputMask mask="a*-999-a999" value={this.state.val6} placeholder="a*-999-a999" onChange={(e) => this.setState({val6: e.value})}></InputMask>
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
import {InputMask} from 'primereact/inputmask';

const InputMaskDemo = () => {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [val3, setVal3] = useState();
    const [val4, setVal4] = useState();
    const [val5, setVal5] = useState();
    const [val6, setVal6] = useState();

    return (
        <div className="inputgrid-demo">
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>Basic {val1}</h3>
                    <InputMask mask="99-999999" value={val1} placeholder="99-999999" onChange={(e) => setVal1(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>SSN {val2}</h3>
                    <InputMask mask="999-99-9999" value={val2} placeholder="999-99-9999" onChange={(e) => setVal2(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Date {val3}</h3>
                    <InputMask mask="99/99/9999" value={val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => setVal3(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Phone {val4}</h3>
                    <InputMask mask="(999) 999-9999" value={val4} placeholder="(999) 999-9999" onChange={(e) => setVal4(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Phone Ext {val5}</h3>
                    <InputMask mask="(999) 999-9999? x99999" value={val5} placeholder="(999) 999-9999? x99999" onChange={(e) => setVal5(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Serial Number {val6}</h3>
                    <InputMask mask="a*-999-a999" value={val6} placeholder="a*-999-a999" onChange={(e) => setVal6(e.value)}></InputMask>
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
import {InputMask} from 'primereact/inputmask';

const InputMaskDemo = () => {
    const [val1, setVal1] = useState<string|undefined>(undefined);
    const [val2, setVal2] = useState<string|undefined>(undefined);
    const [val3, setVal3] = useState<string|undefined>(undefined);
    const [val4, setVal4] = useState<string|undefined>(undefined);
    const [val5, setVal5] = useState<string|undefined>(undefined);
    const [val6, setVal6] = useState<string|undefined>(undefined);

    return (
        <div className="inputgrid-demo">
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>Basic {val1}</h3>
                    <InputMask mask="99-999999" value={val1} placeholder="99-999999" onChange={(e) => setVal1(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>SSN {val2}</h3>
                    <InputMask mask="999-99-9999" value={val2} placeholder="999-99-9999" onChange={(e) => setVal2(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Date {val3}</h3>
                    <InputMask mask="99/99/9999" value={val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => setVal3(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Phone {val4}</h3>
                    <InputMask mask="(999) 999-9999" value={val4} placeholder="(999) 999-9999" onChange={(e) => setVal4(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Phone Ext {val5}</h3>
                    <InputMask mask="(999) 999-9999? x99999" value={val5} placeholder="(999) 999-9999? x99999" onChange={(e) => setVal5(e.value)}></InputMask>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Serial Number {val6}</h3>
                    <InputMask mask="a*-999-a999" value={val6} placeholder="a*-999-a999" onChange={(e) => setVal6(e.value)}></InputMask>
                </div>
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.inputgrid-demo {
    padding-top: 0 !important;
}
            `
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputmask" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="InputMaskDemo" sources={this.sources} extFiles={this.extFiles} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {InputMask} from 'primereact/inputmask';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>InputMask is used as a controlled component with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight className="language-jsx">
{`
<InputMask mask="99-999999" value={this.state.value} onChange={(e) => this.setState({value: e.value})}></InputMask>

`}
</CodeHighlight>

                        <h3>Mask</h3>
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

<CodeHighlight className="language-jsx">
{`
<InputMask mask="a*-999-a999" value={this.state.value} onChange={(e) => this.setState({value: e.value})}></InputMask>

`}
</CodeHighlight>

                        <h3>SlotChar</h3>
                        <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>

<CodeHighlight className="language-jsx">
{`
<InputMask mask="99/99/9999" value={this.state.value} slotChar="mm/dd/yyyy" onChange={(e) => this.setState({value: e.value})}></InputMask>

`}
</CodeHighlight>

                        <h3>Optional Values</h3>
                        <p>If the input does not complete the mask definition, it is cleared by default.
                        Use <i>autoClear</i> property to control this behavior. In addition, certain part of
                        a mask can be made optional by using ? symbol where anything after the question
                        mark becomes optional.</p>

<CodeHighlight className="language-jsx">
{`
<InputMask mask="(999) 999-9999? x99999" value={this.state.value} onChange={(e) => this.setState({value: e.value})}></InputMask>

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
                                        <td>tabindex</td>
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
                                        <td>readonly</td>
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

                        <h3>Styling</h3>
                        <p>Styling is same as <Link to="/inputtext"> inputtext component</Link>, for theming classes visit <Link to="/theming"> theming page.</Link></p>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
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
        );
    }
}

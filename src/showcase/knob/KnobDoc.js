import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class KnobDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export class KnobDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            value1 : 0,
            value2 : 50,
            value3 : 75,
            value4 : 10,
            value5 : 40,
            value6 : 60,
            value7 : 40,
            value8 : 60,
            value9 : 50,
            value10: 0,
            disabledIncrementBtn: false,
            disabledDecrementBtn: true
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState((prevState) => {
            const value = prevState.value10 + 1;
            return {
                value10: value,
                disabledIncrementBtn: value === 100,
                disabledDecrementBtn: false
            }
        });
    }

    decrement() {
        this.setState((prevState) => {
            const value = prevState.value10 - 1;
            return {
                value10: value,
                disabledIncrementBtn: false,
                disabledDecrementBtn: value === 0
            }
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                     <div className="p-grid p-formgrid p-text-center">
                        <div className="p-field p-col-12 p-md-4">
                            <h5>Basic</h5>
                            <Knob value={this.state.value1} onChange={(e)=>this.setState({value1: e.value})}/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5>Readonly</h5>
                            <Knob value={this.state.value2} readOnly/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5>Disabled</h5>
                            <Knob value={this.state.value3} disabled/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5 className="p-mt-3">Min/Max</h5>
                            <Knob value={this.state.value4} min={-50} max={50} onChange={(e)=>this.setState({value4: e.value})}/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5 className="p-mt-3">Step</h5>
                            <Knob value={this.state.value5} step={10} onChange={(e)=>this.setState({value5: e.value})}/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5 className="p-mt-3">Template</h5>
                            <Knob value={this.state.value6} valueTemplate={"{value}%"} onChange={(e)=>this.setState({value6: e.value})}/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5 className="p-mt-3">Stroke</h5>
                            <Knob value={this.state.value7} strokeWidth={5} onChange={(e)=>this.setState({value7: e.value})}/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5 className="p-mt-3">Size</h5>
                            <Knob value={this.state.value8} size={200} onChange={(e)=>this.setState({value8: e.value})}/>
                        </div>
                        <div className="p-field p-col-12 p-md-4">
                            <h5 className="p-mt-3">Color</h5>
                            <Knob value={this.state.value9} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e)=>this.setState({value9: e.value})}/>
                        </div>
                    </div>
                </div>

                <div className="card p-text-center">
                    <h5>Reactive Knob</h5>
                    <Knob value={this.state.value10} size={150} readOnly />
                    <Button label="Increment" onClick={this.increment} className="p-mr-2" disabled={this.state.disabledIncrementBtn} />
                    <Button label="Decrement" onClick={this.decrement} disabled={this.state.disabledDecrementBtn} />
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
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

const KnobDemo = () => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(75);
    const [value4, setValue4] = useState(10);
    const [value5, setValue5] = useState(40);
    const [value6, setValue6] = useState(60);
    const [value7, setValue7] = useState(40);
    const [value8, setValue8] = useState(60);
    const [value9, setValue9] = useState(50);
    const [value10, setValue10] = useState(0);
    const [disabledIncrementBtn, setDisabledIncrementBtn] = useState(false);
    const [disabledDecrementBtn, setDisabledDecrementBtn] = useState(true);

    const increment = () => {
        const value = value10 + 1;
        setValue10(value);
        setDisabledIncrementBtn(value === 100);
        setDisabledDecrementBtn(false);
    }

    const decrement = () => {
        const value = value10 - 1;
        setValue10(value);
        setDisabledIncrementBtn(false);
        setDisabledDecrementBtn(value === 0);
    }

    return (
        <div>
            <div className="card">
                <div className="p-grid p-formgrid p-text-center">
                    <div className="p-field p-col-12 p-md-4">
                        <h5>Basic</h5>
                        <Knob value={value1} onChange={(e) => setValue1(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5>Readonly</h5>
                        <Knob value={value2} readOnly/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5>Disabled</h5>
                        <Knob value={value3} disabled/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Min/Max</h5>
                        <Knob value={value4} min={-50} max={50} onChange={(e) =>  setValue4(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Step</h5>
                        <Knob value={value5} step={10} onChange={(e) => setValue5(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Template</h5>
                        <Knob value={value6} valueTemplate={"{value}%"} onChange={(e) => setValue6(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Stroke</h5>
                        <Knob value={value7} strokeWidth={5} onChange={(e) => setValue7(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Size</h5>
                        <Knob value={value8} size={200} onChange={(e) => setValue8(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Color</h5>
                        <Knob value={value9} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue9(e.value)}/>
                    </div>
                </div>
            </div>

            <div className="card p-text-center">
                <h5>Reactive Knob</h5>
                <Knob value={value10} size={150} readOnly />
                <Button label="Increment" onClick={increment} className="p-mr-2" disabled={disabledIncrementBtn} />
                <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
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
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

const KnobDemo = () => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(75);
    const [value4, setValue4] = useState(10);
    const [value5, setValue5] = useState(40);
    const [value6, setValue6] = useState(60);
    const [value7, setValue7] = useState(40);
    const [value8, setValue8] = useState(60);
    const [value9, setValue9] = useState(50);
    const [value10, setValue10] = useState(0);
    const [disabledIncrementBtn, setDisabledIncrementBtn] = useState(false);
    const [disabledDecrementBtn, setDisabledDecrementBtn] = useState(true);

    const increment = () => {
        const value = value10 + 1;
        setValue10(value);
        setDisabledIncrementBtn(value === 100);
        setDisabledDecrementBtn(false);
    }

    const decrement = () => {
        const value = value10 - 1;
        setValue10(value);
        setDisabledIncrementBtn(false);
        setDisabledDecrementBtn(value === 0);
    }

    return (
        <div>
            <div className="card">
                <div className="p-grid p-formgrid p-text-center">
                    <div className="p-field p-col-12 p-md-4">
                        <h5>Basic</h5>
                        <Knob value={value1} onChange={(e) => setValue1(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5>Readonly</h5>
                        <Knob value={value2} readOnly/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5>Disabled</h5>
                        <Knob value={value3} disabled/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Min/Max</h5>
                        <Knob value={value4} min={-50} max={50} onChange={(e) => setValue4(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Step</h5>
                        <Knob value={value5} step={10} onChange={(e) => setValue5(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Template</h5>
                        <Knob value={value6} valueTemplate={"{value}%"} onChange={(e) => setValue6(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Stroke</h5>
                        <Knob value={value7} strokeWidth={5} onChange={(e) => setValue7(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Size</h5>
                        <Knob value={value8} size={200} onChange={(e) => setValue8(e.value)}/>
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <h5 className="p-mt-3">Color</h5>
                        <Knob value={value9} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue9(e.value)}/>
                    </div>
                </div>
            </div>

            <div className="card p-text-center">
                <h5>Reactive Knob</h5>
                <Knob value={value10} size={150} readOnly />
                <Button label="Increment" onClick={increment} className="p-mr-2" disabled={disabledIncrementBtn} />
                <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
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
import { Knob } from 'primereact/knob';
`}
                        </CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Knob is used as a controlled input with value and onChange properties.</p>
                        <CodeHighlight>
                            {`
<Knob value={value} onChange={(e) => setValue(value)} />
`}
                        </CodeHighlight>

                        <h5>Minimum and Maximum</h5>
                        <p>Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.</p>
                        <CodeHighlight>
                            {`
<Knob value={value} min={0} max={100} onChange={(e) => setValue(value)} />
`}
                        </CodeHighlight>

                        <h5>Step</h5>
                        <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
                        <CodeHighlight>
                            {`
<Knob value={value} step={10} onChange={(e) => setValue(value)} />
`}
                        </CodeHighlight>

                        <h5>Styling</h5>
                        <p><i>valueColor</i> defines the value color, <i>rangeColor</i> defines the range background and similarly <i>textColor</i> configures the color of the value text.
                            In addition, <i>strokeWidth</i> is used to determine the width of the stroke of range and value sections.</p>
                        <CodeHighlight>
                            {`
<Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue(value)} />
`}
                        </CodeHighlight>

                        <h5>Size</h5>
                        <p>Default size of the Knob is 100 pixels for width and height, use the <i>size</i> property to customize it per your requirements.</p>
                        <CodeHighlight>
                            {`
<Knob value={value} size={200} onChange={(e) => setValue(value)} />
`}
                        </CodeHighlight>

                        <h5>Properties</h5>
                        <p>Any property as style and class are passed to the main container element. Following are the
                            additional properties to configure the component.</p>
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
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Value of the component.</td>
                                </tr>
                                <tr>
                                    <td>size</td>
                                    <td>number</td>
                                    <td>100</td>
                                    <td>Size of the component in pixels.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>readOnly</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component value cannot be edited.</td>
                                </tr>
                                <tr>
                                    <td>step</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Step factor to increment/decrement the value.</td>
                                </tr>
                                <tr>
                                    <td>min</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Mininum boundary value.</td>
                                </tr>
                                <tr>
                                    <td>max</td>
                                    <td>number</td>
                                    <td>100</td>
                                    <td>Maximum boundary value.</td>
                                </tr>
                                <tr>
                                    <td>valueColor</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Background of the value.</td>
                                </tr>
                                <tr>
                                    <td>rangeColor</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Background color of the range.</td>
                                </tr>
                                <tr>
                                    <td>textColor</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Color of the value text.</td>
                                </tr>
                                <tr>
                                    <td>strokeWidth</td>
                                    <td>number</td>
                                    <td>14</td>
                                    <td>Width of the knob stroke.</td>
                                </tr>
                                <tr>
                                    <td>showValue</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether the show the value inside the knob.</td>
                                </tr>
                                <tr>
                                    <td>valueTemplate</td>
                                    <td>string</td>
                                    <td>&#123;value&#125;</td>
                                    <td>Template string of the value.</td>
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
                                    <td>value: New value</td>
                                    <td>Callback to invoke when the value changes.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.
                        </p>
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
                                    <td>p-knob</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-knob-range</td>
                                    <td>Range element.</td>
                                </tr>
                                <tr>
                                    <td>p-knob-value</td>
                                    <td>Value element.</td>
                                </tr>
                                <tr>
                                    <td>p-knob-text</td>
                                    <td>Text element.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'KnobDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}

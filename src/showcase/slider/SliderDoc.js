import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class SliderDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import './SliderDemo.css';

export class SliderDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            value2: 50,
            value3: 20,
            value4: [20,80],
            value5: 50
        };
    }

    render() {
        return (
            <div className="slider-demo">
                <div className="card">
                    <h5>Basic: {this.state.value1}</h5>
                    <Slider value={this.state.value1} onChange={(e) => this.setState({ value1: e.value })} />

                    <h5>Input: {this.state.value2}</h5>
                    <InputText value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />
                    <Slider value={this.state.value2} onChange={(e) => this.setState({ value2: e.value })} />

                    <h5>Step: {this.state.value3}</h5>
                    <Slider value={this.state.value3} onChange={(e) => this.setState({ value3: e.value })} step={20} />

                    <h5>Range: [{this.state.value4[0]}, {this.state.value4[1]}]</h5>
                    <Slider value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} range />

                    <h5>Vertical: {this.state.value5}</h5>
                    <Slider value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} orientation="vertical" />
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
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import './SliderDemo.css';

const SliderDemo = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(20);
    const [value4, setValue4] = useState([20,80]);
    const [value5, setValue5] = useState(50);

    return (
        <div className="slider-demo">
            <div className="card">
                <h5>Basic: {value1}</h5>
                <Slider value={value1} onChange={(e) => setValue1(e.value)} />

                <h5>Input: {value2}</h5>
                <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                <Slider value={value2} onChange={(e) => setValue2(e.value)} />

                <h5>Step: {value3}</h5>
                <Slider value={value3} onChange={(e) => setValue3(e.value)} step={20} />

                <h5>Range: [{value4[0]}, {value4[1]}]</h5>
                <Slider value={value4} onChange={(e) => setValue4(e.value)} range />

                <h5>Vertical: {value5}</h5>
                <Slider value={value5} onChange={(e) => setValue5(e.value)} orientation="vertical" />
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
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import './SliderDemo.css';

const SliderDemo = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(20);
    const [value4, setValue4] = useState([20,80]);
    const [value5, setValue5] = useState(50);

    return (
        <div className="slider-demo">
            <div className="card">
                <h5>Basic: {value1}</h5>
                <Slider value={value1} onChange={(e) => setValue1(e.value)} />

                <h5>Input: {value2}</h5>
                <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                <Slider value={value2} onChange={(e) => setValue2(e.value)} />

                <h5>Step: {value3}</h5>
                <Slider value={value3} onChange={(e) => setValue3(e.value)} step={20} />

                <h5>Range: [{value4[0]}, {value4[1]}]</h5>
                <Slider value={value4} onChange={(e) => setValue4(e.value)} range />

                <h5>Vertical: {value5}</h5>
                <Slider value={value5} onChange={(e) => setValue5(e.value)} orientation="vertical" />
            </div>
        </div>
    );
}
                `
            }
        };

        this.extFiles = {
            'src/demo/SliderDemo.css': {
                content: `
.slider-demo .p-slider-horizontal, .slider-demo .p-inputtext {
    width: 14rem;
}

.slider-demo .p-slider-vertical {
    height: 14rem;
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
import { Slider } from 'primereact/slider';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>Slider is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<Slider value={value} onChange={(e) => setValue(e.value)} />
`}
</CodeHighlight>

            <h5>Range</h5>
            <p>Range slider provides two handles to define two values. Enable <i>range</i> property and bind an array to implement a range slider.</p>
<CodeHighlight>
{`
<Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range />
`}
</CodeHighlight>

            <h5>Orientation</h5>
            <p>Default layout of slider is horizontal, use <i>orientation</i> property for the alternative vertical mode.</p>
<CodeHighlight>
{`
<Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" />
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
                            <td>number</td>
                            <td>0</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>animate</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays an animation on click of the slider bar.</td>
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
                            <td>orientation</td>
                            <td>string</td>
                            <td>horizontal</td>
                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>
                        </tr>
                        <tr>
                           <td>step</td>
                           <td>number</td>
                           <td>1</td>
                           <td>Step factor to increment/decrement the value.</td>
                         </tr>
                        <tr>
                           <td>range</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When speficed, allows two boundary values to be picked.</td>
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
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
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
                            <td>event.originalEvent: Slide event <br />
                                event.value: New value.
                            </td>
                            <td>Callback to invoke on value change via slide.</td>
                        </tr>
                        <tr>
                            <td>onSlideEnd</td>
                            <td>event.originalEvent: Slide event <br />
                                event.value: New value.
                            </td>
                            <td>Callback to invoke when slide ends.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styling</h5>
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
                            <td>p-slider</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-slider-handle</td>
                            <td>Handle element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Dependencies</h5>
            <p>None.</p>
        </TabPanel>

        {
            useLiveEditorTabs({ name: 'SliderDemo', sources: this.sources, extFiles: this.extFiles })
        }
    </TabView>
</div>
        );
    }
}

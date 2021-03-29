import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class InputNumberDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { InputNumber } from 'primereact/inputnumber';

export class InputNumberDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 42723,
            value2: 58151,
            value3: 2351.35,
            value4: 50,
            value5: 151351,
            value6: 115744,
            value7: 635524,
            value8: 732762,
            value9: 1500,
            value10: 2500,
            value11: 4250,
            value12: 5002,
            value13: 20,
            value14: 50,
            value15: 10,
            value16: 20,
            value17: 20,
            value18: 10.50,
            value19: 25,
            value20: 50
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Numerals</h5>
                    <div className="p-fluid p-grid p-formgrid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="integeronly">Integer Only</label>
                            <InputNumber id="integeronly" value={this.state.value1} onValueChange={(e) => this.setState({value1: e.value})} />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="withoutgrouping">Without Grouping</label>
                            <InputNumber id="withoutgrouping" value={this.state.value2} onValueChange={(e) => this.setState({value2: e.value})} mode="decimal" useGrouping={false} />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
                            <InputNumber id="minmaxfraction" value={this.state.value3} onValueChange={(e) => this.setState({value3: e.value})} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="minmax">Min-Max Boundaries</label>
                            <InputNumber id="minmax" value={this.state.value4} onValueChange={(e) => this.setState({value4: e.value})} mode="decimal" min={0} max={100} />
                        </div>

                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="locale-user">User Locale</label>
                            <InputNumber id="locale-user" value={this.state.value5} onValueChange={(e) => this.setState({value5: e.value})} mode="decimal" minFractionDigits={2} />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="locale-us">United States Locale</label>
                            <InputNumber id="locale-us" value={this.state.value6} onValueChange={(e) => this.setState({value6: e.value})} mode="decimal" locale="en-US" minFractionDigits={2}/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="locale-german">German Locale</label>
                            <InputNumber id="locale-german" value={this.state.value7} onValueChange={(e) => this.setState({value7: e.value})} mode="decimal" locale="de-DE" minFractionDigits={2}/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="locale-indian">Indian Locale</label>
                            <InputNumber id="locale-indian" value={this.state.value8} onValueChange={(e) => this.setState({value8: e.value})} mode="decimal" locale="en-IN" minFractionDigits={2} />
                        </div>
                    </div>

                    <h5>Currency</h5>
                    <div className="p-grid p-fluid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="currency-us">United States</label>
                            <InputNumber id="currency-us" value={this.state.value9} onValueChange={(e) => this.setState({value9: e.value})} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="currency-germany">Germany</label>
                            <InputNumber id="currency-germany" value={this.state.value10} onValueChange={(e) => this.setState({value10: e.value})} mode="currency" currency="EUR" locale="de-DE" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="currency-india">India</label>
                            <InputNumber id="currency-india" value={this.state.value11} onValueChange={(e) => this.setState({value11: e.value})} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="currency-japan">Japan</label>
                            <InputNumber id="currency-japan" value={this.state.value12} onValueChange={(e) => this.setState({value12: e.value})} mode="currency" currency="JPY" locale="jp-JP"/>
                        </div>
                    </div>

                    <h5>Prefix and Suffix</h5>
                    <div className="p-grid p-fluid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="mile">Mile</label>
                            <InputNumber id="mile" value={this.state.value13} onValueChange={(e) => this.setState({value13: e.value})} suffix=" mi" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="percent">Percent</label>
                            <InputNumber id="percent" value={this.state.value14} onValueChange={(e) => this.setState({value14: e.value})} prefix="%" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="expiry">Expiry</label>
                            <InputNumber id="expiry" value={this.state.value15} onValueChange={(e) => this.setState({value15: e.value})}  prefix="Expires in " suffix=" days" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="temperature">Temperature</label>
                            <InputNumber id="temperature" value={this.state.value16} onValueChange={(e) => this.setState({value16: e.value})} prefix="&uarr; " suffix="℃" min={0} max={40} />
                        </div>
                    </div>

                    <h5>Buttons</h5>
                    <div className="p-grid p-fluid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="stacked">Stacked</label>
                            <InputNumber id="stacked" value={this.state.value17} onValueChange={(e) => this.setState({value17: e.value})} showButtons mode="currency" currency="USD" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="horizontal">Horizontal with Step</label>
                            <InputNumber id="horizontal" value={this.state.value18} onValueChange={(e) => this.setState({value18: e.value})} showButtons buttonLayout="horizontal" step={0.25}
                                decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                            <InputNumber id="minmax-buttons" value={this.state.value20} onValueChange={(e) => this.setState({value20: e.value})} mode="decimal" showButtons min={0} max={100} />
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="vertical" style={{display: 'block'}}>Vertical</label>
                            <InputNumber id="vertical" value={this.state.value19} onValueChange={(e) => this.setState({value19: e.value})} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}}
                                decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
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
import { InputNumber } from 'primereact/inputnumber';

const InputNumberDemo = () => {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);
    const [value5, setValue5] = useState(151351);
    const [value6, setValue6] = useState(115744);
    const [value7, setValue7] = useState(635524);
    const [value8, setValue8] = useState(732762);
    const [value9, setValue9] = useState(1500);
    const [value10, setValue10] = useState(2500);
    const [value11, setValue11] = useState(4250);
    const [value12, setValue12] = useState(5002);
    const [value13, setValue13] = useState(20);
    const [value14, setValue14] = useState(50);
    const [value15, setValue15] = useState(10);
    const [value16, setValue16] = useState(20);
    const [value17, setValue17] = useState(20);
    const [value18, setValue18] = useState(10.50);
    const [value19, setValue19] = useState(25);
    const [value20, setValue20] = useState(50);

    return (
        <div>
            <div className="card">
                <h5>Numerals</h5>
                <div className="p-fluid p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="integeronly">Integer Only</label>
                        <InputNumber id="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="withoutgrouping">Without Grouping</label>
                        <InputNumber id="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
                        <InputNumber id="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="minmax">Min-Max Boundaries</label>
                        <InputNumber id="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" min={0} max={100} />
                    </div>

                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-user">User Locale</label>
                        <InputNumber id="locale-user" value={value5} onValueChange={(e) => setValue5(e.value)} mode="decimal" minFractionDigits={2} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-us">United States Locale</label>
                        <InputNumber id="locale-us" value={value6} onValueChange={(e) => setValue6(e.value)} mode="decimal" locale="en-US" minFractionDigits={2}/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-german">German Locale</label>
                        <InputNumber id="locale-german" value={value7} onValueChange={(e) => setValue7(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2}/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-indian">Indian Locale</label>
                        <InputNumber id="locale-indian" value={value8} onValueChange={(e) => setValue8(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
                    </div>
                </div>

                <h5>Currency</h5>
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-us">United States</label>
                        <InputNumber id="currency-us" value={value9} onValueChange={(e) => setValue9(e.value)} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-germany">Germany</label>
                        <InputNumber id="currency-germany" value={value10} onValueChange={(e) => setValue10(e.value)} mode="currency" currency="EUR" locale="de-DE" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-india">India</label>
                        <InputNumber id="currency-india" value={value11} onValueChange={(e) => setValue11(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-japan">Japan</label>
                        <InputNumber id="currency-japan" value={value12} onValueChange={(e) => setValue12(e.value)} mode="currency" currency="JPY" locale="jp-JP"/>
                    </div>
                </div>

                <h5>Prefix and Suffix</h5>
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="mile">Mile</label>
                        <InputNumber id="mile" value={value13} onValueChange={(e) => setValue13(e.value)} suffix=" mi" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="percent">Percent</label>
                        <InputNumber id="percent" value={value14} onValueChange={(e) => setValue14(e.value)} prefix="%" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="expiry">Expiry</label>
                        <InputNumber id="expiry" value={value15} onValueChange={(e) => setValue15(e.value)}  prefix="Expires in " suffix=" days" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="temperature">Temperature</label>
                        <InputNumber id="temperature" value={value16} onValueChange={(e) => setValue16(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
                    </div>
                </div>

                <h5>Buttons</h5>
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="stacked">Stacked</label>
                        <InputNumber id="stacked" value={value17} onValueChange={(e) => setValue17(e.value)} showButtons mode="currency" currency="USD" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="horizontal">Horizontal with Step</label>
                        <InputNumber id="horizontal" value={value18} onValueChange={(e) => setValue18(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                            decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                        <InputNumber id="minmax-buttons" value={value20} onValueChange={(e) => setValue20(e.value)} mode="decimal" showButtons min={0} max={100} />
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="vertical" style={{display: 'block'}}>Vertical</label>
                        <InputNumber id="vertical" value={value19} onValueChange={(e) => setValue19(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}}
                            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
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
import { InputNumber } from 'primereact/inputnumber';

const InputNumberDemo = () => {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);
    const [value5, setValue5] = useState(151351);
    const [value6, setValue6] = useState(115744);
    const [value7, setValue7] = useState(635524);
    const [value8, setValue8] = useState(732762);
    const [value9, setValue9] = useState(1500);
    const [value10, setValue10] = useState(2500);
    const [value11, setValue11] = useState(4250);
    const [value12, setValue12] = useState(5002);
    const [value13, setValue13] = useState(20);
    const [value14, setValue14] = useState(50);
    const [value15, setValue15] = useState(10);
    const [value16, setValue16] = useState(20);
    const [value17, setValue17] = useState(20);
    const [value18, setValue18] = useState(10.50);
    const [value19, setValue19] = useState(25);
    const [value20, setValue20] = useState(50);

    return (
        <div>
            <div className="card">
                <h5>Numerals</h5>
                <div className="p-fluid p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="integeronly">Integer Only</label>
                        <InputNumber id="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="withoutgrouping">Without Grouping</label>
                        <InputNumber id="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
                        <InputNumber id="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="minmax">Min-Max Boundaries</label>
                        <InputNumber id="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" min={0} max={100} />
                    </div>

                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-user">User Locale</label>
                        <InputNumber id="locale-user" value={value5} onValueChange={(e) => setValue5(e.value)} mode="decimal" minFractionDigits={2} />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-us">United States Locale</label>
                        <InputNumber id="locale-us" value={value6} onValueChange={(e) => setValue6(e.value)} mode="decimal" locale="en-US" minFractionDigits={2}/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-german">German Locale</label>
                        <InputNumber id="locale-german" value={value7} onValueChange={(e) => setValue7(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2}/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="locale-indian">Indian Locale</label>
                        <InputNumber id="locale-indian" value={value8} onValueChange={(e) => setValue8(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
                    </div>
                </div>

                <h5>Currency</h5>
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-us">United States</label>
                        <InputNumber id="currency-us" value={value9} onValueChange={(e) => setValue9(e.value)} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-germany">Germany</label>
                        <InputNumber id="currency-germany" value={value10} onValueChange={(e) => setValue10(e.value)} mode="currency" currency="EUR" locale="de-DE" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-india">India</label>
                        <InputNumber id="currency-india" value={value11} onValueChange={(e) => setValue11(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="currency-japan">Japan</label>
                        <InputNumber id="currency-japan" value={value12} onValueChange={(e) => setValue12(e.value)} mode="currency" currency="JPY" locale="jp-JP"/>
                    </div>
                </div>

                <h5>Prefix and Suffix</h5>
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="mile">Mile</label>
                        <InputNumber id="mile" value={value13} onValueChange={(e) => setValue13(e.value)} suffix=" mi" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="percent">Percent</label>
                        <InputNumber id="percent" value={value14} onValueChange={(e) => setValue14(e.value)} prefix="%" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="expiry">Expiry</label>
                        <InputNumber id="expiry" value={value15} onValueChange={(e) => setValue15(e.value)}  prefix="Expires in " suffix=" days" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="temperature">Temperature</label>
                        <InputNumber id="temperature" value={value16} onValueChange={(e) => setValue16(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
                    </div>
                </div>

                <h5>Buttons</h5>
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="stacked">Stacked</label>
                        <InputNumber id="stacked" value={value17} onValueChange={(e) => setValue17(e.value)} showButtons mode="currency" currency="USD" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="horizontal">Horizontal with Step</label>
                        <InputNumber id="horizontal" value={value18} onValueChange={(e) => setValue18(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                            decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                        <InputNumber id="minmax-buttons" value={value20} onValueChange={(e) => setValue20(e.value)} mode="decimal" showButtons min={0} max={100} />
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="vertical" style={{display: 'block'}}>Vertical</label>
                        <InputNumber id="vertical" value={value19} onValueChange={(e) => setValue19(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}}
                            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    </div>
                </div>
            </div>
        </div>
    );
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
import { InputNumber } from 'primereact/inputnumber';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>InputNumber is used as a controlled input with <i>value</i> and <i>onValueChange</i> properties. Component always provides a number type although formatting on the input is a string.</p>

<CodeHighlight>
{`
<InputNumber value={value} onValueChange={(e) => setValue(e.value)} />
`}
</CodeHighlight>

            <h5>Decimal Mode</h5>
            <p>Format is defined using the <i>mode</i> property, "decimal" is the default value allowing only integers when there is no other configuration.</p>
<CodeHighlight>
{`
<InputNumber value={value} onValueChange={(e) => setValue(e.value)}  mode="decimal" />
`}
</CodeHighlight>

            <p>Fractions are configured with the <i>minFractionDigits</i> property. Optionally <i>maxFractionDigits</i> can be used to defined a boundary for the maximum digits.</p>
<CodeHighlight>
{`
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} mode="decimal" minFractionDigits={2} />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" minFractionDigits={2} maxFracionDigits={2} />
`}
</CodeHighlight>

            <p><i>locale</i> option is available to set the localization information such as grouping and decimal symbols where default value is the browser locale. Locales are defined per <a href="https://tools.ietf.org/html/rfc5646">BCP Language Tag</a>.</p>
<CodeHighlight>
{`
User Locale
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} mode="decimal" minFractionDigits={2} />

United State Locale
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" locale="en-US" minFractionDigits={2}/>

German Locale
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2}/>

Indian Locale
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
`}
</CodeHighlight>

            <h5>Currency</h5>
            <p>Currency formatting is specified by setting the <i>mode</i> option to currency and <i>currency</i> property. In addition <i>currencyDisplay</i> option
            allows how the currency is displayed, valid values are "symbol" (default) or "code".</p>
<CodeHighlight>
{`
United States
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />

Germany
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />

India
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN"/>

Japan
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP"/>
`}
</CodeHighlight>

            <h5>Prefix and Suffix</h5>
            <p>Custom texts e.g. units can be placed before or after the input section with the <i>prefix</i> and <i>suffix</i> properties.</p>
<CodeHighlight>
{`
Mile
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />

Percent
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />

Expiry
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />

Temperature
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
`}
</CodeHighlight>

            <h5>Buttons</h5>
            <p>Spinner buttons is enabled using the <i>showButtons</i> options and layout is defined with the <i>buttonLayout</i>. Default value is "stacked" whereas
            "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard.</p>
<CodeHighlight>
{`
Stacked
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />

Horizontal
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal"
    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>

Vertical
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{width: '6em'}}
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
`}
</CodeHighlight>

            <h5>Step</h5>
            <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<CodeHighlight>
{`
<InputNumber value={value} onValueChange={(e) => setValue(e.value)} step={0.25} />
`}
</CodeHighlight>


            <h5>Min and Max Boundaries</h5>
            <p>Value to be entered can be restricted by configuring the <i>min</i> and <i>max</i> options.</p>
<CodeHighlight>
{`
<InputNumber value={value} onValueChange={(e) => setValue1(e.value)} min={0} max={100} />
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
                            <td>value</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to format the value.</td>
                        </tr>
                        <tr>
                            <td>showButtons</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Displays spinner buttons.</td>
                        </tr>
                        <tr>
                            <td>buttonLayout</td>
                            <td>string</td>
                            <td>stacked</td>
                            <td>Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".</td>
                        </tr>
                        <tr>
                            <td>incrementButtonClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the increment button.</td>
                        </tr>
                        <tr>
                            <td>decrementButtonClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the decrement button.</td>
                        </tr>
                        <tr>
                            <td>incrementButtonIcon</td>
                            <td>string</td>
                            <td>pi pi-caret-up</td>
                            <td>Style class of the increment button.</td>
                        </tr>
                        <tr>
                            <td>decrementButtonIcon</td>
                            <td>string</td>
                            <td>pi pi-caret-down</td>
                            <td>Style class of the decrement button.</td>
                        </tr>
                        <tr>
                            <td>locale</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Locale to be used in formatting.</td>
                        </tr>
                        <tr>
                            <td>localeMatcher</td>
                            <td>string</td>
                            <td>best fit</td>
                            <td>The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit".
                                See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation">Locale Negotation</a> for details.
                            </td>
                        </tr>
                        <tr>
                            <td>mode</td>
                            <td>string</td>
                            <td>decimal</td>
                            <td>Defines the behavior of the component, valid values are "decimal" and "currency".</td>
                        </tr>
                        <tr>
                            <td>prefix</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Text to display before the value.</td>
                        </tr>
                        <tr>
                            <td>suffix</td>
                            <td>string</td>
                            <td>decimal</td>
                            <td>Text to display after the value.</td>
                        </tr>
                        <tr>
                            <td>currency</td>
                            <td>string</td>
                            <td>null</td>
                            <td>The currency to use in currency formatting. Possible values are the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency codes</a>,
                                such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
                                There is no default value; if the style is "currency", the currency property must be provided.</td>
                        </tr>
                        <tr>
                            <td>currencyDisplay</td>
                            <td>string</td>
                            <td>symbol</td>
                            <td>How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €,
                                ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".</td>
                        </tr>
                        <tr>
                            <td>useGrouping</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.</td>
                        </tr>
                        <tr>
                            <td>minFractionDigits</td>
                            <td>number</td>
                            <td>null</td>
                            <td>The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of
                                minor unit digits provided by the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a> (2 if the list doesn't provide that information).</td>
                        </tr>
                        <tr>
                            <td>maxFractionDigits</td>
                            <td>number</td>
                            <td>null</td>
                            <td>The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain
                                number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting
                                is the larger of minimumFractionDigits and the number of minor unit digits provided by the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a>
                                 (2 if the list doesn't provide that information).</td>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>string</td>
                            <td>text</td>
                            <td>Type of the input element.</td>
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
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>autoFocus</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should automatically get focus on load.</td>
                        </tr>
                        <tr>
                            <td>pattern</td>
                            <td>string</td>
                            <td>null</td>
                            <td>The pattern attribute specifies a regular expression that the element's value is checked against on form submission.</td>
                        </tr>
                        <tr>
                            <td>inputmode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>The inputmode attribute provides a hint to browsers for devices with onscreen keyboards to help them decide which keyboard to display.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Hint text for the input field.</td>
                        </tr>
                        <tr>
                            <td>readOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be read-only.</td>
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
                            <td>onValueChange</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: New value</td>
                            <td>Callback to invoke after validation check and value change.</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: New value</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
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
                            <td>onKeyDown</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the key pressed.</td>
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
                            <td>p-inputnumber</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-stacked</td>
                            <td>Container element with stacked buttons.</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-horizontal</td>
                            <td>Container element with horizontal buttons.</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-vertical</td>
                            <td>Container element with vertical buttons.</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-input</td>
                            <td>Input element</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button</td>
                            <td>Input element</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button-up</td>
                            <td>Increment button</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button-down</td>
                            <td>Decrement button</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button-icon</td>
                            <td>Button icon</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <h5>Dependencies</h5>
            <p>None.</p>
        </TabPanel>

        {
            useLiveEditorTabs({ name: 'InputNumberDemo', sources: this.sources })
        }
    </TabView>
</div>
        );
    }
}

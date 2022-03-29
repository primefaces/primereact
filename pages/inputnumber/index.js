import React, { useState } from 'react';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import InputNumberDoc from '../../components/doc/inputnumber';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

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
            <Head>
                <title>React InputNumber Component</title>
                <meta name="description" content="InputNumber is an input component to provide numerical input." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputNumber</h1>
                    <p>InputNumber is an input component to provide numerical input.</p>
                </div>

                <DocActions github="inputnumber/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Numerals</h5>
                    <div className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="integeronly">Integer Only</label>
                            <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="withoutgrouping">Without Grouping</label>
                            <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" useGrouping={false} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
                            <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="minmax">Min-Max Boundaries</label>
                            <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" min={0} max={100} />
                        </div>

                        <div className="field col-12 md:col-3">
                            <label htmlFor="locale-user">User Locale</label>
                            <InputNumber inputId="locale-user" value={value5} onValueChange={(e) => setValue5(e.value)} mode="decimal" minFractionDigits={2} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="locale-us">United States Locale</label>
                            <InputNumber inputId="locale-us" value={value6} onValueChange={(e) => setValue6(e.value)} mode="decimal" locale="en-US" minFractionDigits={2} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="locale-german">German Locale</label>
                            <InputNumber inputId="locale-german" value={value7} onValueChange={(e) => setValue7(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="locale-indian">Indian Locale</label>
                            <InputNumber inputId="locale-indian" value={value8} onValueChange={(e) => setValue8(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
                        </div>
                    </div>

                    <h5>Currency</h5>
                    <div className="grid p-fluid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="currency-us">United States</label>
                            <InputNumber inputId="currency-us" value={value9} onValueChange={(e) => setValue9(e.value)} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="currency-germany">Germany</label>
                            <InputNumber inputId="currency-germany" value={value10} onValueChange={(e) => setValue10(e.value)} mode="currency" currency="EUR" locale="de-DE" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="currency-india">India</label>
                            <InputNumber inputId="currency-india" value={value11} onValueChange={(e) => setValue11(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="currency-japan">Japan</label>
                            <InputNumber inputId="currency-japan" value={value12} onValueChange={(e) => setValue12(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
                        </div>
                    </div>

                    <h5>Prefix and Suffix</h5>
                    <div className="grid p-fluid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="mile">Mile</label>
                            <InputNumber inputId="mile" value={value13} onValueChange={(e) => setValue13(e.value)} suffix=" mi" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="percent">Percent</label>
                            <InputNumber inputId="percent" value={value14} onValueChange={(e) => setValue14(e.value)} prefix="%" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="expiry">Expiry</label>
                            <InputNumber inputId="expiry" value={value15} onValueChange={(e) => setValue15(e.value)} prefix="Expires in " suffix=" days" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="temperature">Temperature</label>
                            <InputNumber inputId="temperature" value={value16} onValueChange={(e) => setValue16(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
                        </div>
                    </div>

                    <h5>Buttons</h5>
                    <div className="grid p-fluid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="stacked">Stacked</label>
                            <InputNumber inputId="stacked" value={value17} onValueChange={(e) => setValue17(e.value)} showButtons mode="currency" currency="USD" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="horizontal">Horizontal with Step</label>
                            <InputNumber inputId="horizontal" value={value18} onValueChange={(e) => setValue18(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                                decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                            <InputNumber inputId="minmax-buttons" value={value20} onValueChange={(e) => setValue20(e.value)} mode="decimal" showButtons min={0} max={100} />
                        </div>
                    </div>

                    <div className="grid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="vertical" style={{ display: 'block' }}>Vertical</label>
                            <InputNumber inputId="vertical" value={value19} onValueChange={(e) => setValue19(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{ width: '4rem' }}
                                decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                        </div>
                    </div>
                </div>
            </div>

            <InputNumberDoc />
        </div>
    );
}

export default InputNumberDemo;

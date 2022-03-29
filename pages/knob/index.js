import React, { useState } from 'react';
import { Knob } from '../../components/lib/knob/Knob';
import { DocActions } from '../../components/doc/common/docactions';
import KnobDoc from '../../components/doc/knob';
import { Button } from '../../components/lib/button/Button';
import Head from 'next/head';

const KnobDemo = () => {

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
            <Head>
                <title>React Knob Component</title>
                <meta name="description" content="Knob is a form component to define number inputs with a dial." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Knob</h1>
                    <p>Knob is a form component to define number inputs with a dial.</p>
                </div>

                <DocActions github="konb/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="grid formgrid text-center">
                        <div className="field col-12 md:col-4">
                            <h5>Basic</h5>
                            <Knob value={value1} onChange={(e) => setValue1(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5>Readonly</h5>
                            <Knob value={value2} readOnly />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5>Disabled</h5>
                            <Knob value={value3} disabled />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Min/Max</h5>
                            <Knob value={value4} min={-50} max={50} onChange={(e) => setValue4(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Step</h5>
                            <Knob value={value5} step={10} onChange={(e) => setValue5(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Template</h5>
                            <Knob value={value6} valueTemplate={"{value}%"} onChange={(e) => setValue6(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Stroke</h5>
                            <Knob value={value7} strokeWidth={5} onChange={(e) => setValue7(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Size</h5>
                            <Knob value={value8} size={200} onChange={(e) => setValue8(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Color</h5>
                            <Knob value={value9} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue9(e.value)} />
                        </div>
                    </div>
                </div>

                <div className="card text-center">
                    <h5>Reactive Knob</h5>
                    <Knob value={value10} size={150} readOnly />
                    <Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} />
                    <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
                </div>
            </div>

            <KnobDoc />
        </div>
    )
}

export default KnobDemo;

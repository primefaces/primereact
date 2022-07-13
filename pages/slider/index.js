import React, { useState } from 'react';
import { Slider } from '../../components/lib/slider/Slider';
import { InputText } from '../../components/lib/inputtext/InputText';
import SliderDoc from '../../components/doc/slider';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const SliderDemo = () => {

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(20);
    const [value4, setValue4] = useState(30.5);
    const [value5, setValue5] = useState([20, 80]);
    const [value6, setValue6] = useState(50);

    return (
        <div>
            <Head>
                <title>React Slider Component</title>
                <meta name="description" content="Slider is a component to provide input using dragging of a handle." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Slider</h1>
                    <p>Slider is a component to provide input using dragging of a handle.</p>
                </div>

                <DocActions github="slider/index.js" />
            </div>

            <div className="content-section implementation slider-demo">
                <div className="card">
                    <h5>Basic: {value1}</h5>
                    <Slider value={value1} onChange={(e) => setValue1(e.value)} />

                    <h5>Input: {value2}</h5>
                    <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <Slider value={value2} onChange={(e) => setValue2(e.value)} />

                    <h5>Step: {value3}</h5>
                    <Slider value={value3} onChange={(e) => setValue3(e.value)} step={20} />

                    <h5>Decimal Step: {value4}</h5>
                    <Slider value={value4} onChange={(e) => setValue4(e.value)} step={0.5} />

                    <h5>Range: [{value5[0]}, {value5[1]}]</h5>
                    <Slider value={value5} onChange={(e) => setValue5(e.value)} range />

                    <h5>Vertical: {value6}</h5>
                    <Slider value={value6} onChange={(e) => setValue6(e.value)} orientation="vertical" />
                </div>
            </div>

            <SliderDoc />
        </div>
    );
}

export default SliderDemo;

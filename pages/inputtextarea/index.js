import React, { useState } from 'react';
import { InputTextarea } from '../../components/lib/inputtextarea/InputTextarea';
import InputTextareaDoc from '../../components/doc/inputtextarea';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const InputTextareaDemo = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
        <div>
            <Head>
                <title>React Textarea Component</title>
                <meta name="description" content="Inputtextarea add styling and autoResize functionality to standard textarea element." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputTextarea</h1>
                    <p>Inputtextarea add styling and autoResize functionality to standard textarea element.</p>
                </div>

                <DocActions github="inputtextarea/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <InputTextarea value={value1} onChange={(e) => setValue1(e.target.value)} rows={5} cols={30} />

                    <h5>Auto Resize</h5>
                    <InputTextarea value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={30} autoResize />

                    <h5>Disabled</h5>
                    <InputTextarea value={value3} rows={5} cols={30} disabled />
                </div>
            </div>

            <InputTextareaDoc />
        </div>
    )
}

export default InputTextareaDemo;

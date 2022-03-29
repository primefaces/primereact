import React, { useState } from 'react';
import { InputSwitch } from '../../components/lib/inputswitch/InputSwitch';
import InputSwitchDoc from '../../components/doc/inputswitch';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const InputSwitchDemo = () => {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
        <div>
            <Head>
                <title>React InputSwitch Component</title>
                <meta name="description" content="InputSwitch is used to select a boolean value." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputSwitch</h1>
                    <p>InputSwitch is used to select a boolean value.</p>
                </div>
                <DocActions github="inputswitch/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />

                    <h5>Preselection</h5>
                    <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
                </div>
            </div>

            <InputSwitchDoc></InputSwitchDoc>
        </div>
    );
}

export default InputSwitchDemo;

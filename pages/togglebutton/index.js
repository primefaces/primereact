import React, { useState } from 'react';
import { ToggleButton } from '../../components/lib/togglebutton/ToggleButton';
import ToggleButtonDoc from '../../components/doc/togglebutton';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ToggleButtonDemo = () => {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <Head>
                <title>React ToggleButton Component</title>
                <meta name="description" content="ToggleButton is used to select a boolean value using a button." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ToggleButton</h1>
                    <p>ToggleButton is used to select a boolean value using a button.</p>
                </div>

                <DocActions github="togglebutton/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />

                    <h5>Customized</h5>
                    <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" className="w-full sm:w-10rem" aria-label="Confirmation" />
                </div>
            </div>

            <ToggleButtonDoc />
        </div>
    );
}

export default ToggleButtonDemo;

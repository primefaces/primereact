import React, { useState } from 'react';
import { Chips } from '../../components/lib/chips/Chips';
import ChipsDoc from '../../components/doc/chips';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ChipsDemo = () => {

    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);
    const [values3, setValues3] = useState([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React Chips Component</title>
                <meta name="description" content="Chips is used to enter multiple values on an input field." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Chips</h1>
                    <p>Chips is used to enter multiple values on an input field.</p>
                </div>
                <DocActions github="chips/index.js" />
            </div>

            <div className="content-section implementation p-fluid">
                <div className="card p-fluid">
                    <h5>Basic</h5>
                    <Chips value={values1} onChange={(e) => setValues1(e.value)} />

                    <h5>Comma Separator</h5>
                    <Chips value={values2} onChange={(e) => setValues2(e.value)} separator="," />

                    <h5>Template</h5>
                    <Chips value={values3} onChange={(e) => setValues3(e.value)} max={5} itemTemplate={customChip}></Chips>
                </div>
            </div>

            <ChipsDoc />
        </div>
    )
}

export default ChipsDemo;

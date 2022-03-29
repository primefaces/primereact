import React, { useState } from 'react';
import { InputText } from '../../components/lib/inputtext/InputText';
import InputTextDoc from '../../components/doc/inputtext';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const InputTextDemo = () => {

    const [value1,setValue1] = useState('');
    const [value2,setValue2] = useState('');
    const [value3,setValue3] = useState('');
    const [value4,setValue4] = useState('');
    const [value5,setValue5] = useState('');

    return (
        <div>
            <Head>
                <title>React InputText Component</title>
                <meta name="description" content="InputText is an extension to standard input element with theming and keyfiltering." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputText</h1>
                    <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                </div>

                <DocActions github="inputtext/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                    <span className="ml-2">{value1}</span>

                    <h5>Floating Label</h5>
                    <span className="p-float-label">
                        <InputText id="username"value={value2} onChange={(e) => setValue2(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>

                    <h5>Left Icon</h5>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
                    </span>

                    <h5>Right Icon</h5>
                    <span className="p-input-icon-right">
                        <i className="pi pi-spin pi-spinner" />
                        <InputText value={value4} onChange={(e) => setValue4(e.target.value)} />
                    </span>

                    <h5>Help Text</h5>
                    <div className="field">
                        <label htmlFor="username1" className="block">Username</label>
                        <InputText id="username1" aria-describedby="username1-help" className="block" />
                        <small id="username1-help" className="block">Enter your username to reset your password.</small>
                    </div>

                    <h5>Invalid</h5>
                    <div className="field">
                        <label htmlFor="username2" className="block">Username</label>
                        <InputText id="username2" aria-describedby="username2-help" className="p-invalid block" />
                        <small id="username2-help" className="p-error block">Username is not available.</small>
                    </div>

                    <h5>Disabled</h5>
                    <InputText value={value5} disabled />

                    <h5>Sizes</h5>
                    <div className="sizes">
                        <InputText type="text" className="p-inputtext-sm block mb-2" placeholder="Small" />
                        <InputText type="text" className="block mb-2" placeholder="Normal" />
                        <InputText type="text" className="p-inputtext-lg block" placeholder="Large" />
                    </div>
                </div>
            </div>

            <InputTextDoc />
        </div>
    )
}

export default InputTextDemo;

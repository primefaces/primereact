import React from 'react';
import { InputText } from '../../components/lib/inputtext/InputText';
import KeyFilterDoc from '../../components/doc/keyfilter';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const KeyFilterDemo = () => {

    return (
        <div>
            <Head>
                <title>React KeyFilter Component</title>
                <meta name="description" content="KeyFilter feature restricts user input based on a regular expression." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>KeyFilter</h1>
                    <p>KeyFilter feature restricts user input based on a regular expression.</p>
                </div>
                <DocActions github="keyfilter/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="grid p-fluid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="integer">Integers</label>
                            <InputText id="integer" keyfilter="int" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="numbers">Numbers</label>
                            <InputText id="numbers" keyfilter="num" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="money">Money</label>
                            <InputText id="money" keyfilter="money" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="hex">Hex</label>
                            <InputText id="hex" keyfilter="hex" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="alpha">Alphabetic</label>
                            <InputText id="alpha" keyfilter="alpha" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="alphanum">Alphanumberic</label>
                            <InputText id="alphanum" keyfilter="alphanum" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="block">Block {`< > * !`}</label>
                            <InputText id="block" keyfilter={/^[^<>*!]+$/} />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="spaceblock">Block space key</label>
                            <InputText id="spaceblock" keyfilter={/[^\s]/} />
                        </div>
                    </div>
                </div>
            </div>

            <KeyFilterDoc />
        </div>
    )
}

export default KeyFilterDemo;

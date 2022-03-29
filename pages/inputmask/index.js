import React, { useState } from 'react';
import { InputMask } from '../../components/lib/inputmask/InputMask';
import InputMaskDoc from '../../components/doc/inputmask';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const InputMaskDemo = () => {

    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [val3, setVal3] = useState();
    const [val4, setVal4] = useState();
    const [val5, setVal5] = useState();
    const [val6, setVal6] = useState();

    return (
        <div>
            <Head>
                <title>React Mask Component</title>
                <meta name="description" content="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputMask</h1>
                    <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
                </div>
                <DocActions github="inputmask/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="basic">Basic</label>
                            <InputMask id="basic" mask="99-999999" value={val1} placeholder="99-999999" onChange={(e) => setVal1(e.value)}></InputMask>
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="ssn">SSN</label>
                            <InputMask id="ssn" mask="999-99-9999" value={val2} placeholder="999-99-9999" onChange={(e) => setVal2(e.value)}></InputMask>
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="date">Date</label>
                            <InputMask id="date" mask="99/99/9999" value={val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => setVal3(e.value)}></InputMask>
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="phone">Phone</label>
                            <InputMask id="phone" mask="(999) 999-9999" value={val4} placeholder="(999) 999-9999" onChange={(e) => setVal4(e.value)}></InputMask>
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="phoneext">Phone Ext</label>
                            <InputMask id="phoneext" mask="(999) 999-9999? x99999" value={val5} placeholder="(999) 999-9999? x99999" onChange={(e) => setVal5(e.value)}></InputMask>
                        </div>

                        <div className="field col-12 md:col-4">
                            <label htmlFor="serial">Serial</label>
                            <InputMask id="serial" mask="a*-999-a999" value={val6} placeholder="a*-999-a999" onChange={(e) => setVal6(e.value)}></InputMask>
                        </div>
                    </div>
                </div>
            </div>

            <InputMaskDoc />
        </div>
    );
}

export default InputMaskDemo;

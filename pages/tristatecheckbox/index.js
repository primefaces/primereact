import React, { useState } from 'react';
import { TriStateCheckbox } from '../../components/lib/tristatecheckbox/TriStateCheckbox';
import TriStateCheckboxDoc from '../../components/doc/tristatecheckbox';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TriStateCheckboxDemo = () => {

    const [value, setValue] = useState(null);

    return (
        <div>
            <Head>
                <title>React TriStateCheckbox Component</title>
                <meta name="description" content="TriStateCheckbox is used to select either true, false or null as the value." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TriStateCheckbox</h1>
                    <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                </div>

                <DocActions github="tristatecheckbox/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="field-checkbox m-0">
                        <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} aria-label="Terms Accepted" />
                        <label>{String(value)}</label>
                    </div>
                </div>
            </div>

            <TriStateCheckboxDoc />
        </div>
    );
}

export default TriStateCheckboxDemo;

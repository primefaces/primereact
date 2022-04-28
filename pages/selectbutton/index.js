import React, { useState } from 'react';
import { SelectButton } from '../../components/lib/selectbutton/SelectButton';
import SelectButtonDoc from '../../components/doc/selectbutton';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const SelectButtonDemo = () => {

    const [value1, setValue1] = useState('Off');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const options = ['Off', 'On'];
    const paymentOptions = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];
    const justifyOptions = [
        { icon: 'pi pi-align-left', value: 'left' },
        { icon: 'pi pi-align-right', value: 'Right' },
        { icon: 'pi pi-align-center', value: 'Center' },
        { icon: 'pi pi-align-justify', value: 'Justify' }
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div>
            <Head>
                <title>React SelectButton Component</title>
                <meta name="description" content="SelectButton is used to choose single or multiple items from a list using buttons." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>SelectButton</h1>
                    <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                </div>

                <DocActions github="selectbutton/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Single Selection</h5>
                    <SelectButton value={value1} options={options} onChange={(e) => setValue1(e.value)} />

                    <h5>Multiple Selection</h5>
                    <SelectButton value={value2} options={paymentOptions} onChange={(e) => setValue2(e.value)} optionLabel="name" multiple />

                    <h5>Custom Content</h5>
                    <SelectButton value={value3} options={justifyOptions} onChange={(e) => setValue3(e.value)} itemTemplate={justifyTemplate} optionLabel="value" />
                </div>
            </div>

            <SelectButtonDoc />
        </div>
    );
}

export default SelectButtonDemo;

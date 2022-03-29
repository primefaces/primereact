import React, { useState, useEffect } from 'react';
import { InputText } from '../../components/lib/inputtext/InputText';
import { AutoComplete } from '../../components/lib/autocomplete/AutoComplete';
import { CountryService } from '../../service/CountryService';
import { NodeService } from '../../service/NodeService';
import { Calendar } from '../../components/lib/calendar/Calendar';
import { CascadeSelect } from '../../components/lib/cascadeselect/CascadeSelect';
import { Chips } from '../../components/lib/chips/Chips';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import { InputMask } from '../../components/lib/inputmask/InputMask';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import { InputTextarea } from '../../components/lib/inputtextarea/InputTextarea';
import { MultiSelect } from '../../components/lib/multiselect/MultiSelect';
import { TreeSelect } from '../../components/lib/treeselect/TreeSelect';
import { Password } from '../../components/lib/password/Password';
import InvalidDoc from '../../components/doc/invalid';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const InvalidDemo = () => {

    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState('');

    const countryservice = new CountryService();
    const nodeService = new NodeService();
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const cascadeSelectCountries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let results = countries.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountries(results);
        }, 250);
    }

    return (
        <div>
            <Head>
                <title>Invalid State - PrimeReact</title>
                <meta name="description" content="All form components have an invalid state style to display the validation errors." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Invalid State</h1>
                    <p>All form components have an invalid state style to display the validation errors.</p>
                </div>

                <DocActions github="invalid/InvalidDemo.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="p-fluid grid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="inputtext">InputText</label>
                            <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="autocomplete">AutoComplete</label>
                            <AutoComplete value={value2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue2(e.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="calendar">Calendar</label>
                            <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="chips">Chips</label>
                            <Chips id="chips" value={value4} onChange={(e) => setValue4(e.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="inputmask">InputMask</label>
                            <InputMask id="inputmask" value={value5} onChange={(e) => setValue5(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="inputnumber">InputNumber</label>
                            <InputNumber inputId="inputnumber" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="cascadeselect">CascadeSelect</label>
                            <CascadeSelect inputId="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={(e) => setValue10(e.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="dropdown">Dropdown</label>
                            <Dropdown inputId="dropdown" value={value7} options={cities} onChange={(e) => setValue7(e.value)} optionLabel="name" className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="multiselect">MultiSelect</label>
                            <MultiSelect inputId="multiselect" value={value8} options={cities} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="treeselect">TreeSelect</label>
                            <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} className="p-invalid"></TreeSelect>
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="password">Password</label>
                            <Password inputId="password" value={value9} onChange={(e) => setValue9(e.target.value)} className="p-invalid" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="textarea">Textarea</label>
                            <InputTextarea id="textarea" value={value11} onChange={(e) => setValue9(e.value)} rows={3} className="p-invalid" />
                        </div>
                    </div>
                </div>
            </div>

            <InvalidDoc />
        </div>
    );
}

export default InvalidDemo;

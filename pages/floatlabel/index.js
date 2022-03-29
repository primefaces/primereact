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
import FloatLabelDoc from '../../components/doc/floatlabel';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const FloatLabelDemo = () => {

    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState(null);
    const [value11, setValue11] = useState(null);
    const [value12, setValue12] = useState(null);
    const [value13, setValue13] = useState('');
    const [value14, setValue14] = useState('');

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

    const countryservice = new CountryService();
    const nodeService = new NodeService();
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
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
                <title>Float Label - PrimeReact</title>
                <meta name="description" content="A floating label is implemented by wrapping the input and the label inside a container having .p-float-label style class." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Float Label</h1>
                    <p>A floating label is implemented by wrapping the input and the label inside a container having .p-float-label style class.</p>
                </div>
                <DocActions github="floatlabel/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="p-fluid grid">
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
                                <label htmlFor="inputtext">InputText</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label p-input-icon-left">
                                <i className="pi pi-search" />
                                <InputText id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)} />
                                <label htmlFor="lefticon">Left Icon</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-spin pi-spinner" />
                                <InputText id="righticon" value={value3} onChange={(e) => setValue3(e.target.value)} />
                                <label htmlFor="righticon">Right Icon</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <AutoComplete value={value4} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setValue4(e.value)} />
                                <label htmlFor="autocomplete">AutoComplete</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <Calendar id="calendar" value={value5} onChange={(e) => setValue5(e.value)} />
                                <label htmlFor="calendar">Calendar</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <Chips id="chips" value={value6} onChange={(e) => setValue6(e.value)} />
                                <label htmlFor="chips">Chips</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputMask id="inputmask" value={value7} onChange={(e) => setValue7(e.value)} mask="99/99/9999" slotChar="mm/dd/yyyy" />
                                <label htmlFor="inputmask">InputMask</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputNumber inputId="inputnumber" value={value8} onChange={(e) => setValue8(e.value)} />
                                <label htmlFor="inputnumber">InputNumber</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <span className="p-float-label">
                                    <InputText id="inputgroup" type="text" value={value9} onChange={(e) => setValue9(e.target.value)} />
                                    <label htmlFor="inputgroup">InputGroup</label>
                                </span>
                            </div>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <CascadeSelect inputId="cascadeselect" value={value10} options={cascadeSelectCountries} optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} onChange={event => setValue10(event.value)} />
                                <label htmlFor="cascadeselect">CascadeSelect</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <Dropdown inputId="dropdown" value={value11} options={cities} onChange={(e) => setValue11(e.value)} optionLabel="name" />
                                <label htmlFor="dropdown">Dropdown</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <MultiSelect inputId="multiselect" value={value12} options={cities} onChange={(e) => setValue12(e.value)} optionLabel="name" />
                                <label htmlFor="multiselect">MultiSelect</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)}></TreeSelect>
                                <label htmlFor="treeselect">TreeSelect</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <Password inputId="password" value={value13} onChange={(e) => setValue13(e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </span>
                        </div>
                        <div className="field col-12 md:col-4">
                            <span className="p-float-label">
                                <InputTextarea id="textarea" value={value14} onChange={(e) => setValue14(e.target.value)} rows={3} />
                                <label htmlFor="textarea">Textarea</label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <FloatLabelDoc />
        </div>
    );
}

export default FloatLabelDemo;

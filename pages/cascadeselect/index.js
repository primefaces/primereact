import React, { useState } from 'react';
import CascadeSelectDoc from '../../components/doc/cascadeselect';
import { DocActions } from '../../components/doc/common/docactions';
import { CascadeSelect } from '../../components/lib/cascadeselect/CascadeSelect';
import Head from 'next/head';
import getConfig from 'next/config';

const CascadeSelectDemo = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);

    const countries = [
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

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                    className={`flag flag-${option.code.toLowerCase()}`} />}
                {option.cities && <i className="pi pi-compass mr-2" />}
                {option.cname && <i className="pi pi-map-marker mr-2" />}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React CascadeSelect Component</title>
                <meta name="description" content="CascadeSelect is a form component to select a value from a nested structure of options." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>CascadeSelect</h1>
                    <p>CascadeSelect is a form component to select a value from a nested structure of options.</p>
                </div>
                <DocActions github="cascadeselect/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <CascadeSelect value={selectedCity1} options={countries} optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                        style={{ minWidth: '14rem' }} placeholder={"Select a City"} onChange={event => setSelectedCity1(event.value)} />

                    <h5>Templating</h5>
                    <CascadeSelect value={selectedCity2} options={countries} optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                        style={{ minWidth: '14rem' }} placeholder={"Select a City"} onChange={event => setSelectedCity2(event.value)} itemTemplate={countryOptionTemplate} />
                </div>
            </div>

            <CascadeSelectDoc />
        </div>
    )
}

export default CascadeSelectDemo;

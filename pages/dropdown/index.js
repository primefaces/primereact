import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import DropdownDoc from '../../components/doc/dropdown';
import { Skeleton } from '../../components/lib/skeleton/Skeleton';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DropdownDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    let loadLazyTimeout = useRef(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const groupedCities = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    const onCityChange2 = (e) => {
        setSelectedCity2(e.value);
    }

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }

    const onGroupedCityChange = (e) => {
        setSelectedGroupedCity(e.value);
    }

    const onItemChange = (e) => {
        setSelectedItem(e.value);
    }

    const onLazyItemChange = (e) => {
        setSelectedItem2(e.value)
    }

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: `Item #${i}`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src={`${contextPath}/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React Select Component</title>
                <meta name="description" content="Dropdown also known as Select, is used to choose an item from a collection of options." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Dropdown</h1>
                    <p>Dropdown also known as Select, is used to choose an item from a collection of options.</p>
                </div>
                <DocActions github="dropdown/index.js" />
            </div>

            <div className="content-section implementation dropdown-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />

                    <h5>Editable</h5>
                    <Dropdown value={selectedCity2} options={cities} onChange={onCityChange2} optionLabel="name" editable />

                    <h5>Grouped</h5>
                    <Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                        optionGroupTemplate={groupedItemTemplate} />

                    <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                    <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
                        valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />

                    <h5>Virtual Scroll (100000 Items)</h5>
                    <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item" />

                    <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                    <Dropdown value={selectedItem2} options={lazyItems} onChange={onLazyItemChange} virtualScrollerOptions={{
                        lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                            return (
                                <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                                    <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                                </div>
                            )
                        }
                    }} placeholder="Select Item" />
                </div>
            </div>

            <DropdownDoc />
        </div>
    );
}

export default DropdownDemo;

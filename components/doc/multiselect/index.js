import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const MultiSelectDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';
import { Skeleton } from 'primereact/skeleton';

export class MultiSelectDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lazyItems: [],
            lazyLoading: false,
            selectedCities1: null,
            selectedCities2: null,
            selectedCountries: null,
            selectedGroupedCities: null,
            selectedItems1: null,
            selectedItems2: null,
            selectAll: false
        };

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.countries = [
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

        this.groupedCities = [
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

        this.items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

        this.countryTemplate = this.countryTemplate.bind(this);
        this.groupedItemTemplate = this.groupedItemTemplate.bind(this);
        this.selectedCountriesTemplate = this.selectedCountriesTemplate.bind(this);
        this.panelFooterTemplate = this.panelFooterTemplate.bind(this);
        this.onLazyLoad = this.onLazyLoad.bind(this);
    }

    componentDidMount() {
        this.setState({
            lazyItems: Array.from({ length: 100000 }),
            lazyLoading: false
        });
    }

    countryTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    selectedCountriesTemplate(option) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    onLazyLoad(event) {
        this.setState({ lazyLoading: true });

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const lazyItems = [...this.state.lazyItems];

            for (let i = first; i < last; i++) {
                lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            this.setState({
                lazyItems,
                lazyLoading: false
            });
        }, Math.random() * 1000 + 250);
    }

    panelFooterTemplate() {
        const selectedItems = this.state.selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    }

    groupedItemTemplate(option) {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="multiselect-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <MultiSelect value={this.state.selectedCities1} options={this.cities} onChange={(e) => this.setState({ selectedCities1: e.value })} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />

                    <h5>Chips</h5>
                    <MultiSelect value={this.state.selectedCities2} options={this.cities} onChange={(e) => this.setState({ selectedCities2: e.value })} optionLabel="name" placeholder="Select a City" display="chip" />

                    <h5>Grouped</h5>
                    <MultiSelect value={this.state.selectedGroupedCities} options={this.groupedCities} onChange={(e) => this.setState({ selectedGroupedCities: e.value })} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                        optionGroupTemplate={this.groupedItemTemplate} placeholder="Select Cities" />

                    <h5>Advanced with Templating and Filtering</h5>
                    <MultiSelect value={this.state.selectedCountries} options={this.countries} onChange={(e) => this.setState({ selectedCountries: e.value })} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                        itemTemplate={this.countryTemplate} selectedItemTemplate={this.selectedCountriesTemplate} panelFooterTemplate={this.panelFooterTemplate} />

                    <h5>Virtual Scroll (100000 Items)</h5>
                    <MultiSelect value={this.state.selectedItems1} options={this.items} onChange={(e) => this.setState({ selectedItems1: e.value, selectAll: e.value.length === this.items.length })} selectAll={this.state.selectAll} onSelectAll={(e) => this.setState({ selectedItems1: e.checked ? [] : this.items.map(item => item.value), selectAll: !e.checked })} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>

                    <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                    <MultiSelect value={this.state.selectedItems2} options={this.state.lazyItems} onChange={(e) => this.setState({ selectedItems2: e.value })} virtualScrollerOptions={{ lazy: true, onLazyLoad: this.onLazyLoad, itemSize: 43, showLoader: true, loading: this.state.lazyLoading, delay: 250, loadingTemplate: (options) => {
                        return (
                            <div className="flex align-items-center p-2" style={{ height: '34px' }}>
                                <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                            </div>
                        )}
                    }} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
                </div>
            </div>
        );
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect, useRef } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';
import { Skeleton } from 'primereact/skeleton';

const MultiSelectDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCities1, setSelectedCities1] = useState(null);
    const [selectedCities2, setSelectedCities2] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
    const [selectedItems1, setSelectedItems1] = useState(null);
    const [selectedItems2, setSelectedItems2] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));
    const loadLazyTimeout = useRef(null);

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

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const panelFooterTemplate = () => {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="multiselect-demo">
            <div className="card">
                <h5>Basic</h5>
                <MultiSelect value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />

                <h5>Chips</h5>
                <MultiSelect value={selectedCities2} options={cities} onChange={(e) => setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />

                <h5>Grouped</h5>
                <MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate} placeholder="Select Cities" />

                <h5>Advanced with Templating and Filtering</h5>
                <MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                    itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} panelFooterTemplate={panelFooterTemplate} />

                <h5>Virtual Scroll (100000 Items)</h5>
                <MultiSelect value={selectedItems1} options={items} onChange={(e) => {setSelectedItems1(e.value); setSelectAll(e.value.length === items.length)}} selectAll={selectAll} onSelectAll={(e) => {setSelectedItems1(e.checked ? [] : items.map(item => item.value)); setSelectAll(!e.checked)}} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <MultiSelect value={selectedItems2} options={lazyItems} onChange={(e) => setSelectedItems2(e.value)} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 43, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '34px' }}>
                            <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                        </div>
                    )}
                }} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect, useRef } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';
import { Skeleton } from 'primereact/skeleton';

const MultiSelectDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCities1, setSelectedCities1] = useState(null);
    const [selectedCities2, setSelectedCities2] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
    const [selectedItems1, setSelectedItems1] = useState(null);
    const [selectedItems2, setSelectedItems2] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));
    const loadLazyTimeout = useRef(null);

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

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const panelFooterTemplate = () => {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="multiselect-demo">
            <div className="card">
                <h5>Basic</h5>
                <MultiSelect value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />

                <h5>Chips</h5>
                <MultiSelect value={selectedCities2} options={cities} onChange={(e) => setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />

                <h5>Grouped</h5>
                <MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate} placeholder="Select Cities" />

                <h5>Advanced with Templating and Filtering</h5>
                <MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                    itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} panelFooterTemplate={panelFooterTemplate} />

                <h5>Virtual Scroll (100000 Items)</h5>
                <MultiSelect value={state.selectedItems1} options={items} onChange={(e) => {setSelectedItems1(e.value); setSelectAll(e.value.length === items.length)}} selectAll={selectAll} onSelectAll={(e) => {setSelectedItems1(e.checked ? [] : items.map(item => item.value)); setSelectAll(!e.checked)}} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <MultiSelect value={selectedItems2} options={lazyItems} onChange={(e) => setSelectedItems2(e.value)} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 43, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '34px' }}>
                            <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                        </div>
                    )}
                }} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./MultiSelectDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>
        <script src="https://unpkg.com/primereact/skeleton/skeleton.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { MultiSelect } = primereact.multiselect;
const { Skeleton } = primereact.skeleton;

const MultiSelectDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCities1, setSelectedCities1] = useState(null);
    const [selectedCities2, setSelectedCities2] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGroupedCities, setSelectedGroupedCities] = useState(null);
    const [selectedItems1, setSelectedItems1] = useState(null);
    const [selectedItems2, setSelectedItems2] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));
    const loadLazyTimeout = useRef(null);

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

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const panelFooterTemplate = () => {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    }

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="multiselect-demo">
            <div className="card">
                <h5>Basic</h5>
                <MultiSelect value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />

                <h5>Chips</h5>
                <MultiSelect value={selectedCities2} options={cities} onChange={(e) => setSelectedCities2(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />

                <h5>Grouped</h5>
                <MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                    optionGroupTemplate={groupedItemTemplate} placeholder="Select Cities" />

                <h5>Advanced with Templating and Filtering</h5>
                <MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                    itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} panelFooterTemplate={panelFooterTemplate} />

                <h5>Virtual Scroll (100000 Items)</h5>
                <MultiSelect value={selectedItems1} options={items} onChange={(e) => {setSelectedItems1(e.value); setSelectAll(e.value.length === items.length)}} selectAll={selectAll} onSelectAll={(e) => {setSelectedItems1(e.checked ? [] : items.map(item => item.value)); setSelectAll(!e.checked)}} virtualScrollerOptions={{ itemSize: 43 }} maxSelectedLabels={3} placeholder="Select Item"/>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <MultiSelect value={selectedItems2} options={lazyItems} onChange={(e) => setSelectedItems2(e.value)} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 43, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '34px' }}>
                            <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                        </div>
                    )}
                }} maxSelectedLabels={3} placeholder="Select Item" showSelectAll={false}/>
            </div>
        </div>
    );
}
                `
        }
    }

    const extFiles = {
        'demo/MultiSelectDemo.css': {
            content: `
.multiselect-demo .p-multiselect {
    min-width: 15rem;
}

.multiselect-demo .multiselect-custom .p-multiselect-label:not(.p-placeholder):not(.p-multiselect-items-label) {
    padding-top: .25rem;
    padding-bottom: .25rem;
}

.multiselect-demo .multiselect-custom .country-item-value {
    padding: .25rem .5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: .5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);
}

.multiselect-demo .multiselect-custom .country-item-value img.flag {
    width: 17px;
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { MultiSelect } from 'primereact/multiselect';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>MultiSelect is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
                    of how to define the options property; One way is providing a collection of <i>SelectItem</i> instances having label-value pairs
                    whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition,
                    options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.</p>

                    <p><b>Options as SelectItems</b></p>
<CodeHighlight lang="js">
{`
const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<MultiSelect value={cities} options={citySelectItems} onChange={(e) => setCities(e.value)} />
`}
</CodeHighlight>

                    <p><b>Options as any type</b></p>
<CodeHighlight lang="js">
{`
const cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<MultiSelect optionLabel="name" value={cities} options={cities} onChange={(e) => setCities(e.value)} />
<MultiSelect optionLabel="name" optionValue="code" value={cities} options={cities} onChange={(e) => setCities(e.value)} />
`}
        </CodeHighlight>
                    <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

                    <h5>Chips Display</h5>
                    <p>A comma separated list is used by default to display selected items whereas alternative chip mode is provided using the <i>display</i> property to visualize the items as tokens.</p>
<CodeHighlight>
{`
<MultiSelect display="chip" optionLabel="name" value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} />
`}
</CodeHighlight>

                    <h5>Custom Content</h5>
                    <p>Label of an option is used as the display text of an item by default, for custom content support define an itemTemplate function that gets the option as a parameter and returns the content.</p>

<CodeHighlight>
{`
<MultiSelect value={cities} options={citySelectItems} onChange={(e) => setCities(e.value)} itemTemplate={itemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
itemTemplate(option) {
    // custom item content
}
`}
</CodeHighlight>
                    <p><i>selectedItemTemplate</i> can be used to customize the selected values display instead of the default comma separated list.</p>

<CodeHighlight>
{`
<MultiSelect value={cities} options={citySelectItems} onChange={(e) => setCities(e.value)} selectedItemTemplate={selectedItemTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
selectedItemTemplate(option) {
    // custom selected item content
}
`}
</CodeHighlight>

                    <p>In addition <i>panelHeaderTemplate</i> and <i>panelFooterTemplate</i> can be used to customize the header and footer of panel.</p>
<CodeHighlight>
{`
<MultiSelect value={cities} options={citySelectItems} onChange={(e) => setCities(e.value)} panelHeaderTemplate={panelHeaderTemplate} panelFooterTemplate={panelFooterTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
panelHeaderTemplate(options) {
    // options.className: Style class of the panel header.
    // options.checkboxElement: Default checkbox element created by the component.
    // options.checked: Whether the all checkbox is checked.
    // options.onChange: Change event of toggleable checkbox.
    // options.filterElement: Default filter element created by the component.
    // options.closeElement: Default close element created by the component.
    // options.closeElementClassName: Style class of the close container
    // options.closeIconClassName: Style class of the close icon
    // options.onCloseClick: Click event for the close icon.
    // options.element: Default element created by the component.
    // options.props: component props.
}

panelFooterTemplate(options) {
    // options.props: component props.
}
`}
</CodeHighlight>

                    <h5>Grouping</h5>
                    <p>Options groups are specified with the <i>optionGroupLabel</i> and <i>optionGroupChildren</i> properties.</p>
<CodeHighlight>
{`
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
`}
</CodeHighlight>

<CodeHighlight>
{`
<MultiSelect value={selectedGroupedCities} options={groupedCities} onChange={(e) => setSelectedGroupedCities(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" />
`}
</CodeHighlight>

                    <h5>Filtering</h5>
                    <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
                        label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
                        to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</p>

<CodeHighlight>
{`
<MultiSelect value={cities} options={citySelectItems} onChange={(e) => setCities(e.value)} filter/>
`}
</CodeHighlight>

                    <h5>SelectItem API</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Label of the option.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Value of the option.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>ClassName of the option.</td>
                                </tr>
                                <tr>
                                    <td>title</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Tooltip text of the option. (Not supported)</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the option is disabled or not. (Not supported)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Properties</h5>
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the input element.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>Value of the component.</td>
                                </tr>
                                <tr>
                                    <td>options</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of selectitems to display as the available options.</td>
                                </tr>
                                <tr>
                                    <td>optionLabel</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>
                                </tr>
                                <tr>
                                    <td>optionValue</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
                                </tr>
                                <tr>
                                    <td>optionDisabled</td>
                                    <td>function | string</td>
                                    <td>null</td>
                                    <td>Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupLabel</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property name or getter function to use as the label of an option group.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupChildren</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Property name or getter function that refers to the children options of option group.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>panelClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>panelStyle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>200px</td>
                                    <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Label to display when there are no selections.</td>
                                </tr>
                                <tr>
                                    <td>fixedPlaceholder</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to display selected items in the label section or always display the placeholder as the default label.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>showClear</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, a clear icon is displayed to clear the value.</td>
                                </tr>
                                <tr>
                                    <td>filter</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When specified, displays an input field to filter the items on keyup.</td>
                                </tr>
                                <tr>
                                    <td>filterBy</td>
                                    <td>string</td>
                                    <td>label</td>
                                    <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                                </tr>
                                <tr>
                                    <td>filterMatchMode</td>
                                    <td>string</td>
                                    <td>contains</td>
                                    <td>Defines how the items are filtered, valid values are "contains", (default) "startsWith", "endsWith", "equals" and "notEquals".</td>
                                </tr>
                                <tr>
                                    <td>filterPlaceholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Placeholder text to show when filter input is empty.</td>
                                </tr>
                                <tr>
                                    <td>filterLocale</td>
                                    <td>string</td>
                                    <td>undefined</td>
                                    <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                                </tr>
                                <tr>
                                    <td>emptyFilterMessage</td>
                                    <td>any</td>
                                    <td>No records found</td>
                                    <td>Template to display when filtering does not return any results.</td>
                                </tr>
                                <tr>
                                    <td>resetFilterOnHide</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Clears the filter value when hiding the dropdown.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>dataKey</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>A property to uniquely match the value in options for better performance.</td>
                                </tr>
                                <tr>
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the focusable input.</td>
                                </tr>
                                <tr>
                                    <td>tooltip</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets the option and returns the content for it.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of an option group item.</td>
                                </tr>
                                <tr>
                                    <td>selectedItemTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets an item in the value and returns the content for it.</td>
                                </tr>
                                <tr>
                                    <td>panelHeaderTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of the panel header.</td>
                                </tr>
                                <tr>
                                    <td>panelFooterTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of the panel footer.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>maxSelectedLabels</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Decides how many selected item labels to show at most.</td>
                                </tr>
                                <tr>
                                    <td>selectionLimit</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Number of maximum options that can be selected.</td>
                                </tr>
                                <tr>
                                    <td>selectedItemsLabel</td>
                                    <td>string</td>
                                    <td>&#123;0&#125; items selected</td>
                                    <td>Label to display after exceeding max selected labels.</td>
                                </tr>
                                <tr>
                                    <td>ariaLabelledBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                                </tr>
                                <tr>
                                    <td>display</td>
                                    <td>string</td>
                                    <td>comma</td>
                                    <td>Used mode to display the selected item. Valid values are 'comma' and 'chip'.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                                <tr>
                                    <td>dropdownIcon</td>
                                    <td>any</td>
                                    <td>pi pi-chevron-down</td>
                                    <td>Icon class of the dropdown icon.</td>
                                </tr>
                                <tr>
                                    <td>removeIcon</td>
                                    <td>any</td>
                                    <td>pi pi-times-circle</td>
                                    <td>Icon of the remove chip element.</td>
                                </tr>
                                <tr>
                                    <td>virtualScrollerOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.</td>
                                </tr>
                                <tr>
                                    <td>showSelectAll</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to show the select all checkbox inside the panel's header.</td>
                                </tr>
                                <tr>
                                    <td>selectAll</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether all data is selected.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onChange</td>
                                    <td>event.originalEvent: Browser event<br />
                                        event.value: Current selected values<br />
                                    </td>
                                    <td>Callback to invoke when value changes.</td>
                                </tr>
                                <tr>
                                    <td>onFocus</td>
                                    <td>event: Browser event.</td>
                                    <td>Callback to invoke when the element receives focus.</td>
                                </tr>
                                <tr>
                                    <td>onBlur</td>
                                    <td>event: Browser event.</td>
                                    <td>Callback to invoke when the element loses focus.</td>
                                </tr>
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes hidden.</td>
                                </tr>
                                <tr>
                                    <td>onFilter</td>
                                    <td>event.originalEvent: Browser event<br />
                                        event.filter: Filter value.</td>
                                    <td>Callback to invoke on filtering.</td>
                                </tr>
                                <tr>
                                    <td>onSelectAll</td>
                                    <td>event.originalEvent: Browser event<br />
                                        event.checked: Whether all data is selected.</td>
                                    <td>Callback to invoke when all data is selected.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Methods</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>checkValidity</td>
                                    <td>-</td>
                                    <td>Checks whether the native hidden input element has any constraints and returns a boolean for the result.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-multiselect</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-label-container</td>
                                    <td>Container of the label to display selected items.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-label-container</td>
                                    <td>Label to display selected items.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-trigger</td>
                                    <td>Dropdown button.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-filter-container</td>
                                    <td>Container of filter input.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-panel</td>
                                    <td>Overlay panel for items.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-items</td>
                                    <td>List container of items.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-item</td>
                                    <td>An item in the list.</td>
                                </tr>
                                <tr>
                                    <td>p-multiselect-token</td>
                                    <td>A selected item element container on display='chip' mode.</td>
                                </tr>
                                <tr>
                                    <td>p-chips-token-icon</td>
                                    <td>Icon of a selected item element on display='chip' mode.</td>
                                </tr>
                                <tr>
                                    <td>p-chips-token-label</td>
                                    <td>Label of a selected item element on display='chip' mode.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The multiselect component has a <i>combobox</i> role
                    in addition to <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The relation between the combobox and the popup is created with <i>aria-controls</i> attribute that refers to the id of the popup listbox.</p>
                    <p>The popup listbox uses <i>listbox</i> as the role with <i>aria-multiselectable</i> enabled. Each list item has an <i>option</i> role along with <i>aria-label</i>, <i>aria-selected</i> and <i>aria-disabled</i> attributes.</p>

                    <p>Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the <i>selectAll</i> and <i>unselectAll</i> keys of the <i>aria</i> property from the <Link href="/locale">locale</Link> API.</p>

                    <p>If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the input element.</p>

                    <p>Close button uses <i>close</i> key of the <i>aria</i> property from the <Link href="/locale">locale</Link> API as the <i>aria-label</i> by default, this can be overriden with the <i>closeButtonProps</i>.</p>
<CodeHighlight>
{`
<span id="dd1">Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />
`}
</CodeHighlight>

                    <h6>Closed State Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the multiselect element.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Popup Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>tab</i></td>
                                    <td>Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Toggles the selection state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles the selection state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup, moves focus to the multiselect element.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves focus to the next option, if there is none then visual focus does not change.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves focus to the previous option, if there is none then visual focus does not change.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first option.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last option.</td>
                                </tr>
                                <tr>
                                    <td><i>any printable character</i></td>
                                    <td>Moves focus to the option whose label starts with the characters being typed if dropdown is not editable.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Toggle All Checkbox Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles the checked state.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Filter Input Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Closes the popup and moves focus to the multiselect element.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup and moves focus to the multiselect element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Close Button Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Closes the popup and moves focus to the multiselect element.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Closes the popup and moves focus to the multiselect element.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup and moves focus to the multiselect element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>
                {
                    useLiveEditorTabs({ name: 'MultiSelectDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default MultiSelectDoc;

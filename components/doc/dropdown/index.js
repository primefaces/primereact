import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const DropdownDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import './DropdownDemo.css';

export class DropdownDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lazyItems: [],
            lazyLoading: false,
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
            selectedGroupedCity: null,
            selectedItem: null,
            selectedItem2: null
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

        this.onCityChange = this.onCityChange.bind(this);
        this.onCityChange2 = this.onCityChange2.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onGroupedCityChange = this.onGroupedCityChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onLazyItemChange = this.onLazyItemChange.bind(this);
        this.onLazyLoad = this.onLazyLoad.bind(this);
    }

    componentDidMount() {
        this.setState({
            lazyItems: Array.from({ length: 100000 }),
            lazyLoading: false
        });
    }

    onCityChange(e) {
        this.setState({ selectedCity1: e.value });
    }

    onCityChange2(e) {
        this.setState({ selectedCity2: e.value });
    }

    onCountryChange(e) {
        this.setState({ selectedCountry: e.value });
    }

    onGroupedCityChange(e) {
        this.setState({ selectedGroupedCity: e.value });
    }

    onItemChange(e) {
        this.setState({ selectedItem: e.value });
    }

    onLazyItemChange(e) {
        this.setState({ selectedItem2: e.value });
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

    selectedCountryTemplate(option, props) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
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

    countryOptionTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
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
            <div className="dropdown-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Dropdown value={this.state.selectedCity1} options={this.cities} onChange={this.onCityChange} optionLabel="name" placeholder="Select a City" />

                    <h5>Editable</h5>
                    <Dropdown value={this.state.selectedCity2} options={this.cities} onChange={this.onCityChange2} optionLabel="name" editable />

                    <h5>Grouped</h5>
                    <Dropdown value={this.state.selectedGroupedCity} options={this.groupedCities} onChange={this.onGroupedCityChange} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                        optionGroupTemplate={this.groupedItemTemplate} />

                    <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                    <Dropdown value={this.state.selectedCountry} options={this.countries} onChange={this.onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
                        valueTemplate={this.selectedCountryTemplate} itemTemplate={this.countryOptionTemplate} />

                    <h5>Virtual Scroll (100000 Items)</h5>
                    <Dropdown value={this.state.selectedItem} options={this.items} onChange={this.onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>

                    <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                    <Dropdown value={this.state.selectedItem2} options={this.state.lazyItems} onChange={this.onLazyItemChange} virtualScrollerOptions={{ lazy: true, onLazyLoad: this.onLazyLoad, itemSize: 38, showLoader: true, loading: this.state.lazyLoading, delay: 250, loadingTemplate: (options) => {
                        return (
                            <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                                <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                            </div>
                        )}
                    }} placeholder="Select Item"/>
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
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import './DropdownDemo.css';

const DropdownDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);

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

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

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
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
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
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
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
        <div className="dropdown-demo">
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
                <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <Dropdown value={selectedItem2} options={lazyItems} onChange={onLazyItemChange} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                            <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                        </div>
                    )}
                }} placeholder="Select Item"/>
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
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import './DropdownDemo.css';

const DropdownDemo = () => {

    const [lazyItems, setLazyItems] = useState<any>([]);
    const [lazyLoading, setLazyLoading] = useState<any>(false);
    const [selectedCity1, setSelectedCity1] = useState<any>(null);
    const [selectedCity2, setSelectedCity2] = useState<any>(null);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState<any>(null);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [selectedItem2, setSelectedItem2] = useState<any>(null);

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

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const onCityChange = (e: { value: any}) => {
        setSelectedCity1(e.value);
    }

    const onCityChange2 = (e: {value: any} ) => {
        setSelectedCity2(e.value);
    }

    const onCountryChange = (e: {value: any}) => {
        setSelectedCountry(e.value);
    }

    onGroupedCityChange(e: {value: any}) {
        setSelectedGroupedCity(e.value);
    }

    const onItemChange = (e: {value: any}) => {
        setSelectedItem(e.value);
    }

    const onLazyItemChange = (e: {value: any}) => {
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
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const selectedCountryTemplate = (option: { name: string, code: string }, props: { placeholder: string }) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
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

    const countryOptionTemplate = (option: any) => {
        return (
            <div className="country-item">
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const groupedItemTemplate = (option: any) => {
        return (
            <div className="flex align-items-center country-item">
                <img alt={option.label} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.label}</div>
            </div>
        );
    }

    return (
        <div className="dropdown-demo">
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
                <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <Dropdown value={selectedItem2} options={lazyItems} onChange={onLazyItemChange} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                            <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                        </div>
                    )}
                }} placeholder="Select Item"/>
            </div>
        <div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./DropdownDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/skeleton/skeleton.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Dropdown } = primereact.dropdown;
const { Skeleton } = primereact.skeleton;

const DropdownDemo = () => {

    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);

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

    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

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
                _lazyItems[i] = { label: \`Item #\${i}\`, value: i };
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
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
                <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={\`flag flag-\${option.code.toLowerCase()}\`} />
                <div>{option.name}</div>
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
        <div className="dropdown-demo">
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
                <Dropdown value={selectedItem} options={items} onChange={onItemChange} virtualScrollerOptions={{ itemSize: 38 }} placeholder="Select Item"/>

                <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                <Dropdown value={selectedItem2} options={lazyItems} onChange={onLazyItemChange} virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: lazyLoading, delay: 250, loadingTemplate: (options) => {
                    return (
                        <div className="flex align-items-center p-2" style={{ height: '38px' }}>
                            <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                        </div>
                    )}
                }} placeholder="Select Item"/>
            </div>
        </div>
    );
}
                `
        }
    }

    const extFiles = {
        'demo/DropdownDemo.css': {
            content: `
.dropdown-demo .p-dropdown {
    width: 14rem;
}

.dropdown-demo .country-item-value img.flag {
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
import { Dropdown } from 'primereact/dropdown';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>SelectButton is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives
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
<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
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
<Dropdown optionLabel="name" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
<Dropdown optionLabel="name" optionValue="code" value={city} options={cities} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
`}
</CodeHighlight>
                    <p>When <i>optionValue</i> is not defined, value of an option refers to the option object itself.</p>

                    <h5>Placeholder</h5>
                    <p>Common pattern is providing an empty option as the placeholder when using native selects, however Dropdown has built-in support using the placeholder option so it is suggested to use it instead of creating an empty option.</p>

                    <h5>Filtering</h5>
                    <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against
                        label of the items and <i>filterBy</i> property is available to choose one or more properties of the options. In addition <i>filterMatchMode</i> can be utilized
                        to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</p>

<CodeHighlight>
{`
<Dropdown value={selectedCountry} options={countries} onChange={(e) => setSelectedCountry(e.value)} optionLabel="name" filter showClear filterBy="name"
    placeholder="Select a Country" itemTemplate={countryOptionTemplate} />
`}
</CodeHighlight>

                    <h5>Custom Content</h5>
                    <p>Label of an option is used as the display text of an item by default, for custom content support define an <i>itemTemplate</i> function that gets the option instance as a parameter and returns the content.</p>
<CodeHighlight>
{`
<Dropdown value={selectedCountry} options={countries} onChange={(e) => setSelectedCountry(e.value)} optionLabel="name" placeholder="Select a Country"
    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const selectedCountryTemplate = (option, props) => {
    if (option) {
        return (
            <div className="country-item country-item-value">
                <img alt={option.name} src="images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
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
            <img alt={option.name} src="images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} />
            <div>{option.name}</div>
        </div>
    );
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
<Dropdown value={selectedGroupedCity} options={groupedCities} onChange={e => setSelectedGroupedCity(e.value)} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" />
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
                                    <td>Whether the option is disabled or not.</td>
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
                                    <td>any</td>
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
                                    <td>Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.</td>
                                </tr>
                                <tr>
                                    <td>optionValue</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.</td>
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
                                    <td>valueTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of selected item.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of items.</td>
                                </tr>
                                <tr>
                                    <td>optionGroupTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of an option group item.</td>
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
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>200px</td>
                                    <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>
                                </tr>
                                <tr>
                                    <td>filter</td>
                                    <td>boolean</td>
                                    <td>false</td>
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
                                    <td>Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".</td>
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
                                    <td>emptyMessage</td>
                                    <td>string</td>
                                    <td>No results found</td>
                                    <td>Text to display when there are no options available.</td>
                                </tr>
                                <tr>
                                    <td>emptyFilterMessage</td>
                                    <td>any</td>
                                    <td>No results found</td>
                                    <td>Template to display when filtering does not return any results.</td>
                                </tr>
                                <tr>
                                    <td>resetFilterOnHide</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Clears the filter value when hiding the dropdown.</td>
                                </tr>
                                <tr>
                                    <td>editable</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Default text to display when no option is selected.</td>
                                </tr>
                                <tr>
                                    <td>required</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>autoFocus</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should automatically get focus on load.</td>
                                </tr>
                                <tr>
                                    <td>filterInputAutoFocus</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When the panel is opened, it specifies that the filter input should focus automatically.</td>
                                </tr>
                                <tr>
                                    <td>showFilterClear</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, a clear icon is displayed to clear the filtered value.</td>
                                </tr>
                                <tr>
                                    <td>panelClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>panelStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the overlay panel element.</td>
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
                                    <td>showClear</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, a clear icon is displayed to clear the value.</td>
                                </tr>
                                <tr>
                                    <td>maxLength</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Maximum number of characters to be typed on an editable input.</td>
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
                                    <td>ariaLabel</td>
                                    <td>string</td>
                                    <td>false</td>
                                    <td>Used to define a string that labels the component.</td>
                                </tr>
                                <tr>
                                    <td>ariaLabelledBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Contains the element IDs of labels.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                                <tr>
                                    <td>dropdownIcon</td>
                                    <td>string</td>
                                    <td>pi pi-chevron-down</td>
                                    <td>Icon class of the dropdown icon.</td>
                                </tr>
                                <tr>
                                    <td>showOnFocus</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, overlay panel will be visible with input focus.</td>
                                </tr>
                                <tr>
                                    <td>virtualScrollerOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.</td>
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
                                    <td>event.originalEvent: Original event <br />
                                        event.value: Value of the checkbox </td>
                                    <td>Callback to invoke on value change</td>
                                </tr>
                                <tr>
                                    <td>onMouseDown</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke to when a mouse button is pressed.</td>
                                </tr>
                                <tr>
                                    <td>onContextMenu</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on right-click.</td>
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
                                    <td>Checks whether the native hidden select element has any constraints and returns a boolean for the result.</td>
                                </tr>
                                <tr>
                                    <td>resetFilter</td>
                                    <td>-</td>
                                    <td>Reset the options filter.</td>
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
                                    <td>p-dropdown</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-label</td>
                                    <td>Element to display label of selected option.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-trigger</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-panel</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-items-wrapper</td>
                                    <td>Wrapper element of items list.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-items</td>
                                    <td>List element of items.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-item</td>
                                    <td>An item in the list.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-filter-container</td>
                                    <td>Container of filter input.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-filter</td>
                                    <td>Filter element.</td>
                                </tr>
                                <tr>
                                    <td>p-dropdown-open</td>
                                    <td>Container element when overlay is visible.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The dropdown element has a <i>combobox</i> role
                    in addition to <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. If the editable option is enabled <i>aria-autocomplete</i> is also added.
                    The relation between the combobox and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used
                    to instruct screen reader which option to read during keyboard navigation within the popup list.</p>
                    <p>The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>listbox</i> as the role. Each list item has an <i>option</i> role, an id to match the <i>aria-activedescendant</i> of the input element along with <i>aria-label</i>, <i>aria-selected</i> and <i>aria-disabled</i> attributes.</p>

                    <p>If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the filter input element.</p>
<CodeHighlight>
{`
<span id="dd1">Options</span>
<Dropdown aria-labelledby="dd1" />

<Dropdown aria-label="Options" />
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
                                    <td>Moves focus to the dropdown element.</td>
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
                                    <td>Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus.</td>
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
                                    <td>Selects the focused option and closes the popup.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Selects the focused option and closes the popup.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup, moves focus to the dropdown element.</td>
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
                                    <td><i>right arrow</i></td>
                                    <td>If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character left.</td>
                                </tr>
                                <tr>
                                    <td><i>left arrow</i></td>
                                    <td>If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character right.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>If the dropdown is editable, moves input cursor at the end, if not then moves focus to the first option.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>If the dropdown is editable, moves input cursor at the beginning, if not then moves focus to the last option.</td>
                                </tr>
                                <tr>
                                    <td><i>any printable character</i></td>
                                    <td>Moves focus to the option whose label starts with the characters being typed if dropdown is not editable.</td>
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
                                    <td>Closes the popup and moves focus to the dropdown element.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup and moves focus to the dropdown element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'DropdownDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})

export default DropdownDoc;

import React, { Component } from 'react';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { DropdownDoc } from './DropdownDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import './DropdownDemo.scss';
import AppDemoActions from '../../AppDemoActions';
import { Skeleton } from '../../components/skeleton/Skeleton';

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

        this.items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

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
                lazyItems[i] = { label: `Item #${i}`, value: i };
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
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
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
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    groupedItemTemplate(option) {
        return (
            <div className="p-d-flex p-ai-center country-item">
                <img alt={option.label} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.label}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dropdown">
                        <h1>Dropdown</h1>
                        <p>Dropdown is used to select an item from a collection of options.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="dropdown/DropdownDemo.js" />
                </div>

                <div className="content-section implementation dropdown-demo">
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
                        <Dropdown value={this.state.selectedItem} options={this.items} onChange={this.onItemChange} virtualScrollerOptions={{ itemSize: 31 }} placeholder="Select Item"/>

                        <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                        <Dropdown value={this.state.selectedItem2} options={this.state.lazyItems} onChange={this.onLazyItemChange} virtualScrollerOptions={{ lazy: true, onLazyLoad: this.onLazyLoad, itemSize: 31, showLoader: true, loading: this.state.lazyLoading, delay: 250, loadingTemplate: (options) => {
                            return (
                                <div className="p-d-flex p-ai-center p-p-2" style={{ height: '31px' }}>
                                    <Skeleton width={options.even ? '60%' : '50%'} height="1rem" />
                                </div>
                            )}
                        }} placeholder="Select Item"/>
                    </div>
                </div>

                <DropdownDoc />
            </div>
        );
    }
}

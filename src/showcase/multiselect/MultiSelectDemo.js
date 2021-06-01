import React, { Component } from 'react';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { MultiSelectDoc } from './MultiSelectDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';
import { Skeleton } from '../../components/skeleton/Skeleton';
import './MultiSelectDemo.scss';

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
            selectedItems2: null
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
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    selectedCountriesTemplate(option) {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
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
                lazyItems[i] = { label: `Item #${i}`, value: i };
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
            <div className="p-py-2 p-px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
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
                    <AppInlineHeader changelogText="multiSelect">
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="multiselect/MultiSelectDemo.js" />
                </div>

                <div className="content-section implementation multiselect-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <MultiSelect value={this.state.selectedCities1} options={this.cities} onChange={(e) => this.setState({ selectedCities1: e.value })} optionLabel="name" placeholder="Select a City" />

                        <h5>Chips</h5>
                        <MultiSelect value={this.state.selectedCities2} options={this.cities} onChange={(e) => this.setState({ selectedCities2: e.value })} optionLabel="name" placeholder="Select a City" display="chip" />

                        <h5>Grouped</h5>
                        <MultiSelect value={this.state.selectedGroupedCities} options={this.groupedCities} onChange={(e) => this.setState({ selectedGroupedCities: e.value })} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                            optionGroupTemplate={this.groupedItemTemplate} placeholder="Select Cities" />

                        <h5>Advanced with Templating and Filtering</h5>
                        <MultiSelect value={this.state.selectedCountries} options={this.countries} onChange={(e) => this.setState({ selectedCountries: e.value })} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                            itemTemplate={this.countryTemplate} selectedItemTemplate={this.selectedCountriesTemplate} panelFooterTemplate={this.panelFooterTemplate} />

                        <h5>Virtual Scroll (100000 Items)</h5>
                        <MultiSelect value={this.state.selectedItems1} options={this.items} onChange={(e) => this.setState({ selectedItems1: e.value })} virtualScrollerOptions={{ itemSize: 34 }} placeholder="Select Item"/>

                        <h5>Virtual Scroll (100000 Items) and Lazy</h5>
                        <MultiSelect value={this.state.selectedItems2} options={this.state.lazyItems} onChange={(e) => this.setState({ selectedItems2: e.value })} virtualScrollerOptions={{ lazy: true, onLazyLoad: this.onLazyLoad, itemSize: 34, showLoader: true, loading: this.state.lazyLoading, delay: 250, loadingTemplate: (options) => {
                            return (
                                <div className="p-d-flex p-ai-center p-p-2" style={{ height: '34px' }}>
                                    <Skeleton width={options.even ? '70%' : '60%'} height="1.5rem" />
                                </div>
                            )}
                        }} placeholder="Select Item"/>
                    </div>
                </div>

                <MultiSelectDoc />
            </div>
        );
    }
}

import React, {Component} from 'react';
import { ListBox } from '../../components/listbox/ListBox';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ListBoxDoc } from './ListBoxDoc';

export class ListBoxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCity: null,
            selectedCountries: null
        };

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];

        this.countryTemplate = this.countryTemplate.bind(this);
    }

    countryTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="listBox" showInputStyle>
                        <h1>ListBox</h1>
                        <p>ListBox is used to select one or more values from a list of items.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Single</h5>
                        <ListBox value={this.state.selectedCity} options={this.cities} onChange={(e) => this.setState({selectedCity: e.value})} optionLabel="name" style={{width: '15rem'}} />

                        <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                        <ListBox value={this.state.selectedCountries} options={this.countries} onChange={(e) => this.setState({selectedCountries: e.value})} multiple filter optionLabel="name"
                            itemTemplate={this.countryTemplate} style={{width: '15rem'}} listStyle={{maxHeight: '250px'}} />
                    </div>
                </div>

                <ListBoxDoc />
            </div>
        );
    }
}

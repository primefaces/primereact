import React, { Component } from 'react';
import { CascadeSelectDoc } from './CascadeSelectDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CascadeSelect } from '../../components/cascadeselect/CascadeSelect';

export class CascadeSelectDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCity1: null,
            selectedCity2: null
        };

        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            {cname: 'Sydney', code: 'A-SY'},
                            {cname: 'Newcastle', code: 'A-NE'},
                            {cname: 'Wollongong', code: 'A-WO'}
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            {cname: 'Brisbane', code: 'A-BR'},
                            {cname: 'Townsville', code: 'A-TO'}
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
                            {cname: 'Montreal', code: 'C-MO'},
                            {cname: 'Quebec City', code: 'C-QU'}
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            {cname: 'Ottawa', code: 'C-OT'},
                            {cname: 'Toronto', code: 'C-TO'}
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
                            {cname: 'Los Angeles', code: 'US-LA'},
                            {cname: 'San Diego', code: 'US-SD'},
                            {cname: 'San Francisco', code: 'US-SF'}
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            {cname: 'Jacksonville', code: 'US-JA'},
                            {cname: 'Miami', code: 'US-MI'},
                            {cname: 'Tampa', code: 'US-TA'},
                            {cname: 'Orlando', code: 'US-OR'}
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            {cname: 'Austin', code: 'US-AU'},
                            {cname: 'Dallas', code: 'US-DA'},
                            {cname: 'Houston', code: 'US-HO'}
                        ]
                    }
                ]
            }
        ];
    }

    countryOptionTemplate(option) {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                       className={`flag flag-${option.code.toLowerCase()}`} />}
                {option.cities && <i className="pi pi-compass p-mr-2"/>}
                {option.cname && <i className="pi pi-map-marker p-mr-2"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="cascadeSelect" showInputStyle>
                        <h1>CascadeSelect</h1>
                        <p>CascadeSelect displays a nested structure of options.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <CascadeSelect value={this.state.selectedCity1} options={this.countries}  optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                            style={{minWidth: '14rem'}} placeholder="Select a City" onChange={event => this.setState({selectedCity1: event.value})}/>

                        <h5>Templating</h5>
                        <CascadeSelect value={this.state.selectedCity2} options={this.countries}  optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                            style={{minWidth: '14rem'}} placeholder="Select a City" onChange={event => this.setState({selectedCity2: event.value})}  itemTemplate={this.countryOptionTemplate}/>
                    </div>
                </div>

                <CascadeSelectDoc />
            </div>
        )
    }
}

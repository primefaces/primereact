import React, {Component} from 'react';
import {Listbox} from '../../components/listbox/Listbox';

export class ListboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
        this.onCarChange = this.onCarChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    onCarChange(e) {
        this.setState({car: e.value});
    }

    carTemplate(option) {
        var logoPath = 'showcase/resources/demo/images/car/' + option.label + '.gif';

        return (
            <div className="ui-helper-clearfix">
                <img alt={option.label} src={logoPath} style={{display:'inline-block',margin:'5px 0 0 5px'}} />
                <span style={{fontSize:'1em',float:'right',margin:'1em .5em 0 0'}}>{option.label}</span>
            </div>
        );
    }

    render() {
        var cities = [
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
        ];

        var cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Listbox</h1>
                        <p>Listbox is used to select one or more values from a list of items.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Listbox value={this.state.city} options={cities} onChange={this.onCityChange} />
                    <div style={{marginTop: '.5em'}}>{this.state.city ? 'Selected City: ' + this.state.city : 'No city selected'}</div>

                    <h3>Advanced</h3>
                    <Listbox value={this.state.car} options={cars} onChange={this.onCarChange} itemTemplate={this.carTemplate} style={{maxHeight: '250px'}}/>
                    <div style={{marginTop: '.5em'}}>{this.state.car ? 'Selected Car: ' + this.state.car : 'No car selected'}</div>
                </div>
            </div>
        );
    }
}
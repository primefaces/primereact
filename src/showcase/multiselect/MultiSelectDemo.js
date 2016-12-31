import React, {Component} from 'react';
import {MultiSelect} from '../../components/multiselect/MultiSelect';

export class MultiSelectDemo extends Component {
        
    constructor() {
        super();
        this.state = {cars: []};
        this.onCarChange = this.onCarChange.bind(this);
    }

    onCarChange(e) {
        this.setState({cars: e.value});
    }

    render() {
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
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <MultiSelect value={this.state.cars} options={cars} onChange={this.onCarChange} style={{width:'150px'}}/>
                    <div style={{marginTop:'1em'}}>Selected Cars <ul>{this.state.cars.map((car) => <li key={car}>{car}</li>)}</ul></div>
                </div>
            </div>
        );
    }
}
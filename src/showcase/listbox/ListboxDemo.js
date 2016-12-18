import React, {Component} from 'react';
import {Listbox} from '../../components/listbox/Listbox';

export class ListboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({cityValue: e.value, cityIndex: e.index});
    }

    render() {
        var cities = [
            {label: 'New York', value: 0},
            {label: 'Rome', value: 1},
            {label: 'London', value: 2},
            {label: 'Istanbul', value: 3},
            {label: 'Paris', value: 4}
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
                    <Listbox options={cities} onChange={this.onCityChange}/>
                    <div>{this.state.cityValue >= 0 ? 'Selected City: ' + cities[this.state.cityIndex].label : 'No city selected'}</div>
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react';
import {Checkbox} from '../../components/checkbox/Checkbox';

export class CheckboxDemo extends Component {
        
    constructor() {
        super();
        this.state = {cities: []};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        var selectedCities = [...this.state.cities];
        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities: selectedCities});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <Checkbox value="New York" label="New York" onChange={this.onCityChange} checked={this.state.cities.includes('New York')}></Checkbox>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.cities.includes('San Francisco')}></Checkbox>
                        </div>
                        <div className="ui-g-12">
                            <Checkbox value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.includes('Los Angeles')}></Checkbox>
                        </div>
                    </div>
                    Selected Cities : {this.state.cities.map((city) => <span key={city}>{city}</span>)}
                </div>
            </div>
        )
    }
}
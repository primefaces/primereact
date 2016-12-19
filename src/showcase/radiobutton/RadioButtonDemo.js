import React, {Component} from 'react';
import {RadioButton} from '../../components/radiobutton/RadioButton';

export class RadioButtonDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g" style={{width:'250px',marginBottom:'10px'}}>
                        <div className="ui-g-12">
                            <RadioButton value="New York" label="New York" onChange={this.onCityChange} checked={this.state.city === 'New York'} />
                        </div>
                        <div className="ui-g-12">
                            <RadioButton value="San Francisco" label="San Francisco" onChange={this.onCityChange} checked={this.state.city === 'San Francisco'} />
                        </div>
                        <div className="ui-g-12">
                            <RadioButton value="Los Angeles" label="Los Angeles" onChange={this.onCityChange} checked={this.state.city === 'Los Angeles'} />
                        </div>
                    </div>
                    Selected City : {this.state.city}
                </div>
            </div>
        )
    }
}
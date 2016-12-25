import React, {Component} from 'react';
import {SelectButton} from '../../components/selectbutton/SelectButton';

export class SelectButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onOptionsChange = this.onOptionsChange.bind(this);
    }

    onOptionChange(e) {
        this.setState({option: e.value});
    }

    onOptionsChange(e) {
        this.setState({options: e.value});
    }
    
    render() {
        var option = [];
        option.push({label: 'Apartment', value: 'Apartment'});
        option.push({label: 'House', value: 'House'});
        option.push({label: 'Studio', value: 'Studio'});

        var options = [];
        options.push({label: 'Apartment', value: 'Apartment'});
        options.push({label: 'House', value: 'House'});
        options.push({label: 'Studio', value: 'Studio'});

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SelectButton value={this.state.option} options={option} onChange={this.onOptionChange}></SelectButton>
                    <p>Selected Value: {this.state.option}</p>

                    <h3>Multiple</h3>
                    <SelectButton value={this.state.options} options={options} onChange={this.onOptionsChange} multiple={true}></SelectButton>
                </div>
            </div>
        );
    }
}
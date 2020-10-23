import React, {Component} from 'react';
import { RadioButton } from '../../components/radiobutton/RadioButton';
import { AppInlineHeader } from '../../AppInlineHeader';
import { RadioButtonDoc } from './RadioButtonDoc';

export class RadioButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

        this.state = {
            city: null,
            selectedCategory: this.categories[1]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="radioButton" showInputStyle>
                        <h1>RadioButton</h1>
                        <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Chicago'} />
                            <label htmlFor="city1">Chicago</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Los Angeles'} />
                            <label htmlFor="city2">Los Angeles</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'New York'} />
                            <label htmlFor="city3">New York</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'San Francisco'} />
                            <label htmlFor="city4">San Francisco</label>
                        </div>

                        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                        {
                            this.categories.map((category) => {
                                return (
                                    <div key={category.key} className="p-field-radiobutton">
                                        <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => this.setState({selectedCategory: e.value})}  checked={this.state.selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                        <label htmlFor={category.key}>{category.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <RadioButtonDoc />
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { CheckboxDoc } from './CheckboxDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class CheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

        this.state = {
            checked: false,
            cities: [],
            selectedCategories: this.categories.slice(1,3)
        };

        this.onCityChange = this.onCityChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    onCategoryChange(e) {
        let selectedCategories = [...this.state.selectedCategories];

        if (e.checked) {
            selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < selectedCategories.length; i++) {
                const selectedCategory = selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        this.setState({ selectedCategories });
    }


    onCityChange(e) {
        let selectedCities = [...this.state.cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({ cities: selectedCities });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="checkbox" showInputStyle>
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="binary" checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />
                            <label htmlFor="binary">{this.state.checked ? 'true' : 'false'}</label>
                        </div>

                        <h5>Multiple</h5>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city1" name="city" value="Chicago" onChange={this.onCityChange} checked={this.state.cities.indexOf('Chicago') !== -1} />
                            <label htmlFor="city1">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.indexOf('Los Angeles') !== -1} />
                            <label htmlFor="city2">Los Angeles</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city3" name="city" value="New York" onChange={this.onCityChange} checked={this.state.cities.indexOf('New York') !== -1} />
                            <label htmlFor="city3">New York</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city4" name="city" value="San Francisco" onChange={this.onCityChange} checked={this.state.cities.indexOf('San Francisco') !== -1} />
                            <label htmlFor="city4">San Francisco</label>
                        </div>

                        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                        {
                            this.categories.map((category) => {
                                return (
                                    <div key={category.key} className="p-field-checkbox">
                                        <Checkbox inputId={category.key} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.key === category.key)} disabled={category.key === 'R'} />
                                        <label htmlFor={category.key}>{category.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <CheckboxDoc />
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Checkbox } from '../../components/checkbox/Checkbox';
import AppContentContext from '../../AppContentContext';
import { CheckboxDoc } from './CheckboxDoc';

export class CheckboxDemo extends Component {

    constructor() {
        super();
        this.state = {
            checked: false,
            cities: []
        };
        this.onCityChange = this.onCityChange.bind(this);
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
                    <div className="feature-intro">
                        <h1>Checkbox</h1>
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("checkbox")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Single</h3>
                    <Checkbox checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />
                    <p>Checked: <span style={{ fontWeight: 'bold' }}>{this.state.checked ? 'true' : 'false'}</span></p>

                    <h3>Multiple</h3>
                    <div className="p-grid" style={{ width: '250px' }}>
                        <div className="p-col-12">
                            <Checkbox inputId="cb1" value="New York" onChange={this.onCityChange} checked={this.state.cities.indexOf('New York') !== -1}></Checkbox>
                            <label htmlFor="cb1" className="p-checkbox-label">New York</label>
                        </div>
                        <div className="p-col-12">
                            <Checkbox inputId="cb2" value="San Francisco" onChange={this.onCityChange} checked={this.state.cities.indexOf('San Francisco') !== -1}></Checkbox>
                            <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
                        </div>
                        <div className="p-col-12">
                            <Checkbox inputId="cb3" value="Los Angeles" onChange={this.onCityChange} checked={this.state.cities.indexOf('Los Angeles') !== -1}></Checkbox>
                            <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
                        </div>
                    </div>
                    <p>Selected Cities : {this.state.cities.map((city) => <span style={{ fontWeight: 'bold' }} key={city}>{city} </span>)}</p>
                </div>

                <CheckboxDoc />
            </div>
        )
    }
}

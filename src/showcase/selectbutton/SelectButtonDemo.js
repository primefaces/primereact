import React, { Component } from 'react';
import { SelectButton } from '../../components/selectbutton/SelectButton';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SelectButtonDoc } from './SelectButtonDoc';

export class SelectButtonDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 'Off',
            value2: null,
            value3: null,
        };

        this.options = ['Off', 'On'];
        this.paymentOptions = [
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3}
        ];
        this.justifyOptions = [
            {icon: 'pi pi-align-left', value: 'left'},
            {icon: 'pi pi-align-right', value: 'Right'},
            {icon: 'pi pi-align-center', value: 'Center'},
            {icon: 'pi pi-align-justify', value: 'Justify'}
        ];

        this.justifyTemplate = this.justifyTemplate.bind(this);
    }

    justifyTemplate(option) {
        return <i className={option.icon}></i>;
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="selectButton" showInputStyle>
                        <h1>SelectButton</h1>
                        <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Single Selection</h5>
                        <SelectButton value={this.state.value1} options={this.options} onChange={(e) => this.setState({ value1: e.value })} />

                        <h5>Multiple Selection</h5>
                        <SelectButton value={this.state.value2} options={this.paymentOptions} onChange={(e) => this.setState({ value2: e.value })} optionLabel="name" multiple />

                        <h5>Custom Content</h5>
                        <SelectButton value={this.state.value3} options={this.justifyOptions} onChange={(e) => this.setState({ value3: e.value })} itemTemplate={this.justifyTemplate} />
                    </div>
                </div>

                <SelectButtonDoc />
            </div>
        );
    }
}

import React, { Component } from 'react';
import { MultiStateCheckbox } from '../../components/multistatecheckbox/MultiStateCheckbox';
import { AppInlineHeader } from '../../AppInlineHeader';
import { MultiStateCheckboxDoc } from './MultiStateCheckboxDoc';
import AppDemoActions from '../../AppDemoActions';

export class MultiStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'public'
        };

        this.options = [
            { value: 'public', icon: 'pi pi-globe' },
            { value: 'protected', icon: 'pi pi-lock-open' },
            { value: 'private', icon: 'pi pi-lock' }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="multiStateCheckbox">
                        <h1>MultiStateCheckbox</h1>
                        <p>MultiStateCheckbox is used to select a state from given multiple states.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="multistatecheckbox/MultiStateCheckboxDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-field-checkbox p-m-0">
                            <MultiStateCheckbox value={this.state.value} options={this.options} optionValue="value" onChange={(e) => this.setState({ value: e.value })} />
                            <label>{this.state.value}</label>
                        </div>
                    </div>
                </div>

                <MultiStateCheckboxDoc />
            </div>
        );
    }
}

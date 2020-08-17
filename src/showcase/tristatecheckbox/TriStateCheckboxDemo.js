import React, { Component } from 'react';
import { TriStateCheckbox } from '../../components/tristatecheckbox/TriStateCheckbox';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TriStateCheckboxDoc } from './TriStateCheckboxDoc';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="triStateCheckbox" showInputStyle>
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-field-checkbox p-m-0">
                            <TriStateCheckbox value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            <label>{String(this.state.value)}</label>
                        </div>
                    </div>
                </div>

                <TriStateCheckboxDoc />
            </div>
        );
    }
}

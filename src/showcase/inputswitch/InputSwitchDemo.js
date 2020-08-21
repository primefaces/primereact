import React, { Component } from 'react';
import { InputSwitch } from '../../components/inputswitch/InputSwitch';
import { AppInlineHeader } from '../../AppInlineHeader';
import { InputSwitchDoc } from './InputSwitchDoc';

export class InputSwitchDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: true
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="inputSwitch" showInputStyle>
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <InputSwitch checked={this.state.checked1} onChange={(e) => this.setState({ checked1: e.value })} />

                        <h5>Preselection</h5>
                        <InputSwitch checked={this.state.checked2} onChange={(e) => this.setState({ checked2: e.value })} />
                    </div>
                </div>

                <InputSwitchDoc></InputSwitchDoc>
            </div>
        );
    }
}

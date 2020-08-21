import React, { Component } from 'react';
import { ToggleButton } from '../../components/togglebutton/ToggleButton';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ToggleButtonDoc } from './ToggleButtonDoc';

export class ToggleButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked1: false,
            checked2: false
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="toggleButton" showInputStyle>
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <ToggleButton checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} onIcon="pi pi-check" offIcon="pi pi-times" />

                        <h5>Customized</h5>
                        <ToggleButton checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '10em'}} />
                    </div>
                </div>

                <ToggleButtonDoc />
            </div>
        );
    }
}

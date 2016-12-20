import React, {Component} from 'react';
import {ToggleButton} from '../../components/togglebutton/ToggleButton';

export class ToggleButtonDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeCustom = this.onChangeCustom.bind(this);
    }

    onChangeBasic(e) {
        this.setState({checked1:e.value});
    }

    onChangeCustom(e) {
        this.setState({checked2:e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <ToggleButton style={{width:'150px'}} checked={this.state.checked1} onChange={this.onChangeBasic}/>
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Custom</h3>
                    <ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="fa-check-square" offIcon="fa-square"
                                checked={this.state.checked2} onChange={this.onChangeCustom}/>
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react';
import {InputSwitch} from '../../components/inputswitch/InputSwitch';

export class InputSwitchDemo extends Component {

    constructor() {
        super();
        this.state = {checked2:true};
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
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputSwitch checked={this.state.checked1} onChange={this.onChangeBasic}/>
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Labels</h3>
                    <InputSwitch onLabel="Yes" offLabel="No" checked={this.state.checked2} onChange={this.onChangeCustom}/>
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>
            </div>
        );
    }
}
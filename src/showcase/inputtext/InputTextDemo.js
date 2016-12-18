import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';

export class InputTextDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Disabled</h3>
                    <InputText disabled={this.state.disabled} style={{marginRight:'.25em'}}/>

                    <Button label="Toggle" onClick={this.toggle}/>
                </div>
            </div>
        )
    }
}
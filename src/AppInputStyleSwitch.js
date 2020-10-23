import React, { Component } from 'react';
import { RadioButton } from '../src/components/radiobutton/RadioButton';


export class AppInputStyleSwitch extends Component {

    render() {
        const id = this.props.id || 'input';

        return (
            <div className="app-inputstyleswitch">
                <h4>Input Style</h4>
                <div className="p-formgroup-inline">
                    <div className="p-field-radiobutton">
                        <RadioButton inputId={`${id}_outlined`} name="inputstyle" value="outlined" onChange={this.props.onChange} checked={this.props.value === 'outlined'} />
                        <label htmlFor={`${id}_outlined`}>Outlined</label>
                    </div>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId={`${id}_filled`} name="inputstyle" value="filled"  onChange={this.props.onChange} checked={this.props.value === 'filled'} />
                        <label htmlFor={`${id}_filled`}>Filled</label>
                    </div>
                </div>
            </div>
        );
    }
}

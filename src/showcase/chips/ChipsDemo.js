import React, {Component} from 'react';
import {Chips} from '../../components/chips/Chips';

export class ChipsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {basicValues: [], advancedValues: []};
    }

    customTemplate(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="fa fa-user"></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an inputfield.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Chips value={this.state.basicValues}></Chips>

                    <h3>Advanced</h3>
                    <Chips value={this.state.advancedValues} max={5} itemTemplate={this.customTemplate}></Chips>
                </div>
            </div>
        )
    }
}
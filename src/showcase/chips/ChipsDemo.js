import React, {Component} from 'react';
import {Chips} from '../../components/chips/Chips';

export class ChipsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateInputValueBasic = this.updateInputValueBasic.bind(this);
        this.updateInputValueAdvanced = this.updateInputValueAdvanced.bind(this);
    }

    updateInputValueBasic(e) {
        var newArray = [];
        newArray.push(e.value);
        this.setState({ inputValueBasic: newArray});
    }

     updateInputValueAdvanced(e) {
        var newArray = [];
        newArray.push(e.value);
        this.setState({ inputValueAdvanced: newArray});
    }

    customTemplate(item) {
        return (
            <div className="ui-helper-clearfix">
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
                    <Chips value={this.state.inputValueBasic} onAdd={this.updateInputValueBasic} ></Chips>

                    <h3>Advanced</h3>
                    <Chips value={this.state.inputValueAdvanced} max={5} onAdd={this.updateInputValueAdvanced} itemTemplate={this.customTemplate}></Chips>
                </div>
            </div>
        )
    }
}
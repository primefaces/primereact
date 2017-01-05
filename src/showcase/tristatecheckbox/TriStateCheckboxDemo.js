import React, {Component} from 'react';
import {TriStateCheckbox} from '../../components/tristatecheckbox/TriStateCheckbox';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
        this.onStateChange = this.onStateChange.bind(this);
    }

    onStateChange(e) {
        this.setState({value: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Value: {this.state.value + ''} </h3>
                    <TriStateCheckbox onChange={this.onStateChange} value={this.state.value}></TriStateCheckbox>
                </div>
            </div>
        );
    }
}
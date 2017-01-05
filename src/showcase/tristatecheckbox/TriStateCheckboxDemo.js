import React, {Component} from 'react';
import {TriStateCheckbox} from '../../components/tristatecheckbox/TriStateCheckbox';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                        <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Value: {this.state.value && this.state.value ? 'true' : 'false'} </h3>
                    <TriStateCheckbox onChange={this.onStateChange} value={this.state.value}></TriStateCheckbox>
                </div>
            </div>
        );
    }
}
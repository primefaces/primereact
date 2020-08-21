import React, {Component} from 'react';
import { InputTextarea } from '../../components/inputtextarea/InputTextarea';
import { AppInlineHeader } from '../../AppInlineHeader';
import { InputTextareaDoc } from './InputTextareaDoc';

export class InputTextareaDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: ''
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="inputTextarea" showInputStyle>
                        <h1>InputTextarea</h1>
                        <p>Inputtextarea add styling and autoResize functionality to standard textarea element.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <InputTextarea value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} rows={5} cols={30} />

                        <h5>Auto Resize</h5>
                        <InputTextarea value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} rows={5} cols={30} autoResize />

                        <h5>Disabled</h5>
                        <InputTextarea value={this.state.value3} rows={5} cols={30} disabled />
                    </div>
                </div>

                <InputTextareaDoc />
            </div>
        )
    }
}

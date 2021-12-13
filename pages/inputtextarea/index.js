import React, { Component } from 'react';
import { InputTextarea } from '../../components/lib/inputtextarea/InputTextarea';
import { InputTextareaDoc } from '../../components/doc/inputtextarea';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class InputTextareaDemo extends Component {

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
                <Head>
                    <title>React Textarea Component</title>
                    <meta name="description" content="Inputtextarea add styling and autoResize functionality to standard textarea element." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputTextarea</h1>
                        <p>Inputtextarea add styling and autoResize functionality to standard textarea element.</p>
                    </div>

                    <DocActions github="inputtextarea/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <InputTextarea value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} rows={5} cols={30} />

                        <h5>Auto Resize</h5>
                        <InputTextarea value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} rows={5} cols={30} autoResize />

                        <h5>Disabled</h5>
                        <InputTextarea value={this.state.value3} rows={5} cols={30} disabled />
                    </div>
                </div>

                <InputTextareaDoc />
            </div>
        )
    }
}

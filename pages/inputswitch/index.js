import React, { Component } from 'react';
import { InputSwitch } from '../../components/lib/inputswitch/InputSwitch';
import { InputSwitchDoc } from '../../components/doc/inputswitch';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class InputSwitchDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: true
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React InputSwitch Component</title>
                    <meta name="description" content="InputSwitch is used to select a boolean value." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </div>
                    <DocActions github="inputswitch/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <InputSwitch checked={this.state.checked1} onChange={(e) => this.setState({ checked1: e.value })} />

                        <h5>Preselection</h5>
                        <InputSwitch checked={this.state.checked2} onChange={(e) => this.setState({ checked2: e.value })} />
                    </div>
                </div>

                <InputSwitchDoc></InputSwitchDoc>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Password } from '../../components/lib/password/Password';
import { Divider } from '../../components/lib/divider/Divider';
import { PasswordDoc } from '../../components/doc/password';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class PasswordDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };
    }

    render() {
        const header = <h6>Pick a password</h6>;
        const footer = (
            <>
                <Divider />
                <p className="mt-2">Suggestions</p>
                <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </>
        );

        return (
            <div>
                <Head>
                    <title>React Password Component</title>
                    <meta name="description" content="Password displays strength indicator for password fields." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Password</h1>
                        <p>Password displays strength indicator for password fields.</p>
                    </div>

                    <DocActions github="password/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <Password value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} feedback={false} />

                        <h5>Password Meter</h5>
                        <Password value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />

                        <h5>Show Password</h5>
                        <Password value={this.state.value3} onChange={(e) => this.setState({ value3: e.target.value })} toggleMask />

                        <h5>Templating</h5>
                        <Password value={this.state.value4} onChange={(e) => this.setState({ value4: e.target.value })} header={header} footer={footer} />
                    </div>
                </div>

                <PasswordDoc />
            </div>
        );
    }
}

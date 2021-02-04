import React, { Component } from 'react';
import { Password } from '../../components/password/Password';
import { Divider } from '../../components/divider/Divider';
import { AppInlineHeader } from '../../AppInlineHeader';
import { PasswordDoc } from './PasswordDoc';
import './PasswordDemo.scss';

export class PasswordDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            value2: null,
            value3: null,
            value4: null
        };
    }

    render() {
        const header = <h6>Pick a password</h6>;
        const footer = (
            <>
                <Divider />
                <p className="p-mt-2">Suggestions</p>
                <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="password" showInputStyle>
                        <h1>Password</h1>
                        <p>Password displays strength indicator for password fields.</p>
                    </AppInlineHeader>
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

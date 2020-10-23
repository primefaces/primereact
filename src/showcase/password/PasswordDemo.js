import React, {Component} from 'react';
import { Password } from '../../components/password/Password';
import { AppInlineHeader } from '../../AppInlineHeader';
import { PasswordDoc } from './PasswordDoc';

export class PasswordDemo extends Component {

    render() {
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
                        <Password />
                    </div>
                </div>

                <PasswordDoc />
            </div>
        );
    }
}

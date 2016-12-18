import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';

export class InputTextDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <InputText />

                    <h3>Disabled</h3>
                    <InputText disabled="disabled"/>

                    <button type="button" label="Toggle"></button>
                </div>
            </div>
        )
    }
}
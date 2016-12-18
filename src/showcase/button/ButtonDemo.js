import React, {Component} from 'react';
import {Button} from '../../components/button/Button';

export class ButtonDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming..</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" />
                    <Button label="Click" icon="fa-check"/>
                    <Button label="Click" icon="fa-check" iconPos="right"/>
                    <Button icon="fa-check"/>
                    <Button label="Click" disabled="disabled"/>
                </div>
            </div>
        )
    }
}
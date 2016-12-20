import React, {Component} from 'react';
import {ToggleButton} from '../../components/togglebutton/ToggleButton';

export class ToggleButtonDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ToggleButton</h1>
                        <p>ToggleButton is used to select a boolean value using a button.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <ToggleButton style={{width:'150px'}}/>

                    <h3>Basic</h3>
                    <ToggleButton style={{width:'150px'}} onLabel="I confirm" offLabel="I reject" onIcon="fa-check-square" offIcon="fa-square"/>
                </div>
            </div>
        );
    }
}
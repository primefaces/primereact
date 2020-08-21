import React, { Component } from 'react';
import { RippleDoc } from './RippleDoc';
import { Ripple } from '../../components/ripple/Ripple';
import './RippleDemo.scss';

export class RippleDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Ripple</h1>
                        <p>Ripple component adds ripple effect to the host element.</p>
                    </div>
                </div>

                <div className="content-section implementation ripple-demo">
                    <div className="card-container p-d-flex">
                        <div className="card primary-box p-ripple">
                            Default
                            <Ripple />
                        </div>
                        <div className="card styled-box-green p-ripple">
                            Green
                            <Ripple />
                        </div>
                        <div className="card styled-box-orange p-ripple">
                            Orange
                            <Ripple />
                        </div>
                        <div className="card styled-box-purple p-ripple">
                            Purple
                            <Ripple />
                        </div>
                    </div>
                </div>

                <RippleDoc />
            </div>
        );
    }
}

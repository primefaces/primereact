import React, { Component } from 'react';
import './TextDemo.scss';
import { TextDoc } from './TextDoc';

export class TextDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Text</h1>
                        <p>Manage the alignment and the styling of a text with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> text utilities.</p>
                    </div>
                </div>

                <div className="content-section implementation text-demo">
                    <div className="card">
                        <h5>Alignment</h5>
                        <div className="p-mb-3 p-text-left">Left</div>
                        <div className="p-mb-3 p-text-center">Center</div>
                        <div className="p-text-right">Right</div>

                        <h5>Wrap</h5>
                        <div className="p-mb-3 demo-container" style={{width: '10rem'}}>Long text wraps and does not overlow.</div>
                        <div className="p-mb-3 demo-container p-text-nowrap" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>
                        <div className="p-mb-3 demo-container p-text-nowrap p-text-truncate" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>

                        <h5>Transform</h5>
                        <div className="p-mb-3 p-text-lowercase">LOWERCASE</div>
                        <div className="p-mb-3 p-text-uppercase">uppercase</div>
                        <div className="p-text-capitalize">capitalize</div>

                        <h5>Style</h5>
                        <div className="p-mb-3 p-text-bold">Bold</div>
                        <div className="p-mb-3 p-text-normal">Normal</div>
                        <div className="p-mb-3 p-text-light">Light</div>
                        <div className="p-mb-3 p-text-italic">Italic</div>
                    </div>
                </div>

                <TextDoc />
            </div>
        );
    }
}

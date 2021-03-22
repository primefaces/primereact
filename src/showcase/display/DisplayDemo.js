import React, { Component } from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { DisplayDoc } from './DisplayDoc';

export class DisplayDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Display</h1>
                        <p>Efficiently configure the display of the component with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> display utilities.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Inline</h5>
                        <InputText className="p-mr-2 p-d-inline" />
                        <InputText className="p-d-inline" />

                        <h5>Block</h5>
                        <InputText className="p-mb-2 p-d-block" />
                        <InputText className="p-d-block" />

                        <h5>Visible on a Small Screen</h5>
                        <p>Resize to view.</p>
                        <Button type="button" icon="pi pi-bars" className="p-button-rounded p-d-md-none" />

                        <h5>Hidden on a Small Screen</h5>
                        <p>Resize to hide.</p>
                        <Button type="button" icon="pi pi-search" className="p-button-rounded p-button-success p-d-none p-d-md-inline-flex" />

                        <h5>Visible to Print, Invisible for Screen</h5>
                        <p className="p-d-none p-print-block">Only visible when printed.</p>

                        <h5>Visible to Screen, Invisible for Print</h5>
                        <p className="p-d-block p-print-none">Not available for printing.</p>
                    </div>
                </div>

                <DisplayDoc />
            </div>
        );
    }
}

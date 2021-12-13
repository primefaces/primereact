import React, { Component } from 'react';
import { InputText } from '../../components/lib/inputtext/InputText';
import { InputTextDoc } from '../../components/doc/inputtext';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class InputTextDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React InputText Component</title>
                    <meta name="description" content="InputText is an extension to standard input element with theming and keyfiltering." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                    </div>

                    <DocActions github="inputtext/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <InputText value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} />
                        <span className="p-ml-2">{this.state.value1}</span>

                        <h5>Floating Label</h5>
                        <span className="p-float-label">
                            <InputText id="username" value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />
                            <label htmlFor="username">Username</label>
                        </span>

                        <h5>Left Icon</h5>
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText value={this.state.value3} onChange={(e) => this.setState({ value3: e.target.value })} placeholder="Search" />
                        </span>

                        <h5>Right Icon</h5>
                        <span className="p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText value={this.state.value4} onChange={(e) => this.setState({ value4: e.target.value })} />
                        </span>

                        <h5>Help Text</h5>
                        <div className="p-field">
                            <label htmlFor="username1" className="p-d-block">Username</label>
                            <InputText id="username1" aria-describedby="username1-help" className="p-d-block" />
                            <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
                        </div>

                        <h5>Invalid</h5>
                        <div className="p-field">
                            <label htmlFor="username2" className="p-d-block">Username</label>
                            <InputText id="username2" aria-describedby="username2-help" className="p-invalid p-d-block" />
                            <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
                        </div>

                        <h5>Disabled</h5>
                        <InputText value={this.state.value5} disabled />

                        <h5>Sizes</h5>
                        <div className="sizes">
                            <InputText type="text" className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
                            <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
                            <InputText type="text" className="p-inputtext-lg p-d-block" placeholder="Large" />
                        </div>
                    </div>
                </div>

                <InputTextDoc />
            </div>
        )
    }
}

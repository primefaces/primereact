import React, { Component } from 'react';
import { InputText } from '../../components/lib/inputtext/InputText';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import { Button } from '../../components/lib/button/Button';
import { Checkbox } from '../../components/lib/checkbox/Checkbox';
import { RadioButton } from '../../components/lib/radiobutton/RadioButton';
import { InputGroupDoc } from '../../components/doc/inputgroup';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class InputGroupDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: ''
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React InputGroup Component</title>
                    <meta name="description" content="Text, icon, buttons and other content can be grouped next to an input." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputGroup</h1>
                        <p>Text, icon, buttons and other content can be grouped next to an input.</p>
                    </div>
                    <DocActions github="inputgroup/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Addons</h5>
                        <div className="grid p-fluid">
                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Username" />
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">$</span>
                                    <InputNumber placeholder="Price" />
                                    <span className="p-inputgroup-addon">.00</span>
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">www</span>
                                    <InputText placeholder="Website" />
                                </div>
                            </div>
                        </div>

                        <h5>Multiple Addons</h5>
                        <div className="grid">
                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-clock"></i>
                                    </span>
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-star-fill"></i>
                                    </span>
                                    <InputNumber placeholder="Price" />
                                    <span className="p-inputgroup-addon">$</span>
                                    <span className="p-inputgroup-addon">.00</span>
                                </div>
                            </div>
                        </div>

                        <h5>Button Addons</h5>
                        <div className="grid p-fluid">
                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <Button label="Search" />
                                    <InputText placeholder="Keyword" />
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Keyword" />
                                    <Button icon="pi pi-search" className="p-button-warning" />
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <Button icon="pi pi-check" className="p-button-success" />
                                    <InputText placeholder="Vote" />
                                    <Button icon="pi pi-times" className="p-button-danger" />
                                </div>
                            </div>
                        </div>

                        <h5>Checkbox and RadioButton</h5>
                        <div className="grid p-fluid">
                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <Checkbox checked={this.state.checked1} onChange={(e) => this.setState((prevState) => ({ checked1: !prevState.checked1 }))} />
                                    </span>
                                    <InputText placeholder="Username" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Price" />
                                    <span className="p-inputgroup-addon">
                                        <RadioButton name="rb1" value="rb1" checked={this.state.radioValue1 === 'rb1'} onChange={(e) => this.setState({ radioValue1: e.value })} />
                                    </span>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <Checkbox checked={this.state.checked2} onChange={(e) => this.setState((prevState) => ({ checked2: !prevState.checked2 }))} />
                                    </span>
                                    <InputText placeholder="Website" />
                                    <span className="p-inputgroup-addon">
                                        <RadioButton name="rb2" value="rb2" checked={this.state.radioValue2 === 'rb2'} onChange={(e) => this.setState({ radioValue2: e.value })} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <InputGroupDoc />
            </div>
        );
    }
}

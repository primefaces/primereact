import React, { Component } from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { RadioButton } from '../../components/radiobutton/RadioButton';
import { AppInlineHeader } from '../../AppInlineHeader';
import { InputGroupDoc } from './InputGroupDoc';

export class InputGroupDemo extends Component {

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="inputGroup" showInputStyle>
                        <h1>InputGroup</h1>
                        <p>Text, icon, buttons and other content can be grouped next to an input.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Addons</h5>
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Username" />
                                </div>
                            </div>

                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">$</span>
                                    <InputText placeholder="Price" />
                                    <span className="p-inputgroup-addon">.00</span>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">www</span>
                                    <InputText placeholder="Website" />
                                </div>
                            </div>
                        </div>

                        <h5>Multiple Addons</h5>
                        <div className="p-grid">
                            <div className="p-col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-clock"></i>
                                    </span>
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-star"></i>
                                    </span>
                                    <InputText placeholder="Price" />
                                    <span className="p-inputgroup-addon">$</span>
                                    <span className="p-inputgroup-addon">.00</span>
                                </div>
                            </div>
                        </div>

                        <h5>Button Addons</h5>
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <Button label="Search"/>
                                    <InputText placeholder="Keyword"/>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Keyword"/>
                                    <Button icon="pi pi-search" className="p-button-warning"/>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-4">
                                <div className="p-inputgroup">
                                    <Button icon="pi pi-check" className="p-button-success"/>
                                    <InputText placeholder="Vote"/>
                                    <Button icon="pi pi-times" className="p-button-danger"/>
                                </div>
                            </div>
                        </div>

                        <h5>Checkbox and RadioButton</h5>
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <Checkbox checked={this.state.checked1} onChange={(e) => this.setState((prevState) => ({ checked1: !prevState.checked1 }))} />
                                    </span>
                                    <InputText placeholder="Username"/>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-12">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Price"/>
                                    <span className="p-inputgroup-addon">
                                        <RadioButton name="rb1" value="rb1" checked={this.state.radioValue1 === 'rb1'} onChange={(e) => this.setState({ radioValue1: e.value })} />
                                    </span>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <Checkbox checked={this.state.checked2} onChange={(e) => this.setState((prevState) => ({ checked2: !prevState.checked2 }))} />
                                    </span>
                                    <InputText placeholder="Website"/>
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

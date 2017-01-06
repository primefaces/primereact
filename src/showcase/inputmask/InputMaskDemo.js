import React, { Component } from 'react';
import { InputMask } from '../../components/inputmask/InputMask';

export class InputMaskDemo extends Component {

    constructor() {
        super();
        this.state = {};

        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeSNN = this.onChangeSNN.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePhoneExt = this.onChangePhoneExt.bind(this);
        this.onChangeSerialNumber = this.onChangeSerialNumber.bind(this);
    }

    onChangeBasic(e) {
        this.setState({ val1: e.value });
    }

    onChangeSNN(e) {
        this.setState({ val2: e.value });
    }

    onChangeDate(e) {
        this.setState({ val3: e.value });
    }

    onChangePhone(e) {
        this.setState({ val4: e.value });
    }

    onChangePhoneExt(e) {
        this.setState({ val5: e.value });
    }

    onChangeSerialNumber(e) {
        this.setState({ val6: e.value });
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputMask</h1>
                        <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>Basic: {this.state.val1}</span>
                        </div>

                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>SSN: {this.state.val2}</span>
                            <InputMask mask="999-99-9999" value={this.state.val2} placeholder="999-99-9999" onChange={this.onChangeSNN}></InputMask>
                        </div>

                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>Date: {this.state.val3}</span>
                            <InputMask mask="99/99/9999" value={this.state.val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={this.onChangeDate}></InputMask>
                        </div>

                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>Phone: {this.state.val4}</span>
                            <InputMask mask="(999) 999-9999" value={this.state.val4} placeholder="(999) 999-9999" onChange={this.onChangePhone}></InputMask>
                        </div>

                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>Phone Ext: {this.state.val5}</span>
                            <InputMask mask="(999) 999-9999? x99999" value={this.state.val5} placeholder="(999) 999-9999? x99999" onChange={this.onChangePhoneExt}></InputMask>
                        </div>

                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>Serial Number: {this.state.val6}</span>
                            <InputMask mask="a*-999-a999" value={this.state.val6} placeholder="a*-999-a999" onChange={this.onChangeSerialNumber}></InputMask>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

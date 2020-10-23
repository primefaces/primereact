import React, { Component } from 'react';
import { InputMask } from '../../components/inputmask/InputMask';
import { AppInlineHeader } from '../../AppInlineHeader';
import { InputMaskDoc } from './InputMaskDoc';

export class InputMaskDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val1: null,
            val2: null,
            val3: null,
            val4: null,
            val5: null,
            val6: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="inputMask" showInputStyle>
                        <h1>InputMask</h1>
                        <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="basic">Basic</label>
                                <InputMask id="basic" mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={(e) => this.setState({val1: e.value})}></InputMask>
                            </div>

                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="ssn">SSN</label>
                                <InputMask id="ssn" mask="999-99-9999" value={this.state.val2} placeholder="999-99-9999" onChange={(e) => this.setState({val2: e.value})}></InputMask>
                            </div>

                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="date">Date</label>
                                <InputMask id="date" mask="99/99/9999" value={this.state.val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={(e) => this.setState({val3: e.value})}></InputMask>
                            </div>

                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="phone">Phone</label>
                                <InputMask id="phone" mask="(999) 999-9999" value={this.state.val4} placeholder="(999) 999-9999" onChange={(e) => this.setState({val4: e.value})}></InputMask>
                            </div>

                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="phoneext">Phone Ext</label>
                                <InputMask id="phoneext" mask="(999) 999-9999? x99999" value={this.state.val5} placeholder="(999) 999-9999? x99999" onChange={(e) => this.setState({val5: e.value})}></InputMask>
                            </div>

                            <div className="p-field p-col-12 p-md-4">
                                <label htmlFor="serial">Serial</label>
                                <InputMask id="serial" mask="a*-999-a999" value={this.state.val6} placeholder="a*-999-a999" onChange={(e) => this.setState({val6: e.value})}></InputMask>
                            </div>
                        </div>
                    </div>
                </div>

                <InputMaskDoc />
            </div>
        );
    }
}

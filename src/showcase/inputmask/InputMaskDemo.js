import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {InputMask} from '../../components/inputmask/InputMask';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputMask</h1>
                        <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-6 ui-lg-4">
                            <span>Basic: {this.state.val1}</span>
                            <InputMask mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={this.onChangeBasic}></InputMask>
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
                <InputMaskDoc></InputMaskDoc>
            </div>
        );
    }
}

class InputMaskDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {InputMask} from 'primereact/components/inputmask/InputMask';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>InputMask requires a value and an onChange event.

</p>

<CodeHighlight className="html">
{`
<InputMask mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={this.onChangeBasic}></InputMask>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
constructor() {
        super();
        this.state = {};

        this.onChangeBasic = this.onChangeBasic.bind(this);
    }

    onChangeBasic(e) {
        this.setState({ val1: e.value });
    }

`}
</CodeHighlight>

            <h3>Mask</h3>
            <p>Mask format can be a combination of the the following built-in definitions.</p>
            <ul>
                <li>
                    a - Alpha character (A-Z,a-z)
                </li>
                <li>
                    9 - Numeric character (0-9)
                </li>
                <li>
                    * - Alpha numberic character (A-Z,a-z,0-9)
                </li>
            </ul>
<CodeHighlight className="html">
{`
<InputMask mask="a*-999-a999" value={this.state.val6} placeholder="a*-999-a999" onChange={this.onChangeSerialNumber}></InputMask>

`}
</CodeHighlight>

            <h3>SlotChar</h3>
            <p>Underscore is the default placeholder for a mask and this can be customized using slotChart option.</p>
<CodeHighlight className="html">
{`
<InputMask mask="99/99/9999" value={this.state.val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={this.onChangeDate}></InputMask>

`}
</CodeHighlight>
            <h3>Optional Values</h3>
            <p>
               If the input does not complete the mask definition, it is cleared by default.
               Use autoClear property to control this behavior. In addition, certain part of
               a mask can be made optional by using ? symbol where anything after the question
               mark becomes optional.
            </p>
            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                         </tr>
                         <tr>
                            <td>value</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                         </tr>
                         <tr>
                            <td>type</td>
                            <td>string</td>
                            <td>text</td>
                            <td>HTML5 input type</td>
                        </tr>
                        <tr>
                            <td>mask</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Mask pattern.</td>
                        </tr>
                        <tr>
                            <td>slotChar</td>
                            <td>string</td>
                            <td>-</td>
                            <td>Placeholder character in mask, default is underscore.</td>
                        </tr>
                        <tr>
                            <td>autoClear</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Clears the incomplete value on blur.</td>
                        </tr>
                         <tr>
                           <td>unmask</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>Defines if model sets the raw unmasked value to bound value or the formatted mask value.</td>
                         </tr>
                         <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Advisory information to display on input.</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Size of the input field.</td>
                        </tr>
                        <tr>
                            <td>maxlength</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of character allows in the input field.</td>
                        </tr>
                        <tr>
                            <td>tabindex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Specifies tab order of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element value cannot be altered.</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that an input field is read-only.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input field.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onComplete</td>
                            <td>-</td>
                            <td>Callback to invoke on when user completes the mask pattern.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Styling is same as <Link to="/inputtext"> inputtext component</Link>, for theming classes visit <Link to="/theming"> theming page.</Link></p>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputmask" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="javascript">
{`
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
                            <InputMask mask="99-999999" value={this.state.val1} placeholder="99-999999" onChange={this.onChangeBasic}></InputMask>
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
                <InputMaskDoc></InputMaskDoc>
            </div>
        );
    }
}

`}
</CodeHighlight>
        </TabPanel>
    </TabView>
</div>
        );
    }
}
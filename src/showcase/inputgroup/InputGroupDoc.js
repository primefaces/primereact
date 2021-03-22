import React, { Component } from 'react';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class InputGroupDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

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
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hook Source',
                content: `
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

const InputGroupDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue1, setRadioValue1] = useState('');
    const [radioValue2, setRadioValue2] = useState('');

    return (
        <div>
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
                                <Checkbox checked={checked1} onChange={(e) => setChecked1(currentChecked1 => !currentChecked1))} />
                            </span>
                            <InputText placeholder="Username"/>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-12">
                        <div className="p-inputgroup">
                            <InputText placeholder="Price"/>
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb1" value="rb1" checked={radioValue1 === 'rb1'} onChange={(e) => setRadioValue1(e.value)} />
                            </span>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked2} onChange={(e) => setChecked2(currentChecked2 => !currentChecked2))} />
                            </span>
                            <InputText placeholder="Website"/>
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb2" value="rb2" checked={radioValue2 === 'rb2'} onChange={(e) => setRadioValue2(e.value)} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

const InputGroupDemo = () => {
    const [checked1, setChecked1] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);
    const [radioValue1, setRadioValue1] = useState<string>('');
    const [radioValue2, setRadioValue2] = useState<string>('');

    return (
        <div>
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
                                <Checkbox checked={checked1} onChange={(e) => setChecked1(currentChecked1 => !currentChecked1))} />
                            </span>
                            <InputText placeholder="Username"/>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-12">
                        <div className="p-inputgroup">
                            <InputText placeholder="Price"/>
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb1" value="rb1" checked={radioValue1 === 'rb1'} onChange={(e) => setRadioValue1(e.value)} />
                            </span>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked2} onChange={(e) => setChecked2(currentChecked2 => !currentChecked2))} />
                            </span>
                            <InputText placeholder="Website"/>
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb2" value="rb2" checked={radioValue2 === 'rb2'} onChange={(e) => setRadioValue2(e.value)} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'InputGroupDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}


import React, { Component } from 'react';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {InputText} from "../../components/inputtext/InputText";
import {Button} from "../../components/button/Button";
import {Checkbox} from "../../components/checkbox/Checkbox";
import {RadioButton} from "../../components/radiobutton/RadioButton";

export class InputGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            price: null,
            website1: null,
            website2: null
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputGroup</h1>
                        <p>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside
                            .p-inputgroup element. Multiple addons can be used within the same group as well.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("inputGroup")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Addons</h3>
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
                                <span className="p-inputgroup-addon">W</span>
                                <InputText placeholder="Website" />
                            </div>
                        </div>
                    </div>


                    <h3>Multiple Addons</h3>
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

                    <h3>Button Addons</h3>
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

                    <h3>Checkbox and RadioButton</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <Checkbox checked={this.state.username} onChange={(e) => this.setState({username: !this.state.username})} />
                                </span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <InputText placeholder="Price"/>
                                <span className="p-inputgroup-addon">
                                    <RadioButton checked={this.state.price} value="price" onChange={(e) => this.setState({price: e.value})} />
                                </span>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <Checkbox checked={this.state.website1} onChange={(e) => this.setState({website1: !this.state.website1})} />
                                </span>
                                <InputText placeholder="Website"/>
                                <span className="p-inputgroup-addon">
                                    <RadioButton checked={this.state.website2} value="price" onChange={(e) => this.setState({website2: e.value})} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <InputGroupDoc/>
            </div>
        );
    }
}

class InputGroupDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputgroup" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Checkbox} from "primereact/checkbox";
import {RadioButton} from "primereact/radiobutton";

export class InputGroupDemo extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            price: null,
            website1: null,
            website2: null
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputGroup</h1>
                        <p>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside
                            .p-inputgroup element. Multiple addons can be used within the same group as well.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Addons</h3>
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
                                <span className="p-inputgroup-addon">W</span>
                                <InputText placeholder="Website" />
                            </div>
                        </div>
                    </div>


                    <h3>Multiple Addons</h3>
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

                    <h3>Button Addons</h3>
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

                    <h3>Checkbox and RadioButton</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <Checkbox checked={this.state.username} onChange={(e) => this.setState({username: !this.state.username})} />
                                </span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <InputText placeholder="Price"/>
                                <span className="p-inputgroup-addon">
                                    <RadioButton checked={this.state.price} value="price" onChange={(e) => this.setState({price: e.value})} />
                                </span>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <Checkbox checked={this.state.website1} onChange={(e) => this.setState({website1: !this.state.website1})} />
                                </span>
                                <InputText placeholder="Website"/>
                                <span className="p-inputgroup-addon">
                                    <RadioButton checked={this.state.website2} value="price" onChange={(e) => this.setState({website2: e.value})} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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

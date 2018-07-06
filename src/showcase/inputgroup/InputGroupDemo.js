import React, { Component } from 'react';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
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
                            .ui-inputgroup element. Multiple addons can be used within the same group as well.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Addons</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">$</span>
                                <InputText placeholder="Price" />
                                <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">W</span>
                                <InputText placeholder="Website" />
                            </div>
                        </div>
                    </div>


                    <h3>Multiple Addons</h3>
                    <div className="ui-g">
                        <div className="ui-g-12">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <i className="fa fa-credit-card"></i>
                                </span>
                                <span className="ui-inputgroup-addon">
                                    <i className="fa fa-cc-visa"></i>
                                </span>
                                <InputText placeholder="Price" />
                                <span className="ui-inputgroup-addon">$</span>
                                <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>
                    </div>

                    <h3>Button Addons</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <Button label="Search"/>
                                <InputText placeholder="Keyword"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Keyword"/>
                                <Button icon="fa fa-search" cornerStyleClass="ui-button-secondary"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <Button icon="pi pi-check" cornerStyleClass="ui-button-success"/>
                                <InputText placeholder="Vote"/>
                                <Button icon="pi pi-times" cornerStyleClass="ui-button-danger"/>
                            </div>
                        </div>
                    </div>

                    <h3>Checkbox and RadioButton</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <Checkbox checked={this.state.username} onChange={(e) => this.setState({username: e.value})} />
                                </span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Price"/>
                                <span className="ui-inputgroup-addon">
                                    <RadioButton onChange={(e) => this.setState({price: e.value})} checked={this.state.price}/>    
                                </span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <Checkbox value={this.state.website1} onChange={(e) => this.setState({website1: e.value})}/>
                                </span>
                                <InputText placeholder="Website"/>
                                <span className="ui-inputgroup-addon">
                                    <RadioButton value={this.state.website2} onChange={(e) => this.setState({website2: e.value})}/>
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
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputgroup" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
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
                            .ui-inputgroup element. Multiple addons can be used within the same group as well.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Addons</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">$</span>
                                <InputText placeholder="Price" />
                                <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">W</span>
                                <InputText placeholder="Website" />
                            </div>
                        </div>
                    </div>


                    <h3>Multiple Addons</h3>
                    <div className="ui-g">
                        <div className="ui-g-12">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <i className="fa fa-credit-card"></i>
                                </span>
                                <span className="ui-inputgroup-addon">
                                    <i className="fa fa-cc-visa"></i>
                                </span>
                                <InputText placeholder="Price" />
                                <span className="ui-inputgroup-addon">$</span>
                                <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>
                    </div>

                    <h3>Button Addons</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <Button label="Search"/>
                                <InputText placeholder="Keyword"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Keyword"/>
                                <Button icon="fa fa-search" cornerStyleClass="ui-button-secondary"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <Button icon="pi pi-check" cornerStyleClass="ui-button-success"/>
                                <InputText placeholder="Vote"/>
                                <Button icon="pi pi-times" cornerStyleClass="ui-button-danger"/>
                            </div>
                        </div>
                    </div>

                    <h3>Checkbox and RadioButton</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <Checkbox checked={this.state.username} onChange={(e) => this.setState({username: e.value})} />
                                </span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Price"/>
                                <span className="ui-inputgroup-addon">
                                    <RadioButton onChange={(e) => this.setState({price: e.value})} checked={this.state.price}/>    
                                </span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">
                                    <Checkbox value={this.state.website1} onChange={(e) => this.setState({website1: e.value})}/>
                                </span>
                                <InputText placeholder="Website"/>
                                <span className="ui-inputgroup-addon">
                                    <RadioButton value={this.state.website2} onChange={(e) => this.setState({website2: e.value})}/>
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
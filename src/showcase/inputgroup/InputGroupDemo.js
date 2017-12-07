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
        this.state = {};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onWebsiteRadioChange = this.onWebsiteRadioChange.bind(this);
        this.onWebsiteCheckChange = this.onWebsiteCheckChange.bind(this);
    }

    onUsernameChange(event){
        this.setState({username:event.checked})
    }
    onPriceChange(event){
        this.setState({price:event.checked})
    }
    onWebsiteCheckChange(event){
        this.setState({website1:event.checked})
    }
    onWebsiteRadioChange(event){
        this.setState({website2:event.checked})
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
                                <span className="ui-inputgroup-addon"><i className="fa fa-user"></i></span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">$</span>
                                <InputText placeholder="Price"/>
                                    <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">W</span>
                                <InputText placeholder="Website"/>
                            </div>
                        </div>
                    </div>


                    <h3>Multiple Addons</h3>
                    <div className="ui-g">
                        <div className="ui-g-12">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><i className="fa fa-credit-card"></i></span>
                                <span className="ui-inputgroup-addon"><i className="fa fa-cc-visa"></i></span>
                                <InputText placeholder="Price"/>
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
                                <Button icon="fa-search" cornerStyleClass="ui-button-secondary"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <Button icon="fa-check" cornerStyleClass="ui-button-success"/>
                                <InputText placeholder="Vote"/>
                                <Button icon="fa-close" cornerStyleClass="ui-button-danger"/>
                            </div>
                        </div>
                    </div>

                    <h3>Checkbox and RadioButton</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><Checkbox onChange={this.onUsernameChange} checked={this.state.username}/></span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Price"/>
                                    <span className="ui-inputgroup-addon"><RadioButton onChange={this.onPriceChange} checked={this.state.price}/></span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><Checkbox onChange={this.onWebsiteCheckChange} checked={this.state.website1}/></span>
                                <InputText placeholder="Website"/>
                                    <span className="ui-inputgroup-addon"><RadioButton onChange={this.onWebsiteRadioChange} checked={this.state.website2}/></span>
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
                        <CodeHighlight className="javascript">
                            {`
export class InputGroupDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onWebsiteRadioChange = this.onWebsiteRadioChange.bind(this);
        this.onWebsiteCheckChange = this.onWebsiteCheckChange.bind(this);
    }

    onUsernameChange(event){
        this.setState({username:event.checked})
    }
    onPriceChange(event){
        this.setState({price:event.checked})
    }
    onWebsiteCheckChange(event){
        this.setState({website1:event.checked})
    }
    onWebsiteRadioChange(event){
        this.setState({website2:event.checked})
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
                                <span className="ui-inputgroup-addon"><i className="fa fa-user"></i></span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">$</span>
                                <InputText placeholder="Price"/>
                                    <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">W</span>
                                <InputText placeholder="Website"/>
                            </div>
                        </div>
                    </div>


                    <h3>Multiple Addons</h3>
                    <div className="ui-g">
                        <div className="ui-g-12">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><i className="fa fa-credit-card"></i></span>
                                <span className="ui-inputgroup-addon"><i className="fa fa-cc-visa"></i></span>
                                <InputText placeholder="Price"/>
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
                                <Button icon="fa-search" cornerStyleClass="ui-button-secondary"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <Button icon="fa-check" cornerStyleClass="ui-button-success"/>
                                <InputText placeholder="Vote"/>
                                <Button icon="fa-close" cornerStyleClass="ui-button-danger"/>
                            </div>
                        </div>
                    </div>

                    <h3>Checkbox and RadioButton</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><Checkbox onChange={this.onUsernameChange} checked={this.state.username}/></span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Price"/>
                                    <span className="ui-inputgroup-addon"><RadioButton onChange={this.onPriceChange} checked={this.state.price}/></span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><Checkbox onChange={this.onWebsiteCheckChange} checked={this.state.website1}/></span>
                                <InputText placeholder="Website"/>
                                    <span className="ui-inputgroup-addon"><RadioButton onChange={this.onWebsiteRadioChange} checked={this.state.website2}/></span>
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
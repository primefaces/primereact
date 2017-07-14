import React, {Component} from 'react';
import {InputSwitch} from '../../components/inputswitch/InputSwitch';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class InputSwitchDemo extends Component {

    constructor() {
        super();
        this.state = {checked2:true};
        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeCustom = this.onChangeCustom.bind(this);
    }

    onChangeBasic(e) {
        this.setState({checked1:e.value});
    }

    onChangeCustom(e) {
        this.setState({checked2:e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputSwitch checked={this.state.checked1} onChange={this.onChangeBasic}/>
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Labels</h3>
                    <InputSwitch onLabel="Yes" offLabel="No" checked={this.state.checked2} onChange={this.onChangeCustom}/>
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>

                <InputSwitchDoc></InputSwitchDoc>
            </div>
        );
    }
}

class InputSwitchDoc extends Component {

    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {InputSwitch} from 'primereact/components/inputswitch/InputSwitch';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>InputSwitch is used as a controlled input with checked and onChange properties.</p>
                    
<CodeHighlight className="language-markup">
{`
<InputSwitch checked={this.state.checked1} onChange={this.onChangeBasic}/>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {checked2:true};
    this.onChangeBasic = this.onChangeBasic.bind(this);
}

onChangeBasic(e) {
    this.setState({checked1:e.value});
}

`}
</CodeHighlight>

            <h3>Customization</h3>
            <p>Labels can be customized using onLabel and offLabel properties.</p>
<CodeHighlight className="language-markup">
{`
<InputSwitch onLabel="Yes" offLabel="No" checked={this.state.checked2} onChange={this.onChangeCustom}/>

`}
</CodeHighlight>

            <h3>Attributes</h3>
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
                            <td>onLabel</td>
                            <td>string</td>
                            <td>On</td>
                            <td>Label for the on state.</td>
                        </tr>
                        <tr>
                            <td>offLabel</td>
                            <td>string</td>
                            <td>off</td>
                            <td>Label for the off state.</td>
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
                           <td>tabindex</td>
                           <td>number</td>
                           <td>null</td>
                           <td>Index of the element in tabbing order.</td>
                         </tr>
                         <tr>
                             <td>checked</td>
                             <td>boolean</td>
                             <td>false</td>
                             <td>Specifies whether a inputswitch should be checked or not.</td>
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
                            <td>onChange</td>
                            <td>event.originalEvent: browser event <br />
                                event.checked: checked state as a boolean.</td>
                            <td>Callback to invoke on state change.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputswitch" className="btn-viewsource" target="_blank">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="language-javascript">
{`
export class InputSwitchDemo extends Component {

    constructor() {
        super();
        this.state = {checked2:true};
        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeCustom = this.onChangeCustom.bind(this);
    }

    onChangeBasic(e) {
        this.setState({checked1:e.value});
    }

    onChangeCustom(e) {
        this.setState({checked2:e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputSwitch checked={this.state.checked1} onChange={this.onChangeBasic}/>
                    <p>Selected Value: {this.state.checked1 ? 'true' : 'false'}</p>

                    <h3>Labels</h3>
                    <InputSwitch onLabel="Yes" offLabel="No" checked={this.state.checked2} onChange={this.onChangeCustom}/>
                    <p>Selected Value: {this.state.checked2 ? 'true' : 'false'}</p>
                </div>

                <InputSwitchDoc></InputSwitchDoc>
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
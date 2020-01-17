import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputSwitch} from '../../components/inputswitch/InputSwitch';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class InputSwitchDemo extends Component {

    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: true
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("inputSwitch")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputSwitch checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} />

                    <h3>Default Value</h3>
                    <InputSwitch checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} />
                </div>

                <InputSwitchDoc></InputSwitchDoc>
            </div>
        );
    }
}

class InputSwitchDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {InputSwitch} from 'primereact/inputswitch';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>InputSwitch is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>

<CodeHighlight className="language-jsx">
{`
<InputSwitch checked={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
</CodeHighlight>

            <h3>Customization</h3>
            <p>Labels can be customized with <i>onLabel</i> and <i>offLabel</i> properties.</p>
<CodeHighlight className="language-jsx">
{`
<InputSwitch onLabel="Yes" offLabel="No" checked={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
</CodeHighlight>

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
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the input element.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
                        </tr>
                        <tr>
                             <td>checked</td>
                             <td>boolean</td>
                             <td>false</td>
                             <td>Specifies whether a inputswitch should be checked or not.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>tooltip</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                        </tr>
                        <tr>
                            <td>ariaLabelledBy</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                            <td>event.originalEvent: Browser event <br />
                                event.value: Checked state as a boolean.</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the element receives focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event.</td>
                            <td>Callback to invoke when the element loses focus.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-inputswitch</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-inputswitch-checked</td>
                            <td>Container element in active state.</td>
                        </tr>
                        <tr>
                            <td>p-inputswitch-slider</td>
                            <td>Slider element behind the handle.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputswitch" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {InputSwitch} from 'primereact/inputswitch';

export class InputSwitchDemo extends Component {

    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: true
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputSwitch</h1>
                        <p>InputSwitch is used to select a boolean value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <InputSwitch checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} />

                    <h3>Default Value</h3>
                    <InputSwitch checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})}/>
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

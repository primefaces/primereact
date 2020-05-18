import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputSwitch} from '../../components/inputswitch/InputSwitch';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
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
                <h3>Basic</h3>
                <InputSwitch checked={this.state.checked1} onChange={(e) => this.setState({checked1: e.value})} />

                <h3>Default Value</h3>
                <InputSwitch checked={this.state.checked2} onChange={(e) => this.setState({checked2: e.value})} />
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {InputSwitch} from 'primereact/inputswitch';

const InputSwitchDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
        <div>
            <h3>Basic</h3>
            <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />

            <h3>Default Value</h3>
            <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {InputSwitch} from 'primereact/inputswitch';

const InputSwitchDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
        <div>
            <h3>Basic</h3>
            <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />

            <h3>Default Value</h3>
            <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputswitch" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="InputSwitchDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
            <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
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

                {
                    this.sources && Object.entries(this.sources).map(([key, value], index) => {
                        const header = key === 'app' ? 'Source' : `${key} Source`;
                        return (
                            <TabPanel key={`source_${index}`} header={header}>
                                {sourceButtons}

                                <CodeHighlight className="language-javascript">
                                    {value.content}
                                </CodeHighlight>
                            </TabPanel>
                        );
                    })
                }
            </TabView>
        </div>
        );
    }
}

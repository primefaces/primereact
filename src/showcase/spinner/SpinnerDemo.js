import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from '../../components/spinner/Spinner';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class SpinnerDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            value3: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Spinner - Deprecated</h1>
                        <p>Spinner is deprecated in favor of <Link to="/inputnumber">InputNumber</Link>.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("spinner")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Spinner value={this.state.value1} size={30} onChange={(e) => this.setState({value1: e.value})} />

                    <h3>Min/Max</h3>
                    <Spinner value={this.state.value2} size={30} onChange={(e) => this.setState({value2: e.value})} min={0} max={100} />

                    <h3>Step</h3>
                    <Spinner value={this.state.value3} size={30} onChange={(e) => this.setState({value3: e.value})} step={0.25} />

                    <h3>Disabled</h3>
                    <Spinner value={20} size={30} disabled={true} />
                </div>

                <SpinnerDoc></SpinnerDoc>
            </div>
        );
    }
}

class SpinnerDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Spinner} from 'primereact/spinner';

export class SpinnerDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: null,
            value2: null,
            value3: null
        };
    }

    render() {
        return (
            <div>
                <h3>Basic</h3>
                <Spinner value={this.state.value1} size={30} onChange={(e) => this.setState({value1: e.value})} />

                <h3>Min/Max</h3>
                <Spinner value={this.state.value2} size={30} onChange={(e) => this.setState({value2: e.value})} min={0} max={100} />

                <h3>Step</h3>
                <Spinner value={this.state.value3} size={30} onChange={(e) => this.setState({value3: e.value})} step={0.25} />

                <h3>Disabled</h3>
                <Spinner value={20} size={30} disabled={true} />
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
import {Spinner} from 'primereact/spinner';

const SpinnerDemo = () => {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);

    return (
        <div>
            <h3>Basic</h3>
            <Spinner value={value1} size={30} onChange={(e) => setValue1(e.value)} />

            <h3>Min/Max</h3>
            <Spinner value={value2} size={30} onChange={(e) => setValue2(e.value)} min={0} max={100} />

            <h3>Step</h3>
            <Spinner value={value3} size={30} onChange={(e) => setValue3(e.value)} step={0.25} />

            <h3>Disabled</h3>
            <Spinner value={20} size={30} disabled={true} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Spinner} from 'primereact/spinner';

const SpinnerDemo = () => {
    const [value1, setValue1] = useState<number|undefined>(undefined);
    const [value2, setValue2] = useState<number|undefined>(undefined);
    const [value3, setValue3] = useState<number|undefined>(undefined);

    return (
        <div>
            <h3>Basic</h3>
            <Spinner value={value1} size={30} onChange={(e) => setValue1(e.value)} />

            <h3>Min/Max</h3>
            <Spinner value={value2} size={30} onChange={(e) => setValue2(e.value)} min={0} max={100} />

            <h3>Step</h3>
            <Spinner value={value3} size={30} onChange={(e) => setValue3(e.value)} step={0.25} />

            <h3>Disabled</h3>
            <Spinner value={20} size={30} disabled={true} />
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/spinner" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="SpinnerDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
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
import {Spinner} from 'primereact/spinner';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Spinner is used as a controlled input with <i>value</i> and <i>onChange</i> properties. Note that onChange is triggered on blur instead of on key input</p>

<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
</CodeHighlight>

            <h3>Min-Max</h3>
            <p>Boundaries are specified with <i>min</i> and <i>max</i> attributes.</p>
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} min={0} max={100} />

`}
</CodeHighlight>

            <h3>Step</h3>
            <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>
<CodeHighlight className="language-jsx">
{`
<Spinner value={this.state.value} onChange={(e) => this.setState({value: e.value})} step={0.25} />

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
                            <td>value</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Value of the component.</td>
                         </tr>
                         <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input element.</td>
                        </tr>
                         <tr>
                            <td>step</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Step factor to increment/decrement the value.</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Mininum boundary value.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum boundary value.</td>
                        </tr>
                        <tr>
                           <td>disabled</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When present, it specifies that the element should be disabled.</td>
                         </tr>
                        <tr>
                           <td>readonly</td>
                           <td>boolean</td>
                           <td>false</td>
                           <td>When present, it specifies that the element should be read-only.</td>
                         </tr>
                         <tr>
                            <td>maxlength</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of character allows in the input field.</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Size of the input field.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
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
                            <td>inputStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
                        </tr>
                        <tr>
                            <td>inputClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
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
                            <td>decimalSeparator</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Separator character for decimals, defaults to settings at user locale.</td>
                        </tr>
                        <tr>
                            <td>thousandSeparator</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Separator character for thousands, defaults to settings at user locale.</td>
                        </tr>
                        <tr>
                            <td>formatInput</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, formats the user input at blur event.</td>
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
                            <td>event.value: New value</td>
                            <td>Callback to invoke on value change.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Browser event</td>
                            <td>Callback to invoke when Spinner loses focus.</td>
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
                            <td>p-spinner</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-spinner-up</td>
                            <td>Up icon.</td>
                        </tr>
                        <tr>
                            <td>p-spinner-down</td>
                            <td>Down icon.</td>
                        </tr>
                        <tr>
                            <td>p-spinner-input</td>
                            <td>Input element</td>
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

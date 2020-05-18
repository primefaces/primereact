import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>KeyFilter</h1>
                        <p>KeyFilter feature restricts user input based on a regular expression.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("keyFilter")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Filtering</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="int" placeholder="Integers"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="num" placeholder="Numbers"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="money" placeholder="Money"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="hex" placeholder="Hex"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter={/[^\s]/} placeholder="Block space key"/>
                        </div>
                    </div>
                </div>

                <KeyFilterDoc />
            </div>
        )
    }
}

class KeyFilterDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <h3>Filtering</h3>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="int" placeholder="Integers"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="num" placeholder="Numbers"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="money" placeholder="Money"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="hex" placeholder="Hex"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                    </div>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React from 'react';
import {InputText} from 'primereact/inputtext';

const KeyFilterDemo = () => {

    return (
        <div>
            <h3>Filtering</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="int" placeholder="Integers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="num" placeholder="Numbers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="money" placeholder="Money"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="hex" placeholder="Hex"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                </div>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React from 'react';
import {InputText} from 'primereact/inputtext';

const KeyFilterDemo = () => {

    return (
        <div>
            <h3>Filtering</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="int" placeholder="Integers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="num" placeholder="Numbers"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="money" placeholder="Money"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="hex" placeholder="Hex"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                </div>
                <div className="p-col-12 p-md-4">
                    <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                </div>
            </div>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(){
        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/keyfilter" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="KeyFilterDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {InputText} from 'primereact/inputtext';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>KeyFilter property is integrated in input components such as InputText using the <i>keyfilter</i> property. The value of the filter
                            can either a built-in regular expression or a custom one. Following input only accepts integers.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<InputText keyfilter="int" />

`}
                        </CodeHighlight>

                        <h3>Built-in Filters</h3>
                        <p>Commonly used cases have their own built-in shortcuts.</p>
                        <ul>
                            <li>pint: Positive integers</li>
                            <li>int: Integers</li>
                            <li>pnum: Positive numbers</li>
                            <li>num: Numbers</li>
                            <li>hex: Hexadecimal</li>
                            <li>email: Email</li>
                            <li>alpha: Alphabetic</li>
                            <li>alphanum: Alphanumeric</li>
                        </ul>

                        <h3>Custom Filter</h3>
                        <p>A custom filter is enabled by binding a regular expression, an example that blocks special characters would be;</p>
                        <CodeHighlight className="language-jsx">
                            {`
<InputText keyfilter={/^[^#<>*!]+$/}/>

`}
                        </CodeHighlight>

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
        )
    }
}

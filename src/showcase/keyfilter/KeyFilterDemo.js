import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

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

    shouldComponentUpdate(){
        return false;
    }

    render() {
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

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/keyfilter" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>KeyFilter</h1>
                        <p>KeyFilter feature restricts user input based on a regular expression.</p>
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
                            <InputText keyfilter={/[^\\s]/} placeholder="Block space key"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}

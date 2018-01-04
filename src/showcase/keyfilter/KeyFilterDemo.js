import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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
                    <h3 className="first">Filtering</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter="int" placeholder="Integers"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter="num" placeholder="Numbers"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter="money" placeholder="Money"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter="hex" placeholder="Hex"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter="alpha" placeholder="Alphabetic"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter="alphanum" placeholder="Alphanumberic"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter={/^[^#<>*!]+$/} placeholder="Block # < > * !"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyFilter={/[^\s]/} placeholder="Block space key"/>
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
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="javascript">
                            {`
import {InputText} from 'primereact/components/inputtext/InputText';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>KeyFilter property is integrated in input components such as InputText using the keyFilter property whose value is either a built-in regular expression name or a custom one. Following input only accepts integers.</p>

                        <CodeHighlight className="html">
                            {`
<InputText keyFilter="int"/>

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
                        <p>A custom filter is provided by binding a regular expression, here is an example that blocks special characters</p>
                        <CodeHighlight className="html">
                            {`
<InputText keyFilter={/^[^#<>*!]+$/}/>

`}
                        </CodeHighlight>

                        <h3>Styling</h3>
                        <p>This directive does not apply any styling.</p>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/keyfilter" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>KeyFilter</h1>
                        <p>KeyFilter directive restricts user input based on a regular expression.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Filtering</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter="int" placeholder="Integers"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter="num" placeholder="Numbers"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter="money" placeholder="Money"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter="hex" placeholder="Hex"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText keyfilter={/^[^#<>*!]+$/} placeholder="Block # < > * !"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
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

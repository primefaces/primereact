import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {Message} from '../../components/message/Message';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import classNames from 'classnames';

export class KeyFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.onValidateInput = this.onValidateInput.bind(this);
        this.state = { validatePattern: true };
    }

    onValidateInput(e, validatePattern) {
        this.setState({ validatePattern: validatePattern });
    }

    render() {
        let validateInputClass = classNames({
            'ui-state-error': !this.state.validatePattern
        });

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
                            <InputText keyfilter={/[^\s]/} placeholder="Block space key"/>
                        </div>
                    </div>

                    <h3>Validation Mode</h3>
                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <label htmlFor="validateInput" style={{display: 'block', marginBottom: '4px'}}>Float Number</label>
                        <InputText id="validateInput" keyfilter={/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} placeholder="Float" className={validateInputClass}/>
                        {!this.state.validatePattern && <Message severity="error" text="Not a valid number"></Message>}
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
                        <CodeHighlight className="language-javascript">
                            {`
import {InputText} from 'primereact/inputtext';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>KeyFilter property is integrated in input components such as InputText using the keyfilter property whose value is either a built-in regular expression name or a custom one. Following input only accepts integers.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<InputText keyfilter="int"/>

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
                        <CodeHighlight className="language-jsx">
                            {`
<InputText keyfilter={/^[^#<>*!]+$/}/>

`}
                        </CodeHighlight>

                        <h3>Validate Mode</h3>
                        <p>Instead of blocking a single keypress, the alternative validation mode which is enabled with validateOnly property validates the whole input.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
   <label htmlFor="validateInput" style={{display: 'block', marginBottom: '4px'}}>Float Number</label>
   <InputText id="validateInput" keyfilter={/^[+-]?((\\.\\d+)|(\\d+(\\.\\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} placeholder="Float" className={validateInputClass}/>
   {!this.state.validatePattern && <Message severity="error" text="Not a valid number"></Message>}
</div>

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
                            <td>validateOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {Message} from '../../components/message/Message';
import classNames from 'classnames';

export class KeyFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.onValidateInput = this.onValidateInput.bind(this);
        this.state = { validatePattern: true };
    }

    onValidateInput(e, validatePattern) {
        this.setState({ validatePattern: validatePattern });
    }

    render() {
        let validateInputClass = classNames({
            'ui-state-error': !this.state.validatePattern
        });

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

                    <h3>Validation Mode</h3>
                    <div style={{ marginTop: '30px', paddingLeft: '.5em' }}>
                        <label htmlFor="validateInput" style={{display: 'block', marginBottom: '4px'}}>Float Number</label>
                        <InputText id="validateInput" keyfilter={/^[+-]?((\\.\\d+)|(\\d+(\\.\\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} placeholder="Float" className={validateInputClass}/>
                        {!this.state.validatePattern && <Message severity="error" text="Not a valid number"></Message>}
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

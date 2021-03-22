import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';

export class KeyFilterDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import { InputText } from 'primereact/inputtext';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <div className="p-grid p-fluid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="integer">Integers</label>
                            <InputText id="integer" keyfilter="int" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="numbers">Numbers</label>
                            <InputText id="numbers" keyfilter="num" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="money">Hex</label>
                            <InputText id="money" keyfilter="money" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="integer">Integers</label>
                            <InputText id="hex" keyfilter="hex" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="alpha">Alphabetic</label>
                            <InputText id="alpha" keyfilter="alpha"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="alphanum">Alphanumberic</label>
                            <InputText id="alphanum" keyfilter="alphanum" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="block">Block {\`< > * !\`}</label>
                            <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="spaceblock">Block space key</label>
                            <InputText id="spaceblock" keyfilter={/[^\\s]/} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

const KeyFilterDemo = () => {

    return (
        <div>
            <div className="card">
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="integer">Integers</label>
                        <InputText id="integer" keyfilter="int" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="numbers">Numbers</label>
                        <InputText id="numbers" keyfilter="num" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="money">Hex</label>
                        <InputText id="money" keyfilter="money" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                    <label htmlFor="integer">Integers</label>
                        <InputText id="hex" keyfilter="hex" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="alpha">Alphabetic</label>
                        <InputText id="alpha" keyfilter="alpha"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                    <label htmlFor="alphanum">Alphanumberic</label>
                        <InputText id="alphanum" keyfilter="alphanum" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="block">Block {\`< > * !\`}</label>
                        <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="spaceblock">Block space key</label>
                        <InputText id="spaceblock" keyfilter={/[^\\s]/} />
                    </div>
                </div>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

const KeyFilterDemo = () => {

    return (
        <div>
            <div className="card">
                <div className="p-grid p-fluid">
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="integer">Integers</label>
                        <InputText id="integer" keyfilter="int" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="numbers">Numbers</label>
                        <InputText id="numbers" keyfilter="num" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="money">Hex</label>
                        <InputText id="money" keyfilter="money" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                    <label htmlFor="integer">Integers</label>
                        <InputText id="hex" keyfilter="hex" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="alpha">Alphabetic</label>
                        <InputText id="alpha" keyfilter="alpha"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                    <label htmlFor="alphanum">Alphanumberic</label>
                        <InputText id="alphanum" keyfilter="alphanum" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="block">Block {\`< > * !\`}</label>
                        <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="spaceblock">Block space key</label>
                        <InputText id="spaceblock" keyfilter={/[^\\s]/} />
                    </div>
                </div>
            </div>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { InputText } from 'primereact/inputtext';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>KeyFilter property is integrated in input components such as InputText using the <i>keyfilter</i> property. The value of the filter
                            can either a built-in regular expression or a custom one. Following input only accepts integers.</p>

<CodeHighlight>
{`
<InputText keyfilter="int" />
`}
</CodeHighlight>

                        <h5>Built-in Filters</h5>
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

                        <h5>Custom Filter</h5>
                        <p>A custom filter is enabled by binding a regular expression, an example that blocks special characters would be;</p>
<CodeHighlight>
{`
<InputText keyfilter={/^[^#<>*!]+$/}/>
`}
</CodeHighlight>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'KeyFilterDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}

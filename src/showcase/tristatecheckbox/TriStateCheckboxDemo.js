import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TriStateCheckbox} from '../../components/tristatecheckbox/TriStateCheckbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("triStateCheckbox")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Value: {this.state.value + ''}</h3>
                    <TriStateCheckbox value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                </div>

                <TriStateCheckboxDoc></TriStateCheckboxDoc>
            </div>
        );
    }
}

class TriStateCheckboxDoc extends Component {

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
import {TriStateCheckbox} from 'primereact/tristatecheckbox';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>TriStateCheckbox is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.</p>
<CodeHighlight className="language-jsx">
{`
<TriStateCheckbox value={this.state.value} onChange={(e) => this.setState({value: e.value})} />

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
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the native checkbox element.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the TriStateCheckbox.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the checkbox element .</td>
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
                                        event.value: Current Value
                                    </td>
                                    <td>Callback to invoke on value change</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Styling</h3>
                    <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                    <td>p-chkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-tristatechkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-chkbox-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>p-chkbox-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Dependencies</h3>
                    <p>None.</p>
                </TabPanel>
                <TabPanel header="Source">
                    <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tristatecheckbox" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {TriStateCheckbox} from 'primereact/tristatecheckbox';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Value: {this.state.value + ''}</h3>
                    <TriStateCheckbox value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
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
        )
    }
}

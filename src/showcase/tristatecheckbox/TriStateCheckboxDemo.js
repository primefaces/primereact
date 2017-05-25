import React, {Component} from 'react';
import {Link} from 'react-router';
import {TriStateCheckbox} from '../../components/tristatecheckbox/TriStateCheckbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
        this.onStateChange = this.onStateChange.bind(this);
    }

    onStateChange(e) {
        this.setState({value: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Value: {this.state.value + ''} </h3>
                    <TriStateCheckbox onChange={this.onStateChange} value={this.state.value}></TriStateCheckbox>
                </div>
                <TriStateCheckboxDoc></TriStateCheckboxDoc>
            </div>
        );
    }
}

class TriStateCheckboxDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {TriStateCheckbox} from 'primereact/components/tristatecheckbox/TriStateCheckbox';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>TriStateCheckbox is used as a controlled input with checked and onChange properties.</p>
<CodeHighlight className="language-markup">
{`
<TriStateCheckbox onChange={this.onStateChange} value={this.state.value}></TriStateCheckbox>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
 constructor(props) {
    super(props);
    this.state = {value: null};
    this.onStateChange = this.onStateChange.bind(this);
}

onStateChange(e) {
    this.setState({value: e.value});
}

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
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the TriStateCheckbox.</td>
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
                                    <td>event.originalEvent: Original browser event <br />
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
                                    <td>ui-chkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>ui-tristatechkbox</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>ui-chkbox-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>ui-chkbox-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Dependencies</h3>
                    <p>None.</p>
                </TabPanel>
                <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
        this.onStateChange = this.onStateChange.bind(this);
    }

    onStateChange(e) {
        this.setState({value: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Value: {this.state.value + ''} </h3>
                    <TriStateCheckbox onChange={this.onStateChange} value={this.state.value}></TriStateCheckbox>
                </div>
                <TriStateCheckboxDoc></TriStateCheckboxDoc>
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
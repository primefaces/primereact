import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Chips} from '../../components/chips/Chips';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ChipsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {basicValues: [], advancedValues: []};
    }

    customTemplate(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="fa fa-user"></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an inputfield.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Chips value={this.state.basicValues}></Chips>

                    <h3>Advanced</h3>
                    <Chips value={this.state.advancedValues} max={5} itemTemplate={this.customTemplate}></Chips>
                </div>
                
                <ChipsDoc/>
            </div>
        )
    }
}

class ChipsDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
    <TabView effect="fade">
        <TabPanel header="Documentation">
            <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {Chips} from 'primereact/components/chips/Chips';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Chips requires an array as its value.</p>
                    
<CodeHighlight className="html">
{`
<Chips value={this.state.basicValues}></Chips>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
constructor(props) {
    super(props);
    this.state = {basicValues: [], advancedValues: []};
}

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>A chip is customized using a template element where the value is passed as the implicit variable.</p>
<CodeHighlight className="html">
{`
<Chips value={this.state.advancedValues} max={5} itemTemplate={this.customTemplate}></Chips>

`}
</CodeHighlight>
<CodeHighlight className="html">
{`
customTemplate(item) {
    return (
        <div>
            <span>{item} - (active) </span>
            <i className="fa fa-user"></i>
        </div>
    );
}

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
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Advisory information to display on input.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Value of the chips.</td>
                        </tr>
                        <tr>
                            <td>field</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the property to display on a chip.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum number of entries allowed.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element should be disabled.</td>
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
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Template function to return the content.</td>
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
                            <td>onAdd</td>
                            <td>originalEvent: Browser event <br/>
                                value: Added item value</td>
                            <td>Callback to invoke when a value is added.</td>
                        </tr>
                        <tr>
                            <td>onRemove</td>
                            <td>originalEvent: Browser event <br/>
                                value: Added item value</td>
                            <td>Callback to invoke when a value is removed.</td>
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
                            <td>ui-chips</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>ui-chips-token</td>
                            <td>Chip element container.</td>
                        </tr>
                        <tr>
                            <td>ui-chips-token-icon</td>
                            <td>Icon of a chip.</td>
                        </tr>
                        <tr>
                            <td>ui-chips-token-label</td>
                            <td>label of a chip.</td>
                        </tr>
                        <tr>
                            <td>ui-chips-input-token</td>
                            <td>Container of input element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>None.</p>
        </TabPanel>

        <TabPanel header="Source">
            <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/chips" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
                <span>View on GitHub</span>
            </a>
<CodeHighlight className="javascript">
{`
export class ChipsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {basicValues: [], advancedValues: []};
    }

    customTemplate(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="fa fa-user"></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an inputfield.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Chips value={this.state.basicValues}></Chips>

                    <h3>Advanced</h3>
                    <Chips value={this.state.advancedValues} max={5} itemTemplate={this.customTemplate}></Chips>
                </div>
                
                <ChipsDoc/>
            </div>
        )
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
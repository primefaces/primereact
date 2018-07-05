import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Chips} from '../../components/chips/Chips';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ChipsDemo extends Component {

    constructor() {
        super();
        this.state = {
            values1: [], 
            values2: []
        };
    }

    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user"></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an input field.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Chips value={this.state.values1} onChange={(e) => this.setState({values1: e.value})}></Chips>

                    <h3>Template</h3>
                    <Chips value={this.state.values2} onChange={(e) => this.setState({values2: e.value})} max={5} itemTemplate={this.customChip}></Chips>
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
<CodeHighlight className="language-javascript">
{`
import {Chips} from 'primereact/chips';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Chips requires an array as its <i>value</i> and <i>onChange</i> callback to update the model.</p>
                    
<CodeHighlight className="language-jsx">
{`
<Chips value={this.state.value} onChange={(e) => this.setState({value: e.value})}></Chips>

`}
</CodeHighlight>

            <h3>Custom Content</h3>
            <p>A chip is customized using <i>itemTemplate</i> function where value is passed to return JSX.</p>
<CodeHighlight className="language-jsx">
{`
<Chips value={this.state.value} onChange={(e) => this.setState({value: e.value})} itemTemplate={this.customChip}></Chips>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
customChip(item) {
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
                            <td>Unique identifier of the component.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the input field.</td>
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
                            <td>Value of the component.</td>
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
                            <td>Template function to return the content of a chip.</td>
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
                            <td>originalEvent: Browser event <br/>
                                value: New value of the component</td>
                            <td>Callback to invoke when a chip is added or removed.</td>
                        </tr>
                        <tr>
                            <td>onAdd</td>
                            <td>originalEvent: Browser event <br/>
                                value: Added item value</td>
                            <td>Callback to invoke when a chip is added.</td>
                        </tr>
                        <tr>
                            <td>onRemove</td>
                            <td>originalEvent: Browser event <br/>
                                value: Removed item value</td>
                            <td>Callback to invoke when a chip is removed.</td>
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
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Chips} from 'primereact/chips';

export class ChipsDemo extends Component {

    constructor() {
        super();
        this.state = {
            values1: [], 
            values2: []
        };
    }

    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user"></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an input field.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Chips value={this.state.values1} onChange={(e) => this.setState({values1: e.value})}></Chips>

                    <h3>Template</h3>
                    <Chips value={this.state.values2} onChange={(e) => this.setState({values2: e.value})} max={5} itemTemplate={this.customChip}></Chips>
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
        );
    }
}
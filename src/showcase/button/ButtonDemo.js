import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ButtonDemo extends Component {
        
    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" onClick={this.increment} />
                    <Button label="Click" icon="fa-check" onClick={this.increment}/>
                    <Button label="Click" icon="fa-check" iconPos="right" onClick={this.increment}/>
                    <Button icon="fa-check" onClick={this.increment}/>
                    <Button label="Click" disabled="disabled" onClick={this.increment}/>

                    <h3>Severities</h3>
                    <Button label="Primary" onClick={this.increment} />
                    <Button label="Secondary" onClick={this.increment} className="ui-button-secondary"/>
                    <Button label="Success" onClick={this.increment} className="ui-button-success"/>
                    <Button label="Info" onClick={this.increment} className="ui-button-info"/>
                    <Button label="Warning" onClick={this.increment} className="ui-button-warning"/>
                    <Button label="Danger" onClick={this.increment} className="ui-button-danger"/>

                    <p>Number of Clicks: {this.state.count}</p>
                </div>

                <ButtonDoc />
            </div>
        )
    }
}

class ButtonDoc extends Component {

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
import {Button} from 'primereact/components/button/Button';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Button is created using the Button element.</p>    
<CodeHighlight className="html">
{`
<Button />

`}
</CodeHighlight>

                        <h3>Label</h3>
                        <p>Use label property to define the text of the button.</p>    
<CodeHighlight className="html">
{`
<Button label="Save"/>

`}
</CodeHighlight>

                        <h3>Icons</h3>
                        <p>Icon on a button is specified with icon attribute and position is customized using iconPos attribute. Default
                        icon position is left. To display only an icon, leave label as undefined.</p>
<CodeHighlight className="html">
{`
<Button label="Click" icon="fa-check" />
<Button label="Click" icon="fa-check" iconPos="right"/>
<Button icon="fa-check" iconPos="right"/>

`}
</CodeHighlight>

                        <h3>Events</h3>
                        <p>Events are defined using standard notation.</p>
<CodeHighlight className="html">
{`
<Button label="Click" onClick={this.handleClick} />

`}
</CodeHighlight>



                        <h3>Severity</h3>
                        <p>Different color options are available to define severity levels.</p>
                        
                        <ul>
                            <li>.ui-button-secondary</li>
                            <li>.ui-button-success</li>
                            <li>.ui-button-info</li>
                            <li>.ui-button-warning</li>
                            <li>.ui-button-danger</li>
                        </ul>
<CodeHighlight className="html">
{`
<Button label="Primary" />
<Button label="Secondary" className="ui-button-secondary"/>
<Button label="Success" className="ui-button-success"/>
<Button label="Info" className="ui-button-info"/>
<Button label="Warning" className="ui-button-warning"/>
<Button label="Danger" className="ui-button-danger"/>

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
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>iconPos</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Position of the icon, valid values are "left" and "right".</td>
                                    </tr>
                                    <tr>
                                        <td>cornerStyleClass</td>
                                        <td>string</td>
                                        <td>ui-corner-all</td>
                                        <td>Classname of corner style.</td>
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
                                        <td>ui-button</td>
                                        <td>Button element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-button-icon</td>
                                        <td>Icon element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-button-text</td>
                                        <td>Label element of the button</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">

                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/button" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>

<CodeHighlight className="javascript">
{`
export class ButtonDemo extends Component {
        
    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" onClick={this.increment} />
                    <Button label="Click" icon="fa-check" onClick={this.increment}/>
                    <Button label="Click" icon="fa-check" iconPos="right" onClick={this.increment}/>
                    <Button icon="fa-check" onClick={this.increment}/>
                    <Button label="Click" disabled="disabled" onClick={this.increment}/>

                    <h3>Severities</h3>
                    <Button label="Primary" onClick={this.increment} />
                    <Button label="Secondary" onClick={this.increment} className="ui-button-secondary"/>
                    <Button label="Success" onClick={this.increment} className="ui-button-success"/>
                    <Button label="Info" onClick={this.increment} className="ui-button-info"/>
                    <Button label="Warning" onClick={this.increment} className="ui-button-warning"/>
                    <Button label="Danger" onClick={this.increment} className="ui-button-danger"/>

                    <p>Number of Clicks: {this.state.count}</p>
                </div>
            </div>
        )
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}
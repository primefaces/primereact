import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fieldset} from '../../components/fieldset/Fieldset';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class FieldsetDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Fieldset</h1>
                        <p>Fieldset is a grouping component with a content toggle feature.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Fieldset legend="Godfather I">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Fieldset>

                    <br />

                    <Fieldset legend="Godfather I" toggleable={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Fieldset>
                </div>
                <FieldsetDoc></FieldsetDoc>
            </div>
        )
    }
}

export class FieldsetDoc extends Component {

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
import {Fieldset} from 'primereact/components/fieldset/Fieldset';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Fieldset is defined with Fieldset element.</p>
<CodeHighlight className="html">
{`
<Fieldset legend="Godfather I">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Fieldset>

`}
</CodeHighlight>

             <h3>Toggleable</h3>
            <p>Content of the fieldset can be expanded and collapsed using toggleable option, default state is defined with collapsed option.</p>
<CodeHighlight className="html">
{`
<Fieldset legend="Godfather I" toggleable={true}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Fieldset>

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
                            <td>legend</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Header text of the fieldset.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>toggleable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, content can toggled by clicking the legend.</td>
                        </tr>
                        <tr>
                            <td>collapsed</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines the default visibility state of the content.</td>
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
                            <td>onExpand</td>
                            <td>event.originalEvent: browser event
                            </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                        <tr>
                            <td>onCollapse</td>
                            <td>event.originalEvent: browser event
                            </td>
                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
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
                            <td>ui-fieldset</td>
                            <td>Fieldset element.</td>
                        </tr>
                        <tr>
                            <td>ui-fieldset-toggleable</td>
                            <td>Toggleable fieldset element.</td>
                        </tr>
                        <tr>
                            <td>ui-fieldset-legend</td>
                            <td>Legend element.</td>
                        </tr>
                        <tr>
                            <td>ui-fieldset-content</td>
                            <td>Content element.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/fieldset" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class FieldsetDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Fieldset</h1>
                        <p>Fieldset is a grouping component with a content toggle feature.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Fieldset legend="Godfather I">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Fieldset>

                    <br />

                    <Fieldset legend="Godfather I" toggleable={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Fieldset>
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
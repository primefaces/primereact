import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accordion,AccordionTab} from '../../components/accordion/Accordion';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class AccordionDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("accordion")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <Accordion>
                        <AccordionTab header="Godfather I">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <p>Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <p>After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.</p>
                        </AccordionTab>
                    </Accordion>

                    <h3>Multiple</h3>
                    <Accordion multiple={true}>
                        <AccordionTab header="Godfather I">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <p>Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <p>After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather IV" disabled={true}></AccordionTab>
                    </Accordion>
                </div>

                <AccordionDoc></AccordionDoc>
            </div>
        )
    }
}

export class AccordionDoc extends Component {

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
import {Accordion,AccordionTab} from 'primereact/accordion';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Accordion element consists of one or more AccordionTab elements and can either be used as a Controlled or Uncontrolled component.</p>

            <h3>Controlled Component</h3>
            <p>In controlled mode, <i>activeIndex</i> and <i>onTabChange</i> properties need to be defined to control the state.</p>

<CodeHighlight className="language-jsx">
{`
<Accordion activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>

`}
</CodeHighlight>

            <h3>Uncontrolled</h3>
            <p>In uncontrolled mode, no additional properties are required. Initial active tab can be provided using the <i>activeIndex</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                need to update the active tab, prefer to use the component as controlled.</p>

<CodeHighlight className="language-jsx">
{`
<Accordion>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>

`}
</CodeHighlight>

             <h3>Multiple</h3>
            <p>By default only one tab at a time can be active, enabling <i>multiple</i> property changes this behavior to allow multiple tabs be active at the same time.</p>
<CodeHighlight className="language-jsx">
{`
<Accordion multiple={true}>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>

`}
</CodeHighlight>

            <h3>Properties For AccordionTab</h3>
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
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Orientation of tab headers.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the tab is disabled.</td>
                        </tr>
                        <tr>
                            <td>headerStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the tab header.</td>
                        </tr>
                        <tr>
                            <td>headerClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the tab header.</td>
                        </tr>
                        <tr>
                            <td>contentStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the tab content.</td>
                        </tr>
                        <tr>
                            <td>contentClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the tab content.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                            <td>activeIndex</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Active index or indexes of the element. Use an array of numbers for multiple indexes. the "multiple" prop must be set to true in order to specify multiple indexes.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, multiple tabs can be activated at the same time.</td>
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
                            <td>onTabOpen</td>
                            <td>event.originalEvent: browser event  <br/>
                                event.index: Index or indexes of the tab (number or array of numbers).
                            </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                        <tr>
                            <td>onTabClose</td>
                            <td>event.originalEvent: browser event  <br/>
                                event.index: Index of the tab
                            </td>
                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                        </tr>
                        <tr>
                            <td>onTabChange</td>
                            <td>event.originalEvent: browser event  <br/>
                                event.index: Index of the tab
                            </td>
                            <td>Callback to invoke when state of the accordion changes.</td>
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
                            <td>p-accordion</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-accordion-header</td>
                            <td>Header of a tab.</td>
                        </tr>
                        <tr>
                            <td>p-accordion-content</td>
                            <td>Container of a tab.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/accordion" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Accordion,AccordionTab} from 'accordion/accordion';

export class AccordionDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <Accordion>
                        <AccordionTab header="Godfather I">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <p>Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <p>After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.</p>
                        </AccordionTab>
                    </Accordion>

                    <h3>Multiple</h3>
                    <Accordion multiple={true}>
                        <AccordionTab header="Godfather I">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            <p>Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            <p>After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.</p>
                        </AccordionTab>
                        <AccordionTab header="Godfather IV" disabled={true}></AccordionTab>
                    </Accordion>
                </div>

                <AccordionDoc></AccordionDoc>
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class AccordionDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './AccordionDemo.scss';

export class AccordionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        }
    }

    onClick(itemIndex) {
        let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

        if (activeIndex.length === 0) {
            activeIndex.push(itemIndex);
        }
        else {
            const index = activeIndex.indexOf(itemIndex);
            if (index === -1) {
                activeIndex.push(itemIndex);
            }
            else {
                activeIndex.splice(index, 1);
            }
        }

        this.setState({ activeIndex });
    }

    render() {
        return (
            <div className="accordion-demo">
                <div className="card">
                    <h5>Default</h5>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </AccordionTab>
                    </Accordion>

                    <h5>Multiple</h5>
                    <Accordion multiple activeIndex={[0]}>
                        <AccordionTab header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </AccordionTab>
                        <AccordionTab header="Header IV" disabled>
                        </AccordionTab>
                    </Accordion>

                    <h5>Programmatic</h5>
                    <div className="p-pt-2 p-pb-4">
                        <Button icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => this.onClick(0)} className="p-button-text" />
                        <Button icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => this.onClick(1)} className="p-button-text p-ml-2" />
                        <Button icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => this.onClick(2)} className="p-button-text p-ml-2" />
                    </div>

                    <Accordion multiple activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                        <AccordionTab header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </AccordionTab>
                    </Accordion>

                    <h5>Custom Headers</h5>
                    <Accordion className="accordion-custom" activeIndex={0}>
                        <AccordionTab header={<><i className="pi pi-calendar"></i><span>Header I</span></>}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header={<><i className="pi pi-user"></i><span>Header II</span></>}>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header={<><i className="pi pi-search"></i><span>Header III</span><i className="pi pi-cog"></i></>}>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </AccordionTab>
                    </Accordion>
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
import { Accordion, AccordionTab } from 'primereact/accordion';

const AccordionDemo = () => {

    return (
        <div>
            <h5>Default</h5>
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

            <h5>Multiple</h5>
            <Accordion multiple>
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
                <AccordionTab header="Godfather IV" disabled></AccordionTab>
            </Accordion>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

const AccordionDemo = () => {

    return (
        <div>
            <h5>Default</h5>
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

            <h5>Multiple</h5>
            <Accordion multiple>
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
                <AccordionTab header="Godfather IV" disabled></AccordionTab>
            </Accordion>
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
import { Accordion, AccordionTab } from 'primereact/accordion';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Accordion element consists of one or more AccordionTab elements and can either be used as a Controlled or Uncontrolled component.</p>

                        <h5>Controlled Component</h5>
                        <p>In controlled mode, <i>activeIndex</i> and <i>onTabChange</i> properties need to be defined to control the state.</p>

<CodeHighlight>
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

                        <h5>Uncontrolled</h5>
                        <p>In uncontrolled mode, no additional properties are required. Initial active tab can be provided using the <i>activeIndex</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                need to update the active tab, prefer to use the component as controlled.</p>

<CodeHighlight>
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

                        <h5>Multiple</h5>
                        <p>By default only one tab at a time can be active, enabling <i>multiple</i> property changes this behavior to allow multiple tabs be active at the same time.</p>
<CodeHighlight>
{`
<Accordion multiple>
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

                        <h5>Properties For AccordionTab</h5>
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

                        <h5>Properties</h5>
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

                        <h5>Events</h5>
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
                                        <td>event.originalEvent: browser event  <br />
                                event.index: Index or indexes of the tab (number or array of numbers).
                            </td>
                                        <td>Callback to invoke when a tab gets expanded.</td>
                                    </tr>
                                    <tr>
                                        <td>onTabClose</td>
                                        <td>event.originalEvent: browser event  <br />
                                event.index: Index of the tab
                            </td>
                                        <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                                    </tr>
                                    <tr>
                                        <td>onTabChange</td>
                                        <td>event.originalEvent: browser event  <br />
                                event.index: Index of the tab
                            </td>
                                        <td>Callback to invoke when state of the accordion changes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
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

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="AccordionDemo" sources={this.sources} />
<CodeHighlight lang="scss">
{`
.accordion-demo {
    .accordion-custom {
        i, span {
            vertical-align: middle;
        }

        span {
            margin: 0 .5rem;
        }
    }

    .p-accordion p {
        line-height: 1.5;
        margin: 0;
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

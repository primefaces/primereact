import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TabViewDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TabView</h1>
                        <p>TabView is a container component to group content with tabs.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TabView>
                        <TabPanel header="Godfather I" leftIcon="fa-calendar">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </TabPanel>
                        <TabPanel header="Godfather II" rightIcon="fa-print">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                        </TabPanel>
                        <TabPanel header="Godfather III" leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                        </TabPanel>
                        <TabPanel header="Godfather IV" disabled={true}>
                            
                        </TabPanel>
                    </TabView>
                </div>
                <TabViewDoc></TabViewDoc>
            </div>
        )
    }
}

export class TabViewDoc extends Component {

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
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute.</p>
<CodeHighlight className="html">
{`
<TabView>
    <TabPanel header="Godfather I"  leftIcon="fa-calendar">
        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
        Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
        of the family, kind and benevolent to those who give respect,
        but given to ruthless violence whenever anything stands against the good of the family.
    </TabPanel>
    <TabPanel header="Godfather II"  rightIcon="fa-print">
        Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
        Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
        the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
        Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
        Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
    </TabPanel>
    <TabPanel header="Godfather III"  leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
        third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
        now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
    </TabPanel>
</TabView>

`}
</CodeHighlight>
            
            <h3>Properties For TabPanel</h3>
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
                            <td>leftIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icons can be placed at left of a header.</td>
                        </tr>
                        <tr>
                            <td>rightIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icons can be placed at right of a header.</td>
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
                
            <h3>Properties For TabView</h3>
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
                            <td>number</td>
                            <td>null</td>
                            <td>Active index of the TabView.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the tabview.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the tabview.</td>
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
                            <td>onTabChange</td>
                            <td>event.originalEvent: Click object  <br/>
                                event.index: Index of the tab 
                            </td>
                            <td>Callback to invoke when an active tab is changed.</td>
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
                            <td>ui-tabview</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-tabview-nav</td>
                            <td>Container of headers.</td>
                        </tr>
                        <tr>
                            <td>ui-tabview-selected</td>
                            <td>Selected tab header.</td>
                        </tr>
                        <tr>
                            <td>ui-tabview-panels</td>
                            <td>Container panels.</td>
                        </tr>
                        <tr>
                            <td>ui-tabview-panel</td>
                            <td>Content of a tab.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tabview" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class TabViewDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>TabView</h1>
                        <p>TabView is a container component to group content with tabs.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TabView>
                        <TabView>
                        <TabPanel header="Godfather I"  leftIcon="fa-calendar">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </TabPanel>
                        <TabPanel header="Godfather II"  rightIcon="fa-print">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                        </TabPanel>
                        <TabPanel header="Godfather III"  leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                        </TabPanel>
                        <TabPanel header="Godfather IV"  disabled={true}>
                            
                        </TabPanel>
                    </TabView>
                    </TabView>
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
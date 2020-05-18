import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TabViewDemo extends Component {

    constructor() {
        super();
        this.state = {
            activeIndex: 1
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TabView</h1>
                        <p>TabView is a container component to group content with tabs.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tabView")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Uncontrolled</h3>
                    <TabView renderActiveOnly={false}>
                        <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                            but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                            just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </TabPanel>
                        <TabPanel header="Godfather II" rightIcon="pi pi-user">
                            <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                            deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                            his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                        </TabPanel>
                        <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                            <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                            interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                            A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                        </TabPanel>
                        <TabPanel header="Godfather IV" disabled={true}>

                        </TabPanel>
                    </TabView>

                    <h3>Controlled</h3>
                    <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
                        <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                            but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                            just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                        </TabPanel>
                        <TabPanel header="Godfather II" rightIcon="pi pi-user">
                            <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                            deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                            his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                        </TabPanel>
                        <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                            <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                            interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                            A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
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

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {TabView,TabPanel} from 'primereact/tabview';

export class TabViewDemo extends Component {

    constructor() {
        super();
        this.state = {
            activeIndex: 1
        }
    }

    render() {
        return (
            <div>
                <h3>Uncontrolled</h3>
                <TabView renderActiveOnly={false}>
                    <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </TabPanel>
                    <TabPanel header="Godfather II" rightIcon="pi pi-user">
                        <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                        deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                    </TabPanel>
                    <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                        <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                        A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                    </TabPanel>
                    <TabPanel header="Godfather IV" disabled={true}>

                    </TabPanel>
                </TabView>

                <h3>Controlled</h3>
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
                    <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                        but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                        just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </TabPanel>
                    <TabPanel header="Godfather II" rightIcon="pi pi-user">
                        <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                        deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                        his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                    </TabPanel>
                    <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                        <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                        interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                        A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                    </TabPanel>
                    <TabPanel header="Godfather IV" disabled={true}>

                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState } from 'react';
import {TabView,TabPanel} from 'primereact/tabview';

const TabViewDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div>
            <h3>Uncontrolled</h3>
            <TabView renderActiveOnly={false}>
                <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </TabPanel>
                <TabPanel header="Godfather II" rightIcon="pi pi-user">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </TabPanel>
                <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </TabPanel>
                <TabPanel header="Godfather IV" disabled={true}>

                </TabPanel>
            </TabView>

            <h3>Controlled</h3>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </TabPanel>
                <TabPanel header="Godfather II" rightIcon="pi pi-user">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </TabPanel>
                <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </TabPanel>
                <TabPanel header="Godfather IV" disabled={true}>

                </TabPanel>
            </TabView>
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useState } from 'react';
import {TabView,TabPanel} from 'primereact/tabview';

const TabViewDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div>
            <h3>Uncontrolled</h3>
            <TabView renderActiveOnly={false}>
                <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </TabPanel>
                <TabPanel header="Godfather II" rightIcon="pi pi-user">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </TabPanel>
                <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </TabPanel>
                <TabPanel header="Godfather IV" disabled={true}>

                </TabPanel>
            </TabView>

            <h3>Controlled</h3>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Godfather I" leftIcon="pi pi-calendar">
                    <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war,
                    but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is
                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                </TabPanel>
                <TabPanel header="Godfather II" rightIcon="pi pi-user">
                    <p>Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall,
                    deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills
                    his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy.</p>
                </TabPanel>
                <TabPanel header="Godfather III" leftIcon="pi pi-search" rightIcon="pi pi-check">
                    <p>The Godfather Part III is set in 1979 and 1980. Michael has moved back to New York and taken great strides to remove the family from crime. He turns over his New York criminal
                    interests to longtime enforcer Joey Zasa. He uses his wealth in an attempt to rehabilitate his reputation through numerous philanthropic acts, administered by a foundation named after his father.
                    A decade earlier, he gave custody of his two children to Kay, who has since remarried.</p>
                </TabPanel>
                <TabPanel header="Godfather IV" disabled={true}>

                </TabPanel>
            </TabView>
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tabview" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TabViewDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {TabView,TabPanel} from 'primereact/tabview';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Tabview element consists of one or more TabPanel elements and can either be used as a Controlled or Uncontrolled component.</p>

            <h3>Controlled Component</h3>
            <p>In controlled mode, <i>activeIndex</i> and <i>onTabChange</i> properties need to be defined to control the state.</p>

<CodeHighlight className="language-jsx">
{`
<TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
    <TabPanel header="Header I">
        Content I
    </TabPanel>
    <TabPanel header="Header II">
        Content II
    </TabPanel>
    <TabPanel header="Header III">
        Content III
    </TabPanel>
</TabView>

`}
</CodeHighlight>

            <h3>Uncontrolled</h3>
            <p>In uncontrolled mode, no additional properties are required. Initial active tab can be provided using the <i>activeIndex</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                need to update the active tab, prefer to use the component as controlled.</p>

<CodeHighlight className="language-jsx">
{`
<TabView>
    <TabPanel header="Header I">
        Content I
    </TabPanel>
    <TabPanel header="Header II">
        Content II
    </TabPanel>
    <TabPanel header="Header III">
        Content III
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
                            <td>any</td>
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
                        <tr>
                            <td>renderActiveOnly</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to render the contents of the selected tab or all tabs.</td>
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
                            <td>event.originalEvent: Browser event  <br/>
                                event.index: Index of the selected tab
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
                            <td>p-tabview</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-nav</td>
                            <td>Container of headers.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-selected</td>
                            <td>Selected tab header.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-panels</td>
                            <td>Container panels.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-panel</td>
                            <td>Content of a tab.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}

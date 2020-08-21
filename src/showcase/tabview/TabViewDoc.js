import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TabViewDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import './TabViewDemo.scss';

export class TabViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        }
    }

    render() {
        return (
            <div className="tabview-demo">
                <div className="card">
                    <h5>Default</h5>
                    <TabView>
                        <TabPanel header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </TabPanel>
                        <TabPanel header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>

                <div className="card">
                    <h5>Programmatic</h5>
                    <div className="p-pt-2 p-pb-4">
                        <Button onClick={() => this.setState({ activeIndex: 0 })} className="p-button-text" label="Activate 1st" />
                        <Button onClick={() => this.setState({ activeIndex: 1 })} className="p-button-text" label="Activate 2nd" />
                        <Button onClick={() => this.setState({ activeIndex: 2 })} className="p-button-text" label="Activate 3rd" />
                    </div>

                    <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                        <TabPanel header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </TabPanel>
                        <TabPanel header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>

                <div className="card">
                    <h5>Disabled</h5>
                    <TabView>
                        <TabPanel header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </TabPanel>
                        <TabPanel header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                        <TabPanel header="Header IV" disabled></TabPanel>
                    </TabView>
                </div>

                <div className="card">
                    <h5>Custom Headers</h5>
                    <TabView className="tabview-custom">
                        <TabPanel header="Header I" leftIcon="pi pi-calendar">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </TabPanel>
                        <TabPanel header="Header II" rightIcon="pi pi-user">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III" leftIcon="pi pi-search" rightIcon="pi pi-cog">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
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
import React, { useState } from 'react';
import {TabView,TabPanel} from 'primereact/tabview';

const TabViewDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div>
            <h5>Uncontrolled</h5>
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
                <TabPanel header="Godfather IV" disabled>

                </TabPanel>
            </TabView>

            <h5>Controlled</h5>
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
                <TabPanel header="Godfather IV" disabled>

                </TabPanel>
            </TabView>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {TabView,TabPanel} from 'primereact/tabview';

const TabViewDemo = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div>
            <h5>Uncontrolled</h5>
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
                <TabPanel header="Godfather IV" disabled>

                </TabPanel>
            </TabView>

            <h5>Controlled</h5>
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
                <TabPanel header="Godfather IV" disabled>

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

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { TabView,TabPanel } from 'primereact/tabview';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Tabview element consists of one or more TabPanel elements and can either be used as a Controlled or Uncontrolled component.</p>

                        <h5>Controlled Component</h5>
                        <p>In controlled mode, <i>activeIndex</i> and <i>onTabChange</i> properties need to be defined to control the state.</p>

<CodeHighlight>
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

                        <h5>Uncontrolled</h5>
                        <p>In uncontrolled mode, no additional properties are required. Initial active tab can be provided using the <i>activeIndex</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                need to update the active tab, prefer to use the component as controlled.</p>

<CodeHighlight>
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

                        <h5>Properties For TabPanel</h5>
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

                        <h5>Properties For TabView</h5>
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
                                        <td>onTabChange</td>
                                        <td>event.originalEvent: Browser event  <br />
                                event.index: Index of the selected tab
                            </td>
                                        <td>Callback to invoke when an active tab is changed.</td>
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

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="TabViewDemo" sources={this.sources} />
<CodeHighlight lang="scss">
{`
.tabview-demo {
    .tabview-custom {
        i, span {
            vertical-align: middle;
        }

        span {
            margin: 0 .5rem;
        }
    }

    .p-button {
        margin-right: .25rem;
    }

    .p-tabview p {
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

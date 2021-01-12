import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ScrollPanelDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

export class ScrollPanelDemo extends Component {

    render() {
        return (
            <div className="scrollpanel-demo">
                <div className="card">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <ScrollPanel style={{ width: '100%', height: '200px' }}>
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                    against the good of the family.
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                    family.
                            </div>
                            </ScrollPanel>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                    against the good of the family.
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                    family.
                            </div>
                            </ScrollPanel>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                                <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                    against the good of the family.
                                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                    family.
                            </div>
                            </ScrollPanel>
                        </div>
                    </div>
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
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

const ScrollPanelDemo = () => {
    return (
        <div className="scrollpanel-demo">
            <div className="card">
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }}>
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                against the good of the family.
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                family.
                        </div>
                        </ScrollPanel>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                against the good of the family.
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                family.
                        </div>
                        </ScrollPanel>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                            <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                against the good of the family.
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                family.
                        </div>
                        </ScrollPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

const ScrollPanelDemo = () => {
    return (
        <div className="scrollpanel-demo">
            <div className="card">
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }}>
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                against the good of the family.
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                family.
                        </div>
                        </ScrollPanel>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                against the good of the family.
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                family.
                        </div>
                        </ScrollPanel>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                            <div style={{ padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                                against the good of the family.
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                                family.
                        </div>
                        </ScrollPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}
                `
            }
        };

        this.extFiles = {
            'src/demo/ScrollPanelDemo.css': {
                content: `
.scrollpanel-demo .p-scrollpanel p {
    padding: .5rem;
    line-height: 1.5;
    margin: 0;
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-wrapper {
    border-right: 10px solid var(--surface-b);
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-bar {
    background-color: var(--primary-color);
    opacity: 1;
    transition: background-color .2s;
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-bar:hover {
    background-color: #007ad9;
}

.scrollpanel-demo .p-scrollpanel.custombar2 .p-scrollpanel-wrapper {
    border-right: 10px solid var(--surface-b);
    border-bottom: 10px solid var(--surface-b);
}

.scrollpanel-demo .p-scrollpanel.custombar2 .p-scrollpanel-bar {
    background-color: var(--surface-d);
    border-radius: 0;
    opacity: 1;
    transition: background-color .2s;
}

.scrollpanel-demo .p-col-12 {
    padding: 2rem;
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
import { ScrollPanel } from 'primereact/scrollpanel';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>ScrollPanel is defined using dimensions for the scrollable viewport.</p>
<CodeHighlight>
{`
<ScrollPanel style={{width: '100%', height: '200px'}}">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</ScrollPanel>
`}
</CodeHighlight>

                        <h5>Customization</h5>
                        <p>Look and feel can easily be customized, here is an example with a custom handle.</p>
<CodeHighlight>
{`
<ScrollPanel style={{width: '100%', height: '200px'}}" className="custom">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</ScrollPanel>
`}
</CodeHighlight>

<CodeHighlight lang="scss">
{`
.custom .p-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
}

.custom .p-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
}

.custom .p-scrollpanel-bar:hover {
    background-color: #135ba1;
}
`}
</CodeHighlight>

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
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Methods</h5>
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
                                        <td>refresh</td>
                                        <td>-</td>
                                        <td>Refreshes the position and size of the scrollbar.</td>
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
                                        <td>p-scrollpanel</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-scrollpanel-wrapper</td>
                                        <td>Wrapper of content section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-scrollpanel-content</td>
                                        <td>Content section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-scrollpanel-bar</td>
                                        <td>Scrollbar handle.</td>
                                    </tr>
                                    <tr>
                                        <td>p-scrollpanel-bar-x</td>
                                        <td>Scrollbar handle of a horizontal bar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-scrollpanel-bar-y</td>
                                        <td>Scrollbar handle of a vertical bar</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ScrollPanelDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}

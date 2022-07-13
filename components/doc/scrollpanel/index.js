import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ScrollPanelDoc = memo(() => {

    const sources = {
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
                    <div className="grid">
                        <div className="col-12 md:col-4">
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
                        <div className="col-12 md:col-4">
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
                        <div className="col-12 md:col-4">
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
                <div className="grid">
                    <div className="col-12 md:col-4">
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
                    <div className="col-12 md:col-4">
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
                    <div className="col-12 md:col-4">
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
                <div className="grid">
                    <div className="col-12 md:col-4">
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
                    <div className="col-12 md:col-4">
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
                    <div className="col-12 md:col-4">
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./ScrollPanelDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/scrollpanel/scrollpanel.min.js"></script>`,
            content: `
const { useState } = React;
const { ScrollPanel } = primereact.scrollpanel;

const ScrollPanelDemo = () => {
    return (
        <div className="scrollpanel-demo">
            <div className="card">
                <div className="grid">
                    <div className="col-12 md:col-4">
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
                    <div className="col-12 md:col-4">
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
                    <div className="col-12 md:col-4">
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

    const extFiles = {
        'demo/ScrollPanelDemo.css': {
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

.scrollpanel-demo .col-12 {
    padding: 2rem;
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { ScrollPanel } from 'primereact/scrollpanel';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/scrollpanel/scrollpanel.min.js"></script>
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
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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

                        <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>Scrollbars of the ScrollPanel has a <i>scrollbar</i> role along with the <i>aria-controls</i> attribute that refers to the id of the scrollable content container and the <i>aria-orientation</i> to indicate the orientation of scrolling.</p>

                        <h6>Header Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>down arrow</i></td>
                                        <td>Scrolls content down when vertical scrolling is available.</td>
                                    </tr>
                                    <tr>
                                        <td><i>up arrow</i></td>
                                        <td>Scrolls content up when vertical scrolling is available.</td>
                                    </tr>
                                    <tr>
                                        <td><i>left</i></td>
                                        <td>Scrolls content left when horizontal scrolling is available.</td>
                                    </tr>
                                    <tr>
                                        <td><i>right</i></td>
                                        <td>Scrolls content right when horizontal scrolling is available.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DevelopmentSection>
                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </div>

                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'ScrollPanelDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default ScrollPanelDoc

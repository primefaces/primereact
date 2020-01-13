import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ScrollPanel } from '../../components/scrollpanel/ScrollPanel';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class ScrollPanelDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ScrollPanel</h1>
                        <p>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("scrollPanel")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation scrollpanel-demo">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <ScrollPanel style={{width: '100%', height: '200px'}}>
                                <div style={{padding:'1em', lineHeight:'1.5'}}>
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
                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar1">
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
                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar2">
                                <div style={{padding: '1em', lineHeight: '1.5', width: '600px' }}>
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

                <ScrollPanelDoc></ScrollPanelDoc>
            </div>
        )
    }
}

export class ScrollPanelDoc extends Component {

    shouldComponentUpdate() {
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
import {ScrollPanel} from 'primereact/scrollpanel';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>ScrollPanel is defined using dimensions for the scrollable viewport.</p>
                        <CodeHighlight className="language-markup">
                            {`
<ScrollPanel style={{width: '100%', height: '200px'}}">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</ScrollPanel>

`}
                        </CodeHighlight>

                        <h3>Customization</h3>
                        <p>Look and feel can easily be customized, here is an example with a custom handle.</p>
                        <CodeHighlight className="language-markup">
                            {`
<ScrollPanel style={{width: '100%', height: '200px'}}" className="custom">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</ScrollPanel>

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-markup">
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
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>styleClass</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Methods</h3>
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

                            <h3>Dependencies</h3>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/scrollpanel" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {ScrollPanel} from 'primereact/scrollpanel';

export class ScrollPanelDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ScrollPanel</h1>
                        <p>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</p>
                    </div>
                </div>

                <div className="content-section implementation scrollpanel-demo">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <ScrollPanel style={{width: '100%', height: '200px'}}>
                                <div style={{padding:'1em', lineHeight:'1.5'}}>
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
                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar1">
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
                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar2">
                                <div style={{padding: '1em', lineHeight: '1.5', width: '600px' }}>
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

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}

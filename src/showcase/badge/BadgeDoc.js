import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class BadgeDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Getting Started</h5>
                        <p>A badge is offered as pure css rather than a component.</p>

                        <h5>Numbers</h5>
                        <p>Use <i>.p-badge</i> class to display numbers inside badges.</p>
<CodeHighlight>
{`
<span className="p-badge">2</span>
`}
</CodeHighlight>

                        <h5>Tags</h5>
                        <p>Tags are optimized for text rather than number and used with the <i>.p-tag</i> class. For more rounded styling like pills, add the <i>.p-tag-rounded</i> class</p>
<CodeHighlight>
{`
<span className="p-tag">New</span>
<span className="p-tag p-tag-rounded">New</span>
`}
</CodeHighlight>

                        <h5>Severities</h5>
                        <p>Different options are available as severity levels with.</p>

                        <ul>
                            <li>.p-badge-secondary</li>
                            <li>.p-badge-success</li>
                            <li>.p-badge-info</li>
                            <li>.p-badge-warning</li>
                            <li>.p-badge-danger</li>
                        </ul>

                        <h5>Positoning</h5>
                        <p>A badge can easily be positioned relative to another element when both are wrapped inside an element with <i>p-overlay-badge</i> class.</p>
<CodeHighlight>
{`
<span className="p-overlay-badge">
    <i className="pi pi-bell" style={{ fontSize: '2em'}}></i>
    <span className="p-badge">2</span>
</span>

<span className="p-overlay-badge">
    <Button type="button" label="New" />
    <span className="p-badge p-badge-warning">5</span>
</span>
`}
</CodeHighlight>

                        <h5>Inline Button Badges</h5>
                        <p>Buttons provide integrated badge support with the <i>badge</i> and <i>badgeClass</i> properties.</p>

<CodeHighlight>
{`
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeclassName="p-badge-danger" />
`}
</CodeHighlight>

                        <h5>Sizes</h5>
                        <p>Badge sizes are adjusted with additional classes.</p>
<CodeHighlight>
{`
<span className="p-badge">2</span>
<span className="p-badge p-badge-l p-badge-sucess">4</span>
<span className="p-badge p-badge-xl p-badge-warning">6</span>
`}
</CodeHighlight>

                        <p>In addition, when placed inside another element, badge sizes can also derive their size from their parent.</p>
<CodeHighlight>
{`
<h1>Heading 1 <span className="p-tag p-tag-success">New</span></h1>
<h2>Heading 2 <span className="p-tag p-tag-success">New</span></h2>
`}
</CodeHighlight>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
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
                                        <td>p-badge</td>
                                        <td>Badge element</td>
                                    </tr>
                                    <tr>
                                        <td>p-tag</td>
                                        <td>Tag element</td>
                                    </tr>
                                    <tr>
                                        <td>p-tag-rounded</td>
                                        <td>Rounded tag element</td>
                                    </tr>
                                    <tr>
                                        <td>p-overlay-badge</td>
                                        <td>Wrapper of a badge and its target.</td>
                                    </tr>
                                    <tr>
                                        <td>p-badge-l</td>
                                        <td>Large badge element</td>
                                    </tr>
                                    <tr>
                                        <td>p-badge-l</td>
                                        <td>Extra large badge element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight>
{`
<h5>Numbers</h5>
<div className="badges">
    <span className="p-badge">2</span>
    <span className="p-badge p-badge-success">8</span>
    <span className="p-badge p-badge-info">4</span>
    <span className="p-badge p-badge-warning">12</span>
    <span className="p-badge p-badge-danger">3</span>
</div>

<h5>Tags</h5>
<div className="badges">
    <span className="p-tag">Primary</span>
    <span className="p-tag p-tag-success">Success</span>
    <span className="p-tag p-tag-info">Info</span>
    <span className="p-tag p-tag-warning">Warning</span>
    <span className="p-tag p-tag-danger">Danger</span>
</div>

<h5>Pills</h5>
<div className="badges">
    <span className="p-tag p-tag-rounded">Primary</span>
    <span className="p-tag p-tag-rounded p-tag-success">Success</span>
    <span className="p-tag p-tag-rounded p-tag-info">Info</span>
    <span className="p-tag p-tag-rounded p-tag-warning">Warning</span>
    <span className="p-tag p-tag-rounded p-tag-danger">Danger</span>
</div>

<h5>Positioned Badge</h5>
<span className="p-overlay-badge p-mr-5">
    <i className="pi pi-bell" style={{ fontSize: '2em' }}></i>
    <span className="p-badge">2</span>
</span>

<span className="p-overlay-badge">
    <Button type="button" label="New" />
    <span className="p-badge p-badge-warning">5</span>
</span>

<h5>Inline Button Badge</h5>
<Button type="button" label="Emails" badge="8" className="p-mr-2" />
<Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />

<h5>Sizes</h5>
<div className="badges">
    <span className="p-badge">2</span>
    <span className="p-badge p-badge-lg p-badge-sucess">4</span>
    <span className="p-badge p-badge-xl p-badge-warning">6</span>
</div>
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}

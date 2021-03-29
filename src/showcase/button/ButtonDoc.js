import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ButtonDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export class ButtonDemo extends Component {

    render() {
        return (
            <div className="button-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Button label="Submit" />
                    <Button label="Disabled" disabled />
                    <Button label="Link" className="p-button-link" />

                    <h5>Icons</h5>
                    <Button icon="pi pi-check" />
                    <Button label="Submit" icon="pi pi-check" />
                    <Button label="Submit" icon="pi pi-check" iconPos="right" />

                    <h5>Severities</h5>
                    <Button label="Primary" />
                    <Button label="Secondary" className="p-button-secondary" />
                    <Button label="Success" className="p-button-success" />
                    <Button label="Info" className="p-button-info" />
                    <Button label="Warning" className="p-button-warning" />
                    <Button label="Help" className="p-button-help" />
                    <Button label="Danger" className="p-button-danger" />

                    <h5>Raised Buttons</h5>
                    <Button label="Primary" className="p-button-raised" />
                    <Button label="Secondary" className="p-button-raised p-button-secondary" />
                    <Button label="Success" className="p-button-raised p-button-success" />
                    <Button label="Info" className="p-button-raised p-button-info" />
                    <Button label="Warning" className="p-button-raised p-button-warning" />
                    <Button label="Help" className="p-button-raised p-button-help" />
                    <Button label="Danger" className="p-button-raised p-button-danger" />

                    <h5>Rounded Buttons</h5>
                    <Button label="Primary" className="p-button-rounded" />
                    <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                    <Button label="Success" className="p-button-rounded p-button-success" />
                    <Button label="Info" className="p-button-rounded p-button-info" />
                    <Button label="Warning" className="p-button-rounded p-button-warning" />
                    <Button label="Help" className="p-button-rounded p-button-help" />
                    <Button label="Danger" className="p-button-rounded p-button-danger" />

                    <h5>Text Buttons</h5>
                    <Button label="Primary" className="p-button-text" />
                    <Button label="Secondary" className="p-button-secondary p-button-text" />
                    <Button label="Success" className="p-button-success p-button-text" />
                    <Button label="Info" className="p-button-info p-button-text" />
                    <Button label="Warning" className="p-button-warning p-button-text" />
                    <Button label="Help" className="p-button-help p-button-text" />
                    <Button label="Danger" className="p-button-danger p-button-text" />
                    <Button label="Plain" className="p-button-text p-button-plain" />

                    <h5>Raised Text Buttons</h5>
                    <Button label="Primary" className="p-button-raised p-button-text" />
                    <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
                    <Button label="Success" className="p-button-raised p-button-success p-button-text" />
                    <Button label="Info" className="p-button-raised p-button-info p-button-text" />
                    <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
                    <Button label="Help" className="p-button-raised p-button-help p-button-text" />
                    <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
                    <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />

                    <h5>Outlined Buttons</h5>
                    <Button label="Primary" className="p-button-outlined" />
                    <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                    <Button label="Success" className="p-button-outlined p-button-success" />
                    <Button label="Info" className="p-button-outlined p-button-info" />
                    <Button label="Warning" className="p-button-outlined p-button-warning" />
                    <Button label="Help" className="p-button-outlined p-button-help" />
                    <Button label="Danger" className="p-button-outlined p-button-danger" />

                    <h5>Rounded Icon Buttons</h5>
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
                    <Button icon="pi pi-check" className="p-button-rounded" />

                    <h5>Rounded Text Icon Buttons</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-text" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
                    <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" />

                    <h5>Rounded and Outlined Icon Buttons</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" />
                    <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" />
                    <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" />
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" />
                    <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" />
                    <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" />
                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" />

                    <h5>Badges</h5>
                    <Button type="button" label="Emails" badge="8" />
                    <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />

                    <h5>Button Set</h5>
                    <span className="p-buttonset">
                        <Button label="Save" icon="pi pi-check" />
                        <Button label="Delete" icon="pi pi-trash" />
                        <Button label="Cancel" icon="pi pi-times" />
                    </span>

                    <h5>Sizes</h5>
                    <div className="sizes">
                        <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                        <Button label="Normal" icon="pi pi-check" className="p-button"  />
                        <Button label="Large" icon="pi pi-check" className="p-button-lg" />
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
import { Button } from 'primereact/button';
import './ButtonDemo.css';

const ButtonDemo = () => {
    return (
        <div className="button-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Submit" />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Severities</h5>
                <Button label="Primary" />
                <Button label="Secondary" className="p-button-secondary" />
                <Button label="Success" className="p-button-success" />
                <Button label="Info" className="p-button-info" />
                <Button label="Warning" className="p-button-warning" />
                <Button label="Help" className="p-button-help" />
                <Button label="Danger" className="p-button-danger" />

                <h5>Raised Buttons</h5>
                <Button label="Primary" className="p-button-raised" />
                <Button label="Secondary" className="p-button-raised p-button-secondary" />
                <Button label="Success" className="p-button-raised p-button-success" />
                <Button label="Info" className="p-button-raised p-button-info" />
                <Button label="Warning" className="p-button-raised p-button-warning" />
                <Button label="Help" className="p-button-raised p-button-help" />
                <Button label="Danger" className="p-button-raised p-button-danger" />

                <h5>Rounded Buttons</h5>
                <Button label="Primary" className="p-button-rounded" />
                <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                <Button label="Success" className="p-button-rounded p-button-success" />
                <Button label="Info" className="p-button-rounded p-button-info" />
                <Button label="Warning" className="p-button-rounded p-button-warning" />
                <Button label="Help" className="p-button-rounded p-button-help" />
                <Button label="Danger" className="p-button-rounded p-button-danger" />

                <h5>Text Buttons</h5>
                <Button label="Primary" className="p-button-text" />
                <Button label="Secondary" className="p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-success p-button-text" />
                <Button label="Info" className="p-button-info p-button-text" />
                <Button label="Warning" className="p-button-warning p-button-text" />
                <Button label="Help" className="p-button-help p-button-text" />
                <Button label="Danger" className="p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-text p-button-plain" />

                <h5>Raised Text Buttons</h5>
                <Button label="Primary" className="p-button-raised p-button-text" />
                <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-raised p-button-success p-button-text" />
                <Button label="Info" className="p-button-raised p-button-info p-button-text" />
                <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
                <Button label="Help" className="p-button-raised p-button-help p-button-text" />
                <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />

                <h5>Outlined Buttons</h5>
                <Button label="Primary" className="p-button-outlined" />
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <Button label="Success" className="p-button-outlined p-button-success" />
                <Button label="Info" className="p-button-outlined p-button-info" />
                <Button label="Warning" className="p-button-outlined p-button-warning" />
                <Button label="Help" className="p-button-outlined p-button-help" />
                <Button label="Danger" className="p-button-outlined p-button-danger" />

                <h5>Rounded Icon Buttons</h5>
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
                <Button icon="pi pi-check" className="p-button-rounded" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" />

                <h5>Badges</h5>
                <Button type="button" label="Emails" badge="8" />
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />

                <h5>Button Set</h5>
                <span className="p-buttonset">
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Delete" icon="pi pi-trash" />
                    <Button label="Cancel" icon="pi pi-times" />
                </span>

                <h5>Sizes</h5>
                <div className="sizes">
                    <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                    <Button label="Normal" icon="pi pi-check" className="p-button"  />
                    <Button label="Large" icon="pi pi-check" className="p-button-lg" />
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
import { Button } from 'primereact/button';
import './ButtonDemo.css';

const ButtonDemo = () => {

    return (
        <div className="button-demo">
            <div className="card">
                <h5>Basic</h5>
                <Button label="Submit" />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Severities</h5>
                <Button label="Primary" />
                <Button label="Secondary" className="p-button-secondary" />
                <Button label="Success" className="p-button-success" />
                <Button label="Info" className="p-button-info" />
                <Button label="Warning" className="p-button-warning" />
                <Button label="Help" className="p-button-help" />
                <Button label="Danger" className="p-button-danger" />

                <h5>Raised Buttons</h5>
                <Button label="Primary" className="p-button-raised" />
                <Button label="Secondary" className="p-button-raised p-button-secondary" />
                <Button label="Success" className="p-button-raised p-button-success" />
                <Button label="Info" className="p-button-raised p-button-info" />
                <Button label="Warning" className="p-button-raised p-button-warning" />
                <Button label="Help" className="p-button-raised p-button-help" />
                <Button label="Danger" className="p-button-raised p-button-danger" />

                <h5>Rounded Buttons</h5>
                <Button label="Primary" className="p-button-rounded" />
                <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                <Button label="Success" className="p-button-rounded p-button-success" />
                <Button label="Info" className="p-button-rounded p-button-info" />
                <Button label="Warning" className="p-button-rounded p-button-warning" />
                <Button label="Help" className="p-button-rounded p-button-help" />
                <Button label="Danger" className="p-button-rounded p-button-danger" />

                <h5>Text Buttons</h5>
                <Button label="Primary" className="p-button-text" />
                <Button label="Secondary" className="p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-success p-button-text" />
                <Button label="Info" className="p-button-info p-button-text" />
                <Button label="Warning" className="p-button-warning p-button-text" />
                <Button label="Help" className="p-button-help p-button-text" />
                <Button label="Danger" className="p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-text p-button-plain" />

                <h5>Raised Text Buttons</h5>
                <Button label="Primary" className="p-button-raised p-button-text" />
                <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-raised p-button-success p-button-text" />
                <Button label="Info" className="p-button-raised p-button-info p-button-text" />
                <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
                <Button label="Help" className="p-button-raised p-button-help p-button-text" />
                <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />

                <h5>Outlined Buttons</h5>
                <Button label="Primary" className="p-button-outlined" />
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <Button label="Success" className="p-button-outlined p-button-success" />
                <Button label="Info" className="p-button-outlined p-button-info" />
                <Button label="Warning" className="p-button-outlined p-button-warning" />
                <Button label="Help" className="p-button-outlined p-button-help" />
                <Button label="Danger" className="p-button-outlined p-button-danger" />

                <h5>Rounded Icon Buttons</h5>
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" />
                <Button icon="pi pi-check" className="p-button-rounded" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" />

                <h5>Badges</h5>
                <Button type="button" label="Emails" badge="8" />
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />

                <h5>Button Set</h5>
                <span className="p-buttonset">
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Delete" icon="pi pi-trash" />
                    <Button label="Cancel" icon="pi pi-times" />
                </span>

                <h5>Sizes</h5>
                <div className="sizes">
                    <Button label="Small" icon="pi pi-check" className="p-button-sm"  />
                    <Button label="Normal" icon="pi pi-check" className="p-button"  />
                    <Button label="Large" icon="pi pi-check" className="p-button-lg" />
                </div>
            </div>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'src/demo/ButtonDemo.css': {
                content: `
.button-demo .p-button {
    margin-right: .5rem;
}

.button-demo .p-buttonset .p-button {
    margin-right: 0;
}

.button-demo .sizes .button {
    margin-bottom: .5rem;
    display: block;
}

.button-demo .sizes .button:last-child {
    margin-bottom: 0;
}

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: .5rem;
    }

    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }

    .button-demo .p-buttonset .p-button {
        margin-bottom: 0;
    }
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
import { Button } from 'primereact/button';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Button is created using the Button element.</p>
<CodeHighlight>
{`
<Button />
`}
</CodeHighlight>

                        <h5>Label</h5>
                        <p>Text of the button is defined using the <i>label</i> property.</p>
<CodeHighlight>
{`
<Button label="Save" />
`}
</CodeHighlight>

                        <h5>Icons</h5>
                        <p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
                        icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.</p>

<CodeHighlight>
{`
<Button label="Click" icon="pi pi-check" />
<Button label="Click" icon="pi pi-check" iconPos="right" />
<Button icon="pi pi-check" iconPos="right" />
`}
</CodeHighlight>

                        <h5>Events</h5>
                        <p>Events are defined with the standard notation.</p>
<CodeHighlight>
{`
<Button label="Click" onClick={handleClick} />
`}
</CodeHighlight>



                        <h5>Severity</h5>
                        <p>Different color options are available as severity levels.</p>

                        <ul>
                            <li>.p-button-secondary</li>
                            <li>.p-button-success</li>
                            <li>.p-button-info</li>
                            <li>.p-button-warning</li>
                            <li>.p-button-danger</li>
                        </ul>

<CodeHighlight>
{`
<Button label="Primary" />
<Button label="Secondary" className="p-button-secondary" />
<Button label="Success" className="p-button-success" />
<Button label="Info" className="p-button-info" />
<Button label="Warning" className="p-button-warning" />
<Button label="Danger" className="p-button-danger" />
`}
</CodeHighlight>

                        <h5>Raised and Rounded Buttons</h5>
                        <p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<CodeHighlight>
{`
<Button label="Proceed" className="p-button-raised p-button-rounded" />
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
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>iconPos</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Position of the icon, valid values are "left" and "right".</td>
                                    </tr>
                                    <tr>
                                        <td>badge</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Value of the badge.</td>
                                    </tr>
                                    <tr>
                                        <td>badgeClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the badge.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content of the tooltip.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltipOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
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
                                        <td>p-button</td>
                                        <td>Button element</td>
                                    </tr>
                                    <tr>
                                        <td>p-button-icon</td>
                                        <td>Icon element</td>
                                    </tr>
                                    <tr>
                                        <td>p-button-text</td>
                                        <td>Label element of the button</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ButtonDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}

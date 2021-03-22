import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class TagDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Tag } from 'primereact/tag';

export class TagDemo extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h5>Tags</h5>
                    <Tag className="p-mr-2" value="Primary"></Tag>
                    <Tag className="p-mr-2" severity="success" value="Success"></Tag>
                    <Tag className="p-mr-2" severity="info" value="Info"></Tag>
                    <Tag className="p-mr-2" severity="warning" value="Warning"></Tag>
                    <Tag severity="danger" value="Danger"></Tag>

                    <h5>Pills</h5>
                    <Tag className="p-mr-2" value="Primary" rounded></Tag>
                    <Tag className="p-mr-2" severity="success" value="Success" rounded></Tag>
                    <Tag className="p-mr-2" severity="info" value="Info" rounded></Tag>
                    <Tag className="p-mr-2" severity="warning" value="Warning" rounded></Tag>
                    <Tag severity="danger" value="Danger" rounded></Tag>

                    <h5>Icons</h5>
                    <Tag className="p-mr-2" icon="pi pi-user" value="Primary"></Tag>
                    <Tag className="p-mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                    <Tag className="p-mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                    <Tag className="p-mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                    <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
                </div>
            </div>
        );
    }
}

`
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { Tag } from 'primereact/tag';

export const TagDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Tags</h5>
                <Tag className="p-mr-2" value="Primary"></Tag>
                <Tag className="p-mr-2" severity="success" value="Success"></Tag>
                <Tag className="p-mr-2" severity="info" value="Info"></Tag>
                <Tag className="p-mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>

                <h5>Pills</h5>
                <Tag className="p-mr-2" value="Primary" rounded></Tag>
                <Tag className="p-mr-2" severity="success" value="Success" rounded></Tag>
                <Tag className="p-mr-2" severity="info" value="Info" rounded></Tag>
                <Tag className="p-mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>

                <h5>Icons</h5>
                <Tag className="p-mr-2" icon="pi pi-user" value="Primary"></Tag>
                <Tag className="p-mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag className="p-mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag className="p-mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
            </div>
        </div>
    );
}
`
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Tag } from 'primereact/tag';

export const TagDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Tags</h5>
                <Tag className="p-mr-2" value="Primary"></Tag>
                <Tag className="p-mr-2" severity="success" value="Success"></Tag>
                <Tag className="p-mr-2" severity="info" value="Info"></Tag>
                <Tag className="p-mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>

                <h5>Pills</h5>
                <Tag className="p-mr-2" value="Primary" rounded></Tag>
                <Tag className="p-mr-2" severity="success" value="Success" rounded></Tag>
                <Tag className="p-mr-2" severity="info" value="Info" rounded></Tag>
                <Tag className="p-mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>

                <h5>Icons</h5>
                <Tag className="p-mr-2" icon="pi pi-user" value="Primary"></Tag>
                <Tag className="p-mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag className="p-mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag className="p-mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
            </div>
        </div>
    );
}
`
            }
        };
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Tag } from 'primereact/tag';
`}
</CodeHighlight>
                        <h5>Getting Started</h5>
                        <p>Content of the tag is specified using the <i>value</i> property.</p>
<CodeHighlight>
{`
<Tag value="New"></Tag>
`}
</CodeHighlight>
                        <h5>Icon</h5>
                        <p>An icon can also be configured to be displayed next to the value with the <i>icon</i> property.</p>
<CodeHighlight>
{`
<Tag value="New" icon="pi pi-plus"></Tag>
`}
</CodeHighlight>
                        <h5>Severities</h5>
                        <p>Different color options are available as severity levels.</p>

                        <ul>
                            <li>success</li>
                            <li>info</li>
                            <li>warning</li>
                            <li>danger</li>
                        </ul>

                        <h5>Templating</h5>
                        <p>Content can easily be added like a child element.</p>

<CodeHighlight>
{`
<Tag>
   Content
</Tag>
`}
</CodeHighlight>


                        <h5>Properties</h5>
                        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                        <td>value</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Value to display inside the tag.</td>
                                    </tr>
                                    <tr>
                                        <td>severity</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Severity type of the tag.</td>
                                    </tr>
                                    <tr>
                                        <td>rounded</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether the corners of the tag are rounded.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Icon of the tag to display next to the value.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <NavLink to="/theming">theming</NavLink> page.</p>
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
                                        <td>p-tag</td>
                                        <td>Tag element</td>
                                    </tr>
                                    <tr>
                                        <td>p-tag-rounded</td>
                                        <td>Rounded element</td>
                                    </tr>
                                    <tr>
                                        <td>p-tag-icon</td>
                                        <td>Icon of the tag</td>
                                    </tr>
                                    <tr>
                                        <td>p-tag-value</td>
                                        <td>Value of the tag</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'TagDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}

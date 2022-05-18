import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const TagDoc = memo(() => {

    const sources = {
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
                    <Tag className="mr-2" value="Primary"></Tag>
                    <Tag className="mr-2" severity="success" value="Success"></Tag>
                    <Tag className="mr-2" severity="info" value="Info"></Tag>
                    <Tag className="mr-2" severity="warning" value="Warning"></Tag>
                    <Tag severity="danger" value="Danger"></Tag>

                    <h5>Pills</h5>
                    <Tag className="mr-2" value="Primary" rounded></Tag>
                    <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
                    <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
                    <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
                    <Tag severity="danger" value="Danger" rounded></Tag>

                    <h5>Icons</h5>
                    <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
                    <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                    <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                    <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
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
                <Tag className="mr-2" value="Primary"></Tag>
                <Tag className="mr-2" severity="success" value="Success"></Tag>
                <Tag className="mr-2" severity="info" value="Info"></Tag>
                <Tag className="mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>

                <h5>Pills</h5>
                <Tag className="mr-2" value="Primary" rounded></Tag>
                <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
                <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
                <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>

                <h5>Icons</h5>
                <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
                <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
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
                <Tag className="mr-2" value="Primary"></Tag>
                <Tag className="mr-2" severity="success" value="Success"></Tag>
                <Tag className="mr-2" severity="info" value="Info"></Tag>
                <Tag className="mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>

                <h5>Pills</h5>
                <Tag className="mr-2" value="Primary" rounded></Tag>
                <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
                <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
                <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>

                <h5>Icons</h5>
                <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
                <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
            </div>
        </div>
    );
}
`
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/tag/tag.min.js"></script>`,
            content: `
const { useState } = React;
const { Tag } = primereact.tag;

const TagDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Tags</h5>
                <Tag className="mr-2" value="Primary"></Tag>
                <Tag className="mr-2" severity="success" value="Success"></Tag>
                <Tag className="mr-2" severity="info" value="Info"></Tag>
                <Tag className="mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>

                <h5>Pills</h5>
                <Tag className="mr-2" value="Primary" rounded></Tag>
                <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
                <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
                <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>

                <h5>Icons</h5>
                <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
                <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
            </div>
        </div>
    );
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
import { Tag } from 'primereact/tag';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/tag/tag.min.js"></script>
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
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,
                        <i>aria-live</i> may be utilized as well. In case badges need to be tabbable, <i>tabIndex</i> can be added to implement custom key handlers.</p>

                        <h5>Keyboard Support</h5>
                        <p>Component does not include any interactive elements.</p>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TagDemo', sources: sources })
                }
            </TabView>
        </div>
    );
})

export default TagDoc;

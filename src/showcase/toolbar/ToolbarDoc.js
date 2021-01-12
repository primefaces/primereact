import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView,TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ToolbarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

export class ToolbarDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://reactjs.org/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];
    }

    render() {
        const leftContents = (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-mr-2" />
                <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                <i className="pi pi-bars p-toolbar-separator p-mr-2" />
                <SplitButton label="Save" icon="pi pi-check" model={this.items} className="p-button-warning"></SplitButton>
            </React.Fragment>
        );

        const rightContents = (
            <React.Fragment>
                <Button icon="pi pi-search" className="p-mr-2" />
                <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </React.Fragment>
        );

        return (
            <div>
                <Toolbar left={leftContents} right={rightContents} />
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
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

const ToolbarDemo = () => {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const leftContents = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="p-mr-2" />
            <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
            <i className="pi pi-bars p-toolbar-separator p-mr-2" />
            <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );

    return (
        <div>
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

const ToolbarDemo = () => {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const leftContents = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="p-mr-2" />
            <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
            <i className="pi pi-bars p-toolbar-separator p-mr-2" />
            <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="p-mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );

    return (
        <div>
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
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
import { Toolbar } from 'primereact/toolbar';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Toolbar provides <i>left</i> and <i>right</i> templates to place content at these sections.</p>
<CodeHighlight>
{`
const leftContents = (
    <React.Fragment>
        <Button label="New" icon="pi pi-plus" className="p-mr-2" />
        <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
        <i className="pi pi-bars p-toolbar-separator p-mr-2" />
        <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
    </React.Fragment>
);

const rightContents = (
    <React.Fragment>
        <Button icon="pi pi-search" className="p-mr-2" />
        <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
        <Button icon="pi pi-times" className="p-button-danger" />
    </React.Fragment>
);

<Toolbar left={leftContents} right={rightContents} />
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
                                    <tr>
                                        <td>left</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>The template of left element.</td>
                                    </tr>
                                    <tr>
                                        <td>right</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>The template of right element</td>
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
                                    <td>p-toolbar</td>
                                    <td>Main container element.</td>
                                </tr>
                                <tr>
                                    <td>p-toolbar-group-left</td>
                                    <td>Left content container.</td>
                                </tr>
                                <tr>
                                    <td>p-toolbar-group-right</td>
                                    <td>Right content container.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ToolbarDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}

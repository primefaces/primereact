import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar} from '../../components/toolbar/Toolbar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {Button} from "../../components/button/Button";
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SplitButton } from '../../components/splitbutton/SplitButton';

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
            <>
                <Button label="New" icon="pi pi-plus" className="p-mr-2" />
                <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                <i className="pi pi-bars p-toolbar-separator p-mr-2" />
                <SplitButton label="Save" icon="pi pi-check" model={this.items} className="p-button-warning"></SplitButton>
            </>
        );

        const rightContents = (
            <>
                <Button icon="pi pi-search" className="p-mr-2" />
                <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="toolbar" showInputStyle>
                        <h1>Toolbar</h1>
                        <p>Toolbar is a grouping component for buttons and other content.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toolbar left={leftContents} right={rightContents} />
                </div>

                <ToolbarDoc/>

            </div>
        );
    }
}

class ToolbarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';

export class ToolbarDemo extends Component {

    render() {
        return (
            <div>
                <Toolbar>
                    <div className="p-toolbar-group-left">
                        <Button label="New" icon="pi pi-plus" style={{marginRight:'.25em'}} />
                        <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                        <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                        <Button label="Save" icon="pi pi-check" className="p-button-warning" />
                    </div>
                    <div className="p-toolbar-group-right">
                        <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                        <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button icon="pi pi-times" className="p-button-danger" />
                    </div>
                </Toolbar>
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
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';

const ToolbarDemo = () => {

    return (
        <div>
            <Toolbar>
                <div className="p-toolbar-group-left">
                    <Button label="New" icon="pi pi-plus" style={{marginRight:'.25em'}} />
                    <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                    <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                    <Button label="Save" icon="pi pi-check" className="p-button-warning" />
                </div>
                <div className="p-toolbar-group-right">
                    <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </Toolbar>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';

const ToolbarDemo = () => {

    return (
        <div>
            <Toolbar>
                <div className="p-toolbar-group-left">
                    <Button label="New" icon="pi pi-plus" style={{marginRight:'.25em'}} />
                    <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                    <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                    <Button label="Save" icon="pi pi-check" className="p-button-warning" />
                </div>
                <div className="p-toolbar-group-right">
                    <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </Toolbar>
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
                        <h3>Import</h3>
                        <CodeHighlight lang="javascript">
                            {`
import {Toolbar} from 'primereact/toolbar';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Toolbar is a container component defined using Toolbar element. Left aligned content is placed inside a div having .p-toolbar-group-left class and similarly .p-toolbar-group-right for right alignment.</p>
                        <CodeHighlight>
                            {`
 <Toolbar>
    <div className="p-toolbar-group-left">
        <Button label="New" icon="pi pi-plus" style={{marginRight:'.25em'}} />
        <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
        <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
        <Button label="Save" icon="pi pi-check" className="p-button-warning" />
    </div>
    <div className="p-toolbar-group-right">
        <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
        <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
        <Button icon="pi pi-times" className="p-button-danger" />
    </div>
</Toolbar>

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

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="ToolbarDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar} from '../../components/toolbar/Toolbar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Button} from "../../components/button/Button";

export class ToolbarDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Toolbar</h1>
                        <p>Toolbar is a grouping component for buttons and other content.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("toolbar")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>
                <div className="content-section implementation">
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

                <ToolbarDoc/>

            </div>
        );
    }
}

class ToolbarDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Toolbar} from 'primereact/toolbar';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Toolbar is a container component defined using Toolbar element. Left aligned content is placed inside a div having .p-toolbar-group-left class and similarly .p-toolbar-group-right for right alignment.</p>
                        <CodeHighlight className="language-jsx">
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

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/toolbar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
export class ToolbarDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Toolbar</h1>
                        <p>Toolbar is a grouping component for buttons and other content.</p>
                    </div>
                </div>
                <div className="content-section implementation">
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

                <ToolbarDoc/>

            </div>
        );
    }
}
                        `}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}

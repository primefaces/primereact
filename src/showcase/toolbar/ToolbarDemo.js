import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar} from '../../components/toolbar/Toolbar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
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
                    </div>
                </div>
                <div className="content-section implementation">
                    <Toolbar>
                        <div className="ui-toolbar-group-left">
                            <Button label="New" icon="pi pi-plus"/>
                            <Button label="Upload" icon="pi pi-upload" className="ui-button-success"/>
                            <i className="pi pi-bars" style={{marginRight:'.25em'}}></i>
                            <Button label="Save" icon="pi pi-check" className="ui-button-warning"/>
                        </div>
                        <div className="ui-toolbar-group-right">
                            <Button icon="pi pi-search"/>
                            <i className="pi pi-bars" style={{marginRight:'.25em'}}></i>
                            <Button icon="pi pi-calendar" className="ui-button-success"/>
                            <Button icon="pi pi-times" className="ui-button-danger"/>
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
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Toolbar} from 'primereact/toolbar';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Toolbar is a container component defined using Toolbar element. Left aligned content is placed inside a div having .ui-toolbar-group-left class and similarly .ui-toolbar-group-right for right alignment.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Toolbar>
    <div className="ui-toolbar-group-left">
        <Button label="New" icon="pi pi-plus"/>
        <Button label="Upload" icon="pi pi-upload" className="ui-button-success"/>
        <i className="pi pi-bars"></i>
        <Button label="Save" icon="pi pi-check" className="ui-button-warning"/>
    </div>
    <div className="ui-toolbar-group-right">
        <Button icon="pi pi-search"/>
        <i className="pi pi-bars"></i>
        <Button icon="pi pi-calendar" className="ui-button-success"/>
        <Button icon="pi pi-times" className="ui-button-danger"/>
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
                                    <td>ui-toolbar</td>
                                    <td>Main container element.</td>
                                </tr>
                                <tr>
                                    <td>ui-toolbar-group-left</td>
                                    <td>Left content container.</td>
                                </tr>
                                <tr>
                                    <td>ui-toolbar-group-right</td>
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
                            <i className="fa fa-github"></i>
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
                        <div className="ui-toolbar-group-left">
                            <Button label="New" icon="pi pi-plus"/>
                            <Button label="Upload" icon="pi pi-upload" className="ui-button-success"/>
                            <i className="pi pi-bars"></i>
                            <Button label="Save" icon="pi pi-check" className="ui-button-warning"/>
                        </div>
                        <div className="ui-toolbar-group-right">
                            <Button icon="pi pi-search"/>
                            <i className="pi pi-bars"></i>
                            <Button icon="pi pi-calendar" className="ui-button-success"/>
                            <Button icon="pi pi-times" className="ui-button-danger"/>
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
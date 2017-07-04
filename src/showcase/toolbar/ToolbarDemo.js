import React, {Component} from 'react';
import {Link} from 'react-router';
import {Toolbar} from '../../components/toolbar/Toolbar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {Button} from "../../components/button/Button";

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
                            <Button label="New" icon="fa-plus"/>
                            <Button label="Open" icon="fa-folder-open" className="ui-button-success"/>
                            <i className="fa fa-bars"></i>
                            <Button label="Save" icon="fa-check" className="ui-button-warning"/>
                        </div>
                        <div className="ui-toolbar-group-right">
                            <Button icon="fa-search"/>
                            <i className="fa fa-bars"></i>
                            <Button icon="fa-refresh"/>
                            <Button icon="fa-trash" className="ui-button-danger"/>
                        </div>
                    </Toolbar>
                </div>

                <ToolbarDoc/>

            </div>
        );
    }
}

class ToolbarDoc extends Component {
    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Toolbar} from 'primereact/components/toolbar/Toolbar';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Toolbar is a container component defined using Toolbar element. Left aligned content is placed inside a div having .ui-toolbar-group-left class and similarly .ui-toolbar-group-right for right alignment.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Toolbar>
    <div className="ui-toolbar-group-left">
        <Button label="New" icon="fa-plus"/>
        <Button label="Open" icon="fa-folder-open" className="ui-button-success"/>
        <i className="fa fa-bars"></i>
        <Button label="Save" icon="fa-check" className="ui-button-warning"/>
    </div>
    <div className="ui-toolbar-group-right">
        <Button icon="fa-search"/>
        <i className="fa fa-bars"></i>
        <Button icon="fa-refresh"/>
        <Button icon="fa-trash" className="ui-button-danger"/>
    </div>
</Toolbar>

`}
                        </CodeHighlight>
                        <h3>Attributes</h3>
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
                            <Button label="New" icon="fa-plus"/>
                            <Button label="Open" icon="fa-folder-open" className="ui-button-success"/>
                            <i className="fa fa-bars"></i>
                            <Button label="Save" icon="fa-check" className="ui-button-warning"/>
                        </div>
                        <div className="ui-toolbar-group-right">
                            <Button icon="fa-search"/>
                            <i className="fa fa-bars"></i>
                            <Button icon="fa-refresh"/>
                            <Button icon="fa-trash" className="ui-button-danger"/>
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
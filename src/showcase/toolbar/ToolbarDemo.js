import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar} from '../../components/toolbar/Toolbar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Button} from "../../components/button/Button";
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ToolbarDemo extends Component {

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

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from "primereact/button";

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
import {Button} from "primereact/button";

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
import {Button} from "primereact/button";

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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/toolbar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="ToolbarDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
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

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}

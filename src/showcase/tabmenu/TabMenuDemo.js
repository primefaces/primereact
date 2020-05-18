import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TabMenu} from '../../components/tabmenu/TabMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TabMenuDemo extends Component {

    render() {
        const items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TabMenu</h1>
                        <p>Menu is a navigation/command component that displays items as tab headers.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tabMenu")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TabMenu model={items} />
                </div>

                <TabMenuDoc/>
            </div>
        );
    }
}

class TabMenuDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {TabMenu} from 'primereact/tabmenu';

export class TabMenuDemo extends Component {

    render() {
        const items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];

        return (
            <div>
                <TabMenu model={items} />
            </div>
        );
    }
}
                `
            },
            'hooks': {
                content: `
import React from 'react';
import {TabMenu} from 'primereact/tabmenu';

const TabMenuDemo = () => {
    const items =  [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <TabMenu model={items} />
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React from 'react';
import {TabMenu} from 'primereact/tabmenu';

const TabMenuDemo = () => {
    const items =  [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <TabMenu model={items} />
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tabmenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TabMenuDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {TabMenu} from 'primereact/tabmenu';

`}</CodeHighlight>
                        <h3>MenuModel API</h3>
                        <p>TabMenu uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>TabMenu requires a collection of menuitems as its model and can either be used as a Controlled or Uncontrolled component.</p>

                        <CodeHighlight className="language-javascript">
                            {`
constructor() {
    super();
    this.state = {
        items: [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ]
    };
}

`}
                        </CodeHighlight>

                        <h3>Controlled Component</h3>
                        <p>In controlled mode, <i>activeItem</i> and <i>onTabChange</i> properties must be defined along with the model.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<TabMenu model={this.state.items} activeItem={this.state.activeItem} onTabChange={(e) => this.setState({activeItem: e.value})}/>

`}
                        </CodeHighlight>

                        <h3>Uncontrolled</h3>
                        <p>In uncontrolled mode, only <i>model</i> is required. Initial active item can be provided using the activeItem property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                            need to update the active item, prefer to use the component as controlled.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<TabMenu model={this.state.items} />

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
                                        <td>model</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of menuitems.</td>
                                    </tr>
                                    <tr>
                                        <td>activeItem</td>
                                        <td>MenuItem</td>
                                        <td>null</td>
                                        <td>Defines the default active menuitem</td>
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

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>onTabChange</td>
                                        <td>event.originalEvent: Browser event <br />
                                            event.value: Selected menuitem </td>
                                        <td>Callback to invoke when active tab changes.</td>
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
                                    <td>p-tabmenu</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-tabmenu-nav</td>
                                    <td>List element of headers.</td>
                                </tr>
                                <tr>
                                    <td>p-tabmenuitem</td>
                                    <td>Menuitem element.</td>
                                </tr>
                                <tr>
                                    <td>p-menuitem-link</td>
                                    <td>Link inside a menuitem.</td>
                                </tr>
                                <tr>
                                    <td>p-menuitem-text</td>
                                    <td>Label of a menuitem.</td>
                                </tr>
                                <tr>
                                    <td>p-menuitem-icon</td>
                                    <td>Icon of a menuitem.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
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

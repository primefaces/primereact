import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TabMenu} from '../../components/tabmenu/TabMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TabMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
                {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
                {label: 'Documentation', icon: 'fa fa-fw fa-book'},
                {label: 'Support', icon: 'fa fa-fw fa-support'},
                {label: 'Social', icon: 'fa fa-fw fa-twitter'}
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TabMenu</h1>
                        <p>Menu is a navigation/command component that displays items as tab headers.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TabMenu model={this.state.items} />
                </div>

                <TabMenuDoc/>
            </div>
        );
    }
}

class TabMenuDoc extends Component {

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
            {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
            {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
            {label: 'Documentation', icon: 'fa fa-fw fa-book'},
            {label: 'Support', icon: 'fa fa-fw fa-support'},
            {label: 'Social', icon: 'fa fa-fw fa-twitter'}
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
                                    <td>ui-tabmenu</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>ui-tabmenu-nav</td>
                                    <td>List element of headers.</td>
                                </tr>
                                <tr>
                                    <td>ui-tabmenuitem</td>
                                    <td>Menuitem element.</td>
                                </tr>
                                <tr>
                                    <td>ui-menuitem-link</td>
                                    <td>Link inside a menuitem.</td>
                                </tr>
                                <tr>
                                    <td>ui-menuitem-text</td>
                                    <td>Label of a menuitem.</td>
                                </tr>
                                <tr>
                                    <td>ui-menuitem-icon</td>
                                    <td>Icon of a menuitem.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tabmenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {TabMenu} from 'primereact/tabmenu';

export class TabMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
                {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
                {label: 'Documentation', icon: 'fa fa-fw fa-book'},
                {label: 'Support', icon: 'fa fa-fw fa-support'},
                {label: 'Social', icon: 'fa fa-fw fa-twitter'}
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TabMenu</h1>
                        <p>Menu is a navigation component that displays items as tab headers.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TabMenu model={this.state.items} />
                </div>
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
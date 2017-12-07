import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TabMenu} from '../../components/tabmenu/TabMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TabMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[
            {label: 'Stats', icon: 'fa-bar-chart'},
            {label: 'Calendar', icon: 'fa-calendar'},
            {label: 'Documentation', icon: 'fa-book'},
            {label: 'Support', icon: 'fa-support'},
            {label: 'Social', icon: 'fa-twitter'}
        ];
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TabMenu</h1>
                        <p>Menu is a navigation/command component that displays items as tab headers.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <TabMenu model={items}/>
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
                        <CodeHighlight className="javascript">
                            {`
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';

`}</CodeHighlight>
                        <h3>MenuModel API</h3>
                        <p>TabMenu uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>TabMenu requires a collection of menuitems as its model.</p>
                        <CodeHighlight className="html">
                            {`
<TabMenu model={items}/>

`}
                        </CodeHighlight>
                        <CodeHighlight className="html">
                            {`
var items=[
            {label: 'Stats', icon: 'fa-bar-chart'},
            {label: 'Calendar', icon: 'fa-calendar'},
            {label: 'Documentation', icon: 'fa-book'},
            {label: 'Support', icon: 'fa-support'},
            {label: 'Social', icon: 'fa-twitter'}
        ];

`}
                        </CodeHighlight>
                        <h3>ActiveItem</h3>
                        <p>By default, first item is activated, use activeItem property to choose the initial active item.</p>
                        <CodeHighlight className="html">
                            {`
<TabMenu model={items} activeItem={items[2]}/>

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
                        <CodeHighlight className="javascript">
                            {`
export class TabMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[
            {label: 'Stats', icon: 'fa-bar-chart'},
            {label: 'Calendar', icon: 'fa-calendar'},
            {label: 'Documentation', icon: 'fa-book'},
            {label: 'Support', icon: 'fa-support'},
            {label: 'Social', icon: 'fa-twitter'}
        ];
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>TabMenu</h1>
                        <p>Menu is a navigation/command component that displays items as tab headers.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <TabMenu model={items}/>
                </div>

                <TabMenuDoc/>

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
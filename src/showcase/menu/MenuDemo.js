import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from '../../components/menu/Menu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {Button} from "../../components/button/Button";

export class MenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[ {
                label: 'File',
                items: [{label: 'New', icon: 'fa-plus',command:()=>{ window.location.hash="/fileupload"; }},
                        {label: 'Open', icon: 'fa-download', url: 'http://primetek.com.tr'}]
            }, {
                label: 'Edit',
                items: [{label: 'Undo', icon: 'fa-refresh',command:()=>{ window.location.hash="/"; }},
                        {label: 'Redo', icon: 'fa-repeat'} ]
            }];
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Menu</h1>
                        <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Menu model={items}/>

                    <h3>Popup</h3>
                    <Menu model={items} popup={true} ref={el => this.menu = el} />
                    <Button label="Show" icon="fa fa-list" onClick={(event) => this.menu.toggle(event)}/>
                </div>

                <MenuDoc/>

            </div>
        )
    }
}

class MenuDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="javascript">
                            {`
import {Menu} from 'primereact/components/menu/Menu';

`}
                        </CodeHighlight>

                        <h3>MenuModel API</h3>
                        <p>Menu uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel API</Link> for details.</p>


                        <h3>Getting Started</h3>
                        <p>Menu requires a collection of menuitems as its model.</p>
                        <CodeHighlight className="html">
                            {`
<Menu model={items}/>

`}
                        </CodeHighlight>

                        <CodeHighlight className="html">
                            {`
var items=[
    {label: 'New', icon: 'fa-plus'},
    {label: 'Open', icon: 'fa-download'},
    {label: 'Undo', icon: 'fa-refresh'}
];

`}
                        </CodeHighlight>

                        <h3>SubMenus</h3>
                        <p>Menu supports 1 level of nesting via subitems of an item.</p>
                        <CodeHighlight className="html">
                            {`
var items=[
    {
        label: 'File',
        items: [{label: 'New', icon: 'fa-plus',command:()=>{ window.location.hash="/fileupload"; }},
                {label: 'Open', icon: 'fa-download', url: 'http://primetek.com.tr'}]
    },
    {
        label: 'Edit',
        items: [{label: 'Undo', icon: 'fa-refresh',command:()=>{ window.location.hash="/"; }},
                {label: 'Redo', icon: 'fa-repeat'} ]
    }
];

`}
                        </CodeHighlight>

                        <h3>Popup Mode</h3>
                        <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event from the anchor element.</p>
                        <CodeHighlight className="html">
                            {`
<Menu model={items} popup={true} ref={el=>this.menu=el} />
<Button label="Show" icon="fa fa-list" onClick={(event)=>this.menu.toggle(event)}/>

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
                                    <td>popup</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines if menu would displayed as a popup.</td>
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

                        <h3>Methods</h3>
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
                                    <td>toggle</td>
                                    <td>event: browser event</td>
                                    <td>Toggles the visibility of the popup menu.</td>
                                </tr>
                                <tr>
                                    <td>show</td>
                                    <td>event: browser event</td>
                                    <td>Displays the popup menu.</td>
                                </tr>
                                <tr>
                                    <td>hide</td>
                                    <td>-</td>
                                    <td>Hides the popup menu.</td>
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
                                    <td>onShow</td>
                                    <td>event.originalEvent: browser event </td>
                                    <td>Displays the popup menu.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>event.originalEvent: browser event </td>
                                    <td>Hides the popup menu.</td>
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
                                    <td>ui-menu</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>ui-menu-list</td>
                                    <td>List element.</td>
                                </tr>
                                <tr>
                                    <td>ui-menuitem</td>
                                    <td>Menuitem element.</td>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/menu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class MenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[ {
                label: 'File',
                items: [{label: 'New', icon: 'fa-plus',command:()=>{ window.location.hash="/fileupload"; }},
                        {label: 'Open', icon: 'fa-download', url: 'http://primetek.com.tr'}]
            }, {
                label: 'Edit',
                items: [{label: 'Undo', icon: 'fa-refresh',command:()=>{ window.location.hash="/"; }},
                        {label: 'Redo', icon: 'fa-repeat'} ]
            }];
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Menu</h1>
                        <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Menu model={items}/>

                    <h3>Popup</h3>
                    <Menu model={items} popup={true} ref={el => this.menu = el}/>
                    <Button label="Show" icon="fa fa-list" onClick={(event) => this.menu.toggle(event)}/>
                </div>

                <MenuDoc/>

            </div>
        )
    }
}
`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}
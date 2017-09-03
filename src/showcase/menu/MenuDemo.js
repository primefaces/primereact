import React, {Component} from 'react';
import {Link} from 'react-router';
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
                    <Menu model={items} popup={true} ref={el=>this.menu=el}/>
                    <Button label="Show" icon="fa fa-list" onClick={(event)=>this.menu.toggle(event)}/>
                </div>

                <MenuDoc/>

            </div>
        )
    }
}

class MenuDoc extends Component {

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

                        <h3>Getting Started</h3>
                        <p>Menu requires a collection of menuitems as its model.Core of the api is MenuItem class that defines various options such as the label, icon and children of an item in a menu.MenuItem provides the following properties. Note that not all of them may be utilized by the menu component.</p>
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
                                    <td>label</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Text of the item.</td>
                                </tr>
                                <tr>
                                    <td>icon</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Icon of the item.</td>
                                </tr>
                                <tr>
                                    <td>command</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to execute when item is clicked.</td>
                                </tr>
                                <tr>
                                    <td>url</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>External link to navigate when item is clicked.</td>
                                </tr>
                                <tr>
                                    <td>items</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of children menuitems.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When set as true, disables the menuitem.</td>
                                </tr>
                                <tr>
                                    <td>target</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Specifies where to open the linked document.</td>
                                </tr>
                                <tr>
                                    <td>separator</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Defines the item as a separator.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the menuitem.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the menuitem.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Navigation</h3>
                        <p>Navigation is specified using url property for external links and command function to invoke when an item is clicked is defined using the command property. </p>
                        <CodeHighlight className="html">
                            {`
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
}

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
                                    <td>-</td>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/menu" className="btn-viewsource" target="_blank">
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
                    <Menu model={items} popup={true} ref={el=>this.menu=el}/>
                    <Button label="Show" icon="fa fa-list" onClick={(event)=>this.menu.toggle(event)}/>
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
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TieredMenu} from '../../components/tieredmenu/TieredMenu';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TieredMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[ {
            label: 'File',
            icon: 'fa-file-o',
            items: [{
                label: 'New',
                icon: 'fa-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
                {label: 'Open'},
                {separator:true},
                {label: 'Quit'}
            ]
        },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            },
            {separator:true},
            {
                label: 'Quit', icon: 'fa-minus'
            }];
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tiered Menu</h1>
                        <p>TieredMenu displays submenus in nested overlays.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <TieredMenu model={items}/>

                    <h3>Popup</h3>
                    <TieredMenu model={items} popup={true} ref={el=>this.menu=el}/>
                    <Button label="Show" icon="fa fa-list" onClick={(event)=>this.menu.toggle(event)}/>
                </div>

                <TieredMenuDoc/>

            </div>
        );
    }
}

class TieredMenuDoc extends Component {

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
import {TieredMenu} from 'primereact/components/tieredmenu/TieredMenu';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>TieredMenu uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>Component is defined using the TieredMenu element .</p>
                        <CodeHighlight className="html">
                            {`
<TieredMenu model={items}/>

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
                                    <td>ui-tieredmenu</td>
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
                                <tr>
                                    <td>ui-submenu-icon</td>
                                    <td>Arrow icon of a submenu.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tieredmenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class TieredMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[ {
            label: 'File',
            icon: 'fa-file-o',
            items: [{
                label: 'New',
                icon: 'fa-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
                {label: 'Open'},
                {separator:true},
                {label: 'Quit'}
            ]
        },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            },
            {separator:true},
            {
                label: 'Quit', icon: 'fa-minus'
            }];
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Tiered Menu</h1>
                        <p>TieredMenu displays submenus in nested overlays.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <TieredMenu model={items}/>

                    <h3>Popup</h3>
                    <TieredMenu model={items} popup={true} ref={el=>this.menu=el}/>
                    <Button label="Show" icon="fa fa-list" onClick={(event)=>this.menu.toggle(event)}/>
                </div>

                <TieredMenuDoc/>

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
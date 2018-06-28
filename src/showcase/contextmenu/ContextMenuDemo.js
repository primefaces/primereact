import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ContextMenu} from '../../components/contextmenu/ContextMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'File',
                    icon: 'fa fa-fw fa-file-o',
                    items: [{
                        label: 'New',
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                        {label: 'Open'},
                        {separator: true},
                        {label: 'Quit'}
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa fa-fw fa-edit',
                    items: [
                        {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                        {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa fa-fw fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa fa-fw fa-search',
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
                    icon: 'fa fa-fw fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa fa-fw fa-refresh',
                            items: [
                                {label: 'Save', icon: 'fa fa-fw fa-save'},
                                {label: 'Update', icon: 'fa fa-fw fa-save'},
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa fa-fw fa-phone',
                            items: [
                                {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                            ]
                        }
                    ]
                },
                {separator: true},
                {
                    label: 'Quit', icon: 'fa fa-fw fa-minus'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ContextMenu</h1>
                        <p>ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <ContextMenu model={this.state.items} ref={el => this.cm = el}></ContextMenu>

                    <img src="showcase/resources/images/logo.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => this.cm.show(e)}/>
                </div>

                <ContextMenuDoc/>
            </div>
        );
    }
}

class ContextMenuDoc extends Component {

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
import {ContextMenu} from 'primereact/contextmenu';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>ContextMenu uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>Menu requires a collection of menuitems as its model.</p>
                        <CodeHighlight className="language-javascript">
                            {`
const items = [
    {
        label: 'File',
        items: [{label: 'New', icon: 'fa fa-fw fa-plus', command:()=>{ window.location.hash="/fileupload"; }},
                {label: 'Open', icon: 'fa fa-fw fa-download', url: 'http://primetek.com.tr'}]
    },
    {
        label: 'Edit',
        items: [{label: 'Undo', icon: 'fa fa-fw fa-refresh', command:()=>{ window.location.hash="/"; }},
                {label: 'Redo', icon: 'fa fa-fw fa-repeat'} ]
    }
];

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-jsx">
                            {`
<ContextMenu model={items}/>

`}
                        </CodeHighlight>

                        <h3>Document Menu</h3>
                        <p>Setting global property attaches the context menu to the document.
                        </p>


                        <CodeHighlight className="language-jsx">
                            {`
<ContextMenu global={true} model={items}/>

`}
                        </CodeHighlight>

                        <h3>Element Menu</h3>
                        <p>ContextMenu is attached to a custom element manually using the reference and calling the show(event) method.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<ContextMenu model={this.state.imageItems} ref={el => this.cm = el}></ContextMenu>
<img src="showcase/resources/images/logo.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => this.cm.show(e)}/>

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
                                    <tr>
                                        <td>global</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Attaches the menu to document instead of a particular item.</td>
                                    </tr>
                                    <tr>
                                        <td>baseZIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Base zIndex value to use in layering.</td>
                                    </tr>
                                    <tr>
                                        <td>autoZIndex</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to automatically manage layering.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>Dom Element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the menu should be mounted.</td>
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
                                        <td>show</td>
                                        <td>event: browser event</td>
                                        <td>Displays the popup menu.</td>
                                    </tr>
                                    <tr>
                                        <td>hide</td>
                                        <td>event: browser event</td>
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
                                        <td>event: Browser event </td>
                                        <td>Callback to invoke when a popup menu is shown.</td>
                                    </tr>
                                    <tr>
                                        <td>onHide</td>
                                        <td>event: Browser event </td>
                                        <td>Callback to invoke when a popup menu is hidden.</td>
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
                                    <td>ui-contextmenu</td>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/contextmenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {ContextMenu} from 'primereact/contextmenu';

export class ContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'File',
                    icon: 'fa fa-fw fa-file-o',
                    items: [{
                        label: 'New',
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                        {label: 'Open'},
                        {separator: true},
                        {label: 'Quit'}
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa fa-fw fa-edit',
                    items: [
                        {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                        {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa fa-fw fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa fa-fw fa-search',
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
                    icon: 'fa fa-fw fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa fa-fw fa-refresh',
                            items: [
                                {label: 'Save', icon: 'fa fa-fw fa-save'},
                                {label: 'Update', icon: 'fa fa-fw fa-save'},
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa fa-fw fa-phone',
                            items: [
                                {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                            ]
                        }
                    ]
                },
                {separator: true},
                {
                    label: 'Quit', icon: 'fa fa-fw fa-minus'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ContextMenu</h1>
                        <p>ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <ContextMenu model={this.state.items} ref={el => this.cm = el}></ContextMenu>

                    <img src="showcase/resources/images/logo.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => this.cm.show(e)}/>
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
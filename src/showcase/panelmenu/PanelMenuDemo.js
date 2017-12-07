import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PanelMenu} from '../../components/panelmenu/PanelMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class PanelMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[
            {
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
                    {separator: true},
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
            }
        ];
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>PanelMenu</h1>
                        <p>PanelMenu is a hybrid of accordion-tree components.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <PanelMenu model={items} style={{width:'300px'}}/>
                </div>

                <PanelMenuDoc/>

            </div>
        );
    }
}

class PanelMenuDoc extends Component {

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
import {PanelMenu} from 'primereact/components/panelmenu/PanelMenu';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>PanelMenu uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>PanelMenu requires nested menuitems as its model.</p>
                        <CodeHighlight className="html">
                            {`
<PanelMenu model={items} style={{width:'300px'}}/>

`}
                        </CodeHighlight>

                        <CodeHighlight className="html">
                            {`
var items=[
    {
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
            {separator: true},
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
    }
];

`}
                        </CodeHighlight>

                        <h3>Initial State</h3>
                        <p>MenuItem has an expanded property to control the visibility of a submenu, you may use this property to control the state from the menumodel.</p>

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
                                        <td>ui-panelmenu</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-panelmenu-header</td>
                                        <td>Accordion header of root submenu.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-panelmenu-content</td>
                                        <td>Accordion content of root submenu.</td>
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
                                        <td>ui-panelmenu-icon</td>
                                        <td>Arrow icon of an accordion header.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/panelmenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class PanelMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[
            {
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
                    {separator: true},
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
            }
        ];
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>PanelMenu</h1>
                        <p>PanelMenu is a hybrid of accordion-tree components.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <PanelMenu model={items} style={{width:'300px'}}/>
                </div>

                <PanelMenuDoc/>

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
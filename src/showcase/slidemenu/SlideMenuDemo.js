import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SlideMenu} from '../../components/slidemenu/SlideMenu';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SlideMenuDemo extends Component {
        
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
                        <h1>Slide Menu</h1>
                        <p>SlideMenu displays submenus with a slide animation.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SlideMenu model={this.state.items}></SlideMenu>

                    <h3>Popup</h3>
                    <SlideMenu ref={(el) => this.menu = el} model={this.state.items} popup={true}></SlideMenu>
                    <Button type="button" icon="pi pi-bars" label="Show" onClick={(event) => this.menu.toggle(event)}></Button>
                </div>

                <SlideMenuDoc />
            </div>
        )
    }
}

class SlideMenuDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {SlideMenu} from 'primereact/slidemenu';

`}
</CodeHighlight>

                        <h3>MenuItem API</h3>
                        <p>Menu uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel API</Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>Menu requires a collection of menuitems as its model.</p>

<CodeHighlight className="language-javascript">
{`
var items = [
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
    }
];

`}
</CodeHighlight>

<CodeHighlight className="language-jsx">
{`
<SlideMenu model={items} />

`}
</CodeHighlight>


                        <h3>Popup Mode</h3>
                        <p>SlideMenu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.</p>
<CodeHighlight className="language-jsx">
{`
<SlideMenu ref={(el) => this.menu = el} model={items} popup={true} />

<Button type="button" icon="pi pi-bars" label="Show" onClick={(event) => this.menu.toggle(event)}></Button>

`}
</CodeHighlight>

                        <h3>Effects</h3>
                        <p>The easing function to use is "ease-out" by default which can be customized using easing property. 
                            See <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp">here</a> for possible alternative values.</p>

<CodeHighlight className="language-jsx">
{`
<SlideMenu model={this.items} effectDuration={1000} easing="ease-in" />

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
                                    <tr>
                                        <td>easing</td>
                                        <td>string</td>
                                        <td>ease-out</td>
                                        <td>Easing animation to use for sliding.</td>
                                    </tr>
                                    <tr>
                                        <td>effectDuration</td>
                                        <td>any</td>
                                        <td>250</td>
                                        <td>Duration of the sliding animation in milliseconds.</td>
                                    </tr>
                                    <tr>
                                        <td>backLabel</td>
                                        <td>string</td>
                                        <td>Back</td>
                                        <td>Label of element to navigate back.</td>
                                    </tr>
                                    <tr>
                                        <td>menuWidth</td>
                                        <td>number</td>
                                        <td>190</td>
                                        <td>Width of the submenus.</td>
                                    </tr>
                                    <tr>
                                        <td>viewportHeight</td>
                                        <td>number</td>
                                        <td>175</td>
                                        <td>Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.</td>
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
                                        <td>event: Browser event</td>
                                        <td>Toggles the visibility of the popup menu.</td>
                                    </tr>
                                    <tr>
                                        <td>show</td>
                                        <td>event: Browser event</td>
                                        <td>Displays the popup menu.</td>
                                    </tr>
                                    <tr>
                                        <td>hide</td>
                                        <td>event: Browser event</td>
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
                        <p>Following is the list of structural style classes.</p>
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
                                        <td>ui-slidemenu</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-slidemenu-wrapper</td>
                                        <td>Wrapper of content.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-slidemenu-content</td>
                                        <td>Content element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-slidemenu-backward</td>
                                        <td>Element to navigate to previous menu on click.</td>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/slidemenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {SlideMenu} from 'primereact/slidemenu';
import {Button} from 'primereact/button';

export class SlideMenuDemo extends Component {
        
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
                        <h1>Slide Menu</h1>
                        <p>SlideMenu displays submenus with a slide animation.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SlideMenu model={this.state.items}></SlideMenu>

                    <h3>Popup</h3>
                    <SlideMenu ref={(el) => this.menu = el} model={this.state.items} popup={true}></SlideMenu>
                    <Button type="button" icon="pi pi-bars" label="Show" onClick={(event) => this.menu.toggle(event)}></Button>
                </div>
            </div>
        )
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

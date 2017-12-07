import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SlideMenu} from '../../components/slidemenu/SlideMenu';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SlideMenuDemo extends Component {
        
    constructor() {
        super();
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(e) {
        this.menu.toggle(e);
    }

    render() {
        this.items = [
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
            },
            {separator: true},
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Slide Menu</h1>
                        <p>SlideMenu displays submenus with slide animation.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SlideMenu model={this.items}></SlideMenu>

                    <h3>Popup</h3>
                    <SlideMenu ref={(el) => this.menu = el} model={this.items} popup={true}></SlideMenu>
                    <Button type="button" icon="fa fa-list" label="Show" onClick={this.onButtonClick}></Button>
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
<CodeHighlight className="javascript">
{`
import {SlideMenu} from 'primereact/components/slidemenu/SlideMenu';

`}
</CodeHighlight>

                        <h3>MenuItem API</h3>
                        <p>SlideMenu uses the common menu item api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>SlideMenu requires nested menuitems as its model.</p>
                        
<CodeHighlight className="html">
{`
<SlideMenu model={this.items}></SlideMenu>

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`
export class SlideMenuDemo extends Component {

    render() {
        this.items = [
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
            }
        ];

        return (<SlideMenu model={this.items}></SlideMenu>)
    }
}

`}
</CodeHighlight>

                        <h3>Popup Mode</h3>
                        <p>SlideMenu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event 
                            from the anchor element.</p>
<CodeHighlight className="html">
{`
<SlideMenu ref={(el) => this.menu = el} model={this.items} popup={true}></SlideMenu>
<Button type="button" icon="fa fa-list" label="Show" onClick={this.onButtonClick}></Button>

`}
</CodeHighlight>

                        <h3>Effects</h3>
                        <p>The easing function to use is "ease-out" by default and this can be customized using easing property. 
                            See <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp">here</a> for possible alternative values.</p>
<CodeHighlight className="html">
{`
<SlideMenu model={this.items} effectDuration={1000} easing="ease-in"></SlideMenu>

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
<CodeHighlight className="javascript">
{`
export class SlideMenuDemo extends Component {
        
    constructor() {
        super();
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(e) {
        this.menu.toggle(e);
    }

    render() {
        this.items = [
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
            },
            {separator: true},
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Slide Menu</h1>
                        <p>SlideMenu displays submenus with slide animation.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <SlideMenu model={this.items}></SlideMenu>

                    <h3>Popup</h3>
                    <SlideMenu ref={(el) => this.menu = el} model={this.items} popup={true}></SlideMenu>
                    <Button type="button" icon="fa fa-list" label="Show" onClick={this.onButtonClick}></Button>
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

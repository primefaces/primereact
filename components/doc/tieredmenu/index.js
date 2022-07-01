import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const TieredMenuDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';

export class TieredMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label:'File',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        items:[
                        {
                            label:'Bookmark',
                            icon:'pi pi-fw pi-bookmark'
                        },
                        {
                            label:'Video',
                            icon:'pi pi-fw pi-video'
                        },
                        ]
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Export',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Left',
                        icon:'pi pi-fw pi-align-left'
                    },
                    {
                        label:'Right',
                        icon:'pi pi-fw pi-align-right'
                    },
                    {
                        label:'Center',
                        icon:'pi pi-fw pi-align-center'
                    },
                    {
                        label:'Justify',
                        icon:'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-user-plus',

                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-user-minus',

                    },
                    {
                        label:'Search',
                        icon:'pi pi-fw pi-users',
                        items:[
                        {
                            label:'Filter',
                            icon:'pi pi-fw pi-filter',
                            items:[
                                {
                                    label:'Print',
                                    icon:'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon:'pi pi-fw pi-bars',
                            label:'List'
                        }
                        ]
                    }
                ]
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                        {
                            label:'Save',
                            icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                        {
                            label:'Remove',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                        ]
                    }
                ]
            },
            {
                separator:true
            },
            {
                label:'Quit',
                icon:'pi pi-fw pi-power-off'
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Inline</h5>
                    <TieredMenu model={this.items} />

                    <h5>Overlay</h5>
                    <TieredMenu model={this.items} popup ref={el => this.menu = el} id="overlay_tmenu" />
                    <Button label="Show" icon="pi pi-bars" onClick={(event) => this.menu.toggle(event)} aria-haspopup aria-controls="overlay_tmenu"/>
                </div>
            </div>
        );
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';

const TieredMenuDemo = () => {
    const menu = useRef(null);
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',

                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },
        {
            separator:true
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div>
            <div className="card">
                <h5>Inline</h5>
                <TieredMenu model={items} />

                <h5>Overlay</h5>
                <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
                <Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-haspopup aria-controls="overlay_tmenu"/>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';

const TieredMenuDemo = () => {
    const menu = useRef(null);
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',

                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },
        {
            separator:true
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div>
            <div className="card">
                <h5>Inline</h5>
                <TieredMenu model={items} />

                <h5>Overlay</h5>
                <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
                <Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-haspopup aria-controls="overlay_tmenu"/>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/tieredmenu/tieredmenu.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { TieredMenu } = primereact.tieredmenu;
const { Button } = primereact.button;

const TieredMenuDemo = () => {
    const menu = useRef(null);
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',

                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },
        {
            separator:true
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div>
            <div className="card">
                <h5>Inline</h5>
                <TieredMenu model={items} />

                <h5>Overlay</h5>
                <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
                <Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-haspopup aria-controls="overlay_tmenu"/>
            </div>
        </div>
    );
}
                `
        }
    }

        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { TieredMenu } from 'primereact/tieredmenu';
`}
</CodeHighlight>

                        <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/tieredmenu/tieredmenu.min.js"></script>
`}
</CodeHighlight>

                        <h5>MenuItem API</h5>
                        <p>TieredMenu uses the common menu item api to define its items, visit <Link href="/menumodel"> MenuModel </Link> for details.</p>

                        <h5>Getting Started</h5>
                        <p>Menu requires a collection of menuitems as its model.</p>
<CodeHighlight lang="js">
{`
const items = [
    {
       label:'File',
       icon:'pi pi-fw pi-file',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-plus',
             items:[
                {
                   label:'Bookmark',
                   icon:'pi pi-fw pi-bookmark'
                },
                {
                   label:'Video',
                   icon:'pi pi-fw pi-video'
                },

             ]
          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-trash'
          },
          {
             separator:true
          },
          {
             label:'Export',
             icon:'pi pi-fw pi-external-link'
          }
       ]
    },
    {
       label:'Edit',
       icon:'pi pi-fw pi-pencil',
       items:[
          {
             label:'Left',
             icon:'pi pi-fw pi-align-left'
          },
          {
             label:'Right',
             icon:'pi pi-fw pi-align-right'
          },
          {
             label:'Center',
             icon:'pi pi-fw pi-align-center'
          },
          {
             label:'Justify',
             icon:'pi pi-fw pi-align-justify'
          },

       ]
    },
    {
       label:'Users',
       icon:'pi pi-fw pi-user',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-user-plus',

          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-user-minus',

          },
          {
             label:'Search',
             icon:'pi pi-fw pi-users',
             items:[
                {
                   label:'Filter',
                   icon:'pi pi-fw pi-filter',
                   items:[
                      {
                         label:'Print',
                         icon:'pi pi-fw pi-print'
                      }
                   ]
                },
                {
                   icon:'pi pi-fw pi-bars',
                   label:'List'
                }
             ]
          }
       ]
    },
    {
       label:'Events',
       icon:'pi pi-fw pi-calendar',
       items:[
          {
             label:'Edit',
             icon:'pi pi-fw pi-pencil',
             items:[
                {
                   label:'Save',
                   icon:'pi pi-fw pi-calendar-plus'
                },
                {
                   label:'Delete',
                   icon:'pi pi-fw pi-calendar-minus'
                },

             ]
          },
          {
             label:'Archieve',
             icon:'pi pi-fw pi-calendar-times',
             items:[
                {
                   label:'Remove',
                   icon:'pi pi-fw pi-calendar-minus'
                }
             ]
          }
       ]
    },
    {
       separator:true
    },
    {
       label:'Quit',
       icon:'pi pi-fw pi-power-off'
    }
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<TieredMenu model={items} />
`}
</CodeHighlight>

                    <h5>Popup Mode</h5>
                    <p>TieredMenu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.</p>

<CodeHighlight>
{`
<TieredMenu model={items} popup ref={menu} />
<Button label="Show" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)}/>
`}
</CodeHighlight>

                    <h5>Properties</h5>
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
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Methods</h5>
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
                                    <td>event: browser event</td>
                                    <td>Hides the popup menu.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
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

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                                <td>p-tieredmenu</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-menu-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-text</td>
                                <td>Label of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-icon</td>
                                <td>Icon of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-submenu-icon</td>
                                <td>Arrow icon of a submenu.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>TieredMenu component uses the <i>menubar</i> role with <i>aria-orientation</i> set to "vertical" and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a <i>presentation</i> role
                    whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled. A submenu within a TieredMenu uses the <i>menu</i> role with an <i>aria-labelledby</i> defined 
                    as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define the relation between the item and the submenu.</p>

                    <p>In popup mode, the component implicitly manages the <i>aria-expanded</i>, <i>aria-haspopup</i> and <i>aria-controls</i> attributes of the target element to define the relation between the target and the popup.</p>

                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>tab</i></td>
                                    <td>Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves focus to the next menuitem within the submenu.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves focus to the previous menuitem within the submenu.</td>
                                </tr>
                                <tr>
                                    <td><i>right arrow</i></td>
                                    <td>Opens a submenu if there is one available and moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td><i>left arrow</i></td>
                                    <td>Closes a submenu and moves focus to the root item of the closed submenu.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first menuitem within the submenu.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last menuitem within the submenu.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TieredMenuDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default TieredMenuDoc;

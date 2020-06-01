import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ContextMenuDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {ContextMenu} from 'primereact/contextmenu';

export class ContextMenuDemo extends Component {

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
                <ContextMenu model={this.items} ref={el => this.cm = el}></ContextMenu>

                <img src="showcase/images/logo.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => this.cm.show(e)} aria-haspopup={true}/>
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
import {ContextMenu} from 'primereact/contextmenu';

const ContextMenuDemo = () => {
    let cm = useRef(null);

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
            <ContextMenu model={items} ref={cm}></ContextMenu>

            <img src="showcase/images/logo.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => cm.current.show(e)} aria-haspopup={true}/>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import {ContextMenu} from 'primereact/contextmenu';

const ContextMenuDemo = () => {
    let cm = useRef<any>(null);

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
            <ContextMenu model={items} ref={cm}></ContextMenu>

            <img src="showcase/images/logo.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => cm.current.show(e)} aria-haspopup={true}/>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/contextmenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="ContextMenuDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
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
const items:[
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
<img src="showcase/images/logo.png" alt="Logo" style={{width: '80px'}} onContextMenu={(e) => this.cm.show(e)}/>

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
                                        <td>p-contextmenu</td>
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

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MegaMenu} from '../../components/megamenu/MegaMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class MegaMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[
            {
                label: 'TV', icon: 'fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                        },
                        {
                            label: 'TV 2',
                            items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                        },
                        {
                            label: 'TV 4',
                            items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                        },
                        {
                            label: 'Sports 2',
                            items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                        },

                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                        },
                        {
                            label: 'Sports 4',
                            items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                        },
                        {
                            label: 'Sports 6',
                            items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                        },
                        {
                            label: 'Technology 2',
                            items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                        },
                        {
                            label: 'Technology 3',
                            items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{label: 'Technology 4.1'},{label: 'Technology 4.2'}]
                        }
                    ]
                ]
            }
        ];
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>MegaMenu</h1>
                        <p>MegaMenu displays submenus of root items together.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3>Default</h3>
                    <MegaMenu model={items}/>

                    <h3>Vertical</h3>
                    <MegaMenu model={items} orientation="vertical"/>
                </div>

                <MegaMenuDoc/>

            </div>
        );
    }
}

class MegaMenuDoc extends Component {

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
import {MegaMenu} from 'primereact/components/megamenu/MegaMenu';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>MegaMenu uses the common menu item api to define its items, visit <Link to="/menumodel">  MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>MegaMenu requires nested menuitems as its model where the items of a root menuitem is a two dimensional array to define columns in an overlay submenu.</p>
                        <CodeHighlight className="html">
                            {`
<MegaMenu model={items}/>

`}
                        </CodeHighlight>
                        <CodeHighlight className="html">
                            {`
var items=[
    {
        label: 'TV', icon: 'fa-check',
        items: [
            [
                {
                    label: 'TV 1',
                    items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                },
                {
                    label: 'TV 2',
                    items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                }
            ],
            [
                {
                    label: 'TV 3',
                    items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                },
                {
                    label: 'TV 4',
                    items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Sports', icon: 'fa-soccer-ball-o',
        items: [
            [
                {
                    label: 'Sports 1',
                    items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                },
                {
                    label: 'Sports 2',
                    items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                },

            ],
            [
                {
                    label: 'Sports 3',
                    items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                },
                {
                    label: 'Sports 4',
                    items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                }
            ],
            [
                {
                    label: 'Sports 5',
                    items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                },
                {
                    label: 'Sports 6',
                    items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                }
            ]
        ]
    },
    {
        label: 'Entertainment', icon: 'fa-child',
        items: [
            [
                {
                    label: 'Entertainment 1',
                    items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                },
                {
                    label: 'Entertainment 2',
                    items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                }
            ],
            [
                {
                    label: 'Entertainment 3',
                    items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                },
                {
                    label: 'Entertainment 4',
                    items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Technology', icon: 'fa-gears',
        items: [
            [
                {
                    label: 'Technology 1',
                    items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                },
                {
                    label: 'Technology 2',
                    items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                },
                {
                    label: 'Technology 3',
                    items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{label: 'Technology 4.1'},{label: 'Technology 4.2'}]
                }
            ]
        ]
    }
];

`}
                        </CodeHighlight>

                        <h3>Custom Content</h3>
                        <p>Custom content can be placed between MegaMenu tags. Megamenu should be horizontal for custom content.</p>
                        <CodeHighlight className="html">
                            {`
<MegaMenu model={items}>
    <InputText placeholder="Search" type="text"/>
    <Button label="Logout" icon="fa-sign-out"/>
</MegaMenu>

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
                                        <td>orientation</td>
                                        <td>string</td>
                                        <td>horizontal</td>
                                        <td>Defines the orientation, valid values are horizontal and vertical.</td>
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
                                        <td>ui-megamenu</td>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/megamenu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="javascript">
                            {`
export class MegaMenuDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var items=[
            {
                label: 'TV', icon: 'fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                        },
                        {
                            label: 'TV 2',
                            items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                        },
                        {
                            label: 'TV 4',
                            items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                        },
                        {
                            label: 'Sports 2',
                            items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                        },

                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                        },
                        {
                            label: 'Sports 4',
                            items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                        },
                        {
                            label: 'Sports 6',
                            items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                        },
                        {
                            label: 'Technology 2',
                            items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                        },
                        {
                            label: 'Technology 3',
                            items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{label: 'Technology 4.1'},{label: 'Technology 4.2'}]
                        }
                    ]
                ]
            }
        ];
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>MegaMenu</h1>
                        <p>MegaMenu displays submenus of root items together.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3>Default</h3>
                    <MegaMenu model={items}/>

                    <h3>Vertical</h3>
                    <MegaMenu model={items} orientation="vertical"/>
                </div>

                <MegaMenuDoc/>

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
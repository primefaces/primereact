import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MegaMenu} from '../../components/megamenu/MegaMenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class MegaMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'TV', icon: 'fa fa-fw fa-check',
                    items: [
                        [
                            {
                                label: 'TV 1',
                                items: [{label: 'TV 1.1'}, {label: 'TV 1.2'}]
                            },
                            {
                                label: 'TV 2',
                                items: [{label: 'TV 2.1'}, {label: 'TV 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'TV 3',
                                items: [{label: 'TV 3.1'}, {label: 'TV 3.2'}]
                            },
                            {
                                label: 'TV 4',
                                items: [{label: 'TV 4.1'}, {label: 'TV 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                    items: [
                        [
                            {
                                label: 'Sports 1',
                                items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
                            },
                            {
                                label: 'Sports 2',
                                items: [{label: 'Sports 2.1'}, {label: 'Sports 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'Sports 3',
                                items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
                            },
                            {
                                label: 'Sports 4',
                                items: [{label: 'Sports 4.1'}, {label: 'Sports 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Sports 5',
                                items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
                            },
                            {
                                label: 'Sports 6',
                                items: [{label: 'Sports 6.1'}, {label: 'Sports 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Entertainment', icon: 'fa fa-fw fa-child',
                    items: [
                        [
                            {
                                label: 'Entertainment 1',
                                items: [{label: 'Entertainment 1.1'}, {label: 'Entertainment 1.2'}]
                            },
                            {
                                label: 'Entertainment 2',
                                items: [{label: 'Entertainment 2.1'}, {label: 'Entertainment 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Entertainment 3',
                                items: [{label: 'Entertainment 3.1'}, {label: 'Entertainment 3.2'}]
                            },
                            {
                                label: 'Entertainment 4',
                                items: [{label: 'Entertainment 4.1'}, {label: 'Entertainment 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Technology', icon: 'fa fa-fw fa-gears',
                    items: [
                        [
                            {
                                label: 'Technology 1',
                                items: [{label: 'Technology 1.1'}, {label: 'Technology 1.2'}]
                            },
                            {
                                label: 'Technology 2',
                                items: [{label: 'Technology 2.1'}, {label: 'Technology 2.2'}]
                            },
                            {
                                label: 'Technology 3',
                                items: [{label: 'Technology 3.1'}, {label: 'Technology 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{label: 'Technology 4.1'}, {label: 'Technology 4.2'}]
                            }
                        ]
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>MegaMenu</h1>
                        <p>MegaMenu is navigation component that displays submenus together.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Horizontal</h3>
                    <MegaMenu model={this.state.items}/>

                    <h3>Vertical</h3>
                    <MegaMenu model={this.state.items} orientation="vertical"/>
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
                        <CodeHighlight className="language-javascript">
                            {`
import {MegaMenu} from 'primereact/megamenu';

`}</CodeHighlight>
                        <h3>MenuItem API</h3>
                        <p>MegaMenu uses the common menu item api to define its items, visit <Link to="/menumodel">  MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>MegaMenu requires a collection of menuitems as its model.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<MegaMenu model={items} />

`}
                        </CodeHighlight>
                        <CodeHighlight className="language-javascript">
                            {`
var items = [
    {
        label: 'TV', icon: 'fa fa-fw fa-check',
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
        label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
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
        label: 'Entertainment', icon: 'fa fa-fw fa-child',
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
        label: 'Technology', icon: 'fa fa-fw fa-gears',
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

                        <h3>Orientation</h3>
                        <p>Default orientation is "horizontal" with "vertical" as the alternative.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<MegaMenu model={items} orientation="vertical"/>

`}
                        </CodeHighlight>

                        <h3>Custom Content</h3>
                        <p>Any content inside the megamenu will be displayed on the right side by default. You may use ".ui-megamenu-custom" style class to change the location of the content.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<MegaMenu model={items}>
    <InputText placeholder="Search" type="text"/>
    <Button label="Logout" icon="fa fa-sign-out" style={{marginLeft:4}}/>
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
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MegaMenu} from 'primereact/megamenu';

export class MegaMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'TV', icon: 'fa fa-fw fa-check',
                    items: [
                        [
                            {
                                label: 'TV 1',
                                items: [{label: 'TV 1.1'}, {label: 'TV 1.2'}]
                            },
                            {
                                label: 'TV 2',
                                items: [{label: 'TV 2.1'}, {label: 'TV 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'TV 3',
                                items: [{label: 'TV 3.1'}, {label: 'TV 3.2'}]
                            },
                            {
                                label: 'TV 4',
                                items: [{label: 'TV 4.1'}, {label: 'TV 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                    items: [
                        [
                            {
                                label: 'Sports 1',
                                items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
                            },
                            {
                                label: 'Sports 2',
                                items: [{label: 'Sports 2.1'}, {label: 'Sports 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'Sports 3',
                                items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
                            },
                            {
                                label: 'Sports 4',
                                items: [{label: 'Sports 4.1'}, {label: 'Sports 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Sports 5',
                                items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
                            },
                            {
                                label: 'Sports 6',
                                items: [{label: 'Sports 6.1'}, {label: 'Sports 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Entertainment', icon: 'fa fa-fw fa-child',
                    items: [
                        [
                            {
                                label: 'Entertainment 1',
                                items: [{label: 'Entertainment 1.1'}, {label: 'Entertainment 1.2'}]
                            },
                            {
                                label: 'Entertainment 2',
                                items: [{label: 'Entertainment 2.1'}, {label: 'Entertainment 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Entertainment 3',
                                items: [{label: 'Entertainment 3.1'}, {label: 'Entertainment 3.2'}]
                            },
                            {
                                label: 'Entertainment 4',
                                items: [{label: 'Entertainment 4.1'}, {label: 'Entertainment 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Technology', icon: 'fa fa-fw fa-gears',
                    items: [
                        [
                            {
                                label: 'Technology 1',
                                items: [{label: 'Technology 1.1'}, {label: 'Technology 1.2'}]
                            },
                            {
                                label: 'Technology 2',
                                items: [{label: 'Technology 2.1'}, {label: 'Technology 2.2'}]
                            },
                            {
                                label: 'Technology 3',
                                items: [{label: 'Technology 3.1'}, {label: 'Technology 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{label: 'Technology 4.1'}, {label: 'Technology 4.2'}]
                            }
                        ]
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>MegaMenu</h1>
                        <p>MegaMenu is navigation component that displays submenus together.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Horizontal</h3>
                    <MegaMenu model={this.state.items}/>

                    <h3>Vertical</h3>
                    <MegaMenu model={this.state.items} orientation="vertical"/>
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
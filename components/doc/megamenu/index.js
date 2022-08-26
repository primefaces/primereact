import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const MegaMenuDoc = memo(() => {
    const sources = {
        class: {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { MegaMenu } from 'primereact/megamenu';

export class MegaMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                items: [
                    [
                        {
                            label: 'Video 1',
                            items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                        },
                        {
                            label: 'Video 2',
                            items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Video 3',
                            items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                        },
                        {
                            label: 'Video 4',
                            items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'User 1',
                            items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                        },
                        {
                            label: 'User 2',
                            items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'User 3',
                            items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                        },
                        {
                            label: 'User 4',
                            items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'User 5',
                            items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                        },
                        {
                            label: 'User 6',
                            items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Event 1',
                            items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                        },
                        {
                            label: 'Event 2',
                            items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Event 3',
                            items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                        },
                        {
                            label: 'Event 4',
                            items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                        },
                        {
                            label: 'Setting 2',
                            items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                        },
                        {
                            label: 'Setting 3',
                            items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                        }
                    ]
                ]
            }
        ];
    }

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" style={{width: '12rem'}} />;

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Horizontal</h5>
                    <MegaMenu model={this.items} />

                    <h5>Vertical</h5>
                    <MegaMenu model={this.items} orientation="vertical" />

                    <h5>Templating</h5>
                    <MegaMenu model={items} orientation="horizontal" start={start} end={end} />
                </div>
            </div>
        );
    }
}
                `
        },
        hooks: {
            tabName: 'Hooks Source',
            content: `
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                    },
                    {
                        label: 'Video 2',
                        items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                    },
                    {
                        label: 'Video 4',
                        items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                    },
                    {
                        label: 'User 2',
                        items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                    },
                    {
                        label: 'User 4',
                        items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                    },
                    {
                        label: 'User 6',
                        items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                    },
                    {
                        label: 'Event 2',
                        items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                    },
                    {
                        label: 'Event 4',
                        items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                    },
                    {
                        label: 'Setting 2',
                        items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                    },
                    {
                        label: 'Setting 3',
                        items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                    }
                ]
            ]
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" style={{width: '12rem'}} />;

    return (
        <div>
            <div className="card">
                <h5>Horizontal</h5>
                <MegaMenu model={items} />

                <h5>Vertical</h5>
                <MegaMenu model={items} orientation="vertical" />

                <h5>Templating</h5>
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} />
            </div>
        </div>
    );
}
                `
        },
        ts: {
            tabName: 'TS Source',
            content: `
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                    },
                    {
                        label: 'Video 2',
                        items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                    },
                    {
                        label: 'Video 4',
                        items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                    },
                    {
                        label: 'User 2',
                        items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                    },
                    {
                        label: 'User 4',
                        items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                    },
                    {
                        label: 'User 6',
                        items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                    },
                    {
                        label: 'Event 2',
                        items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                    },
                    {
                        label: 'Event 4',
                        items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                    },
                    {
                        label: 'Setting 2',
                        items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                    },
                    {
                        label: 'Setting 3',
                        items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                    }
                ]
            ]
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" style={{width: '12rem'}} />;

    return (
        <div>
            <div className="card">
                <h5>Horizontal</h5>
                <MegaMenu model={items} />

                <h5>Vertical</h5>
                <MegaMenu model={items} orientation="vertical" />

                <h5>Templating</h5>
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} />
            </div>
        </div>
    );
}
                `
        },
        browser: {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/megamenu/megamenu.min.js"></script>`,
            content: `
const { useState } = React;
const { MegaMenu } = primereact.megamenu;

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                    },
                    {
                        label: 'Video 2',
                        items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                    },
                    {
                        label: 'Video 4',
                        items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                    },
                    {
                        label: 'User 2',
                        items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                    },
                    {
                        label: 'User 4',
                        items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                    },
                    {
                        label: 'User 6',
                        items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                    },
                    {
                        label: 'Event 2',
                        items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                    },
                    {
                        label: 'Event 4',
                        items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                    },
                    {
                        label: 'Setting 2',
                        items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                    },
                    {
                        label: 'Setting 3',
                        items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                    }
                ]
            ]
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" style={{width: '12rem'}} />;

    return (
        <div>
            <div className="card">
                <h5>Horizontal</h5>
                <MegaMenu model={items} />

                <h5>Vertical</h5>
                <MegaMenu model={items} orientation="vertical" />

                <h5>Templating</h5>
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} />
            </div>
        </div>
    );
}
                `
        }
    };

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
                    <CodeHighlight lang="js">
                        {`
import { MegaMenu } from 'primereact/megamenu';
`}
                    </CodeHighlight>

                    <h5>Import via CDN</h5>
                    <CodeHighlight>
                        {`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/megamenu/megamenu.min.js"></script>
`}
                    </CodeHighlight>

                    <h5>MenuItem API</h5>
                    <p>
                        MegaMenu uses the common menu item api to define its items, visit <Link href="/menumodel"> MenuModel </Link> for details.
                    </p>
                    <p>MegaMenu requires a collection of menuitems as its model.</p>

                    <CodeHighlight lang="js">
                        {`
const items = [
    {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                },
                {
                    label: 'Video 2',
                    items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                },
                {
                    label: 'Video 4',
                    items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                },
                {
                    label: 'User 2',
                    items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                },
            ],
            [
                {
                    label: 'User 3',
                    items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                },
                {
                    label: 'User 4',
                    items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                },
                {
                    label: 'User 6',
                    items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                }
            ]
        ]
    },
    {
        label: 'Events', icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                },
                {
                    label: 'Event 2',
                    items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                },
                {
                    label: 'Event 4',
                    items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                },
                {
                    label: 'Setting 2',
                    items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                },
                {
                    label: 'Setting 3',
                    items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                }
            ]
        ]
    }
]
`}
                    </CodeHighlight>

                    <CodeHighlight>
                        {`
<MegaMenu model={items} />
`}
                    </CodeHighlight>

                    <h5>Orientation</h5>
                    <p>Default orientation is "horizontal" with "vertical" as the alternative.</p>
                    <CodeHighlight>
                        {`
<MegaMenu model={items} orientation="vertical"/>
`}
                    </CodeHighlight>

                    <h5>Custom Content</h5>
                    <p>The megamenu can display custom content by using the "start" and "end" properties.</p>
                    <CodeHighlight>
                        {`
<MegaMenu
  model={items}
  start={<InputText placeholder="Search" type="text"/>}
  end={<Button label="Logout" icon="pi pi-power-off"/>}
/>
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
                                    <td>start</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of starting element.</td>
                                </tr>
                                <tr>
                                    <td>end</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of trailing element</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>
                        Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                    </p>
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
                                    <td>p-megamenu</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-megamenu-root-list</td>
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
                        <p>
                            MegaMenu component uses the <i>menubar</i> role along with <i>aria-orientation</i> and the value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a{' '}
                            <i>presentation</i> role whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled. A submenu within a MegaMenu
                            uses the <i>menu</i> role with an <i>aria-labelledby</i> defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have <i>aria-haspopup</i>, <i>aria-expanded</i> and{' '}
                            <i>aria-controls</i> to define the relation between the item and the submenu.
                        </p>

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
                                        <td>
                                            <i>tab</i>
                                        </td>
                                        <td>Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>shift</i> + <i>tab</i>
                                        </td>
                                        <td>Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>enter</i>
                                        </td>
                                        <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>space</i>
                                        </td>
                                        <td>If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>escape</i>
                                        </td>
                                        <td>If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>down arrow</i>
                                        </td>
                                        <td>If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>up arrow</i>
                                        </td>
                                        <td>If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>right arrow</i>
                                        </td>
                                        <td>If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>left arrow</i>
                                        </td>
                                        <td>If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>home</i>
                                        </td>
                                        <td>Moves focus to the first menuitem within the submenu.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>end</i>
                                        </td>
                                        <td>Moves focus to the last menuitem within the submenu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {useLiveEditorTabs({ name: 'MegaMenuDemo', sources: sources })}
            </TabView>
        </div>
    );
});

export default MegaMenuDoc;

import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const DockDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import PrimeReact from 'primereact/api';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { NodeService } from '../service/NodeService';
import { PhotoService } from '../service/PhotoService';
import './DockDemo.css';

export class DockDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayTerminal: false,
            images: null,
            nodes: null
        };

        const imgPath = 'images/dock';
        const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

        this.dockItems = [
            {
                label: 'Finder',
                icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.setState({ displayFinder: true });
                }
            },
            {
                label: 'Terminal',
                icon: () => <img alt="Finder" src={\`\${imgPath}/terminal.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.setState({ displayTerminal: true });
                }
            },
            {
                label: 'App Store',
                icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast2.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
                }
            },
            {
                label: 'Safari',
                icon: () => <img alt="Finder" src={\`\${imgPath}/safari.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast2.show({ severity: 'warn', summary: 'Safari has stopped working' });
                }
            },
            {
                label: 'Photos',
                icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.galleria.show();
                }
            },
            {
                label: 'GitHub',
                icon: () => <img alt="Settings" src={\`\${imgPath}/github.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            },
            {
                label: 'Trash',
                icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast.show({ severity: 'info', summary: 'Empty Trash' });
                }
            }
        ];

        this.dockBasicItems = [
            {
                label: 'Finder',
                icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
            },
            {
                label: 'App Store',
                icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
            },
            {
                label: 'Photos',
                icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
            },
            {
                label: 'Trash',
                icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
            }
        ];

        this.menubarItems = [
            {
                label: 'Finder',
                className: 'menubar-root'
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label: 'Users',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit'
            }
        ];

        this.nodeService = new NodeService();
        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

    itemTemplate(item) {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    commandHandler(text) {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        }
        else {
            TerminalService.emit('clear');
        }
    }

    componentDidMount() {
        TerminalService.on('command', this.commandHandler);

        this.galleriaService.getImages().then(data => this.setState({ images: data }));
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));

        PrimeReact.appendTo = 'self';
    }

    componentWillUnmount() {
        TerminalService.off('command', this.commandHandler);

        // reset
        PrimeReact.appendTo = null;
    }

    render() {
        const start = <i className="pi pi-apple"></i>;
        const end = (
            <React.Fragment>
                <i className="pi pi-video" />
                <i className="pi pi-wifi" />
                <i className="pi pi-volume-up" />
                <span>Fri 13:07</span>
                <i className="pi pi-search" />
                <i className="pi pi-bars" />
            </React.Fragment>
        );

        return (
            <div className=" dock-demo">
                <h5>Basic</h5>
                <div className="dock-window">
                    <Dock model={this.dockBasicItems} position="bottom"/>
                    <Dock model={this.dockBasicItems} position="top"/>
                    <Dock model={this.dockBasicItems} position="left"/>
                    <Dock model={this.dockBasicItems} position="right"/>
                </div>

                <h5>Advanced</h5>
                <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

                <Menubar model={this.menubarItems} start={start} end={end} />
                <div className="dock-window dock-advanced">
                    <Toast ref={(el) => this.toast = el} />
                    <Toast ref={(el) => this.toast2 = el} position="top-center" />

                    <Dock model={this.dockItems} />

                    <Dialog visible={this.state.displayTerminal} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw' }} onHide={() => this.setState({ displayTerminal: false })} maximizable blockScroll={false}>
                        <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                    </Dialog>

                    <Dialog visible={this.state.displayFinder} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => this.setState({ displayFinder: false })} maximizable blockScroll={false}>
                        <Tree value={this.state.nodes} />
                    </Dialog>

                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={2} style={{ width: '400px' }}
                        circular fullScreen showThumbnails={false} showItemNavigators item={this.itemTemplate} />
                </div>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import PrimeReact from 'primereact/api';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { NodeService } from '../service/NodeService';
import { PhotoService } from '../service/PhotoService';
import './DockDemo.css';

export const DockDemo = () => {

    const [displayTerminal, setDisplayTerminal ] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const imgPath = 'images/dock';
    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={\`\${imgPath}/terminal.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={\`\${imgPath}/safari.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={\`\${imgPath}/github.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const dockBasicItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        }
    ];

    const menubarItems = [
        {
            label: 'Finder',
            className: 'menubar-root'
        },
        {
            label: 'File',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit'
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        }
        else {
            TerminalService.emit('clear');
        }
    }

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        const nodeService = new NodeService();
        const galleriaService = new PhotoService();

        galleriaService.getImages().then(data => setImages(data));
        nodeService.getTreeNodes().then(data => setNodes(data));

        PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            PrimeReact.appendTo = null;
        }
    },[])

    const start = <i className="pi pi-apple"></i>;
    const end = (
        <React.Fragment>
            <i className="pi pi-video" />
            <i className="pi pi-wifi" />
            <i className="pi pi-volume-up" />
            <span>Fri 13:07</span>
            <i className="pi pi-search" />
            <i className="pi pi-bars" />
        </React.Fragment>
    );

    return (
        <div className="dock-demo">
            <h5>Basic</h5>
            <div className="dock-window">
                <Dock model={dockBasicItems} position="bottom"/>
                <Dock model={dockBasicItems} position="top"/>
                <Dock model={dockBasicItems} position="left"/>
                <Dock model={dockBasicItems} position="right"/>
            </div>

            <h5>Advanced</h5>
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />

                <Dock model={dockItems} />

                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>

                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>

                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import PrimeReact from 'primereact/api';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { NodeService } from '../service/NodeService';
import { PhotoService } from '../service/PhotoService';
import './DockDemo.css';

export const DockDemo = () => {

    const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
    const [displayFinder, setDisplayFinder] = useState<boolean>(false);
    const [images, setImages] = useState<any>(null);
    const [nodes, setNodes] = useState<any>(null);
    const toast = useRef<any>(null);
    const toast2 = useRef<any>(null);
    const galleria = useRef<any>(null);

    const imgPath = 'images/dock';
    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={\`\${imgPath}/terminal.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={\`\${imgPath}/safari.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={\`\${imgPath}/github.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const dockBasicItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        }
    ];

    const menubarItems = [
        {
            label: 'Finder',
            className: 'menubar-root'
        },
        {
            label: 'File',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit'
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        }
        else {
            TerminalService.emit('clear');
        }
    }

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        const nodeService = new NodeService();
        const galleriaService = new PhotoService();

        galleriaService.getImages().then(data => setImages(data));
        nodeService.getTreeNodes().then(data => setNodes(data));

        PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            PrimeReact.appendTo = null;
        }
    },[])

    const start = <i className="pi pi-apple"></i>;
    const end = (
        <React.Fragment>
            <i className="pi pi-video" />
            <i className="pi pi-wifi" />
            <i className="pi pi-volume-up" />
            <span>Fri 13:07</span>
            <i className="pi pi-search" />
            <i className="pi pi-bars" />
        </React.Fragment>
    );

    return (
        <div className="dock-demo">
            <h5>Basic</h5>
            <div className="dock-window">
                <Dock model={dockBasicItems} position="bottom"/>
                <Dock model={dockBasicItems} position="top"/>
                <Dock model={dockBasicItems} position="left"/>
                <Dock model={dockBasicItems} position="right"/>
            </div>

            <h5>Advanced</h5>
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />

                <Dock model={dockItems} />

                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>

                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>

                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./DockDemo.css" />
        <script src="./NodeService.js"></script>
        <script src="./PhotoService.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/dock/dock.min.js"></script>
        <script src="https://unpkg.com/primereact/terminal/terminal.min.js"></script>
        <script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>
        <script src="https://unpkg.com/primereact/menubar/menubar.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const PrimeReact = primereact.api;
const { Dock } = primereact.dock;
const { Tooltip } = primereact.tooltip;
const { Dialog } = primereact.dialog;
const { Terminal } = primereact.terminal;
const { TerminalService } = primereact.terminalservice;
const { Galleria } = primereact.galleria;
const { Toast } = primereact.toast;
const { Tree } = primereact.tree;
const { Menubar } = primereact.menubar;

const DockDemo = () => {

    const [displayTerminal, setDisplayTerminal ] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const imgPath = 'images/dock';
    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={\`\${imgPath}/terminal.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={\`\${imgPath}/safari.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={\`\${imgPath}/github.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const dockBasicItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        }
    ];

    const menubarItems = [
        {
            label: 'Finder',
            className: 'menubar-root'
        },
        {
            label: 'File',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit'
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        }
        else {
            TerminalService.emit('clear');
        }
    }

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        const nodeService = new NodeService();
        const galleriaService = new PhotoService();

        galleriaService.getImages().then(data => setImages(data));
        nodeService.getTreeNodes().then(data => setNodes(data));

        PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            PrimeReact.appendTo = null;
        }
    },[])

    const start = <i className="pi pi-apple"></i>;
    const end = (
        <React.Fragment>
            <i className="pi pi-video" />
            <i className="pi pi-wifi" />
            <i className="pi pi-volume-up" />
            <span>Fri 13:07</span>
            <i className="pi pi-search" />
            <i className="pi pi-bars" />
        </React.Fragment>
    );

    return (
        <div className="dock-demo">
            <h5>Basic</h5>
            <div className="dock-window">
                <Dock model={dockBasicItems} position="bottom"/>
                <Dock model={dockBasicItems} position="top"/>
                <Dock model={dockBasicItems} position="left"/>
                <Dock model={dockBasicItems} position="right"/>
            </div>

            <h5>Advanced</h5>
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />

                <Dock model={dockItems} />

                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>

                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>

                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
                `
            }
        }

    const extFiles = {
        'demo/DockDemo.css': {
            content: `
.dock-demo .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('../../assets/images/dock/window.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.dock-demo .p-dock {
    z-index: 1000;
}
.dock-demo .dock-advanced .p-dialog-mask, .dock-demo .dock-advanced .p-galleria-mask, .dock-demo .dock-advanced .p-galleria-mask .p-galleria-item-nav, .dock-demo .dock-advanced .p-toast {
    position: absolute;
}
.dock-demo .dock-advanced .p-dialog .p-dialog-header {
    padding: 0.2rem;
}
.dock-demo .dock-advanced .p-dialog .p-dialog-content {
    padding: 0;
}
.dock-demo .dock-advanced .p-dialog p {
    margin-top: 0;
}
.dock-demo .dock-advanced .p-dialog .p-terminal {
    background-color: #212121;
    color: #fff;
    border: 0 none;
    min-height: 18rem;
    height: 100%;
}
.dock-demo .dock-advanced .p-dialog .p-terminal .p-terminal-command {
    color: #80cbc4;
}
.dock-demo .dock-advanced .p-dialog .p-terminal .p-terminal-prompt {
    color: #ffd54f;
}
.dock-demo .dock-advanced .p-dialog .p-terminal .p-terminal-response {
    color: #9fa8da;
}
.dock-demo .dock-advanced .p-dialog .p-tree {
    height: 100%;
    border-radius: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
}
.dock-demo .dock-advanced .p-toast {
    top: 20px;
}
.dock-demo .p-menubar {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;
}
.dock-demo .p-menubar .menubar-root {
    font-weight: bold;
    padding: 0 1rem;
}
.dock-demo .p-menubar .p-menuitem-link {
    padding: 0.5rem 0.75rem;
}
.dock-demo .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0.5rem 0.75rem;
}
.dock-demo .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    display: none;
}
.dock-demo .p-menubar .p-menubar-end span, .dock-demo .p-menubar .p-menubar-end i {
    padding: 0 0.75rem;
}
.dark-tooltip .p-tooltip .p-tooltip-arrow {
    border-top-color: var(--surface-900);
}
.dark-tooltip .p-tooltip .p-tooltip-text {
    background-color: var(--surface-900);
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
import { Dock } from 'primereact/dock';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/dock/dock.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Dock is a navigation component consisting of menuitems. It has a collection of additional options defined by the <i>model</i> property.</p>

<CodeHighlight lang="js">
{`
export const DockDemo = () => {

    const imgPath = 'images/dock';
    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        }
    ];

    return (
        <Dock model={items} />
    );
}
`}
</CodeHighlight>

                    <h5>MenuModel API</h5>
                    <p>Dock uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.</p>

                    <h5>Properties</h5>
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>model</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>MenuModel instance to define the action items.</td>
                                </tr>
                                <tr>
                                    <td>position</td>
                                    <td>string</td>
                                    <td>bottom</td>
                                    <td>Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.</td>
                                </tr>
                                <tr>
                                    <td>header</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of header element.</td>
                                </tr>
                                <tr>
                                    <td>footer</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of footer element.</td>
                                </tr>
                                <tr>
                                    <td>magnification</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Whether to allow scale animation.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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
                                    <td>p-dock</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-dock-list</td>
                                    <td>List of items.</td>
                                </tr>
                                <tr>
                                    <td>p-dock-item</td>
                                    <td>Each items in list.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Dock component uses the <i>menu</i> role with the <i>aria-orientation</i> and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a <i>presentation</i> role
                    whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled.</p>

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
                                    <td>Activates the focused menuitem.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Activates the focused menuitem.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves focus to the next menuitem in vertical layout.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves focus to the previous menuitem in vertical layout.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first menuitem in horizontal layout.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last menuitem in horizontal layout.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'DockDemo', sources: sources, service: 'NodeService, PhotoService', extFiles: extFiles })
                }

            </TabView>
        </div>
    )
})

export default DockDoc;

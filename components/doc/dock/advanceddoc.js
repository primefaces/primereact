import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import PrimeReact, { PrimeReactContext } from '@/components/lib/api/Api';
import { Dialog } from '@/components/lib/dialog/Dialog';
import { Dock } from '@/components/lib/dock/Dock';
import { Galleria } from '@/components/lib/galleria/Galleria';
import { Menubar } from '@/components/lib/menubar/Menubar';
import { Terminal } from '@/components/lib/terminal/Terminal';
import { TerminalService } from '@/components/lib/terminalservice/TerminalService';
import { Toast } from '@/components/lib/toast/Toast';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';
import { Tree } from '@/components/lib/tree/Tree';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { PhotoService } from '../../../service/PhotoService';

export function AdvancedDoc(props) {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);
    const context = useContext(PrimeReactContext);

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/safari.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src="https://primefaces.org/cdn/primereact/images/dock/github.svg" width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
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
                        }
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
                }
            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
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
                    label: 'Archive',
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
    };

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
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        PhotoService.getImages().then((data) => setImages(data));
        NodeService.getTreeNodes().then((data) => setNodes(data));
        if (context) context.setAppendTo('self');
        else PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            if (context) context.setAppendTo(null);
            else PrimeReact.appendTo = null;
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    const code = {
        basic: `
<Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
<Menubar model={menubarItems} start={start} end={end} />
<div className="dock-window dock-advanced">
    <Toast ref={toast} />
    <Toast ref={toast2} position="top-center" />
    <Dock model={dockItems} />
    <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
        <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
    </Dialog>
    <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
        <Tree value={nodes} />
    </Dialog>
    <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
        circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
</div>
`,
        javascript: `
import React, { useRef, useState, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { NodeService } from './service/NodeService';
import { PhotoService } from './service/PhotoService';
import './DockDemo.css';

export default function AdvanceDemo() {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/safari.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src="https://primefaces.org/cdn/primereact/images/dock/github.svg" width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
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
                        }
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
                }
            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
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
                    label: 'Archive',
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
    };

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
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);
        PhotoService.getImages().then((data) => setImages(data));
        NodeService.getTreeNodes().then((data) => setNodes(data));

        setAppendTo('self');

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            setAppendTo(null);
        };
    }, []);

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
        <div className="card dock-demo">
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />
                <Dock model={dockItems} />
                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>
                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef, useState, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { NodeService } from './service/NodeService';
import { PhotoService } from './service/PhotoService';
import './DockDemo.css';

export default function AdvanceDemo() {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef<Toast>(null);
    const toast2 = useRef<Toast>(null);
    const galleria = useRef<Galleria>(null);

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/safari.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src="https://primefaces.org/cdn/primereact/images/dock/github.svg" width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const menubarItems : MenuItem[] = [
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
                        }
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
                }
            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
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
                    label: 'Archive',
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
    };

    const commandHandler = (text: string) => {
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
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);
        PhotoService.getImages().then((data) => setImages(data));
        NodeService.getTreeNodes().then((data) => setNodes(data));

        setAppendTo('self');

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            setAppendTo(null);
        };
    }, []);

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
        <div className="card dock-demo">
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />
                <Dock model={dockItems} />
                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>
                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
        `,
        extFiles: {
            'DockDemo.css': `
/* DockDemo.css */

.dock-demo .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://primefaces.org/cdn/primereact/images/dock/window.jpg');
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
    };
    `,
            data: `
/* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...

/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
`
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A sample macOS implementation using various components.</p>
            </DocSectionText>
            <div className="card">
                <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
                <Menubar model={menubarItems} start={start} end={end} />
                <div className="dock-window dock-advanced" style={{ backgroundImage: 'url(/images/dock/window.jpg)' }}>
                    <Toast ref={toast} className="absolute" />
                    <Toast ref={toast2} className="absolute" />

                    <Dock model={dockItems} />

                    <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                        <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                    </Dialog>

                    <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                        <Tree value={nodes} />
                    </Dialog>

                    <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }} circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
                </div>
            </div>
            <DocSectionCode code={code} service={['PhotoService', 'NodeService']} />
        </>
    );
}

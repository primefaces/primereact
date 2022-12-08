import getConfig from 'next/config';
import React, { useEffect, useRef, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { PhotoService } from '../../../service/PhotoService';
import PrimeReact from '../../lib/api/Api';
import { Dialog } from '../../lib/dialog/Dialog';
import { Dock } from '../../lib/dock/Dock';
import { Galleria } from '../../lib/galleria/Galleria';
import { Menubar } from '../../lib/menubar/Menubar';
import { Terminal } from '../../lib/terminal/Terminal';
import { TerminalService } from '../../lib/terminalservice/TerminalService';
import { Toast } from '../../lib/toast/Toast';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Tree } from '../../lib/tree/Tree';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AdvanceDoc(props) {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';
    const imgPath = contextPath + '/images/dock';

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={`${imgPath}/finder.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={`${imgPath}/terminal.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={`${imgPath}/appstore.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={`${imgPath}/safari.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={`${imgPath}/photos.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={`${imgPath}/github.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={`${imgPath}/trash.png`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
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
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
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

        const nodeService = new NodeService();
        const galleriaService = new PhotoService();

        galleriaService.getImages().then((data) => setImages(data));
        nodeService.getTreeNodes().then((data) => setNodes(data));

        PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            PrimeReact.appendTo = null;
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
    const code = {
        basic: `
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
`,
        javascript: `
import React, { useRef, useState, useEffect } from 'react';
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

export default function AdvanceDoc() {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';
    const imgPath = contextPath + '/images/dock';

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={\`\${imgPath}/terminal.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={\`\${imgPath}/safari.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={\`\${imgPath}/github.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
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

        const nodeService = new NodeService();
        const galleriaService = new PhotoService();

        galleriaService.getImages().then((data) => setImages(data));
        nodeService.getTreeNodes().then((data) => setNodes(data));

        PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            PrimeReact.appendTo = null;
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
    )
}
        `,
        typescript: `
import React, { useRef, useState, useEffect } from 'react';
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
import { MenuItem } from 'primereact/menuitem';
import { NodeService } from '../service/NodeService';
import { PhotoService } from '../service/PhotoService';

export default function AdvanceDoc() {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef<Toast>(null);
    const toast2 = useRef<Toast>(null);
    const galleria = useRef<Galleria>(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';
    const imgPath = contextPath + '/images/dock';

    const dockItems: MenuItem[] = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={\`\${imgPath}/terminal.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={\`\${imgPath}/safari.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={\`\${imgPath}/github.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />,
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

        const nodeService = new NodeService();
        const galleriaService = new PhotoService();

        galleriaService.getImages().then((data) => setImages(data));
        nodeService.getTreeNodes().then((data) => setNodes(data));

        PrimeReact.appendTo = 'self';

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            PrimeReact.appendTo = null;
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
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>AdvanceDoc</p>
            </DocSectionText>
            <div className="card">
                <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

                <Menubar model={menubarItems} start={start} end={end} />
                <div className="dock-window dock-advanced" style={{ backgroundImage: `url(${contextPath}/images/dock/window.jpg)` }}>
                    <Toast ref={toast} />
                    <Toast ref={toast2} position="top-center" />

                    <Dock model={dockItems} />

                    <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                        <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                    </Dialog>

                    <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                        <Tree value={nodes} />
                    </Dialog>

                    <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }} circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

import React, { useState, useEffect, useRef } from 'react';
import PrimeReact from '../../components/lib/api/PrimeReact';
import { Dock } from '../../components/lib/dock/Dock';
import { Tooltip } from '../../components/lib/tooltip/Tooltip';
import { Dialog } from '../../components/lib/dialog/Dialog';
import { Terminal } from '../../components/lib/terminal/Terminal';
import { TerminalService } from '../../components/lib/terminalservice/TerminalService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { Toast } from '../../components/lib/toast/Toast';
import { Tree } from '../../components/lib/tree/Tree';
import { Menubar } from '../../components/lib/menubar/Menubar';
import { NodeService } from '../../service/NodeService';
import { PhotoService } from '../../service/PhotoService';
import DockDoc from '../../components/doc/dock';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DockDemo = () => {

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
            icon: () => <img alt="Finder" src={`${imgPath}/finder.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayFinder(true)
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src={`${imgPath}/terminal.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                setDisplayTerminal(true)
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={`${imgPath}/appstore.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src={`${imgPath}/safari.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={`${imgPath}/photos.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src={`${imgPath}/github.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={`${imgPath}/trash.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const dockBasicItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={`${imgPath}/finder.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={`${imgPath}/appstore.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={`${imgPath}/photos.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={`${imgPath}/trash.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />
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
        <div>
            <Head>
                <title>React Dock Component</title>
                <meta name="description" content="Dock is a navigation component consisting of menuitems." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Dock</h1>
                    <p>Dock is a navigation component consisting of menuitems.</p>
                </div>

                <DocActions github="dock/index.js" />
            </div>

            <div className="content-section implementation dock-demo">
                <h5>Basic</h5>
                <div className="dock-window" style={{backgroundImage: `url(${contextPath}/images/dock/window.jpg)`}}>
                    <Dock model={dockBasicItems} position="bottom" />
                    <Dock model={dockBasicItems} position="top" />
                    <Dock model={dockBasicItems} position="left" />
                    <Dock model={dockBasicItems} position="right" />
                </div>

                <h5>Advanced</h5>
                <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

                <Menubar model={menubarItems} start={start} end={end} />
                <div className="dock-window dock-advanced" style={{backgroundImage: `url(${contextPath}/images/dock/window.jpg)`}}>
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

            <DockDoc />
        </div>
    )
}

export default DockDemo;

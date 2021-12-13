import React, { Component } from 'react';
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
import { DockDoc } from '../../components/doc/dock';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class DockDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayTerminal: false,
            images: null,
            nodes: null
        };
        
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
        const imgPath = this.contextPath + '/images/dock';
        const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

        this.dockItems = [
            {
                label: 'Finder',
                icon: () => <img alt="Finder" src={`${imgPath}/finder.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.setState({ displayFinder: true });
                }
            },
            {
                label: 'Terminal',
                icon: () => <img alt="Finder" src={`${imgPath}/terminal.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.setState({ displayTerminal: true });
                }
            },
            {
                label: 'App Store',
                icon: () => <img alt="App Store" src={`${imgPath}/appstore.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast2.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
                }
            },
            {
                label: 'Safari',
                icon: () => <img alt="Finder" src={`${imgPath}/safari.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast2.show({ severity: 'warn', summary: 'Safari has stopped working' });
                }
            },
            {
                label: 'Photos',
                icon: () => <img alt="Photos" src={`${imgPath}/photos.svg`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.galleria.show();
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
                    this.toast.show({ severity: 'info', summary: 'Empty Trash' });
                }
            }
        ];

        this.dockBasicItems = [
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
                    <div className="dock-window" style={{backgroundImage: `url(${this.contextPath}/images/dock/window.jpg)`}}>
                        <Dock model={this.dockBasicItems} position="bottom"/>
                        <Dock model={this.dockBasicItems} position="top"/>
                        <Dock model={this.dockBasicItems} position="left"/>
                        <Dock model={this.dockBasicItems} position="right"/>
                    </div>

                    <h5>Advanced</h5>
                    <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

                    <Menubar model={this.menubarItems} start={start} end={end} />
                    <div className="dock-window dock-advanced" style={{backgroundImage: `url(${this.contextPath}/images/dock/window.jpg)`}}>
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

                <DockDoc />
            </div>
        )
    }
}

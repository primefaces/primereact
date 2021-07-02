import React, { Component } from 'react';
import { Dock } from '../../components/dock/Dock';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { Dialog } from '../../components/dialog/Dialog';
import { Terminal } from '../../components/terminal/Terminal';
import { TerminalService } from '../../components/terminalservice/TerminalService';
import { Galleria } from '../../components/galleria/Galleria';
import { Toast } from '../../components/toast/Toast';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { PhotoService } from '../service/PhotoService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { DockDoc } from './DockDoc';
import AppDemoActions from '../../AppDemoActions';
import './DockDemo.scss';

export class DockDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayTerminal: false,
            images: null,
            nodes: null
        };

        const imgPath = 'showcase/demo/images/dock';
        const imgErrorPath = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png';

        this.dockItems = [
            {
                label: 'Finder',
                icon: () => <img alt="Finder" src={`${imgPath}/finder.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.setState({ displayFinder: true });
                }
            },
            {
                label: 'Terminal',
                icon: () => <img alt="Finder" src={`${imgPath}/terminal.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.setState({ displayTerminal: true });
                }
            },
            {
                label: 'App Store',
                icon: () => <img alt="App Store" src={`${imgPath}/app-store.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast2.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
                }
            },
            {
                label: 'Chrome',
                icon: () => <img alt="Finder" src={`${imgPath}/chrome.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast2.show({ severity: 'warn', summary: 'Google Chrome has stopped working' });
                }
            },
            {
                label: 'Preview',
                icon: () => <img alt="Finder" src={`${imgPath}/preview.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.galleria.show();
                }
            },
            {
                label: 'System Preferences',
                icon: () => <img alt="Settings" src={`${imgPath}/settings.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
            },
            {
                label: 'Trash',
                icon: () => <img alt="trash" src={`${imgPath}/trash.png`} onError={(e) => e.target.src = imgErrorPath} width="100%" />,
                command: () => {
                    this.toast.show({ severity: 'info', summary: 'Empty Trash' });
                }
            }
        ];

        this.nodeService = new NodeService();
        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
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

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
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
    }

    componentWillUnmount() {
        TerminalService.off('command', this.commandHandler);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dock">
                        <h1>Dock</h1>
                        <p>Dock is a navigation component consisting of menuitems.</p>
                    </AppInlineHeader>

                    <AppDemoActions github="dock/DockDemo.js" />
                </div>

                <div className="content-section implementation dock-demo">
                    <Toast ref={(el) => this.toast = el} />
                    <Toast ref={(el) => this.toast2 = el} position="top-center" />

                    <Tooltip target=".p-dock-action" my="center+15 bottom" at="center top" showDelay={150} />
                    <div className="dock-window">
                        <Dock model={this.dockItems} />
                    </div>

                    <Dialog visible={this.state.displayTerminal} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw' }} onHide={() => this.setState({ displayTerminal: false })}
                        maximizable appendTo="self">
                        <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                    </Dialog>

                    <Dialog visible={this.state.displayFinder} breakpoints={{ '960px': '50vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => this.setState({ displayFinder: false })}
                        maximizable appendTo="self">
                        <Tree value={this.state.nodes} />
                    </Dialog>

                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        circular fullScreen showItemNavigators showThumbnails={false} item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                </div>

                <DockDoc />
            </div>
        )
    }
}

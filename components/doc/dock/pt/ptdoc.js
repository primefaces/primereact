import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Dock } from '@/components/lib/dock/Dock';

export function PTDoc(props) {
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    const code = {
        basic: `
<Dock
    model={items}
    position={"bottom"}
    pt={{
        container: {
            style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
        }
    }}
/>
`,
        javascript: `
import React from 'react';
import { Dock } from 'primereact/dock';
import './DockDemo.css';

export default function PTDemo() {
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    return (
        <div className="card dock-demo">
            <div className="dock-window" style={{ backgroundImage: 'url(/images/dock/window.jpg)' }}>
                <Dock
                    model={items}
                    position={"bottom"}
                    pt={{
                        container: {
                            style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                        }
                    }}
                />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Dock } from 'primereact/dock';
import { MenuItem } from 'primereact/menuitem';
import './DockDemo.css';

export default function PTDemo() {
    const items: MenuItem[] = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    return (
        <div className="card dock-demo">
            <div className="dock-window" style={{ backgroundImage: 'url(/images/dock/window.jpg)' }}>
                <Dock
                    model={items}
                    position={"bottom"}
                    pt={{
                        container: {
                            style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                        }
                    }}
                />
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
    `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Menu requires a collection of menuitems as its <i>model</i>. Default location is <i>bottom</i> and other sides are also available when defined with the <i>position</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="dock-window" style={{ backgroundImage: 'url(/images/dock/window.jpg)' }}>
                    <Dock
                        model={items}
                        position={'bottom'}
                        pt={{
                            container: {
                                style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                            }
                        }}
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

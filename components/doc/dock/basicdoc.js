import { useState } from 'react';
import { Dock } from '../../lib/dock/Dock';
import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [position, setPosition] = useState('bottom');
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
<Dock model={items} position="{position}" />
`,
        javascript: `
import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function BasicDemo() {
    const [position, setPosition] = useState('bottom');    
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

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { MenuItem } from 'primereact/menuitem';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function BasicDemo() {
    const [position, setPosition] = useState<string>('bottom');    
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

    const positions: Array<{label: string, value: string}> = [
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

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
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
                <div className="flex flex-wrap gap-3 mb-5">
                    {positions.map((option) => {
                        const { value, label } = option;

                        return (
                            <div className="flex align-items-center" key={label}>
                                <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                                <label htmlFor={label} className="ml-2">
                                    {label}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="dock-window" style={{ backgroundImage: 'url(/images/dock/window.jpg)' }}>
                    <Dock model={items} position={position} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

import getConfig from 'next/config';
import { Dock } from '../../lib/dock/Dock';
import { useState } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { RadioButton } from '../../lib/radiobutton/RadioButton';

export function BasicDoc(props) {
    const [selectedOptionValue, setSelectedOptionValue] = useState('bottom');

    const dockBasicItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={`${imgPath}/finder.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={`${imgPath}/appstore.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={`${imgPath}/photos.svg`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={`${imgPath}/trash.png`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        }
    ];
    const imgPath = 'images/dock';
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const onRadioButtonChange = (option) => {
        setSelectedOptionValue(option.value);
    };

    const demoOptions = [
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
<Dock model={dockBasicItems} position="${selectedOptionValue}" />
`,
        javascript: `
import { Dock } from 'primereact/dock';
import './DockDemo.css';

export default function BasicDoc() {
    const dockBasicItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        }
    ];
    const imgPath = 'images/dock';

    return (
        <div className="dock-window">
            <Dock model={dockBasicItems} position="${selectedOptionValue}" />
        </div>
    )
}
        `,
        typescript: `
import { Dock } from 'primereact/dock';
import { MenuItem } from 'primereact/menuitem';
import './DockDemo.css';

export default function BasicDoc() {
    const dockBasicItems: MenuteItem[] = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src={\`\${imgPath}/finder.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src={\`\${imgPath}/appstore.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src={\`\${imgPath}/photos.svg\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src={\`\${imgPath}/trash.png\`} onError={(e) => (e.target.src = imgErrorPath)} width="100%" />
        }
    ];
    const imgPath = 'images/dock';

    return (
        <div className="dock-window">
            <Dock model={dockBasicItems} position="${selectedOptionValue}" />
        </div>
    )
}
        `,
        css: `
/* DockDemo.css */

.dock-demo {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }

    .dock-advanced {
        .p-dialog-mask,
        .p-galleria-mask,
        .p-galleria-mask .p-galleria-item-nav,
        .p-toast {
            position: absolute;
        }

        .p-dialog {
            .p-dialog-header {
                padding: .2rem;
            }

            .p-dialog-content {
                padding: 0;
            }

            p {
                margin-top: 0;
            }

            .p-terminal {
                background-color: #212121;
                color: #ffffff;
                border: 0 none;
                min-height: 18rem;
                height: 100%;

                .p-terminal-command {
                    color: #80CBC4;
                }

                .p-terminal-prompt {
                    color: #FFD54F;
                }

                .p-terminal-response {
                    color: #9FA8DA;
                }
            }

            .p-tree {
                height: 100%;
                border-radius: 0;
                border-left-width: 0;
                border-right-width: 0;
                border-bottom-width: 0;
            }
        }

        .p-toast {
            top: 20px;
        }
    }

    .p-menubar {
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 0;

        .menubar-root {
            font-weight: bold;
            padding: 0 1rem;
        }

        .p-menuitem-link {
            padding: 0.5rem .75rem;
        }

        .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
            padding: 0.5rem .75rem;

            > .p-submenu-icon {
                display: none;
            }
        }

        .p-menubar-end {
            span, i {
                padding: 0 .75rem;
            }
        }
    }
}

.dark-tooltip {
    .p-tooltip {
        .p-tooltip-arrow {
            border-top-color: var(--surface-900);
        }

        .p-tooltip-text {
            background-color: var(--surface-900);
        }
    }
}    
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Dock is a navigation component consisting of menuitems. It has a collection of additional options defined by the model property.</p>
            </DocSectionText>
            <div className="card mt-3 flex flex-column justify-content-center">
                <div className="flex flex-row justify-content-center align-items-center flex-wrap">
                    <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
                        {demoOptions.map((option) => {
                            const { value, label } = option;

                            return (
                                <div className="mr-4" key={label}>
                                    <RadioButton value={label} onChange={() => onRadioButtonChange(option)} checked={selectedOptionValue === value} />
                                    <label htmlFor={label} className="ml-2">
                                        {label} Size
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="dock-window" style={{ backgroundImage: `url(${contextPath}/images/dock/window.jpg)` }}>
                    <Dock model={dockBasicItems} position={selectedOptionValue} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

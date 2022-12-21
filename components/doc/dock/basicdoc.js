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

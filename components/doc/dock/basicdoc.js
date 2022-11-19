import getConfig from 'next/config';
import { Dock } from '../../lib/dock/Dock';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
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

    const code = {
        basic: `
<Dock model={dockBasicItems} position="bottom" />
<Dock model={dockBasicItems} position="top" />
<Dock model={dockBasicItems} position="left" />
<Dock model={dockBasicItems} position="right" />
`,
        javascript: `
import { Dock } from 'primereact/dock';

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
            <Dock model={dockBasicItems} position="bottom" />
            <Dock model={dockBasicItems} position="top" />
            <Dock model={dockBasicItems} position="left" />
            <Dock model={dockBasicItems} position="right" />
        </div>
    )
}
        `,
        typescript: `
import { Dock } from 'primereact/dock';

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
            <Dock model={dockBasicItems} position="bottom" />
            <Dock model={dockBasicItems} position="top" />
            <Dock model={dockBasicItems} position="left" />
            <Dock model={dockBasicItems} position="right" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Dock is a navigation component consisting of menuitems. It has a collection of additional options defined by the model property.</p>
            </DocSectionText>
            <div className="card ">
                <div className="dock-window" style={{ backgroundImage: `url(${contextPath}/images/dock/window.jpg)` }}>
                    <Dock model={dockBasicItems} position="bottom" />
                    <Dock model={dockBasicItems} position="top" />
                    <Dock model={dockBasicItems} position="left" />
                    <Dock model={dockBasicItems} position="right" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

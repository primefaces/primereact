import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function IconsDoc(props) {
    const customSvgIcon = () => (
        <svg width="1em" height="1em" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M25 5v14.113a.888.888 0 0 1-.887.887H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H24a1 1 0 0 1 1 1ZM10 12h6M13 9v6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const code = {
        basic: `
<Button icon="pi pi-check" />
<Button label="Left Icon" icon="pi pi-check" />
<Button label="Right Icon" icon="pi pi-check" iconPos="right" />
<Button label="SVG Icon" icon={customSvgIcon} iconPos="right" />
        `,
        javascript: `
import React from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function IconsDoc() {

    const customSvgIcon = () => (
        <svg width="1em" height="1em" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M25 5v14.113a.888.888 0 0 1-.887.887H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H24a1 1 0 0 1 1 1ZM10 12h6M13 9v6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button icon="pi pi-check" />
            <Button label="Left Icon" icon="pi pi-check" />
            <Button label="Right Icon" icon="pi pi-check" iconPos="right" />
            <Button label="SVG Icon" icon={customSvgIcon} iconPos="right" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function IconsDoc() {

    const customSvgIcon = () => (
        <svg width="1em" height="1em" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M25 5v14.113a.888.888 0 0 1-.887.887H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H24a1 1 0 0 1 1 1ZM10 12h6M13 9v6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button icon="pi pi-check" />
            <Button label="Left Icon" icon="pi pi-check" />
            <Button label="Right Icon" icon="pi pi-check" iconPos="right" />
            <Button label="SVG Icon" icon={customSvgIcon} iconPos="right" />
        </div>
    )
}
        `,
        extFiles: {
            'ButtonDemo.css': `
/* ButtonDemo.css */

.button-demo .p-button {
    margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.
                </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button icon="pi pi-check" />
                <Button label="Left Icon" icon="pi pi-check" />
                <Button label="Right Icon" icon="pi pi-check" iconPos="right" />
                <Button label="SVG Icon" icon={customSvgIcon} iconPos="right" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

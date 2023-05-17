import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
</Button>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
            </Button>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
            </Button>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom content inside a button is defined as children.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
                </Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

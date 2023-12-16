import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function LinkDoc(props) {
    const code = {
        basic: `
<Button label="Submit" link />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" link />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" link />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A button can be rendered as a link as well.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Submit" link />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

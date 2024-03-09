import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function LinkDoc(props) {
    const code = {
        basic: `
<Button label="Link" link />
<a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
    Navigate
</a>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Link" link />
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Navigate
            </a>

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
            <Button label="Link" link />
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Navigate
            </a>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A button can be rendered as a link when the <i>link</i> property is present. On the other hand, adding <i>.p-button</i> class to an anchor element displays the link as a button.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Link" link />
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                    Navigate
                </a>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

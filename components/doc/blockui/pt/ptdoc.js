import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BlockUI } from '@/components/lib/blockui/BlockUI';
import { Button } from '@/components/lib/button/Button';
import { useState } from 'react';

export function PTDoc(props) {
    const [blocked, setBlocked] = useState(false);
    const code = {
        basic: `
<BlockUI blocked={blocked} 
    pt={{ root: { className: 'surface-ground p-2 border-round-sm' } }}>
</BlockUI>
        `,
        javascript: `
import React, { useState }  from 'react'; 
import { BlockUI } from 'primereact/blockui';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const [blocked, setBlocked] = useState(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)}></Button>
            </div>
            <BlockUI blocked={blocked} 
                pt={{ root: { className: 'surface-ground p-2 border-round-sm' } }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </BlockUI>
        </div>
    )
}
        `,
        typescript: `
import React, { useState }  from 'react'; 
import { BlockUI } from 'primereact/blockui';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)}></Button>
            </div>
            <BlockUI blocked={blocked} 
                pt={{ root: { className: 'surface-ground p-2 border-round-sm' } }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </BlockUI>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="mb-3">
                    <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                    <Button label="Unblock" onClick={() => setBlocked(false)}></Button>
                </div>
                <BlockUI blocked={blocked} pt={{ root: { className: 'surface-ground p-2 border-round-sm' } }}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </BlockUI>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

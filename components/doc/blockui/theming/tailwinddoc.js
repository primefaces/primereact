import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {          
    blockui: {
        root: 'relative',
        mask: 'bg-black/40'
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const [blocked, setBlocked] = useState(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)}></Button>
            </div>
            <BlockUI blocked={blocked}>
                <Panel header="Basic">
                    <p className="text-gray-700 dark:text-white/80 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
        </div>
    );
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the{' '}
                    <Link href="/tailwind">Tailwind Customization</Link> section for an example.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}

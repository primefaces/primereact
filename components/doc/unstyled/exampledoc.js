import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import Link from 'next/link';

export function ExampleDoc(props) {
    const code = {
        basic: `
<Button label="Submit" icon="pi pi-check" unstyled
    pt={{
        root: { className: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
        label: { className: 'text-white font-bold text-xl' },
        icon: 'text-white text-2xl' // OR { className: 'text-white text-2xl' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function ExampleDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" icon="pi pi-check" unstyled
                pt={{
                    root: { className: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
                    label: { className: 'text-white font-bold text-xl' },
                    icon: 'text-white text-2xl' // OR { className: 'text-white text-2xl' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function ExampleDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" icon="pi pi-check" unstyled
                pt={{
                    root: { className: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
                    label: { className: 'text-white font-bold text-xl' },
                    icon: 'text-white text-2xl' // OR { className: 'text-white text-2xl' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Here is a sample that provides a style using PrimeFlex CSS library. Before beginning, head over to the pass through section <Link href="/button">button</Link> documentation to learn more about the components internals. We'll be
                    using the <i>root</i>, <i>label</i> and <i>icon</i> elements to add a custom style.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button
                    label="Submit"
                    icon="pi pi-check"
                    unstyled
                    pt={{
                        root: { className: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
                        label: { className: 'text-white font-bold text-xl' },
                        icon: 'text-white text-2xl'
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

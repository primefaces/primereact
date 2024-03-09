import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    editor: {
        toolbar: {
            className: classNames('bg-gray-100 rounded-tr-md rounded-tl-md', 'border border-gray-300 box-border font-sans px-2 py-1')
        },
        formats: {
            className: classNames('inline-block align-middle', 'mr-4')
        },
        header: {
            className: classNames('text-gray-700 inline-block float-left text-base font-medium h-6 relative align-middle', 'w-28', 'border-0 text-gray-600')
        }
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function UnstyledDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
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
                <DocSectionCode code={code2} embedded dependencies={{ quill: '1.3.7' }} />
            </DocSectionText>
        </>
    );
}

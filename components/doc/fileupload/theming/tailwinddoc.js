import Link from 'next/link';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    fileupload: {
        input: 'hidden',
        buttonbar: {
            className: classNames('flex flex-wrap', 'bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0')
        },
        chooseButton: {
            className: classNames('text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative')
        },
        chooseIcon: 'mr-2 inline-block',
        chooseButtonLabel: 'flex-1 font-bold',
        uploadbutton: {
            icon: 'mr-2'
        },
        cancelbutton: {
            icon: 'mr-2'
        },
        content: {
            className: classNames('relative', 'bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg')
        },
        file: {
            className: classNames('flex items-center flex-wrap', 'p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2', 'last:mb-0')
        },
        thumbnail: 'shrink-0',
        fileName: 'mb-2',
        fileSize: 'mr-2',
        uploadicon: 'mr-2'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function UnstyledDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
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
                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}

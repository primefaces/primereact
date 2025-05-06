'use client';
import { cn } from '@primeuix/utils';
import { useState } from 'react';
const DocCopyClipboard = ({ content }: { content: string }) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };
    return (
        <button onClick={handleCopy} className="relative w-8 h-8 flex items-center justify-center rounded-md bg-surface-800 hover:bg-surface-700 text-surface-100 transition-colors duration-150 cursor-pointer" title="Copy code">
            <i className={cn('pi pi-copy absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-100', isCopied && 'opacity-0 scale-0')}></i>
            <i className={cn('pi pi-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 scale-0', isCopied && 'opacity-100 scale-100')}></i>
        </button>
    );
};

export default DocCopyClipboard;

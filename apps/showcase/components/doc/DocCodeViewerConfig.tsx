'use client';

import { cn } from '@primeuix/utils';
import { useState } from 'react';
import { useDocComponentViewer } from './DocComponentViewer';
interface DocCodeViewerConfigProps {
    rawString?: string;
    stackblitz?: string;
}

const DocCodeViewerConfig = ({ rawString, stackblitz }: DocCodeViewerConfigProps) => {
    const { isExpanded, setIsExpanded } = useDocComponentViewer();
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
        if (rawString) {
            navigator.clipboard.writeText(rawString);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };
    return (
        <div className="absolute flex items-center top-3 right-3 p-0.5 rounded-[10px] bg-white/10 backdrop-blur-[6px] border border-[hsla(0,0%,100%,.1)] group-hover/pre:opacity-100 opacity-0 transition-opacity duration-150 ">
            <DocCodeViewerConfigButton onClick={() => setIsExpanded(!isExpanded)} className="group-data-[component-viewer=true]/component-viewer:block hidden">
                <i className={cn('pi', isExpanded ? 'pi-arrow-down-left-and-arrow-up-right-to-center' : 'pi-arrow-up-right-and-arrow-down-left-from-center')}></i>
            </DocCodeViewerConfigButton>
            <DocCodeViewerConfigButton>
                <i className="pi pi-bolt"></i>
            </DocCodeViewerConfigButton>
            {rawString && (
                <DocCodeViewerConfigButton onClick={handleCopy}>
                    <i className={cn('pi pi-copy', isCopied && 'pi pi-check !text-sm')}></i>
                </DocCodeViewerConfigButton>
            )}
        </div>
    );
};

export default DocCodeViewerConfig;

export const DocCodeViewerConfigButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
    return <button className={cn('w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/10 hover:backdrop-blur-[6px] text-surface-300 transition-colors duration-150 cursor-pointer [&_i]:leading-noe', className)} {...props} />;
};

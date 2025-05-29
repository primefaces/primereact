'use client';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const DocCodeViewer = ({ className, children, __rawString__, __spec__, ...props }: React.HTMLAttributes<HTMLPreElement> & { __rawString__?: string; __spec__?: string }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCopy = () => {
        if (__rawString__) {
            navigator.clipboard.writeText(__rawString__);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };

    return (
        <div className="group/pre relative scheme-dark mb-2" dir="ltr">
            <pre className={cn('relative rounded-xl p-5 overflow-auto border border-surface-800 !bg-surface-950 transition-[max-height] duration-150', isExpanded ? 'max-h-[400px]' : 'max-h-[160px]', className)} {...props}>
                {children}
            </pre>
            <div className="absolute flex items-center top-3 right-3 p-0.5 rounded-[10px] bg-white/10 backdrop-blur-[6px] border border-[hsla(0,0%,100%,.1)] group-hover/pre:opacity-100 opacity-0 transition-opacity duration-150 ">
                {__spec__ === 'DocComponentViewer' && (
                    <>
                        <DocCodeViewerConfigButton onClick={() => setIsExpanded(!isExpanded)}>
                            <i className={cn('pi', isExpanded ? 'pi-arrow-down-left-and-arrow-up-right-to-center' : 'pi-arrow-up-right-and-arrow-down-left-from-center')}></i>
                        </DocCodeViewerConfigButton>
                        <DocCodeViewerConfigButton>
                            <i className="pi pi-bolt"></i>
                        </DocCodeViewerConfigButton>
                    </>
                )}
                {__rawString__ && (
                    <DocCodeViewerConfigButton onClick={handleCopy}>
                        <i className={cn('pi pi-copy', isCopied && 'pi pi-check !text-sm')}></i>
                    </DocCodeViewerConfigButton>
                )}
            </div>
        </div>
    );
};

export default DocCodeViewer;

export const DocCodeViewerConfigButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
    return <button className={cn('w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/10 hover:backdrop-blur-[6px] text-surface-300 transition-colors duration-150 cursor-pointer [&_i]:leading-noe', className)} {...props} />;
};

'use client';
import { cn } from '@primeuix/utils';
import * as React from 'react';
import { useState } from 'react';

const DocCodeViewer = ({
    className,
    children,
    __syntaxSource__,
    __full__,
    __spec__,
    __npmInstall__,
    __yarnInstall__,
    __pnpmInstall__,
    __bunInstall__,
    ...props
}: React.HTMLAttributes<HTMLPreElement> & { __syntaxSource__?: string; __full__?: string; __spec__?: string; __npmInstall__?: string; __yarnInstall__?: string; __pnpmInstall__?: string; __bunInstall__?: string }) => {
    const isNpmInstall = Boolean(
        (typeof __npmInstall__ !== 'undefined' && __npmInstall__) ||
            (typeof __yarnInstall__ !== 'undefined' && __yarnInstall__) ||
            (typeof __pnpmInstall__ !== 'undefined' && __pnpmInstall__) ||
            (typeof __bunInstall__ !== 'undefined' && __bunInstall__)
    );

    const [isCopied, setIsCopied] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCopy = () => {
        if (__syntaxSource__) {
            navigator.clipboard.writeText(__syntaxSource__);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };

    if (isNpmInstall) {
        return <DocInstallCommand __npmInstall__={__npmInstall__} __yarnInstall__={__yarnInstall__} __pnpmInstall__={__pnpmInstall__} __bunInstall__={__bunInstall__} />;
    }

    return (
        <div className="group/pre relative scheme-dark mb-2" dir="ltr">
            <pre
                className={cn(
                    'relative rounded-xl p-4 overflow-auto border border-transparent dark:border-surface-800 !bg-surface-950 transition-[max-height] duration-150',
                    __full__ === 'true' ? undefined : __spec__ !== 'DocDemoViewer' ? 'max-h-[calc(50vh-10rem)]' : isExpanded ? 'max-h-[400px]' : 'max-h-[160px]',
                    className
                )}
                {...props}
            >
                {children}
            </pre>
            <div className="absolute flex items-center top-3 right-3 p-0.5 rounded-[10px] bg-white/10 backdrop-blur-[6px] border border-[hsla(0,0%,100%,.1)] group-hover/pre:opacity-100 opacity-0 transition-opacity duration-150 ">
                {__spec__ === 'DocDemoViewer' && (
                    <>
                        <DocCodeViewerConfigButton onClick={() => setIsExpanded(!isExpanded)}>
                            <i className={cn('pi', isExpanded ? 'pi-arrow-down-left-and-arrow-up-right-to-center' : 'pi-arrow-up-right-and-arrow-down-left-from-center')}></i>
                        </DocCodeViewerConfigButton>
                        <DocCodeViewerConfigButton>
                            <i className="pi pi-bolt"></i>
                        </DocCodeViewerConfigButton>
                    </>
                )}
                {__syntaxSource__ && (
                    <DocCodeViewerConfigButton disabled={isCopied} onClick={handleCopy}>
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

const DocInstallCommand = ({ __npmInstall__, __yarnInstall__, __pnpmInstall__, __bunInstall__ }: { __npmInstall__?: string; __yarnInstall__?: string; __pnpmInstall__?: string; __bunInstall__?: string }) => {
    const [selectedInstall, setSelectedInstall] = useState<'npm' | 'yarn' | 'pnpm' | 'bun'>('npm');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        if (installCommands[selectedInstall]) {
            navigator.clipboard.writeText(installCommands[selectedInstall]);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };

    const installCommands = React.useMemo(() => {
        return {
            npm: __npmInstall__,
            yarn: __yarnInstall__,
            pnpm: __pnpmInstall__,
            bun: __bunInstall__
        };
    }, [__npmInstall__, __yarnInstall__, __pnpmInstall__, __bunInstall__]);

    return (
        <div className="group/pre overflow-hidden relative scheme-dark mb-2 rounded-xl border border-surface-800 !bg-surface-950" dir="ltr">
            <div className="flex items-center gap-1 border-b border-surface-800 px-2 py-2 bg-surface-900">
                {Object.keys(installCommands).map((key) => (
                    <button
                        key={key}
                        className={cn('px-2 py-1 rounded-md cursor-pointer transition-colors duration-150', selectedInstall === key ? '!text-surface-0 bg-surface-700/90' : 'hover:bg-surface-700/50 text-surface-300')}
                        onClick={() => setSelectedInstall(key as 'npm' | 'yarn' | 'pnpm' | 'bun')}
                    >
                        {key}
                    </button>
                ))}
            </div>
            <div className="relative p-4">
                <pre className={cn('relative overflow-auto')}>
                    <code className="font-mono text-surface-200" data-language="bash">
                        {installCommands[selectedInstall]}
                    </code>
                </pre>
                <div className="absolute flex items-center top-1.5 right-2 p-0.5 rounded-[10px] bg-white/10 backdrop-blur-[6px] border border-[hsla(0,0%,100%,.1)]  ">
                    <DocCodeViewerConfigButton disabled={isCopied} onClick={handleCopy}>
                        <i className={cn('pi pi-copy', isCopied && 'pi pi-check !text-sm')}></i>
                    </DocCodeViewerConfigButton>
                </div>
            </div>
        </div>
    );
};

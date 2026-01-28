'use client';

import { useControlledState, usePresence } from '@primereact/hooks';
import { TimesIcon } from '@primereact/icons';
import { cn } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useFocusTrap } from '../../../../../packages/@primereact/headless/src/focustrap/useFocusTrap';
import { Placer, PlacerAnchor, PlacerArrow, PlacerContent, usePlacerContext } from './placer';

interface PopoverContextValue {
    open: boolean;
    setOpen: (open: boolean, originalEvent?: Event) => void;
    presence: ReturnType<typeof usePresence>;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
    const ctx = React.useContext(PopoverContext);

    if (!ctx) throw new Error('Popover components must be used within <Popover />');

    return ctx;
}

interface PopoverProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    children: React.ReactNode;
}

function Popover({ open, defaultOpen = false, onOpenChange, children }: PopoverProps) {
    const [openState, setOpenState] = useControlledState({
        value: open,
        defaultValue: defaultOpen,
        onChange: onOpenChange
    });

    const presence = usePresence(!!openState);

    function setOpen(open: boolean, originalEvent?: Event) {
        setOpenState([
            open,
            {
                originalEvent,
                open
            }
        ]);
    }

    return (
        <Placer>
            <PopoverContext.Provider
                value={{
                    open: !!openState,
                    setOpen,
                    presence
                }}
            >
                {children}
            </PopoverContext.Provider>
        </Placer>
    );
}

function PopoverTrigger({ className, ...props }: React.ComponentProps<typeof PlacerAnchor>) {
    const { open, setOpen } = usePopoverContext();

    return (
        <PlacerAnchor
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={(e) => {
                props.onClick?.(e);

                if (e.defaultPrevented) return;

                setOpen(!open, e.nativeEvent);
            }}
            className={cn(
                ' px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium',
                className
            )}
            {...props}
        />
    );
}

function PopoverPortal({ children }: { children: React.ReactNode }) {
    return <Portal>{children}</Portal>;
}

function PopoverClose({ className, children, ...props }: React.ComponentProps<'button'>) {
    const { setOpen } = usePopoverContext();

    return (
        <button
            onClick={(e) => setOpen(false, e.nativeEvent)}
            className={cn(
                'size-6 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium',
                className
            )}
            {...props}
        >
            {children ?? <TimesIcon className="size-3!" />}
        </button>
    );
}

function PopoverArrow({ className, ...props }: React.ComponentProps<typeof PlacerArrow>) {
    return (
        <PlacerArrow
            className={cn(
                `
                popover-arrow absolute border border-surface bg-surface-0 dark:bg-surface-900 size-3 rounded-bl-[3px] [clip-path:polygon(0_100%,0_0,100%_100%)] 
                data-[side=top]:-rotate-45 data-[side=bottom]:rotate-135 data-[side=right]:rotate-45 data-[side=left]:-rotate-135 
                data-[side=top]:-bottom-1.5
                data-[side=bottom]:-top-1.5
                data-[side=right]:-left-1.5
                data-[side=left]:-right-1.5
                `,
                className
            )}
            {...props}
        />
    );
}

function PopoverContent({ className, ...props }: React.ComponentProps<'div'>) {
    const {
        presence: { present, exiting, mounted, ref }
    } = usePopoverContext();
    const { hiddenElements } = useFocusTrap({ container: ref.current, autoFocus: true });

    const isVisible = present && mounted && !exiting;

    return (
        <>
            {hiddenElements[0]}
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                role="dialog"
                className={cn(
                    'relative p-3 bg-surface-0 dark:bg-surface-900 rounded-lg border border-surface shadow-xs transition-[opacity,transform,scale] opacity-0 data-open:opacity-100 scale-[0.93] data-open:scale-100 duration-150 ease-out origin-(--transform-origin)',
                    className
                )}
                {...(isVisible && { 'data-open': '' })}
                {...props}
            />
            {hiddenElements[1]}
        </>
    );
}

function PopoverPositioner({ className, ...props }: React.ComponentProps<typeof PlacerContent>) {
    const {
        open,
        setOpen,
        presence: { present }
    } = usePopoverContext();
    const { triggerRef, contentRef } = usePlacerContext();

    React.useEffect(() => {
        if (!open) return;

        const onClick = (e: MouseEvent) => {
            if (!contentRef.current?.contains(e.target as Node) && !triggerRef.current?.contains(e.target as Node)) {
                setOpen(false, e);
            }
        };

        document.addEventListener('mousedown', onClick);

        return () => {
            document.removeEventListener('mousedown', onClick);
        };
    }, [contentRef, open, setOpen, triggerRef]);

    if (!present) return null;

    return <PlacerContent className={cn('popover-positioner z-2000', className)} {...props} />;
}

export { Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverPositioner, PopoverTrigger };

'use client';
import { useControlledState, usePresence } from '@primereact/hooks';
import { cn } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { Placer, PlacerAnchor, PlacerArrow, PlacerContent, usePlacerContext } from './placer';

interface TooltipContextValue {
    open: boolean;
    setOpen: (open: boolean, originalEvent?: Event) => void;
    scheduleOpen: (originalEvent?: Event) => void;
    cancelOpen: () => void;
    triggerId: string;
    contentId: string;
    presence: ReturnType<typeof usePresence>;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

function useTooltipContext() {
    const ctx = React.useContext(TooltipContext);

    if (!ctx) throw new Error('Tooltip components must be used within <Tooltip />');

    return ctx;
}

interface TooltipProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    openDelay?: number;
    children: React.ReactNode;
}

function Tooltip({ open, defaultOpen = false, onOpenChange, openDelay = 700, children }: TooltipProps) {
    const [openState, setOpenState] = useControlledState({
        value: open,
        defaultValue: defaultOpen,
        onChange: onOpenChange
    });

    const presence = usePresence(!!openState);
    const triggerId = React.useId();
    const contentId = React.useId();
    const openTimeoutRef = React.useRef<number | null>(null);

    function setOpen(nextOpen: boolean, originalEvent?: Event) {
        setOpenState([
            nextOpen,
            {
                originalEvent,
                open: nextOpen
            }
        ]);
    }

    function cancelOpen() {
        if (openTimeoutRef.current) {
            window.clearTimeout(openTimeoutRef.current);
            openTimeoutRef.current = null;
        }
    }

    function scheduleOpen(originalEvent?: Event) {
        cancelOpen();
        openTimeoutRef.current = window.setTimeout(() => {
            setOpen(true, originalEvent);
        }, openDelay);
    }

    React.useEffect(() => {
        return () => {
            cancelOpen();
        };
    }, []);

    return (
        <Placer>
            <TooltipContext.Provider
                value={{
                    open: !!openState,
                    setOpen,
                    scheduleOpen,
                    cancelOpen,
                    triggerId,
                    contentId,
                    presence
                }}
            >
                {children}
            </TooltipContext.Provider>
        </Placer>
    );
}

function TooltipTrigger({ className, ...props }: React.ComponentProps<typeof PlacerAnchor>) {
    const { open, setOpen, scheduleOpen, cancelOpen, contentId, triggerId } = useTooltipContext();
    const { contentRef } = usePlacerContext();

    return (
        <PlacerAnchor
            id={triggerId}
            aria-describedby={contentId}
            onMouseEnter={(e) => {
                props.onMouseEnter?.(e);
                scheduleOpen(e.nativeEvent);
            }}
            onMouseLeave={(e) => {
                props.onMouseLeave?.(e);

                const related = e.relatedTarget as Node | null;

                if (related && contentRef.current?.contains(related)) return;

                cancelOpen();
                setOpen(false, e.nativeEvent);
            }}
            onFocus={(e) => {
                props.onFocus?.(e);
                scheduleOpen(e.nativeEvent);
            }}
            onBlur={(e) => {
                props.onBlur?.(e);
                cancelOpen();
                setOpen(false, e.nativeEvent);
            }}
            className={cn(
                ' px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium',
                className
            )}
            {...(open && { 'data-open': '' })}
            {...props}
        />
    );
}

function TooltipPortal({ children }: { children: React.ReactNode }) {
    return <Portal>{children}</Portal>;
}

function TooltipArrow({ className, ...props }: React.ComponentProps<typeof PlacerArrow>) {
    return (
        <PlacerArrow
            className={cn(
                `
                tooltip-arrow absolute bg-surface-900 dark:bg-surface-0 text-surface-0 size-2 rounded-bl-[2.5px] [clip-path:polygon(0_100%,0_0,100%_100%)]
                data-[side=top]:-rotate-45 data-[side=bottom]:rotate-135 data-[side=right]:rotate-45 data-[side=left]:-rotate-135
                data-[side=top]:-bottom-1
                data-[side=bottom]:-top-1
                data-[side=right]:-left-1
                data-[side=left]:-right-1
                `,
                className
            )}
            {...props}
        />
    );
}

function TooltipContent({ className, ...props }: React.ComponentProps<'div'>) {
    const {
        setOpen,
        cancelOpen,
        contentId,
        presence: { present, exiting, mounted, ref }
    } = useTooltipContext();
    const { triggerRef } = usePlacerContext();

    const isVisible = present && mounted && !exiting;

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            id={contentId}
            role="tooltip"
            className={cn(
                'relative p-3 text-sm rounded-lg bg-surface-950 dark:bg-surface-50 text-surface-0 dark:text-surface-900 shadow-xs transition-[opacity,transform,scale] opacity-0 data-open:opacity-100 scale-[0.96] data-open:scale-100 duration-150 ease-out origin-(--transform-origin)',
                className
            )}
            onMouseEnter={(e) => {
                props.onMouseEnter?.(e);
                cancelOpen();
                setOpen(true, e.nativeEvent);
            }}
            onMouseLeave={(e) => {
                props.onMouseLeave?.(e);

                const related = e.relatedTarget as Node | null;

                if (related && triggerRef.current?.contains(related)) return;

                cancelOpen();
                setOpen(false, e.nativeEvent);
            }}
            {...(isVisible && { 'data-open': '' })}
            {...props}
        />
    );
}

function TooltipPositioner({ className, side = 'top', sideOffset = 8, ...props }: React.ComponentProps<typeof PlacerContent>) {
    const {
        presence: { present }
    } = useTooltipContext();

    if (!present) return null;

    const baseOffset = typeof sideOffset === 'number' ? sideOffset : 0;
    const bridgeSize = Math.max(1, baseOffset);
    const bridgeStyle: React.CSSProperties =
        side === 'top'
            ? { left: 0, right: 0, top: '100%', height: bridgeSize }
            : side === 'bottom'
              ? { left: 0, right: 0, bottom: '100%', height: bridgeSize }
              : side === 'left'
                ? { top: 0, bottom: 0, left: '100%', width: bridgeSize }
                : { top: 0, bottom: 0, right: '100%', width: bridgeSize };

    return (
        <PlacerContent className={cn('tooltip-positioner z-2000', className)} side={side} sideOffset={sideOffset} {...props}>
            <span aria-hidden="true" style={{ position: 'absolute', pointerEvents: 'auto', ...bridgeStyle }} />
            {props.children}
        </PlacerContent>
    );
}

export { Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipPositioner, TooltipTrigger };

'use client';

import { useControlledState, usePresence } from '@primereact/hooks';
import { cn } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';

export type Side = 'top' | 'right' | 'bottom' | 'left';
export type Align = 'start' | 'center' | 'end';

interface PopoverContextValue {
    open: boolean;
    setOpen: (open: boolean, originalEvent?: Event) => void;
    actualSide: Side;
    actualAlign: Align;
    setActualSide: React.Dispatch<React.SetStateAction<Side>>;
    setActualAlign: React.Dispatch<React.SetStateAction<Align>>;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
    arrowRef: React.RefObject<HTMLDivElement | null>;
    positionerRef: React.RefObject<HTMLDivElement | null>;
    triggerId: string;
    contentId: string;
    triggerAnchor: string;
    contentAnchor: string;
    positionerAnchor: string;
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

    const [actualSide, setActualSide] = React.useState<Side>('top');
    const [actualAlign, setActualAlign] = React.useState<Align>('start');

    const presence = usePresence(!!openState);

    const triggerRef = React.useRef<HTMLElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const arrowRef = React.useRef<HTMLDivElement>(null);
    const positionerRef = React.useRef<HTMLDivElement>(null);

    const triggerId = React.useId();
    const contentId = React.useId();
    const positionerId = React.useId();

    const triggerAnchor = `--popover-trigger-${triggerId}`;
    const positionerAnchor = `--popover-positioner-${positionerId}`;
    const contentAnchor = `--popover-content-${contentId}`;

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
        <PopoverContext.Provider
            value={{
                open: !!openState,
                setOpen,
                actualSide,
                actualAlign,
                setActualSide,
                setActualAlign,
                triggerRef,
                contentRef,
                arrowRef,
                triggerId,
                contentId,
                triggerAnchor,
                positionerRef,
                positionerAnchor,
                contentAnchor,
                presence
            }}
        >
            {children}
        </PopoverContext.Provider>
    );
}

interface PopoverTriggerProps extends React.ComponentProps<'button'> {}

function PopoverTrigger({ className, style, ...props }: PopoverTriggerProps) {
    const { open, setOpen, triggerRef, triggerId, contentId, triggerAnchor, actualSide, actualAlign } = usePopoverContext();

    return (
        <button
            ref={triggerRef as React.RefObject<HTMLButtonElement>}
            id={triggerId}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={contentId}
            data-side={actualSide}
            data-align={actualAlign}
            onClick={(e) => {
                props.onClick?.(e);

                if (e.defaultPrevented) return;

                setOpen(!open, e.nativeEvent);
            }}
            className={cn(
                ' px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium',
                className
            )}
            style={{
                anchorName: triggerAnchor,
                ...style
            }}
            {...(open && { 'data-open': '' })}
            {...props}
        />
    );
}

function PopoverPortal({ children }: { children: React.ReactNode }) {
    return <Portal>{children}</Portal>;
}

function PopoverArrow({ className, style, ...props }: React.ComponentProps<'div'>) {
    const { arrowRef, actualSide, actualAlign } = usePopoverContext();
    const axisStyle = actualSide === 'top' || actualSide === 'bottom' ? { left: 'var(--popover-arrow-left)' } : { top: 'var(--popover-arrow-top)' };

    return (
        <div
            ref={arrowRef}
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
            data-side={actualSide}
            data-align={actualAlign}
            style={{
                ...axisStyle,
                ...style
            }}
            {...props}
        />
    );
}

function PopoverContent({ className, style, ...props }: React.ComponentProps<'div'>) {
    const {
        contentId,
        triggerId,
        contentRef,
        contentAnchor,
        actualSide,
        actualAlign,
        presence: { present, exiting, mounted, ref }
    } = usePopoverContext();
    const mergedRef = useMergeRefs(ref, contentRef);

    const isVisible = present && mounted && !exiting;

    return (
        <div
            ref={mergedRef}
            id={contentId}
            role="dialog"
            aria-labelledby={triggerId}
            data-side={actualSide}
            data-align={actualAlign}
            style={{
                anchorName: contentAnchor,
                transformOrigin: 'var(--transform-origin, center)',
                ...style
            }}
            className={cn(
                'relative p-4 bg-surface-0 dark:bg-surface-900 rounded-lg border border-surface shadow-xs transition-[opacity,transform,scale] opacity-0 data-open:opacity-100 scale-[0.93] data-open:scale-100 duration-150 ease-out origin-(--transform-origin)',
                className
            )}
            {...(isVisible && { 'data-open': '' })}
            {...props}
        />
    );
}

interface PopoverPositionerProps extends React.ComponentProps<'div'> {
    side?: Side;
    align?: Align;
    sideOffset?: number;
    alignOffset?: number;
    flip?: boolean;
    shift?: boolean;
    hideWhenDetached?: boolean;
}

function PopoverPositioner({ side = 'top', align = 'start', sideOffset = 8, alignOffset, flip = true, shift = true, hideWhenDetached = false, style, className, ...props }: PopoverPositionerProps) {
    const {
        open,
        setOpen,
        setActualSide,
        setActualAlign,
        triggerRef,
        contentRef,
        arrowRef,
        positionerAnchor,
        triggerAnchor,
        positionerRef,
        presence: { present, exiting, mounted }
    } = usePopoverContext();

    const isVisible = present && mounted && !exiting;

    const updatePlacement = React.useCallback(() => {
        const trigger = triggerRef.current;
        const content = contentRef.current;
        const positioner = positionerRef.current;

        if (!trigger || !content || !positioner) return;

        const triggerRect = trigger.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const positionerRect = positioner.getBoundingClientRect();
        const positionerLayout = getLayoutRect(positioner, positionerRect);
        const { side: actualSide, align: actualAlign } = getPlacementFromRects(triggerRect, contentRect);

        if (positioner.dataset.side !== actualSide) positioner.dataset.side = actualSide;

        if (positioner.dataset.align !== actualAlign) positioner.dataset.align = actualAlign;

        setActualSide((prev) => (prev === actualSide ? prev : actualSide));
        setActualAlign((prev) => (prev === actualAlign ? prev : actualAlign));

        const triggerCenterX = triggerRect.left + triggerRect.width / 2;
        const triggerCenterY = triggerRect.top + triggerRect.height / 2;
        const arrow = arrowRef.current;

        if (arrow) {
            const computed = window.getComputedStyle(arrow);
            const cssArrowSize = parseFloat(computed.width || '0') || parseFloat(computed.height || '0') || 0;
            const arrowSize = Math.max(arrow.offsetWidth, arrow.offsetHeight, cssArrowSize);
            const arrowHalf = arrowSize / 2;
            const arrowInset = Math.max(8, arrowHalf);
            const arrowX = clamp(triggerCenterX - positionerLayout.left, arrowInset, positionerLayout.width - arrowInset);
            const arrowY = clamp(triggerCenterY - positionerLayout.top, arrowInset, positionerLayout.height - arrowInset);
            const arrowLeft = arrowX - arrowHalf;
            const arrowTop = arrowY - arrowHalf;

            positioner.style.setProperty('--popover-arrow-x', `${arrowX}px`);
            positioner.style.setProperty('--popover-arrow-y', `${arrowY}px`);
            positioner.style.setProperty('--popover-arrow-left', `${arrowLeft}px`);
            positioner.style.setProperty('--popover-arrow-top', `${arrowTop}px`);

            const arrowTip = arrowSize / 2;
            const transformOrigin =
                actualSide === 'top'
                    ? `${arrowX}px calc(${positionerLayout.height}px + ${arrowTip}px)`
                    : actualSide === 'bottom'
                      ? `${arrowX}px calc(0px - ${arrowTip}px)`
                      : actualSide === 'left'
                        ? `calc(${positionerLayout.width}px + ${arrowTip}px) ${arrowY}px`
                        : `calc(0px - ${arrowTip}px) ${arrowY}px`;

            positioner.style.setProperty('--transform-origin', transformOrigin);

            if (arrowSize === 0) {
                requestAnimationFrame(updatePlacement);
            }
        } else {
            const originX = triggerCenterX - positionerLayout.left;
            const originY = triggerCenterY - positionerLayout.top;

            positioner.style.setProperty('--transform-origin', `${originX}px ${originY}px`);
        }
    }, [arrowRef, contentRef, positionerRef, triggerRef, setActualAlign, setActualSide]);

    React.useLayoutEffect(() => {
        if (!open) return;

        let rafId = 0;
        const onWindowChange = () => updatePlacement();
        const resizeObserver = new ResizeObserver(() => updatePlacement());
        const contentNode = contentRef.current;

        if (triggerRef.current) resizeObserver.observe(triggerRef.current);

        if (contentRef.current) resizeObserver.observe(contentRef.current);

        window.addEventListener('resize', onWindowChange);
        window.addEventListener('scroll', onWindowChange, true);

        const maxFrames = 5;
        let frame = 0;

        const tick = () => {
            updatePlacement();
            frame += 1;

            if (frame < maxFrames) {
                rafId = requestAnimationFrame(tick);
            }
        };

        rafId = requestAnimationFrame(tick);

        const onTransitionEnd = (event: TransitionEvent) => {
            if (event.propertyName !== 'transform') return;

            updatePlacement();
        };

        contentNode?.addEventListener('transitionend', onTransitionEnd);

        return () => {
            window.removeEventListener('resize', onWindowChange);
            window.removeEventListener('scroll', onWindowChange, true);
            resizeObserver.disconnect();
            cancelAnimationFrame(rafId);
            contentNode?.removeEventListener('transitionend', onTransitionEnd);
        };
    }, [open, updatePlacement, triggerRef, contentRef]);

    React.useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false, e);

        const onClick = (e: MouseEvent) => {
            if (!contentRef.current?.contains(e.target as Node) && !triggerRef.current?.contains(e.target as Node)) {
                setOpen(false, e);
            }
        };

        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onClick);

        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('mousedown', onClick);
        };
    }, [contentRef, open, setOpen, triggerRef]);

    if (!present) return null;

    return (
        <div
            ref={positionerRef}
            className={cn('popover-positioner z-2000', className)}
            style={{
                position: 'fixed',
                positionAnchor: `${triggerAnchor}`,
                anchorName: `${positionerAnchor}`,
                ...computePosition({ side, align, sideOffset, alignOffset, flip, shift, hideWhenDetached }),
                ['--transform-origin' as keyof React.CSSProperties]: getTransformOrigin(side, align),
                ...style
            }}
            data-side={side}
            data-align={align}
            {...(isVisible && { 'data-open': '' })}
            {...props}
        />
    );
}

export { Popover, PopoverArrow, PopoverContent, PopoverPortal, PopoverPositioner, PopoverTrigger };

function getTransformOrigin(side: Side, align: Align): string {
    const isVertical = side === 'top' || side === 'bottom';

    const primary = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
    }[side];

    let secondary: string;

    if (isVertical) {
        secondary = align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
    } else {
        secondary = align === 'start' ? 'top' : align === 'end' ? 'bottom' : 'center';
    }

    return `${secondary} ${primary}`;
}

function getPlacementFromRects(triggerRect: DOMRect, contentRect: DOMRect): { side: Side; align: Align } {
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;
    const contentCenterX = contentRect.left + contentRect.width / 2;
    const contentCenterY = contentRect.top + contentRect.height / 2;
    const dx = contentCenterX - triggerCenterX;
    const dy = contentCenterY - triggerCenterY;

    const separations: Record<Side, number> = {
        top: triggerRect.top - contentRect.bottom,
        bottom: contentRect.top - triggerRect.bottom,
        left: triggerRect.left - contentRect.right,
        right: contentRect.left - triggerRect.right
    };

    const separated = (Object.entries(separations) as Array<[Side, number]>).filter(([, value]) => value >= 0);
    const side: Side = separated.length > 0 ? separated.sort((a, b) => a[1] - b[1])[0][0] : Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : dy > 0 ? 'bottom' : 'top';
    const epsilon = 4;
    let align: Align = 'center';

    if (side === 'top' || side === 'bottom') {
        if (Math.abs(contentRect.left - triggerRect.left) <= epsilon) align = 'start';
        else if (Math.abs(contentRect.right - triggerRect.right) <= epsilon) align = 'end';
    } else {
        if (Math.abs(contentRect.top - triggerRect.top) <= epsilon) align = 'start';
        else if (Math.abs(contentRect.bottom - triggerRect.bottom) <= epsilon) align = 'end';
    }

    return { side, align };
}

function computePosition({
    side = 'top',
    align = 'center',
    sideOffset = 0,
    alignOffset = 0,
    flip = true,
    shift = true,
    hideWhenDetached = false
}: {
    side?: Side;
    align?: Align;
    sideOffset?: number;
    alignOffset?: number;
    flip?: boolean;
    shift?: boolean;
    hideWhenDetached?: boolean;
}): React.CSSProperties {
    const style: React.CSSProperties & Record<string, string> = {};

    style.positionArea = side;

    const sideMarginMap: Record<Side, keyof React.CSSProperties> = {
        top: 'marginBottom',
        bottom: 'marginTop',
        left: 'marginRight',
        right: 'marginLeft'
    };

    if (sideOffset) {
        style[sideMarginMap[side] as string] = `${sideOffset}px`;
    }

    if (align !== 'center') {
        const isVertical = side === 'top' || side === 'bottom';

        if (isVertical) {
            if (align === 'start') {
                // popover left = anchor left
                style.left = `calc(anchor(start) + ${alignOffset}px)`;
            } else {
                // popover right = anchor right
                style.right = `calc(anchor(end) - ${alignOffset}px)`;
            }
        } else {
            if (align === 'start') {
                // popover top = anchor top
                style.top = `calc(anchor(start) + ${alignOffset}px)`;
            } else {
                // popover bottom = anchor bottom
                style.bottom = `calc(anchor(end) - ${alignOffset}px)`;
            }
        }
    }

    if (flip || shift) {
        style.positionTryFallbacks = 'flip-block, flip-inline, flip-block flip-inline';
    }

    if (hideWhenDetached) {
        (style as React.CSSProperties & { positionVisibility?: string }).positionVisibility = 'anchors-visible';
    } else {
        (style as React.CSSProperties & { positionVisibility?: string }).positionVisibility = 'always';
    }

    return style;
}

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

function getLayoutRect(element: HTMLElement, rect: DOMRect) {
    const layoutWidth = element.offsetWidth || rect.width;
    const layoutHeight = element.offsetHeight || rect.height;

    if (!layoutWidth || !layoutHeight) {
        return rect;
    }

    const scaleX = rect.width / layoutWidth || 1;
    const scaleY = rect.height / layoutHeight || 1;
    const left = rect.left - (layoutWidth * scaleX - layoutWidth) / 2;
    const top = rect.top - (layoutHeight * scaleY - layoutHeight) / 2;

    return {
        left,
        top,
        width: layoutWidth,
        height: layoutHeight
    };
}

type PossibleRef<T> = React.Ref<T> | undefined;

function assignRef<T>(ref: PossibleRef<T>, value: T | null) {
    if (!ref) return;

    if (typeof ref === 'function') {
        ref(value);
    } else {
        try {
            (ref as React.MutableRefObject<T | null>).current = value;
        } catch {
            // ignore
        }
    }
}

export function useMergeRefs<T>(...refs: PossibleRef<T>[]) {
    const refsRef = React.useRef(refs);

    React.useEffect(() => {
        refsRef.current = refs;
    }, [refs]);

    return React.useCallback((node: T | null) => {
        for (const ref of refsRef.current) {
            assignRef(ref, node);
        }
    }, []);
}

'use client';
import * as React from 'react';

export type Side = 'top' | 'right' | 'bottom' | 'left';
export type Align = 'start' | 'center' | 'end';

interface PlacerContextValue {
    actualSide: Side;
    actualAlign: Align;
    setActualSide: React.Dispatch<React.SetStateAction<Side>>;
    setActualAlign: React.Dispatch<React.SetStateAction<Align>>;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
    arrowRef: React.RefObject<HTMLDivElement | null>;
    triggerAnchor: string;
    contentAnchor: string;
}

const PlacerContext = React.createContext<PlacerContextValue | null>(null);

export function usePlacerContext() {
    const ctx = React.useContext(PlacerContext);

    if (!ctx) throw new Error('Placer components must be used within <Placer />');

    return ctx;
}

interface PlacerProps {
    children: React.ReactNode;
}

function Placer({ children }: PlacerProps) {
    const [actualSide, setActualSide] = React.useState<Side>('top');
    const [actualAlign, setActualAlign] = React.useState<Align>('start');

    const triggerRef = React.useRef<HTMLElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const arrowRef = React.useRef<HTMLDivElement>(null);

    const anchorId = React.useId();

    const triggerAnchor = `--placer-trigger-${anchorId}`;
    const contentAnchor = `--placer-content-${anchorId}`;

    return (
        <PlacerContext.Provider
            value={{
                actualSide,
                actualAlign,
                setActualSide,
                setActualAlign,
                triggerRef,
                contentRef,
                arrowRef,
                triggerAnchor,
                contentAnchor
            }}
        >
            {children}
        </PlacerContext.Provider>
    );
}

interface PlacerAnchorProps extends React.ComponentProps<'button'> {}

function PlacerAnchor({ className, style, ...props }: PlacerAnchorProps) {
    const { triggerRef, triggerAnchor, actualSide, actualAlign } = usePlacerContext();

    return (
        <button
            ref={triggerRef as React.RefObject<HTMLButtonElement>}
            data-side={actualSide}
            data-align={actualAlign}
            className={className}
            style={{
                anchorName: triggerAnchor,
                ...style
            }}
            {...props}
        />
    );
}

function PlacerArrow({ className, style, ...props }: React.ComponentProps<'div'>) {
    const { arrowRef, actualSide, actualAlign } = usePlacerContext();
    const axisStyle = actualSide === 'top' || actualSide === 'bottom' ? { left: 'var(--placer-arrow-left)' } : { top: 'var(--placer-arrow-top)' };

    return (
        <div
            ref={arrowRef}
            className={className}
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

interface PlacerContentProps extends React.ComponentProps<'div'> {
    side?: Side;
    align?: Align;
    sideOffset?: number;
    alignOffset?: number;
    flip?: boolean;
    shift?: boolean;
    hideWhenDetached?: boolean;
}

function PlacerContent({ side = 'top', align = 'start', sideOffset = 8, alignOffset, flip = true, shift = true, hideWhenDetached = false, style, className, ...props }: PlacerContentProps) {
    const { setActualSide, setActualAlign, triggerRef, contentRef, arrowRef, triggerAnchor, contentAnchor } = usePlacerContext();

    const updatePlacement = React.useCallback(() => {
        const trigger = triggerRef.current;
        const content = contentRef.current;

        if (!trigger || !content) return;

        const triggerRect = trigger.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const positionerLayout = getLayoutRect(content, contentRect);
        const { side: nextSide, align: nextAlign } = getPlacementFromRects(triggerRect, contentRect);

        if (content.dataset.side !== nextSide) content.dataset.side = nextSide;

        if (content.dataset.align !== nextAlign) content.dataset.align = nextAlign;

        setActualSide((prev) => (prev === nextSide ? prev : nextSide));
        setActualAlign((prev) => (prev === nextAlign ? prev : nextAlign));

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

            content.style.setProperty('--placer-arrow-x', `${arrowX}px`);
            content.style.setProperty('--placer-arrow-y', `${arrowY}px`);
            content.style.setProperty('--placer-arrow-left', `${arrowLeft}px`);
            content.style.setProperty('--placer-arrow-top', `${arrowTop}px`);

            const arrowTip = arrowSize / 2;
            const transformOrigin =
                nextSide === 'top'
                    ? `${arrowX}px calc(${positionerLayout.height}px + ${arrowTip}px)`
                    : nextSide === 'bottom'
                      ? `${arrowX}px calc(0px - ${arrowTip}px)`
                      : nextSide === 'left'
                        ? `calc(${positionerLayout.width}px + ${arrowTip}px) ${arrowY}px`
                        : `calc(0px - ${arrowTip}px) ${arrowY}px`;

            content.style.setProperty('--transform-origin', transformOrigin);

            if (arrowSize === 0) {
                requestAnimationFrame(updatePlacement);
            }
        } else {
            const originX = triggerCenterX - positionerLayout.left;
            const originY = triggerCenterY - positionerLayout.top;

            content.style.setProperty('--transform-origin', `${originX}px ${originY}px`);
        }
    }, [arrowRef, contentRef, triggerRef, setActualAlign, setActualSide]);

    React.useLayoutEffect(() => {
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
    }, [updatePlacement, triggerRef, contentRef]);

    return (
        <div
            ref={contentRef}
            className={className}
            style={{
                position: 'fixed',
                positionAnchor: `${triggerAnchor}`,
                anchorName: `${contentAnchor}`,
                ...computePosition({ side, align, sideOffset, alignOffset, flip, shift, hideWhenDetached }),
                ['--transform-origin' as keyof React.CSSProperties]: getTransformOrigin(side, align),
                ...style
            }}
            data-side={side}
            data-align={align}
            {...props}
        />
    );
}

export { Placer, PlacerAnchor, PlacerArrow, PlacerContent };

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
                // content left = anchor left
                style.left = `calc(anchor(start) + ${alignOffset}px)`;
            } else {
                // content right = anchor right
                style.right = `calc(anchor(end) - ${alignOffset}px)`;
            }
        } else {
            if (align === 'start') {
                // content top = anchor top
                style.top = `calc(anchor(start) + ${alignOffset}px)`;
            } else {
                // content bottom = anchor bottom
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

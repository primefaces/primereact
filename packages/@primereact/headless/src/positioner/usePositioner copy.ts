import { withHeadless } from '@primereact/core/headless';
import { AlignType, SideType } from '@primereact/types/shared/positioner';
import * as React from 'react';
import { defaultProps } from './usePositioner.props';

export const usePositioner = withHeadless({
    name: 'usePositioner',
    defaultProps,
    setup({ id, props }) {
        const [actualSide, setActualSide] = React.useState<SideType>();
        const [actualAlign, setActualAlign] = React.useState<AlignType>();

        const anchorRef = React.useRef<HTMLElement>(null);
        const contentRef = React.useRef<HTMLDivElement>(null);
        const arrowRef = React.useRef<HTMLDivElement>(null);
        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
        const [contentEl, setContentEl] = React.useState<HTMLDivElement | null>(null);

        const setAnchorRef = React.useCallback((node: HTMLElement | null) => {
            anchorRef.current = node;
            setAnchorEl(node);
        }, []);

        const setContentRef = React.useCallback((node: HTMLDivElement | null) => {
            contentRef.current = node;
            setContentEl(node);
        }, []);

        const anchorName = `--positioner-trigger-${id}`;
        const contentAnchor = `--positioner-content-${id}`;

        const updatePlacement = React.useCallback(() => {
            const trigger = anchorRef.current;
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
        }, [anchorRef, arrowRef, contentRef, setActualAlign, setActualSide]);

        React.useLayoutEffect(() => {
            if (!anchorEl || !contentEl) return;

            let rafId = 0;
            const onWindowChange = () => updatePlacement();
            const resizeObserver = new ResizeObserver(() => updatePlacement());

            if (anchorEl instanceof Element) resizeObserver.observe(anchorEl);

            if (contentEl instanceof Element) resizeObserver.observe(contentEl);

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

            contentEl.addEventListener('transitionend', onTransitionEnd);

            return () => {
                window.removeEventListener('resize', onWindowChange);
                window.removeEventListener('scroll', onWindowChange, true);
                resizeObserver.disconnect();
                cancelAnimationFrame(rafId);
                contentEl.removeEventListener('transitionend', onTransitionEnd);
            };
        }, [anchorEl, contentEl, updatePlacement]);

        function getTransformOrigin(): string {
            const isVertical = props.side === 'top' || props.side === 'bottom';

            const primary = {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left'
            }[props.side as SideType];

            let secondary: string;

            if (isVertical) {
                secondary = props.align === 'start' ? 'left' : props.align === 'end' ? 'right' : 'center';
            } else {
                secondary = props.align === 'start' ? 'top' : props.align === 'end' ? 'bottom' : 'center';
            }

            return `${secondary} ${primary}`;
        }

        function computePosition(): React.CSSProperties {
            const style: React.CSSProperties & Record<string, string> = {};

            style.positionArea = props.side;

            const sideMarginMap: Record<SideType, keyof React.CSSProperties> = {
                top: 'marginBottom',
                bottom: 'marginTop',
                left: 'marginRight',
                right: 'marginLeft'
            };

            if (props.sideOffset) {
                style[sideMarginMap[props.side as SideType] as string] = `${props.sideOffset}px`;
            }

            if (props.align !== 'center') {
                const isVertical = props.side === 'top' || props.side === 'bottom';

                if (isVertical) {
                    if (props.align === 'start') {
                        // content left = anchor left
                        style.left = `calc(anchor(start) + ${props.alignOffset}px)`;
                    } else {
                        // content right = anchor right
                        style.right = `calc(anchor(end) - ${props.alignOffset}px)`;
                    }
                } else {
                    if (props.align === 'start') {
                        // content top = anchor top
                        style.top = `calc(anchor(start) + ${props.alignOffset}px)`;
                    } else {
                        // content bottom = anchor bottom
                        style.bottom = `calc(anchor(end) - ${props.alignOffset}px)`;
                    }
                }
            }

            if (props.flip || props.shift) {
                style.positionTryFallbacks = 'flip-block, flip-inline, flip-block flip-inline';
            }

            if (props.hideWhenDetached) {
                (style as React.CSSProperties & { positionVisibility?: string }).positionVisibility = 'anchors-visible';
            } else {
                (style as React.CSSProperties & { positionVisibility?: string }).positionVisibility = 'always';
            }

            return style;
        }

        const state = {
            actualSide,
            actualAlign
        };

        return {
            state,
            anchorRef,
            contentRef,
            arrowRef,
            anchorName,
            contentAnchor,
            getTransformOrigin,
            computePosition,
            updatePlacement,
            setAnchorRef,
            setContentRef
        };
    }
});

function getPlacementFromRects(triggerRect: DOMRect, contentRect: DOMRect): { side: SideType; align: AlignType } {
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;
    const contentCenterX = contentRect.left + contentRect.width / 2;
    const contentCenterY = contentRect.top + contentRect.height / 2;
    const dx = contentCenterX - triggerCenterX;
    const dy = contentCenterY - triggerCenterY;

    const separations: Record<SideType, number> = {
        top: triggerRect.top - contentRect.bottom,
        bottom: contentRect.top - triggerRect.bottom,
        left: triggerRect.left - contentRect.right,
        right: contentRect.left - triggerRect.right
    };

    const separated = (Object.entries(separations) as Array<[SideType, number]>).filter(([, value]) => value >= 0);
    const side: SideType = separated.length > 0 ? separated.sort((a, b) => a[1] - b[1])[0][0] : Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : dy > 0 ? 'bottom' : 'top';
    const epsilon = 4;
    let align: AlignType = 'center';

    if (side === 'top' || side === 'bottom') {
        if (Math.abs(contentRect.left - triggerRect.left) <= epsilon) align = 'start';
        else if (Math.abs(contentRect.right - triggerRect.right) <= epsilon) align = 'end';
    } else {
        if (Math.abs(contentRect.top - triggerRect.top) <= epsilon) align = 'start';
        else if (Math.abs(contentRect.bottom - triggerRect.bottom) <= epsilon) align = 'end';
    }

    return { side, align };
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

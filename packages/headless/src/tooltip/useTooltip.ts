import { withHeadless } from '@primereact/core/headless';
import { usePlacer } from '@primereact/headless/placer';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { addStyle, isClient } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { useTooltipGroupContext } from 'primereact/tooltip/group';
import * as React from 'react';
import { defaultProps } from './useTooltip.props';

type Point = { x: number; y: number };

export const useTooltip = withHeadless({
    name: 'useTooltip',
    defaultProps,
    setup: ({ props, $primereact }) => {
        const { showDelayDuration, hideDelayDuration, autoHide, autoZIndex, baseZIndex, disabled, defaultOpen, open, onOpenChange, closeOnEscape, side, align, sideOffset, alignOffset } = props;
        const placer = usePlacer({ side, align, sideOffset, alignOffset });
        const tooltipgroup = useTooltipGroupContext();
        const [visibleState, setVisibleState] = React.useState<boolean>(false);
        const [lifeState, setLifeState] = React.useState<boolean>(false);
        const [shouldAnimateOnEnter, setShouldAnimateOnEnter] = React.useState<boolean>(false);
        const [shouldAnimateOnLeave, setShouldAnimateOnLeave] = React.useState<boolean>(false);
        const showTimeout = React.useRef<number | null>(null);
        const hideTimeout = React.useRef<number | null>(null);
        const outsideClickListener = React.useRef<((event: Event) => void) | null>(null);
        const selfClick = React.useRef<boolean>(false);
        const documentKeydownListener = React.useRef<((event: KeyboardEvent) => void) | null>(null);
        const documentScrollListener = React.useRef<((event: Event) => void) | null>(null);
        const documentResizeListener = React.useRef<((event: Event) => void) | null>(null);
        const contentRef = React.useRef<HTMLDivElement | null>(null);
        const safePolygonRef = React.useRef<Point[] | null>(null);

        const state = {
            visible: visibleState,
            life: lifeState,
            shouldAnimateOnEnter,
            shouldAnimateOnLeave
        };

        const getTrigger = () => {
            if (placer?.anchorRef?.current && placer?.anchorRef?.current instanceof HTMLElement) {
                return placer?.anchorRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return placer?.anchorRef?.current?.elementRef?.current;
        };

        const getContainer = () => {
            if (placer?.containerRef?.current && placer?.containerRef?.current instanceof HTMLElement) {
                return placer?.containerRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return placer?.containerRef?.current?.elementRef?.current;
        };

        const getArrow = () => {
            if (placer?.arrowRef?.current && placer?.arrowRef?.current instanceof HTMLElement) {
                return placer?.arrowRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return placer?.arrowRef?.current?.elementRef?.current;
        };

        const getContent = () => {
            if (contentRef.current && contentRef.current instanceof HTMLElement) {
                return contentRef.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return contentRef.current?.elementRef?.current;
        };

        const clearTimers = () => {
            if (showTimeout.current) {
                clearTimeout(showTimeout.current);
                showTimeout.current = null;
            }

            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
                hideTimeout.current = null;
            }
        };

        const show = (forceInstant = false) => {
            if (disabled) return;

            clearTimers();

            tooltipgroup?.clearTimers?.();
            const timeoutState = tooltipgroup?.state?.timeoutState;

            setShouldAnimateOnLeave(false);
            setShouldAnimateOnEnter(!forceInstant && timeoutState !== 'instant');

            const showDelay = timeoutState === 'instant' || timeoutState === 'normal' ? 0 : showDelayDuration || 400;

            if (forceInstant || showDelay === 0) {
                setVisibleState(true);
                setLifeState(true);
                onOpenChange?.({ value: true });
            } else {
                showTimeout.current = window.setTimeout(() => {
                    setVisibleState(true);
                    setLifeState(true);
                    onOpenChange?.({ value: true });
                }, showDelay);
            }
        };

        const hide = (forceInstant = false) => {
            clearTimers();
            const timeoutState = tooltipgroup?.state?.timeoutState;

            setShouldAnimateOnEnter(false);
            setShouldAnimateOnLeave(!forceInstant && timeoutState !== 'instant');

            tooltipgroup?.scheduleTimeout(() => {}, getTrigger() || undefined);

            const hideDelay = timeoutState === 'instant' || timeoutState === 'normal' ? 0 : hideDelayDuration || 0;

            if (forceInstant || hideDelay === 0) {
                setVisibleState(false);
                onOpenChange?.({ value: false });
            } else {
                hideTimeout.current = window.setTimeout(() => {
                    setVisibleState(false);
                    onOpenChange?.({ value: false });
                }, hideDelay);
            }
        };

        const onTriggerClick = () => hide(true);
        const onTriggerPointerDown = () => hide(true);

        const onTriggerPointerEnter = () => {
            show();
            safePolygonRef.current = null;
        };

        const onTriggerFocus = () => show(true);
        const onTriggerBlur = () => hide();

        const onTriggerPointerLeave = () => {
            if (autoHide) {
                hide();
            } else {
                onPointerLeave();
            }
        };

        const bindTriggerListeners = () => {
            const trigger = getTrigger();

            if (!trigger || !isClient()) return;

            trigger.addEventListener('click', onTriggerClick);
            trigger.addEventListener('pointerdown', onTriggerPointerDown);
            trigger.addEventListener('pointerenter', onTriggerPointerEnter);
            trigger.addEventListener('focus', onTriggerFocus);
            trigger.addEventListener('blur', onTriggerBlur);
            trigger.addEventListener('pointerleave', onTriggerPointerLeave);
        };

        const unbindTriggerListeners = () => {
            const trigger = getTrigger();

            if (!trigger || !isClient()) return;

            trigger.removeEventListener('click', onTriggerClick);
            trigger.removeEventListener('pointerdown', onTriggerPointerDown);
            trigger.removeEventListener('pointerenter', onTriggerPointerEnter);
            trigger.removeEventListener('focus', onTriggerFocus);
            trigger.removeEventListener('blur', onTriggerBlur);
            trigger.removeEventListener('pointerleave', onTriggerPointerLeave);
        };

        const onContainerPointerEnter = () => {
            if (autoHide) return;

            show(true);
            safePolygonRef.current = null;
        };

        const onContainerFocus = () => show(true);
        const onContainerBlur = () => hide();

        const onContainerPointerLeave = () => {
            if (autoHide) return;

            onPointerLeave();
        };

        const bindContainerListeners = () => {
            const container = getContainer();

            if (!container || !isClient()) return;

            container.addEventListener('pointerenter', onContainerPointerEnter);
            container.addEventListener('focus', onContainerFocus);
            container.addEventListener('blur', onContainerBlur);
            container.addEventListener('pointerleave', onContainerPointerLeave);
        };

        const unbindContainerListeners = () => {
            const container = getContainer();

            if (!container || !isClient()) return;

            container.removeEventListener('pointerenter', onContainerPointerEnter);
            container.removeEventListener('focus', onContainerFocus);
            container.removeEventListener('blur', onContainerBlur);
            container.removeEventListener('pointerleave', onContainerPointerLeave);
        };

        const sortPointsClockwise = (points: Point[]): Point[] => {
            const center = {
                x: points.reduce((sum, p) => sum + p.x, 0) / points.length,
                y: points.reduce((sum, p) => sum + p.y, 0) / points.length
            };

            return [...points].sort((a, b) => {
                const angleA = Math.atan2(a.y - center.y, a.x - center.x);
                const angleB = Math.atan2(b.y - center.y, b.x - center.x);

                return angleA - angleB;
            });
        };

        const createSafePolygon = (): Point[] | undefined => {
            const trigger = getTrigger();
            const container = getContainer();

            if (!trigger || !container) return;

            const triggerRect = trigger.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const points = [];

            switch (placer?.state?.effectiveSide) {
                case 'top':
                    points.push({ x: triggerRect.left, y: triggerRect.top }, { x: triggerRect.right, y: triggerRect.top }, { x: containerRect.left, y: containerRect.bottom }, { x: containerRect.right, y: containerRect.bottom });
                    break;
                case 'bottom':
                    points.push({ x: triggerRect.left, y: triggerRect.bottom }, { x: triggerRect.right, y: triggerRect.bottom }, { x: containerRect.left, y: containerRect.top }, { x: containerRect.right, y: containerRect.top });
                    break;
                case 'left':
                    points.push({ x: triggerRect.left, y: triggerRect.top }, { x: triggerRect.left, y: triggerRect.bottom }, { x: containerRect.right, y: containerRect.top }, { x: containerRect.right, y: containerRect.bottom });
                    break;
                case 'right':
                    points.push({ x: triggerRect.right, y: triggerRect.top }, { x: triggerRect.right, y: triggerRect.bottom }, { x: containerRect.left, y: containerRect.top }, { x: containerRect.left, y: containerRect.bottom });
                    break;
            }

            return sortPointsClockwise(points);
        };

        const isPointInPolygon = (point: Point, polygon: Point[] | null) => {
            if (!polygon) return false;

            const { x, y } = point;
            let inside = false;

            for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                const xi = polygon[i].x,
                    yi = polygon[i].y;
                const xj = polygon[j].x,
                    yj = polygon[j].y;

                const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.0000001) + xi;

                if (intersect) inside = !inside;
            }

            return inside;
        };

        const onPointerLeave = () => {
            const container = getContainer();

            if (!container) {
                safePolygonRef.current = null;
                hide(true);
            } else {
                safePolygonRef.current = createSafePolygon() || null;
            }
        };

        const onPointerMove = (event: PointerEvent) => {
            if (autoHide) return;

            const point = { x: event.clientX, y: event.clientY };
            const currentTarget = event.target as HTMLElement;
            const trigger = getTrigger();
            const container = getContainer();
            const arrow = getArrow();

            if (!trigger || !container) return;

            if (isPointInPolygon(point, safePolygonRef.current) || trigger.contains(currentTarget) || container.contains(currentTarget) || (arrow && arrow.contains(currentTarget))) return;
            else {
                hide();
                safePolygonRef.current = null;
            }
        };

        const bindDocumentListeners = () => {
            document.addEventListener('pointermove', onPointerMove);
        };

        const unbindDocumentListeners = () => {
            document.removeEventListener('pointermove', onPointerMove);
        };

        const onEnter = () => {
            const container = getContainer();

            if (!container) return;

            addStyle(container, { opacity: '' });
        };

        const onBeforeEnter = () => {
            const container = getContainer();

            if (!container) return;

            placer?.applyPlacement();
            bindContainerListeners();
            bindOutsideClickListener();
            bindScrollListener();
            bindResizeListener();
            bindDocumentListeners();

            if (autoZIndex) {
                ZIndex.set('tooltip', container, (baseZIndex ?? 0) + ($primereact.config?.zIndex?.tooltip ?? 1100));
            }

            if (closeOnEscape) {
                bindDocumentKeyDownListener();
            }
        };

        const onLeave = () => {
            unbindContainerListeners();
            unbindOutsideClickListener();
            unbindScrollListener();
            unbindResizeListener();
            unbindDocumentKeyDownListener();
            unbindDocumentListeners();
            //hide(true);
        };

        const onContentAfterLeave = () => {
            setLifeState(false);
        };

        const onContentEnter = () => {
            const content = getContent();

            if (!content) return;

            addStyle(content, { opacity: '1', transform: 'scale(1)' });
        };

        const onContentLeave = () => {
            const content = getContent();

            if (!content) return;

            addStyle(content, { opacity: '0', transform: 'scale(0.95)' });
        };

        const bindOutsideClickListener = () => {
            if (!outsideClickListener.current && isClient()) {
                outsideClickListener.current = (event: Event) => {
                    const clickEvent = event as MouseEvent;
                    const container = getContainer();

                    if (visibleState && !(clickEvent.target === container || container?.contains(clickEvent.target as Node))) {
                        hide(true);
                    }

                    selfClick.current = false;
                };

                document.addEventListener('click', outsideClickListener.current);
            }
        };

        const unbindOutsideClickListener = () => {
            if (outsideClickListener.current) {
                document.removeEventListener('click', outsideClickListener.current);
                outsideClickListener.current = null;
                selfClick.current = false;
            }
        };

        const bindDocumentKeyDownListener = () => {
            if (!documentKeydownListener.current) {
                documentKeydownListener.current = (event: KeyboardEvent) => {
                    if (event.code === 'Escape' && closeOnEscape) {
                        hide(true);
                    }
                };

                window.document.addEventListener('keydown', documentKeydownListener.current);
            }
        };

        const unbindDocumentKeyDownListener = () => {
            if (documentKeydownListener.current) {
                window.document.removeEventListener('keydown', documentKeydownListener.current);
                documentKeydownListener.current = null;
            }
        };

        const bindScrollListener = () => {
            if (!documentScrollListener.current) {
                documentScrollListener.current = () => {
                    if (!visibleState) return;

                    hide(true);
                };

                window.document.addEventListener('scroll', documentScrollListener.current);
            }
        };

        const unbindScrollListener = () => {
            if (documentScrollListener.current) {
                window.document.removeEventListener('scroll', documentScrollListener.current);
                documentScrollListener.current = null;
            }
        };

        const bindResizeListener = () => {
            if (!documentResizeListener.current) {
                documentResizeListener.current = () => {
                    if (!visibleState) return;

                    hide(true);
                };

                window.document.addEventListener('resize', documentResizeListener.current);
            }
        };

        const unbindResizeListener = () => {
            if (documentResizeListener.current) {
                window.document.removeEventListener('resize', documentResizeListener.current);
                documentResizeListener.current = null;
            }
        };

        // Effects
        React.useEffect(() => {
            if (disabled) return;

            if (defaultOpen || open) {
                setTimeout(() => {
                    show();
                }, 0);
            }
        }, [defaultOpen, open, disabled]);

        React.useEffect(() => {
            if (!disabled) {
                bindTriggerListeners();
            }
        }, [placer?.anchorRef?.current, disabled]);

        useUnmountEffect(() => {
            clearTimers();
            unbindTriggerListeners();
            unbindContainerListeners();

            const container = getContainer();

            if (autoZIndex && container) {
                ZIndex.clear(container);
            }
        });

        return {
            state,
            placer,
            show,
            hide,
            onEnter,
            onBeforeEnter,
            onLeave,
            onContentAfterLeave,
            onContentEnter,
            onContentLeave,
            contentRef
        };
    }
});

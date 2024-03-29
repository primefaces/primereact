import { useCallback, useEffect, useRef, useState } from 'react';
import { DomHandler } from '../utils/Utils';

/**
 * Hook to wrap up draggable logic for dialogs.
 *
 * @param targetRef the target ref of the draggable
 * @param handleRef the handle ref of the draggable
 * @param onDragStart callback
 * @param onDrag callback
 * @param onDragEnd callback
 * @param enabled boolean whether this hook is active or not
 * @param keepInViewport should the draggable be contained by the viewport
 * @param rectLimits a bounding box to limit the draggable to
 * @returns { dragging, delta, resetState }
 */
export const useDraggable = ({ targetRef, handleRef, onDragStart, onDragEnd, onDrag, enabled = true, keepInViewport = false, rectLimits }) => {
    const [dragging, setDragging] = useState(false);
    const [previous, setPrevious] = useState({ x: 0, y: 0 });
    const [delta, setDelta] = useState({ x: 0, y: 0 });
    const initial = useRef({ x: 0, y: 0 });
    const limits = useRef(null);

    /**
     * Subscribe to mouse/touch events to start dragging.
     */
    useEffect(() => {
        const handle = handleRef.current || targetRef.current;

        if (!handle || !enabled) {
            return;
        }

        handle.addEventListener('mousedown', startDragging);
        handle.addEventListener('touchstart', startDragging);

        return () => {
            handle.removeEventListener('mousedown', startDragging);
            handle.removeEventListener('touchstart', startDragging);
        };

        function startDragging(event) {
            setDragging(true);
            event.preventDefault();
            targetRef.current.style.willChange = 'transform';
            const source = (event.touches && event.touches[0]) || event;

            initial.current = { x: source.clientX, y: source.clientY };

            if (keepInViewport || rectLimits) {
                const { left, top, width, height } = targetRef.current.getBoundingClientRect();
                const viewport = DomHandler.getViewport();

                if (keepInViewport) {
                    limits.current = {
                        minX: -left + delta.x,
                        maxX: viewport.width - width - left + delta.x,
                        minY: -top + delta.y,
                        maxY: viewport.height - height - top + delta.y
                    };
                } else {
                    limits.current = {
                        minX: rectLimits.left - left + delta.x,
                        maxX: rectLimits.right - width - left + delta.x,
                        minY: rectLimits.top - top + delta.y,
                        maxY: rectLimits.bottom - height - top + delta.y
                    };
                }
            }

            onDragStart && onDragStart(event);
        }
    }, [targetRef, handleRef, onDragStart, enabled, keepInViewport, delta, rectLimits]);

    /**
     * Subscribe to mouse/touch events to drag and stop dragging.
     */
    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', reposition, { passive: true });
            document.addEventListener('touchmove', reposition, { passive: true });
            document.addEventListener('mouseup', stopDragging);
            document.addEventListener('touchend', stopDragging);
        } else {
            document.removeEventListener('mousemove', reposition, { passive: true });
            document.removeEventListener('mouseup', stopDragging);
            document.removeEventListener('touchmove', reposition, { passive: true });
            document.removeEventListener('touchend', stopDragging);
        }

        return () => {
            document.removeEventListener('mousemove', reposition, { passive: true });
            document.removeEventListener('mouseup', stopDragging);
            document.removeEventListener('touchmove', reposition, { passive: true });
            document.removeEventListener('touchend', stopDragging);
        };

        function stopDragging(event) {
            event.preventDefault();
            targetRef.current.style.willChange = '';
            onDragEnd && onDragEnd(event);

            setDragging(false);
            setPrevious(reposition(event));
        }

        function reposition(event) {
            const source = (event.changedTouches && event.changedTouches[0]) || (event.touches && event.touches[0]) || event;
            const { clientX, clientY } = source;
            const x = clientX - initial.current.x + previous.x;
            const y = clientY - initial.current.y + previous.y;

            const newDelta = calculateDelta({ x, y, limits: limits.current });

            setDelta(newDelta);
            onDrag && onDrag(event);

            return newDelta;
        }
    }, [targetRef, onDrag, onDragEnd, handleRef, dragging, previous, keepInViewport, rectLimits]);

    /**
     * Listen to delta drag changes and set the target position.
     */
    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.style.transform = `translate(${delta.x}px, ${delta.y}px)`;
        }
    }, [targetRef, delta]);

    /**
     * Listen to drag start/stop and update DOM values.
     */
    useEffect(() => {
        const handle = handleRef.current || targetRef.current;

        if (handle) {
            handle.style.cursor = dragging ? 'grabbing' : 'move';
        }

        if (targetRef.current) {
            targetRef.current.setAttribute('aria-grabbed', dragging);
        }

        if (dragging) {
            DomHandler.addClass(document.body, 'p-unselectable-text');
        } else {
            DomHandler.removeClass(document.body, 'p-unselectable-text');
        }
    }, [targetRef, handleRef, dragging]);

    const resetState = useCallback(() => {
        setDelta({ x: 0, y: 0 });
        setPrevious({ x: 0, y: 0 });
        initial.current = { x: 0, y: 0 };
    }, [setDelta, setPrevious]);

    /**
     * Reset when disabled
     */
    useEffect(() => {
        !enabled && resetState();
    }, [resetState, enabled]);

    const calculateDelta = ({ x, y, limits }) => {
        if (!limits) {
            return { x, y };
        }

        const { minX, maxX, minY, maxY } = limits;

        return {
            x: Math.min(Math.max(x, minX), maxX),
            y: Math.min(Math.max(y, minY), maxY)
        };
    };

    return { dragging, delta, resetState };
};

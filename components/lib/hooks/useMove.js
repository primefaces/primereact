/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useEventListener } from './useEventListener';

export function useMove({ mode = 'both', initialValue = { x: 0, y: 0 } }) {
    const [positions, setPositions] = React.useState(initialValue);
    const [active, setActive] = React.useState(false);
    const isMounted = React.useRef(false);
    const isSliding = React.useRef(false);
    const ref = React.useRef(null);

    const onMouseMove = (event) => updateMousePosition({ x: event.clientX, y: event.clientY });

    const handlePositionChange = ({ clampedX, clampedY }) => {
        if (mode === 'vertical') {
            setPositions({ y: 1 - clampedY });
        } else if (mode === 'horizontal') {
            setPositions({ x: clampedX });
        } else if (mode === 'both') {
            setPositions({ x: clampedX, y: clampedY });
        }
    };

    const onMouseDown = (event) => {
        startScrubbing();
        event.preventDefault();
        onMouseMove(event);
    };

    const stopScrubbing = () => {
        if (isSliding.current && isMounted.current) {
            isSliding.current = false;
            setActive(false);
            unbindListeners();
        }
    };

    const onTouchMove = (event) => {
        if (event.cancelable) {
            event.preventDefault();
        }

        updateMousePosition({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
    };

    const onTouchStart = (event) => {
        if (event.cancelable) {
            event.preventDefault();
        }

        startScrubbing();
        onTouchMove(event);
    };

    const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({
        type: 'mousemove',
        listener: onMouseMove
    });

    const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
        type: 'mouseup',
        listener: stopScrubbing
    });

    const [bindDocumentTouchMoveListener, unbindDocumentTouchMoveListener] = useEventListener({
        type: 'touchmove',
        listener: onTouchMove
    });

    const [bindDocumentTouchEndListener, unbindDocumentTouchEndListener] = useEventListener({
        type: 'touchend',
        listener: stopScrubbing
    });

    const [bindMouseDownListener, unbindMouseDownListener] = useEventListener({
        target: ref,
        type: 'mousedown',
        listener: onMouseDown
    });

    const [bindTouchStartListener, unbindTouchStartListener] = useEventListener({
        target: ref,
        type: 'touchstart',
        listener: onTouchStart,
        options: { passive: false }
    });

    const clamp = (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    };

    const clampPositions = ({ x, y }) => {
        return {
            clampedX: clamp(x, 0, 1),
            clampedY: clamp(y, 0, 1)
        };
    };

    const bindListeners = () => {
        bindDocumentMouseMoveListener();
        bindDocumentMouseUpListener();
        bindDocumentTouchMoveListener();
        bindDocumentTouchEndListener();
    };

    const unbindListeners = () => {
        unbindDocumentMouseMoveListener();
        unbindDocumentMouseUpListener();
        unbindDocumentTouchMoveListener();
        unbindDocumentTouchEndListener();
    };

    const reset = () => {
        setPositions(initialValue);
    };

    React.useEffect(() => {
        isMounted.current = true;
    }, []);

    const startScrubbing = () => {
        if (!isSliding.current && isMounted.current) {
            isSliding.current = true;
            setActive(true);
            bindListeners();
        }
    };

    const updateMousePosition = ({ x, y }) => {
        if (isSliding.current) {
            const rect = ref.current.getBoundingClientRect();
            const { clampedX, clampedY } = clampPositions({
                x: (x - rect.left) / rect.width,
                y: (y - rect.top) / rect.height
            });

            handlePositionChange({ clampedX, clampedY });
        }
    };

    React.useEffect(() => {
        if (ref.current) {
            bindMouseDownListener();
            bindTouchStartListener();
        }

        return () => {
            if (ref.current) {
                unbindMouseDownListener();
                unbindTouchStartListener();
            }
        };
    }, [bindMouseDownListener, bindTouchStartListener, positions, unbindMouseDownListener, unbindTouchStartListener]);

    return { ref, ...positions, active, reset };
}

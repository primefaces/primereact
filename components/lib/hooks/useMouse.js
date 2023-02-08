import * as React from 'react';
import { useEventListener } from './useEventListener';

export const useMouse = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const ref = React.useRef(null);

    const handleMouseMove = React.useCallback((event) => {
        let x, y;

        if (ref.current) {
            const rect = event.currentTarget.getBoundingClientRect();

            x = event.pageX - rect.left - (window.pageXOffset || window.scrollX);
            y = event.pageY - rect.top - (window.pageYOffset || window.scrollY);
        } else {
            x = event.clientX;
            y = event.clientY;
        }

        setPosition({ x: Math.max(0, Math.round(x)), y: Math.max(0, Math.round(y)) });
    }, []);

    const [bindMouseMoveEventListener, unbindMouseMoveEventListener] = useEventListener({
        target: ref,
        type: 'mousemove',
        listener: handleMouseMove
    });

    const [bindDocumentMoveEventListener, unbindDocumentMoveEventListener] = useEventListener({
        type: 'mousemove',
        listener: handleMouseMove
    });

    const reset = () => setPosition({ x: 0, y: 0 });

    React.useEffect(() => {
        bindMouseMoveEventListener();

        if (!ref.current) {
            bindDocumentMoveEventListener();
        }

        return () => {
            unbindMouseMoveEventListener();

            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (!ref.current) {
                unbindDocumentMoveEventListener();
            }
        };
    }, [bindDocumentMoveEventListener, bindMouseMoveEventListener, unbindDocumentMoveEventListener, unbindMouseMoveEventListener]);

    return { ref, ...position, reset };
};

export default useMouse;

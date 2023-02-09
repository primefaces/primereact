import * as React from 'react';
import { useEventListener } from './useEventListener';

export const useClickOutside = (ref, callback) => {
    const isOutsideClicked = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
            return;
        }

        callback(event);
    };

    const [bindMouseDownListener, unbindMouseDownListener] = useEventListener({
        type: 'mousedown',
        listener: isOutsideClicked
    });

    const [bindTouchStartListener, unbindTouchStartListener] = useEventListener({
        type: 'touchstart',
        listener: isOutsideClicked
    });

    React.useEffect(() => {
        if (!ref.current) {
            return;
        }

        bindMouseDownListener();
        bindTouchStartListener();

        return () => {
            unbindMouseDownListener();
            unbindTouchStartListener();
        };
    });

    return [ref, callback];
};

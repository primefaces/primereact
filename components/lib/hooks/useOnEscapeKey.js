import * as React from 'react';
import { useEventListener } from './useEventListener';

export const useOnEscapeKey = (ref, condition, callback) => {
    const handleEsc = (event) => {
        if (event.key === 'Esc' || event.key === 'Escape') {
            event.stopImmediatePropagation();
            callback(event);
        }

        return;
    };

    const [bindKeyDownListener, unbindKeyDownListener] = useEventListener({
        type: 'keydown',
        listener: handleEsc
    });

    React.useEffect(() => {
        if (!condition) {
            return;
        }

        if (!ref.current) {
            return;
        }

        bindKeyDownListener();

        return () => {
            unbindKeyDownListener();
        };
    });

    return [ref, callback];
};

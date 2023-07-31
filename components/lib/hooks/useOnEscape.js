import * as React from 'react';
import { useEventListener } from './useEventListener';

export const useOnEscape = (ref, callback) => {
    const handleEsc = event => {
        if(event.key === 'Esc' || event.key === 'Escape') {
            callback(event);
        }

        return;
    };

    const [bindKeyDownListener, unbindKeyDownListener] = useEventListener({
        type: 'keydown',
        listener: handleEsc
    });

    React.useEffect(() => {
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

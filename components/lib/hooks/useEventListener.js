import * as React from 'react';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { usePrevious } from './usePrevious';
import { useUnmountEffect } from './useUnmountEffect';

export const useEventListener = ({ target = 'document', type, listener, options, when = true }) => {
    const targetRef = React.useRef(null);
    const listenerRef = React.useRef(null);
    let prevListener = usePrevious(listener);
    let prevOptions = usePrevious(options);

    const bind = (bindOptions = {}) => {
        const { target: bindTarget } = bindOptions;

        if (ObjectUtils.isNotEmpty(bindTarget)) {
            unbind();
            (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindTarget));
        }

        if (!listenerRef.current && targetRef.current) {
            listenerRef.current = (event) => listener && listener(event);
            targetRef.current.addEventListener(type, listenerRef.current, options);
        }
    };

    const unbind = () => {
        if (listenerRef.current) {
            targetRef.current.removeEventListener(type, listenerRef.current, options);
            listenerRef.current = null;
        }
    };

    const dispose = () => {
        unbind();
        // Prevent memory leak by releasing
        prevListener = null;
        prevOptions = null;
    };

    const updateTarget = React.useCallback(() => {
        if (when) {
            targetRef.current = DomHandler.getTargetElement(target);
        } else {
            unbind();
            targetRef.current = null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, when]);

    React.useEffect(() => {
        updateTarget();
    }, [updateTarget]);

    React.useEffect(() => {
        const listenerChanged = `${prevListener}` !== `${listener}`;
        const optionsChanged = prevOptions !== options;
        const listenerExists = listenerRef.current;

        if (listenerExists && (listenerChanged || optionsChanged)) {
            unbind();
            when && bind();
        } else if (!listenerExists) {
            dispose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listener, options, when]);

    useUnmountEffect(() => {
        dispose();
    });

    return [bind, unbind];
};

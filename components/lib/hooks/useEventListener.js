/* eslint-disable */
import * as React from 'react';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { usePrevious } from './usePrevious';
import { useUnmountEffect } from './useUnmountEffect';

export const useEventListener = ({ target = 'document', type, listener, options, when = true }) => {
    const targetRef = React.useRef(null);
    const listenerRef = React.useRef(null);
    const prevListener = usePrevious(listener);
    const prevOptions = usePrevious(options);

    const bind = (bindOptions = {}) => {
        if (ObjectUtils.isNotEmpty(bindOptions.target)) {
            unbind();
            (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
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

    React.useEffect(() => {
        if (when) {
            targetRef.current = DomHandler.getTargetElement(target);
        } else {
            unbind();
            targetRef.current = null;
        }
    }, [target, when]);

    React.useEffect(() => {
        // to properly compare functions we can implicitly converting the function to it's body's text as a String
        if (listenerRef.current && ('' + prevListener !== '' + listener || prevOptions !== options)) {
            unbind();
            when && bind();
        }
    }, [listener, options, when]);

    useUnmountEffect(() => {
        unbind();
    });

    return [bind, unbind];
};
/* eslint-enable */

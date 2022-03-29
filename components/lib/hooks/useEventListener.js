/* eslint-disable */
import { useEffect, useRef } from 'react';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { usePrevious } from './usePrevious';
import { useUnmountEffect } from './useUnmountEffect';

export const useEventListener = ({ target = 'document', type, listener, options, when = true }) => {
    const targetRef = useRef(null);
    const listenerRef = useRef(null);
    const prevOptions = usePrevious(options);

    const bind = (bindOptions = {}) => {
        if (ObjectUtils.isNotEmpty(bindOptions.target)) {
            unbind();
            (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
        }

        if (!listenerRef.current && targetRef.current) {
            listenerRef.current = event => listener && listener(event);
            targetRef.current.addEventListener(type, listenerRef.current, options);
        }
    }

    const unbind = () => {
        if (listenerRef.current) {
            targetRef.current.removeEventListener(type, listenerRef.current, options);
            listenerRef.current = null;
        }
    }

    useEffect(() => {
        if (when) {
            targetRef.current = DomHandler.getTargetElement(target);
        }
        else {
            unbind();
            targetRef.current = null;
        }
    }, [target, when]);

    useEffect(() => {
        if (listenerRef.current && (listenerRef.current !== listener || prevOptions !== options)) {
            unbind();
            when && bind();
        }
    }, [listener, options]);

    useUnmountEffect(() => {
        unbind();
    });

    return [bind, unbind];
}
/* eslint-enable */

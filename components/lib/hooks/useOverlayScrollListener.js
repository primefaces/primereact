/* eslint-disable */
import { useEffect, useRef } from 'react';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { usePrevious } from './usePrevious';
import { useUnmountEffect } from './useUnmountEffect';

export const useOverlayScrollListener = ({ target, listener, options, when = true }) => {
    const targetRef = useRef(null);
    const listenerRef = useRef(null);
    const scrollableParents = useRef([]);
    const prevOptions = usePrevious(options);

    const bind = (bindOptions = {}) => {
        if (ObjectUtils.isNotEmpty(bindOptions.target)) {
            unbind();
            (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
        }

        if (!listenerRef.current && targetRef.current) {
            const nodes = scrollableParents.current = DomHandler.getScrollableParents(targetRef.current);

            listenerRef.current = event => listener && listener(event);
            nodes.forEach((node) => node.addEventListener('scroll', listenerRef.current, options));
        }
    }

    const unbind = () => {
        if (listenerRef.current) {
            const nodes = scrollableParents.current;
            nodes.forEach((node) => node.removeEventListener('scroll', listenerRef.current, options));

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

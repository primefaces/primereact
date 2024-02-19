/* eslint-disable */
import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { DomHandler, ObjectUtils } from '../utils/Utils';
import { usePrevious } from './usePrevious';
import { useUnmountEffect } from './useUnmountEffect';

export const useOverlayScrollListener = ({ target, listener, options, when = true }) => {
    const targetRef = React.useRef(null);
    const listenerRef = React.useRef(null);
    const scrollableParents = React.useRef([]);
    const context = React.useContext(PrimeReactContext);
    let prevListener = usePrevious(listener);
    let prevOptions = usePrevious(options);

    const bind = (bindOptions = {}) => {
        if (ObjectUtils.isNotEmpty(bindOptions.target)) {
            unbind();
            (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
        }

        if (!listenerRef.current && targetRef.current) {
            const hideOnScroll = context ? context.hideOverlaysOnDocumentScrolling : PrimeReact.hideOverlaysOnDocumentScrolling;
            const nodes = (scrollableParents.current = DomHandler.getScrollableParents(targetRef.current, hideOnScroll));

            listenerRef.current = (event) => listener && listener(event);
            nodes.forEach((node) => node.addEventListener('scroll', listenerRef.current, options));
        }
    };

    const unbind = () => {
        if (listenerRef.current) {
            const nodes = scrollableParents.current;
            nodes.forEach((node) => node.removeEventListener('scroll', listenerRef.current, options));

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
        return () => {
            // #5927 prevent memory leak by releasing
            prevListener = null;
            prevOptions = null;
        };
    }, [listener, options]);

    useUnmountEffect(() => {
        unbind();
    });

    return [bind, unbind];
};
/* eslint-enable */

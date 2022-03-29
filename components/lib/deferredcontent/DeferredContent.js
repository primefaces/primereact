import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useMountEffect, useEventListener } from '../hooks/Hooks';

export const DeferredContent = forwardRef((props, ref) => {
    const [loadedState, setLoadedState] = useState(false);
    const elementRef = useRef(null);

    const [bindScrollListener, unbindScrollListener] = useEventListener({
        target: 'window', type: 'scroll', listener: () => {
            if (shouldLoad()) {
                load();
                unbindScrollListener();
            }
        }
    });

    const shouldLoad = () => {
        if (loadedState) {
            return false;
        }
        else {
            const rect = elementRef.current.getBoundingClientRect();
            const winHeight = document.documentElement.clientHeight;

            return (winHeight >= rect.top);
        }
    }

    const load = (event) => {
        setLoadedState(true);
        props.onLoad && props.onLoad(event);
    }

    useMountEffect(() => {
        if (!loadedState) {
            shouldLoad() ? load() : bindScrollListener();
        }
    });

    return (
        <div ref={elementRef}>
            {loadedState && props.children}
        </div>
    )
});

DeferredContent.defaultProps = {
    __TYPE: 'DeferredContent',
    onload: null
}

DeferredContent.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    onLoad: PropTypes.func
}

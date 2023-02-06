import * as React from 'react';
import { useEventListener, useMountEffect } from '../hooks/Hooks';
import { DeferredContentBase } from './DeferredContentBase';

export const DeferredContent = React.forwardRef((inProps, ref) => {
    const props = DeferredContentBase.getProps(inProps);

    const [loadedState, setLoadedState] = React.useState(false);
    const elementRef = React.useRef(null);

    const [bindScrollListener, unbindScrollListener] = useEventListener({
        target: 'window',
        type: 'scroll',
        listener: () => {
            if (shouldLoad()) {
                load();
                unbindScrollListener();
            }
        }
    });

    const shouldLoad = () => {
        if (loadedState) {
            return false;
        } else {
            const rect = elementRef.current.getBoundingClientRect();
            const winHeight = document.documentElement.clientHeight;

            return winHeight >= rect.top;
        }
    };

    const load = (event) => {
        setLoadedState(true);
        props.onLoad && props.onLoad(event);
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    useMountEffect(() => {
        if (!loadedState) {
            shouldLoad() ? load() : bindScrollListener();
        }
    });

    const otherProps = DeferredContentBase.getOtherProps(props);

    return (
        <div ref={elementRef} {...otherProps}>
            {loadedState && props.children}
        </div>
    );
});

DeferredContent.displayName = 'DeferredContent';

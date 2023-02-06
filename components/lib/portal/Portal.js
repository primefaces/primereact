import * as React from 'react';
import ReactDOM from 'react-dom';
import PrimeReact from '../api/Api';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler } from '../utils/Utils';
import { PortalBase } from './PortalBase';

export const Portal = React.memo((inProps) => {
    const props = PortalBase.getProps(inProps);

    const [mountedState, setMountedState] = React.useState(props.visible && DomHandler.hasDOM());

    useMountEffect(() => {
        if (DomHandler.hasDOM() && !mountedState) {
            setMountedState(true);
            props.onMounted && props.onMounted();
        }
    });

    useUpdateEffect(() => {
        props.onMounted && props.onMounted();
    }, [mountedState]);

    useUnmountEffect(() => {
        props.onUnmounted && props.onUnmounted();
    });

    const element = props.element || props.children;

    if (element && mountedState) {
        const appendTo = props.appendTo || PrimeReact.appendTo || document.body;

        return appendTo === 'self' ? element : ReactDOM.createPortal(element, appendTo);
    }

    return null;
});

Portal.displayName = 'Portal';

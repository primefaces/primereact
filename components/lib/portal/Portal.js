import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PrimeReact from '../api/Api';
import { DomHandler } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';

export const Portal = memo((props) => {
    const [mountedState, setMountedState] = useState(props.visible && DomHandler.hasDOM());

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

Portal.defaultProps = {
    __TYPE: 'Portal',
    element: null,
    appendTo: null,
    visible: false,
    onMounted: null,
    onUnmounted: null
}

Portal.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    element: PropTypes.any,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    visible: PropTypes.bool,
    onMounted: PropTypes.func,
    onUnmounted: PropTypes.func
}

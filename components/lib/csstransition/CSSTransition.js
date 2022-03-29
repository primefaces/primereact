import React, { forwardRef } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { ObjectUtils } from '../utils/Utils';
import { useUpdateEffect } from '../hooks/Hooks';

export const CSSTransition = forwardRef((props, ref) => {
    const disabled = props.disabled || (props.options && props.options.disabled) || !PrimeReact.cssTransition;

    const onEnter = (node, isAppearing) => {
        props.onEnter && props.onEnter(node, isAppearing); // component
        props.options && props.options.onEnter && props.options.onEnter(node, isAppearing); // user option
    }

    const onEntering = (node, isAppearing) => {
        props.onEntering && props.onEntering(node, isAppearing); // component
        props.options && props.options.onEntering && props.options.onEntering(node, isAppearing); // user option
    }

    const onEntered = (node, isAppearing) => {
        props.onEntered && props.onEntered(node, isAppearing); // component
        props.options && props.options.onEntered && props.options.onEntered(node, isAppearing); // user option
    }

    const onExit = (node) => {
        props.onExit && props.onExit(node); // component
        props.options && props.options.onExit && props.options.onExit(node); // user option
    }

    const onExiting = (node) => {
        props.onExiting && props.onExiting(node); // component
        props.options && props.options.onExiting && props.options.onExiting(node); // user option
    }

    const onExited = (node) => {
        props.onExited && props.onExited(node); // component
        props.options && props.options.onExited && props.options.onExited(node); // user option
    }

    useUpdateEffect(() => {
        if (disabled) { // no animation
            const node = ObjectUtils.getRefElement(props.nodeRef);

            if (props.in) {
                onEnter(node, true);
                onEntering(node, true);
                onEntered(node, true);
            }
            else {
                onExit(node);
                onExiting(node);
                onExited(node);
            }
        }
    }, [props.in]);

    if (disabled) {
        return props.in ? props.children : null;
    }
    else {
        const immutableProps = { nodeRef: props.nodeRef, in: props.in, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited };
        const mutableProps = { classNames: props.classNames, timeout: props.timeout, unmountOnExit: props.unmountOnExit };
        const mergedProps = { ...mutableProps, ...(props.options || {}), ...immutableProps };

        return (
            <ReactCSSTransition {...mergedProps}>
                {props.children}
            </ReactCSSTransition>
        )
    }
});

CSSTransition.defaultProps = {
    __TYPE: 'CSSTransition'
}

CSSTransition.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string
}

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { useMountEffect, useUpdateEffect, useUnmountEffect } from '../hooks/Hooks';

export const BlockUI = forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(props.blocked);
    const maskRef = useRef(null);

    const block = () => {
        setVisibleState(true);
    }

    const unblock = () => {
        const callback = () => {
            setVisibleState(false);

            props.fullScreen && DomHandler.removeClass(document.body, 'p-overflow-hidden');
            props.onUnblocked && props.onUnblocked();
        }

        if (maskRef.current) {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
            maskRef.current.addEventListener('animationend', () => {
                ZIndexUtils.clear(maskRef.current);
                callback();
            });
        }
        else {
            callback();
        }
    }

    const onPortalMounted = () => {
        if (props.fullScreen) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
            document.activeElement.blur();
        }

        if (props.autoZIndex) {
            const key = props.fullScreen ? 'modal' : 'overlay';
            ZIndexUtils.set(key, maskRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex[key]);
        }

        props.onBlocked && props.onBlocked();
    }

    useMountEffect(() => {
        visibleState && block();
    });

    useUpdateEffect(() => {
        props.blocked ? block() : unblock();
    }, [props.blocked]);

    useUnmountEffect(() => {
        if (props.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }

        ZIndexUtils.clear(maskRef.current);
    });

    useImperativeHandle(ref, () => ({
        block,
        unblock
    }));

    const createMask = () => {
        if (visibleState) {
            const appendTo = props.fullScreen ? document.body : 'self';
            const className = classNames('p-blockui p-component-overlay p-component-overlay-enter', {
                'p-blockui-document': props.fullScreen
            }, props.className);
            const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : null;
            const mask = (
                <div ref={maskRef} className={className} style={props.style}>
                    {content}
                </div>
            );

            return <Portal element={mask} appendTo={appendTo} onMounted={onPortalMounted} />
        }

        return null;
    }

    const mask = createMask();

    return (
        <div id={props.id} className="p-blockui-container">
            {props.children}
            {mask}
        </div>
    )
});

BlockUI.defaultProps = {
    __TYPE: 'BlockUI',
    id: null,
    blocked: false,
    fullScreen: false,
    baseZIndex: 0,
    autoZIndex: true,
    style: null,
    className: null,
    template: null,
    onBlocked: null,
    onUnblocked: null
}

BlockUI.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    blocked: PropTypes.bool,
    fullScreen: PropTypes.bool,
    baseZIndex: PropTypes.number,
    autoZIndex: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    template: PropTypes.any,
    onBlocked: PropTypes.func,
    onUnblocked: PropTypes.func
}

import * as React from 'react';
import PrimeReact from '../api/Api';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';

export const BlockUI = React.forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = React.useState(props.blocked);
    const maskRef = React.useRef(null);

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

    React.useImperativeHandle(ref, () => ({
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

    const otherProps = ObjectUtils.findDiffKeys(props, BlockUI.defaultProps);
    const mask = createMask();

    return (
        <div id={props.id} className="p-blockui-container" {...otherProps}>
            {props.children}
            {mask}
        </div>
    )
});

BlockUI.displayName = 'BlockUI';
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

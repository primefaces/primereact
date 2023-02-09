import * as React from 'react';
import PrimeReact from '../api/Api';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { BlockUIBase } from './BlockUIBase';

export const BlockUI = React.forwardRef((inProps, ref) => {
    const props = BlockUIBase.getProps(inProps);

    const [visibleState, setVisibleState] = React.useState(props.blocked);
    const elementRef = React.useRef(null);
    const maskRef = React.useRef(null);

    const block = () => {
        setVisibleState(true);
    };

    const unblock = () => {
        const callback = () => {
            setVisibleState(false);

            props.fullScreen && DomHandler.removeClass(document.body, 'p-overflow-hidden');
            props.onUnblocked && props.onUnblocked();
        };

        if (maskRef.current) {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
            maskRef.current.addEventListener('animationend', () => {
                ZIndexUtils.clear(maskRef.current);
                callback();
            });
        } else {
            callback();
        }
    };

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
    };

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
        props,
        block,
        unblock,
        getElement: () => elementRef.current
    }));

    const createMask = () => {
        if (visibleState) {
            const appendTo = props.fullScreen ? document.body : 'self';
            const className = classNames(
                'p-blockui p-component-overlay p-component-overlay-enter',
                {
                    'p-blockui-document': props.fullScreen
                },
                props.className
            );
            const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : null;
            const mask = (
                <div ref={maskRef} className={className} style={props.style}>
                    {content}
                </div>
            );

            return <Portal element={mask} appendTo={appendTo} onMounted={onPortalMounted} />;
        }

        return null;
    };

    const otherProps = BlockUIBase.getOtherProps(props);
    const mask = createMask();
    const className = classNames('p-blockui-container', props.containerClassName);

    return (
        <div id={props.id} ref={elementRef} className={className} style={props.containerStyle} {...otherProps}>
            {props.children}
            {mask}
        </div>
    );
});

BlockUI.displayName = 'BlockUI';

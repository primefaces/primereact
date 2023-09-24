import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { DomHandler, ObjectUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { BlockUIBase } from './BlockUIBase';

export const BlockUI = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = BlockUIBase.getProps(inProps, context);

    const [visibleState, setVisibleState] = React.useState(props.blocked);
    const elementRef = React.useRef(null);
    const maskRef = React.useRef(null);

    const { ptm, cx, isUnstyled } = BlockUIBase.setMetaData({
        props
    });

    useHandleStyle(BlockUIBase.css.styles, isUnstyled, { name: 'blockui' });

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

            ZIndexUtils.set(key, maskRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex[key]) || PrimeReact.zIndex[key]);
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
            const maskProps = mergeProps(
                {
                    className: classNames(props.className, cx('mask')),
                    style: {
                        ...props.style,
                        position: props.fullScreen ? 'fixed' : 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    }
                },
                ptm('mask')
            );
            const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : null;
            const mask = (
                <div ref={maskRef} {...maskProps}>
                    {content}
                </div>
            );

            return <Portal element={mask} appendTo={appendTo} onMounted={onPortalMounted} />;
        }

        return null;
    };

    const mask = createMask();

    const rootProps = mergeProps(
        {
            id: props.id,
            ref: elementRef,
            style: props.containerStyle,
            className: cx('root')
        },
        BlockUIBase.getOtherProps(props),
        ptm('root')
    );

    return (
        <div {...rootProps}>
            {props.children}
            {mask}
        </div>
    );
});

BlockUI.displayName = 'BlockUI';

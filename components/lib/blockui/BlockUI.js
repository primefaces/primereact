import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { DomHandler, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { BlockUIBase } from './BlockUIBase';

export const BlockUI = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = BlockUIBase.getProps(inProps, context);

    const [visibleState, setVisibleState] = React.useState(props.blocked);
    const elementRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const activeElementRef = React.useRef(null);

    const { ptm, cx, isUnstyled } = BlockUIBase.setMetaData({
        props
    });

    useHandleStyle(BlockUIBase.css.styles, isUnstyled, { name: 'blockui' });

    const block = () => {
        setVisibleState(true);
        activeElementRef.current = document.activeElement;
    };

    const unblock = () => {
        !isUnstyled() && DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');

        if (DomHandler.hasCSSAnimation(maskRef.current) > 0) {
            maskRef.current.addEventListener('animationend', () => {
                removeMask();
            });
        } else {
            removeMask();
        }
    };

    const removeMask = () => {
        ZIndexUtils.clear(maskRef.current);
        setVisibleState(false);

        if (props.fullScreen) {
            DomHandler.unblockBodyScroll();
            activeElementRef.current && activeElementRef.current.focus();
        }

        props.onUnblocked && props.onUnblocked();
    };

    const onPortalMounted = () => {
        if (props.fullScreen) {
            DomHandler.blockBodyScroll();
            activeElementRef.current && activeElementRef.current.blur();
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
        props.fullScreen && DomHandler.unblockBodyScroll();

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
            className: cx('root'),
            'aria-busy': props.blocked
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

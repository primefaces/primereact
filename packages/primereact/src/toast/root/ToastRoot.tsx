'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToast } from '@primereact/headless/toast';
import { mergeProps } from '@primeuix/utils';
import { useToasterContext } from 'primereact/toaster';
import * as React from 'react';
import { ToastProvider } from '../Toast.context';
import { defaultRootProps } from './ToastRoot.props';

export const ToastRoot = withComponent({
    name: 'Toast.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const toaster = useToasterContext();
        const toast = useToast({ toaster, ...instance.inProps });

        return toast;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx, isVisible, state, index, visibleIndex, offset, isFront, onPointerDown, onPointerMove, onPointerUp, onDragEnd, toaster } = instance;

        const { toast } = props;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                tabIndex: isVisible ? 0 : -1,
                role: 'alert',
                inert: !isVisible,
                'aria-live': 'assertive',
                'aria-atomic': 'true',
                'aria-hidden': !isVisible,
                style: {
                    '--initial-height': state?.initialHeight ? `${state?.initialHeight}px` : undefined,
                    '--toast-index': state.removed ? index : visibleIndex,
                    '--toast-z-index': (toaster?.toasts?.length || 0) - index,
                    '--toast-offset': (state.removed ? state.offsetBeforeRemove : offset) + 'px',
                    '--swipe-amount-x': '0px',
                    '--swipe-amount-y': '0px',
                    ...sx('root')
                } as React.CSSProperties,
                'data-id': toast?.id,
                'data-variant': toast?.variant,
                'data-swipe-direction': state.swipeOutDirection,
                'data-index': index,
                ...(toaster?.props?.richColors && { 'data-rich-colors': '' }),
                ...(state?.mounted && { 'data-mounted': '' }),
                ...(state.removed && { 'data-removed': '' }),
                ...(state.isSwiped && { 'data-swiped': '' }),
                ...(isVisible && { 'data-visible': '' }),
                ...(state.swiping && { 'data-swiping': '' }),
                ...(toast.dismissible && { 'data-dismissible': '' }),
                ...(toaster?.state.isExpanded && { 'data-expanded': '' }),
                ...(isFront && { 'data-front': '' }),
                ...(state.swipeOut && { 'data-swipe-out': '' }),
                onPointerDown: onPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: onPointerUp,
                onDragEnd: onDragEnd
            },
            ptmi('root')
        );

        return (
            <ToastProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={toast?.jsx ?? props.children} />
            </ToastProvider>
        );
    }
});

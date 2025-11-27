'use client';
import { Component } from '@primereact/core/component';
import { useToastItem } from '@primereact/headless/toast/item';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { ToastItemProvider } from './ToastItem.context';
import { defaultItemProps } from './ToastItem.props';

export const ToastItem = withComponent({
    name: 'ToastItem',
    defaultProps: defaultItemProps,
    styles,
    setup(instance) {
        const toastItem = useToastItem(instance.inProps);

        const toast = useToastContext();

        return { ...toastItem, toast };
    },
    render(instance) {
        const { id, props, ptmi, state, toast: toastContext, offset, onPointerDown, onPointerMove, onPointerUp, onDragEnd, index, visibleIndex, isVisible, isFront } = instance;

        const { toast } = props;

        const rootProps = mergeProps(
            {
                id,
                className: toastContext?.cx('item'),
                tabIndex: isVisible ? 0 : -1,
                role: 'alert',
                inert: !isVisible,
                'aria-live': 'assertive',
                'aria-atomic': 'true',
                'aria-hidden': !isVisible,
                style: {
                    '--initial-height': state?.initialHeight ? `${state?.initialHeight}px` : undefined,
                    '--toast-index': state.removed ? index : visibleIndex,
                    '--toast-z-index': (toastContext?.toasts?.length || 0) - index,
                    '--toast-offset': (state.removed ? state.offsetBeforeRemove : offset) + 'px',
                    '--swipe-amount-x': '0px',
                    '--swipe-amount-y': '0px'
                } as React.CSSProperties,
                'data-id': toast?.id,
                'data-variant': toast?.variant,
                'data-rich-colors': toastContext?.props.richColors,
                'data-mounted': state?.mounted,
                'data-swiped': state.isSwiped,
                'data-removed': state.removed,
                'data-visible': isVisible,
                'data-index': index,
                'data-front': isFront,
                'data-swiping': state.swiping,
                'data-dismissible': toast.dismissible,
                'data-swipe-out': state.swipeOut,
                'data-swipe-direction': state.swipeOutDirection,
                'data-expanded': toastContext?.state.isExpanded,
                onPointerDown: onPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: onPointerUp,
                onDragEnd: onDragEnd
            },
            toastContext?.ptm('item'),
            ptmi('root')
        );

        return (
            <ToastItemProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={toast?.jsx ?? props.children}></Component>
            </ToastItemProvider>
        );
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { useToastItem } from '@primereact/headless/toast/item';
import { styles } from '@primereact/styles/toast';
import { cn, mergeProps } from '@primeuix/utils';
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
        const { id, props, ptmi, toast, state, offset, onPointerDown, onPointerMove, onPointerUp, onDragEnd, index, onKeyDown } = instance;

        const { data } = props;

        const rootProps = mergeProps(
            {
                id,
                className: cn('p-toast'),
                tabIndex: 0,
                role: 'alert',
                'aria-live': 'assertive',
                'aria-atomic': 'true',
                style: { '--p-toast-index': index, '--p-toast-offset': offset + 'px', '--p-swipe-amount-x': '0px', '--p-swipe-amount-y': '0px', '--p-real-height': state.realHeight + 'px' } as React.CSSProperties,
                'data-overflow': index > 2,
                'data-removed': data.removed,
                'data-expanded': toast?.state.isExpanded,
                'data-mounted': state?.isMounted,
                'data-front': index === 0,
                'data-swiping': state?.isSwiping,
                'data-swipe-out': state?.isSwipeOut,
                'data-swipe-out-direction': state?.swipeOutDirection,
                'data-variant': data.variant,
                'data-id': data.id,
                'data-rich-colors': toast?.props.richColors,
                onPointerDown: onPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: onPointerUp,
                onDragEnd: onDragEnd,
                onKeyDown: onKeyDown
            },
            ptmi('root')
        );

        return (
            <ToastItemProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={data.jsx ?? props.children}></Component>
            </ToastItemProvider>
        );
    }
});

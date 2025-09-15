'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToastContext } from '../Toast.context';
import { defaultRegionProps } from './ToastRegion.props';

export const ToastRegion = withComponent({
    name: 'ToastRegion',
    defaultProps: defaultRegionProps,
    styles,
    setup() {
        const toast = useToastContext();

        return { toast };
    },
    render(instance) {
        const { props, toast } = instance;

        const rootProps = mergeProps({
            role: 'region',
            className: 'p-toast-region',
            tabIndex: -1,
            onMouseEnter: toast?.onRegionMouseEnter,
            onMouseLeave: toast?.onRegionMouseLeave,
            onMouseMove: toast?.onRegionMouseMove,
            onDragEnd: toast?.onRegionDragEnd,
            onPointerDown: toast?.onRegionPointerDown,
            onPointerUp: toast?.onRegionPointerUp,
            'data-position': toast?.props.position,
            'data-expanded': toast?.state.isExpanded,
            style: {
                '--gap': `${toast?.props.gap}px`,
                '--raise-factor': toast?.props.position?.includes('top') ? 1 : -1,
                '--front-toast-height': `${toast?.toasts[0]?.height || 0}px`
            } as React.CSSProperties
        });

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

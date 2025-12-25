'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { mergeProps } from '@primeuix/utils';
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
        const { props, toast, ptmi } = instance;

        const rootProps = mergeProps(
            {
                role: 'region',
                className: toast?.cx('region'),
                tabIndex: 0,
                onMouseEnter: toast?.onRegionMouseEnter,
                onMouseLeave: toast?.onRegionMouseLeave,
                onMouseMove: toast?.onRegionMouseMove,
                onDragEnd: toast?.onRegionDragEnd,
                onPointerDown: toast?.onRegionPointerDown,
                onPointerUp: toast?.onRegionPointerUp,
                onFocus: toast?.onRegionFocus,
                onBlur: toast?.onRegionBlur,
                'data-position': toast?.props.position,
                'data-expanded': toast?.state.isExpanded,
                style: {
                    '--gap': `${toast?.props.gap}px`,
                    '--front-toast-height': `${toast?.state.heights?.[0]?.height || 0}px`
                } as React.CSSProperties
            },
            toast?.ptm('region'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

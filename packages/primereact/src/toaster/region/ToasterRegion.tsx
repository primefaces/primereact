'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useToasterContext } from '../Toaster.context';
import { defaultRegionProps } from './ToasterRegion.props';

export const ToasterRegion = withComponent({
    name: 'Toaster.Region',
    defaultProps: defaultRegionProps,
    setup() {
        const toaster = useToasterContext();

        return { toaster };
    },
    render(instance) {
        const { props, toaster, ptmi } = instance;

        const regionProps = mergeProps(
            {
                role: 'region',
                className: toaster?.cx('region'),
                tabIndex: 0,
                onMouseEnter: toaster?.onRegionMouseEnter,
                onMouseLeave: toaster?.onRegionMouseLeave,
                onMouseMove: toaster?.onRegionMouseMove,
                onDragEnd: toaster?.onRegionDragEnd,
                onPointerDown: toaster?.onRegionPointerDown,
                onPointerUp: toaster?.onRegionPointerUp,
                onFocus: toaster?.onRegionFocus,
                onBlur: toaster?.onRegionBlur,
                'data-position': toaster?.props.position,
                ...(toaster?.state.isExpanded && { 'data-expanded': '' }),
                style: {
                    '--gap': `${toaster?.props.gap}px`,
                    '--front-toast-height': `${toaster?.state.heights?.[0]?.height || 0}px`
                } as React.CSSProperties
            },
            toaster?.ptm('region'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={regionProps} children={props.children} />;
    }
});

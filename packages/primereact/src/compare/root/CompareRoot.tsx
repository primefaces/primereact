'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCompare } from '@primereact/headless/compare';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CompareProvider } from '../Compare.context';
import { defaultRootProps } from './CompareRoot.props';

export const CompareRoot = withComponent({
    name: 'Compare.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const compare = useCompare(instance.inProps);

        return compare;
    },
    render(instance) {
        const { id, props, state, ptmi, cx, setRootRef, onRootPointerDown, onRootPointerMove, onRootPointerUp } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onPointerDown: onRootPointerDown,
                onPointerMove: onRootPointerMove,
                onPointerUp: onRootPointerUp,
                'data-orientation': props.orientation,
                'data-dragging': state.isDragging
            },
            ptmi('root')
        );

        return (
            <CompareProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} ref={setRootRef} />
            </CompareProvider>
        );
    }
});

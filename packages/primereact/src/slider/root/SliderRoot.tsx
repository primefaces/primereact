'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSlider } from '@primereact/headless/slider';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { SliderProvider } from '../Slider.context';
import { defaultRootProps } from './SliderRoot.props';

export const SliderRoot = withComponent({
    name: 'Slider.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const slider = useSlider(instance.inProps);

        return slider;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx, state, setRootRef, onTrackPointerDown, onTrackPointerMove, onTrackPointerUp } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: {
                    position: 'relative',
                    touchAction: 'none',
                    ...sx('root')
                },
                onPointerDown: onTrackPointerDown,
                onPointerMove: onTrackPointerMove,
                onPointerUp: onTrackPointerUp,
                'data-orientation': props.orientation,
                ...(props.disabled && { 'data-disabled': '' }),
                ...(props.invalid && { 'data-invalid': '' }),
                ...(state.isDragging && { 'data-dragging': '' })
            },
            ptmi('root')
        );

        return (
            <SliderProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} ref={setRootRef} />
            </SliderProvider>
        );
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSliderContext } from '../Slider.context';
import { defaultTrackProps } from './SliderTrack.props';

export const SliderTrack = withComponent({
    name: 'Slider.Track',
    defaultProps: defaultTrackProps,
    setup() {
        const slider = useSliderContext();

        return { slider };
    },
    render(instance) {
        const { props, ptmi, slider } = instance;

        const rootProps = mergeProps(
            {
                className: slider?.cx('track'),
                style: {
                    display: 'block',
                    flexGrow: 1,
                    position: 'relative',
                    ...slider?.sx('track')
                },
                'data-orientation': slider?.props.orientation,
                ...(slider?.props.disabled && { 'data-disabled': '' }),
                ...(slider?.props.invalid && { 'data-invalid': '' }),
                ...(slider?.state.isDragging && { 'data-dragging': '' })
            },
            slider?.ptm('track'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

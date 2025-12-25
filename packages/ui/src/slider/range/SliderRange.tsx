'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSliderContext } from '../Slider.context';
import { defaultContentProps } from './SliderRange.props';

export const SliderRange = withComponent({
    name: 'SliderRange',
    defaultProps: defaultContentProps,
    setup() {
        const slider = useSliderContext();

        return { slider };
    },
    render(instance) {
        const { props, ptmi, slider } = instance;

        const rootProps = mergeProps(
            {
                className: slider?.cx('range'),
                style: { ...slider?.rangeStyle(), ...slider?.sx('range') }
            },
            slider?.ptm('range'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

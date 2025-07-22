'use client';
import { Component } from '@primereact/core/component';
import { useSlider } from '@primereact/headless/slider';
import { styles } from '@primereact/styles/slider';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { SliderProvider } from './Slider.context';
import { defaultProps } from './Slider.props';
import { SliderRange } from './range';
import { SliderThumb } from './thumb';

export const Slider = withComponent({
    name: 'Slider',
    defaultProps,
    styles,
    setup(instance) {
        const slider = useSlider(instance.inProps);

        return slider;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <SliderProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SliderProvider>
        );
    },
    components: {
        Range: SliderRange,
        Thumb: SliderThumb
    }
});

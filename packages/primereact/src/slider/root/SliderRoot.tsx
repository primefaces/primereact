'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSlider } from '@primereact/headless/slider';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { SliderProvider } from '../Slider.context';
import { defaultRootProps } from './SliderRoot.props';

export const SliderRoot = withComponent({
    name: 'SliderRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const slider = useSlider(instance.inProps);

        return slider;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onClick: instance.onBarClick
            },
            ptmi('root')
        );

        return (
            <SliderProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SliderProvider>
        );
    }
});

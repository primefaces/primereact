'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useImageCompare } from '@primereact/headless/imagecompare';
import { styles } from '@primereact/styles/imagecompare';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ImageCompareProvider } from './ImageCompare.context';
import { defaultProps } from './ImageCompare.props';
import { ImageCompareLeft } from './left/ImageCompareLeft';
import { ImageCompareRight } from './right/ImageCompareRight';
import { ImageCompareSlider } from './slider/ImageCompareSlider';

export const ImageCompare = withComponent({
    name: 'ImageCompare',
    defaultProps,
    styles,
    setup(instance) {
        const imagecompare = useImageCompare(instance.inProps);

        return imagecompare;
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
            <ImageCompareProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ImageCompareProvider>
        );
    },
    components: {
        Slider: ImageCompareSlider,
        Left: ImageCompareLeft,
        Right: ImageCompareRight
    }
});

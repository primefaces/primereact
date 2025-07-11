'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useImageCompareContext } from '../ImageCompare.context';
import { defaultProps } from './ImageCompareSlider.props';

export const ImageCompareSlider = withComponent({
    name: 'ImageCompareSlider',
    defaultProps,
    setup() {
        const imagecompare = useImageCompareContext();

        return { imagecompare };
    },
    render(instance) {
        const { props, ptmi, imagecompare } = instance;

        const rootProps = mergeProps(
            {
                className: imagecompare?.cx('slider'),
                min: 0,
                max: 100,
                value: imagecompare?.state.slideValue,
                type: 'range',
                onChange: imagecompare?.onSlideChange
            },
            imagecompare?.ptm('slider'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

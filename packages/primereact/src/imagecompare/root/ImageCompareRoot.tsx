'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useImageCompare } from '@primereact/headless/imagecompare';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ImageCompareProvider } from '../ImageCompare.context';
import { defaultRootProps } from './ImageCompareRoot.props';

export const ImageCompareRoot = withComponent({
    name: 'ImageCompareRoot',
    defaultProps: defaultRootProps,
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
    }
});

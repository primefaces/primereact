'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useImageCompareContext } from '../ImageCompare.context';
import { defaultLeftProps } from './ImageCompareLeft.props';

export const ImageCompareLeft = withComponent({
    name: 'ImageCompareLeft',
    defaultProps: defaultLeftProps,
    setup() {
        const imagecompare = useImageCompareContext();

        return { imagecompare };
    },
    render(instance) {
        const { props, ptmi } = instance;

        const rootProps = mergeProps(ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

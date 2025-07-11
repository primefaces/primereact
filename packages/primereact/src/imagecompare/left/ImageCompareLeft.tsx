'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useImageCompareContext } from '../ImageCompare.context';
import { defaultProps } from './ImageCompareLeft.props';

export const ImageCompareLeft = withComponent({
    name: 'ImageCompareLeft',
    defaultProps,
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

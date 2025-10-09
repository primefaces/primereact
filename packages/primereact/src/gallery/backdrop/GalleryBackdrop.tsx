'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultCloseProps } from './GalleryBackdrop.props';

export const GalleryBackdrop = withComponent({
    name: 'GalleryBackdrop',
    defaultProps: defaultCloseProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('backdrop')
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

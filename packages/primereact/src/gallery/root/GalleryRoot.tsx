'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useGallery } from '@primereact/headless/gallery';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { GalleryProvider } from '../Gallery.context';
import { defaultRootProps } from './GalleryRoot.props';

export const GalleryRoot = withComponent({
    name: 'GalleryRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const gallery = useGallery(instance.inProps);

        return gallery;
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
            <GalleryProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </GalleryProvider>
        );
    }
});

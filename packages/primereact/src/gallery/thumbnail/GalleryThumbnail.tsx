'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Carousel } from 'primereact/carousel';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultThumbnailProps } from './GalleryThumbnail.props';

export const GalleryThumbnail = withComponent({
    name: 'GalleryThumbnail',
    defaultProps: defaultThumbnailProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('thumbnail')
            },
            ptmi('root')
        );

        return <Component as={Carousel} instance={instance} attrs={rootProps} children={props.children} ref={gallery?.thumbnailRef} />;
    }
});

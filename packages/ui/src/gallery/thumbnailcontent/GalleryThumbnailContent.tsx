'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Carousel } from 'primereact/carousel';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultThumbnailContentProps } from './GalleryThumbnailContent.props';

export const GalleryThumbnailContent = withComponent({
    name: 'GalleryThumbnailContent',
    defaultProps: defaultThumbnailContentProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('thumbnailContent')
            },
            ptmi('root')
        );

        return <Component as={Carousel.Content} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

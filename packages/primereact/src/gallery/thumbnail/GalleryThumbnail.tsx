'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: gallery?.cx('thumbnail')
            },
            gallery?.ptm('thumbnail'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} ref={gallery?.thumbnailRef} />;
    }
});

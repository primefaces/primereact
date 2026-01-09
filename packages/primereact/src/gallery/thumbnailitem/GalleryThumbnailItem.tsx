'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultThumbnailItemProps } from './GalleryThumbnailItem.props';

export const GalleryThumbnailItem = withComponent({
    name: 'GalleryThumbnailItem',
    defaultProps: defaultThumbnailItemProps,
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
                className: gallery?.cx('thumbnailItem')
            },
            gallery?.ptm('thumbnailItem'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: gallery?.cx('thumbnailContent')
            },
            gallery?.ptm('thumbnailContent'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

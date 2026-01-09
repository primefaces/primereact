'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { CarouselContent } from '@primereact/ui/carousel';
import { GalleryThumbnailContent, defaultThumbnailContentProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryThumbnailContent = withComponent({
    name: 'UIGalleryThumbnailContent',
    defaultProps: defaultThumbnailContentProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CarouselContent }, instance.inProps);

        return <Component as={GalleryThumbnailContent} attrs={rootProps} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useGalleryItem } from '@primereact/headless/gallery/item';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { GalleryItemProvider } from './GalleryItem.context';
import { defaultItemProps } from './GalleryItem.props';

export const GalleryItem = withComponent({
    name: 'GalleryItem',
    defaultProps: defaultItemProps,
    setup(instance) {
        const gallery = useGalleryContext();
        const galleryItem = useGalleryItem(instance.inProps);

        return { ...galleryItem, gallery };
    },
    render(instance) {
        const { id, props, ptmi, gallery, handleClick, handlePointerDown, handlePointerMove, handlePointerUp, handleDragStart, CSSVariables, attributes } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: gallery?.cx('item'),
                onClick: handleClick,
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp: handlePointerUp,
                onDragStart: handleDragStart,
                style: CSSVariables,
                ...attributes
            },
            ptmi('root'),
            gallery?.ptm('item')
        );

        return (
            <GalleryItemProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </GalleryItemProvider>
        );
    }
});

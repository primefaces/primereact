'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultToolbarProps } from './GalleryToolbar.props';

export const GalleryToolbar = withComponent({
    name: 'GalleryToolbar',
    defaultProps: defaultToolbarProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('toolbar')
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={gallery?.toolbarRef} />;
    }
});

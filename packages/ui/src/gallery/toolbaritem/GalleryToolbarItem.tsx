'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultToolbarItemProps } from './GalleryToolbarItem.props';

export const GalleryToolbarItem = withComponent({
    name: 'GalleryToolbarItem',
    defaultProps: defaultToolbarItemProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('toolbarItem'),
                onClick: () => {
                    gallery?.handleClickAction(props?.action);
                    props?.onClick?.();
                }
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

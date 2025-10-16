'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultPrevProps } from './GalleryPrev.props';

export const GalleryPrev = withComponent({
    name: 'GalleryPrev',
    defaultProps: defaultPrevProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('prev'),
                onClick: gallery?.actions?.prev
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={gallery?.prevRef} />;
    }
});

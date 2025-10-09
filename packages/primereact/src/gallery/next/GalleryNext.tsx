'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultNextProps } from './GalleryNext.props';

export const GalleryNext = withComponent({
    name: 'GalleryNext',
    defaultProps: defaultNextProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('next'),
                onClick: gallery?.actions?.next
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={gallery?.nextRef} />;
    }
});

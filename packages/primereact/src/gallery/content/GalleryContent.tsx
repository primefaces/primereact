'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useGalleryContext } from '../Gallery.context';
import { defaultContentProps } from './GalleryContent.props';

export const GalleryContent = withComponent({
    name: 'GalleryContent',
    defaultProps: defaultContentProps,
    setup() {
        const gallery = useGalleryContext();

        return { gallery };
    },
    render(instance) {
        const { props, ptmi, gallery } = instance;

        const rootProps = mergeProps(
            {
                className: gallery?.cx('content')
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={gallery?.contentRef} />;
    }
});

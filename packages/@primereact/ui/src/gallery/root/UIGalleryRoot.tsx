'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/gallery';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { GalleryRoot, defaultRootProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryRoot = withComponent({
    name: 'GalleryRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={GalleryRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

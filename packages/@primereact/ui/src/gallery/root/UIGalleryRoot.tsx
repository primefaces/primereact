'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/gallery';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { GalleryRoot, defaultRootProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryRoot = withComponent({
    name: 'UIGalleryRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={GalleryRoot} attrs={rootProps} />;
    }
});

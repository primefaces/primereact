'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/carousel';
import { withComponent } from '@primereact/ui/base';
import { CarouselRoot, defaultRootProps } from 'primereact/carousel';
import * as React from 'react';

export const UICarouselRoot = withComponent({
    name: 'UICarouselRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={CarouselRoot} attrs={rootProps} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/carousel';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { CarouselRoot, defaultRootProps } from 'primereact/carousel';
import * as React from 'react';

export const UICarouselRoot = withComponent({
    name: 'CarouselRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={CarouselRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

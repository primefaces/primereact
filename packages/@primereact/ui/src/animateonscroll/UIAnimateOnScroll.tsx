'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/animateonscroll';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { AnimateOnScroll, defaultProps } from 'primereact/animateonscroll';
import * as React from 'react';

export const UIAnimateOnScroll = withComponent({
    name: 'UIAnimateOnScroll',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={AnimateOnScroll} attrs={rootProps} />;
    }
});

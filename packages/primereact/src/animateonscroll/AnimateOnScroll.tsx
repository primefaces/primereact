'use client';
import { Component } from '@primereact/core/component';
import { useAnimateOnScroll } from '@primereact/headless/animateonscroll';
import { styles } from '@primereact/styles/animateonscroll';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { AnimateOnScrollProvider } from './AnimateOnScroll.context';
import { defaultProps } from './AnimateOnScroll.props';

export const AnimateOnScroll = withComponent({
    name: 'AnimateOnScroll',
    defaultProps,
    styles,
    setup(instance) {
        const animateonscroll = useAnimateOnScroll(instance.inProps);

        return animateonscroll;
    },
    render(instance) {
        const { props, ptmi } = instance;

        const rootProps = mergeProps({}, ptmi('root'));

        return (
            <AnimateOnScrollProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </AnimateOnScrollProvider>
        );
    },
    components: {}
});

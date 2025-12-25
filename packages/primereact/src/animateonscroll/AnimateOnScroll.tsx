'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useAnimateOnScroll } from '@primereact/headless/animateonscroll';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { AnimateOnScrollProvider } from './AnimateOnScroll.context';
import { defaultProps } from './AnimateOnScroll.props';

export const AnimateOnScroll = withComponent({
    name: 'AnimateOnScroll',
    defaultProps,
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
    }
});

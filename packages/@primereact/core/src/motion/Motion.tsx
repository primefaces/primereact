'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MotionProvider } from './Motion.context';
import { defaultMotionProps } from './Motion.props';
import { useMotion } from './useMotion';

export const Motion = withComponent({
    name: 'Motion',
    defaultProps: defaultMotionProps,
    setup(instance) {
        const motion = useMotion(instance.inProps);

        return motion;
    },
    render(instance) {
        const { id, props, state, ptmi } = instance;

        const rootProps = mergeProps(
            {
                id
            },
            ptmi('root')
        );

        return (
            <MotionProvider value={instance}>
                <Component pIf={state.rendered} instance={instance} attrs={rootProps} children={props.children} />
            </MotionProvider>
        );
    }
});

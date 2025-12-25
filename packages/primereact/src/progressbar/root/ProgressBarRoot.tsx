'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useProgressBar } from '@primereact/headless/progressbar';
import * as React from 'react';
import { ProgressBarProvider } from '../ProgressBar.context';
import { defaultRootProps } from './ProgressBarRoot.props';

export const ProgressBarRoot = withComponent({
    name: 'ProgressBarRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const progressBar = useProgressBar(instance.inProps);

        return progressBar;
    },
    render(instance) {
        const { props } = instance;

        return (
            <ProgressBarProvider value={instance}>
                <Component instance={instance} children={props.children} />
            </ProgressBarProvider>
        );
    }
});

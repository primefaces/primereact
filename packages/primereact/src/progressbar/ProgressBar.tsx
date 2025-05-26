'use client';
import { Component } from '@primereact/core/component';
import { useProgressBar } from '@primereact/headless/progressbar';
import { styles } from '@primereact/styles/progressbar';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ProgressBarIndicator } from './indicator';
import { ProgressBarLabel } from './label';
import { ProgressBarProvider } from './ProgressBar.context';
import { defaultProps } from './ProgressBar.props';
import { ProgressBarTrack } from './track';
import { ProgressBarValue } from './value';

export const ProgressBar = withComponent({
    name: 'ProgressBar',
    defaultProps,
    styles,
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
    },
    components: {
        Label: ProgressBarLabel,
        Value: ProgressBarValue,
        Indicator: ProgressBarIndicator,
        Track: ProgressBarTrack
    }
});

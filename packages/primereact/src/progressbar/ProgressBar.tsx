'use client';
import { withComponent } from '@primereact/core/component';
import { useProgressBar } from '@primereact/headless/progressbar';
import { styles } from '@primereact/styles/progressbar';
import { resolve } from '@primeuix/utils';
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

        return <ProgressBarProvider value={instance}>{resolve(props.children, instance)}</ProgressBarProvider>;
    },
    components: {
        Label: ProgressBarLabel,
        Value: ProgressBarValue,
        Indicator: ProgressBarIndicator,
        Track: ProgressBarTrack
    }
});

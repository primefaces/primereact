'use client';
import { Component } from '@primereact/core/component';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useProgressBarContext } from '../ProgressBar.context';
import { defaultLabelProps } from './ProgressBarValue.props';

export const ProgressBarValue = withComponent({
    name: 'ProgressBarValue',
    defaultProps: defaultLabelProps,
    setup() {
        const progressbar = useProgressBarContext();

        return {
            progressbar
        };
    },
    render(instance) {
        const { ptmi, progressbar } = instance;

        return <Component instance={instance} attrs={ptmi('root')} children={progressbar?.state.formattedValue} />;
    }
});

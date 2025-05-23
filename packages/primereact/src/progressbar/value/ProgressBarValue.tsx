'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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

        const rootProps = mergeProps(ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={progressbar?.state.formattedValue} />;
    }
});

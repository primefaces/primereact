'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useProgressBarContext } from '../ProgressBar.context';
import { defaultLabelProps } from './ProgressBarIndicator.props';

export const ProgressBarIndicator = withComponent({
    name: 'ProgressBarIndicator',
    defaultProps: defaultLabelProps,
    setup() {
        const progressbar = useProgressBarContext();

        return {
            progressbar
        };
    },
    render(instance) {
        const { props, ptmi, progressbar } = instance;

        const rootProps = mergeProps(
            {
                style: progressbar?.sx('value'),
                className: progressbar?.cx('value')
            },
            progressbar?.ptm('value'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={progressbar?.props.mode === 'determinate' ? props.children : null} />;
    }
});

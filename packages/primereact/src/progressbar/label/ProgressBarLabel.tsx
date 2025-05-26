'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useProgressBarContext } from '../ProgressBar.context';
import { defaultLabelProps } from './ProgressBarLabel.props';

export const ProgressBarLabel = withComponent({
    name: 'ProgressBarLabel',
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
                className: progressbar?.cx('label')
            },
            progressbar?.ptm('label'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

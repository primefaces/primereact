'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useProgressBarContext } from '../ProgressBar.context';
import { defaultTrackProps } from './ProgressBarTrack.props';

export const ProgressBarTrack = withComponent({
    name: 'ProgressBarTrack',
    defaultProps: defaultTrackProps,
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
                id: progressbar?.id,
                className: progressbar?.cx('root'),
                role: 'progressbar',
                'aria-valuemin': progressbar?.props.min ?? 0,
                'aria-valuenow': progressbar?.state.calculatedValue,
                'aria-valuemax': progressbar?.props.max ?? 100
            },
            progressbar?.ptm('root'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

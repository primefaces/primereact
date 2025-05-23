'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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

        const rootProps =
            progressbar?.props.mode === 'determinate'
                ? mergeProps(
                      {
                          className: progressbar?.cx('value'),
                          style: {
                              width: progressbar?.state.calculatedValue + '%',
                              display: 'flex'
                          }
                      },
                      progressbar?.ptm('value'),
                      ptmi('root')
                  )
                : progressbar?.props.mode === 'indeterminate'
                  ? mergeProps(
                        {
                            className: progressbar?.cx('value')
                        },
                        progressbar?.ptm('value'),
                        ptmi('root')
                    )
                  : null;

        return <Component instance={instance} attrs={rootProps} children={progressbar?.props.mode === 'determinate' ? props.children : null} />;
    }
});

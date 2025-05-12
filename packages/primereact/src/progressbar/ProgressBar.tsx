'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useProgressBar } from '@primereact/headless/progressbar';
import { styles } from '@primereact/styles/progressbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ProgressBarLabel } from './label';
import { ProgressBarProvider } from './ProgressBar.context';
import { defaultProps } from './ProgressBar.props';

export const ProgressBar = withComponent({
    name: 'ProgressBar',
    defaultProps,
    styles,
    setup(instance) {
        const progressBar = useProgressBar(instance.inProps);

        return progressBar;
    },
    render(instance) {
        const { id, props, ptmi, ptm, cx } = instance;

        const createDeterminate = () => {
            const valueProps = mergeProps(
                {
                    className: cx('value'),
                    style: {
                        width: props.value + '%',
                        display: 'flex'
                    }
                },
                ptm('value')
            );

            return <div {...valueProps}>{props.children}</div>;
        };

        const createIndeterminate = () => {
            const valueProps = mergeProps(
                {
                    className: cx('value')
                },
                ptm('value')
            );

            return <div {...valueProps}></div>;
        };

        const value = props.mode === 'determinate' ? createDeterminate() : props.mode === 'indeterminate' ? createIndeterminate() : null;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                role: 'progressbar',
                'aria-valuemin': 0,
                'aria-valuenow': props.value,
                'aria-valuemax': 100
            },
            ptmi('root')
        );

        return (
            <ProgressBarProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {value}
                </Component>
            </ProgressBarProvider>
        );
    },
    components: {
        Label: ProgressBarLabel
    }
});

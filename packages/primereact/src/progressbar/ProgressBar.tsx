'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { useProgressBar } from '@primereact/headless/progressbar';
import { styles } from '@primereact/styles/progressbar';
import type { ProgressBarProps } from '@primereact/types/shared/progressbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ProgressBar.props';
import { ProgressBarLabel } from './label';

export const ProgressBar = (inProps: ProgressBarProps) => {
    const progressbar = useProgressBar(inProps);
    const instance = useComponent(inProps, defaultProps, styles, progressbar);
    const {
        id,
        props,
        ptmi,
        ptm,
        cx,
        // element refs
        elementRef
    } = instance;

    const rootProps = mergeProps(
        {
            id,
            className: cx('root'),
            style: props.style,
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuenow': props.value,
            'aria-valuemax': 100
        },
        ptmi('root')
    );

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

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.mode === 'determinate' ? createDeterminate() : createIndeterminate()}
            </Component>
        </ComponentProvider>
    );
};

ProgressBar.displayName = 'PrimeReact.ProgressBar';
ProgressBar.Label = ProgressBarLabel;

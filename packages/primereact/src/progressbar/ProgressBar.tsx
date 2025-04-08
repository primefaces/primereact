'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useProgressBar } from '@primereact/headless/progressbar';
import { styles } from '@primereact/styles/progressbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ProgressBar.props';
import { ProgressBarLabel } from './label';

export const ProgressBar = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const progressBar = useProgressBar(instance.inProps);

        return progressBar;
    },
    render: (instance) => {
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
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.mode === 'determinate' ? createDeterminate() : createIndeterminate()}
            </Component>
        );
    },
    components: {
        Label: ProgressBarLabel
    }
});

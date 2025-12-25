'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useProgressSpinner } from '@primereact/headless/progressspinner';
import { styles } from '@primereact/styles/progressspinner';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ProgressSpinnerProvider } from './ProgressSpinner.context';
import { defaultProps } from './ProgressSpinner.props';

export const ProgressSpinner = withComponent({
    name: 'ProgressSpinner',
    defaultProps,
    styles,
    setup(instance) {
        const progressspinner = useProgressSpinner(instance.inProps);

        return progressspinner;
    },
    render(instance) {
        const { id, props, ptmi, ptm, cx } = instance;

        const createSVGElement = () => {
            const circleProps = mergeProps(
                {
                    className: cx('circle'),
                    cx: '50',
                    cy: '50',
                    r: '20',
                    fill: props.fill,
                    strokeWidth: props.strokeWidth,
                    strokeMiterlimit: 10
                },
                ptm('circle')
            );

            const svgProps = mergeProps(
                {
                    className: cx('spin'),
                    viewBox: '25 25 50 50',
                    style: {
                        animationDuration: props.animationDuration
                    }
                },
                ptm('spin')
            );

            return (
                <svg {...svgProps}>
                    <circle {...circleProps} />
                </svg>
            );
        };

        const svg = createSVGElement();

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                role: 'progressbar'
            },
            ptmi('root')
        );

        return (
            <ProgressSpinnerProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {svg}
                </Component>
            </ProgressSpinnerProvider>
        );
    }
});

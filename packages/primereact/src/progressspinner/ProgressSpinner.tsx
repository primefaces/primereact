'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useProgressSpinner } from '@primereact/headless/progressspinner';
import { styles } from '@primereact/styles/progressspinner';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ProgressSpinner.props';

export const ProgressSpinner = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const progressspinner = useProgressSpinner(instance.inProps);

        return progressspinner;
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
                role: 'progressbar'
            },
            ptmi('root')
        );

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
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                <svg {...svgProps}>
                    <circle {...circleProps} />
                </svg>
            </Component>
        );
    }
});

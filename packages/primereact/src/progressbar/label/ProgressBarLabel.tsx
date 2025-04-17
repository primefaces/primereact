'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ProgressBarLabel.props';

export const ProgressBarLabel = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const progressbar = getParent('ProgressBar');

        const labelProps = mergeProps(
            {
                className: progressbar?.cx('label')
            },
            progressbar?.ptm('label'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...labelProps}>
                {props.children}
            </Component>
        );
    }
});

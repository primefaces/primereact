'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { ProgressBarLabelProps } from '@primereact/types/shared/progressbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './ProgressBarLabel.props';

export const ProgressBarLabel = (inProps: ProgressBarLabelProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const progressbar = getParent('ProgressBar');

    const labelProps = mergeProps(
        {
            className: progressbar?.cx('label')
        },
        progressbar?.ptm('label')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'div'} {...labelProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

ProgressBarLabel.displayName = 'PrimeReact.ProgressBarLabel';

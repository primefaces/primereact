'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupLabelsProps } from '@primereact/types/shared/metergroup';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupLabels.props';

export const MeterGroupLabels = (inProps: MeterGroupLabelsProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const labelsProps = mergeProps(
        {
            className: cn(metergroup?.cx('labellist'), inProps.orientation === 'vertical' ? 'p-metergroup-label-list-vertical' : 'p-metergroup-label-list-horizontal')
        },
        metergroup?.ptm('labellist')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'ol'} {...labelsProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupLabels.displayName = 'PrimeReact.MeterGroupLabels';

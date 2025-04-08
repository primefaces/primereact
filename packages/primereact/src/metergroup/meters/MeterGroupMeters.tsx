'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupMetersProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupMeters.props';

export const MeterGroupMeters = (inProps: MeterGroupMetersProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const metersProps = mergeProps(
        {
            className: metergroup?.cx('meters')
        },
        metergroup?.ptm('meters')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...metersProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupMeters.displayName = 'PrimeReact.MeterGroupMeters';

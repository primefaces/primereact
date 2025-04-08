'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupIconProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupIcon.props';

export const MeterGroupIcon = (inProps: MeterGroupIconProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const iconProps = mergeProps(
        {
            className: metergroup?.cx('labelicon'),
            style: {
                color: props.color
            }
        },
        metergroup?.ptm('labelicon')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'span'} {...iconProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupIcon.displayName = 'PrimeReact.MeterGroupIcon';

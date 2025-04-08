'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupMeterProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupMeter.props';

export const MeterGroupMeter = (inProps: MeterGroupMeterProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const percent = (meter = 0) => {
        const percentOfItem = ((meter - metergroup?.props.min) / (metergroup?.props.max - metergroup?.props.min)) * 100;

        return Math.round(Math.max(0, Math.min(100, percentOfItem)));
    };

    const percentValue = (meter: number) => {
        return percent(meter) + '%';
    };

    const meterProps = mergeProps(
        {
            className: metergroup?.cx('meter'),
            style: {
                backgroundColor: inProps.value?.color,
                width: metergroup?.props.orientation === 'horizontal' && percentValue(inProps.value.value),
                height: metergroup?.props.orientation === 'vertical' && percentValue(inProps.value.value)
            }
        },
        metergroup?.ptm('meter')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...meterProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupMeter.displayName = 'PrimeReact.MeterGroupMeter';

'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { useMeterGroup } from '@primereact/headless/metergroup';
import { styles } from '@primereact/styles/metergroup';
import type { MeterGroupProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroup.props';
import { MeterGroupIcon } from './icon';
import { MeterGroupLabel } from './label';
import { MeterGroupLabels } from './labels';
import { MeterGroupMarker } from './marker';
import { MeterGroupMeter } from './meter';
import { MeterGroupMeters } from './meters';
import { MeterGroupText } from './text';

export const MeterGroup = (inProps: MeterGroupProps) => {
    const metergroup = useMeterGroup(inProps);
    const instance = useComponent(inProps, defaultProps, styles, metergroup);
    const {
        id,
        props,
        ptmi,
        cx,
        // element refs
        elementRef
    } = instance;

    const rootProps = mergeProps(
        {
            id,
            className: cx('root'),
            style: props.style,
            role: 'meter',
            'aria-valuemin': props.min,
            'aria-valuenow': props.max, // TODO:
            'aria-valuemax': props.max
        },
        ptmi('root')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroup.displayName = 'PrimeReact.MeterGroup';
MeterGroup.Meters = MeterGroupMeters;
MeterGroup.Meter = MeterGroupMeter;
MeterGroup.Labels = MeterGroupLabels;
MeterGroup.Label = MeterGroupLabel;
MeterGroup.Marker = MeterGroupMarker;
MeterGroup.Text = MeterGroupText;
MeterGroup.Icon = MeterGroupIcon;

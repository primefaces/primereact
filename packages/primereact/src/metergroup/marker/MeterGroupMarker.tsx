'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupMarkerProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupMarker.props';

export const MeterGroupMarker = (inProps: MeterGroupMarkerProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const markerProps = mergeProps(
        {
            className: metergroup?.cx('labelmarker'),
            style: {
                backgroundColor: props.color
            }
        },
        metergroup?.ptm('labelmarker')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'span'} {...markerProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupMarker.displayName = 'PrimeReact.MeterGroupMarker';

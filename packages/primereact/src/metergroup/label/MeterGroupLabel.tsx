'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupLabelProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupLabel.props';

export const MeterGroupLabel = (inProps: MeterGroupLabelProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const labelProps = mergeProps(
        {
            className: metergroup?.cx('label')
        },
        metergroup?.ptm('label')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'li'} {...labelProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupLabel.displayName = 'PrimeReact.MeterGroupLabel';

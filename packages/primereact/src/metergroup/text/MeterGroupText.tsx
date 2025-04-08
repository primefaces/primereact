'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { MeterGroupTextProps } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultLabelProps } from './MeterGroupText.props';

export const MeterGroupText = (inProps: MeterGroupTextProps) => {
    const instance = useComponent(inProps, defaultLabelProps);
    const { props, getParent } = instance;
    const metergroup = getParent('MeterGroup');

    const textProps = mergeProps(
        {
            className: metergroup?.cx('labeltext')
        },
        metergroup?.ptm('labeltext')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'span'} {...textProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

MeterGroupText.displayName = 'PrimeReact.MeterGroupText';

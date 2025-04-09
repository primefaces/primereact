'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupMeters.props';

export const MeterGroupMeters = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const metergroup = getParent('MeterGroup');

        const metersProps = mergeProps(
            {
                className: metergroup?.cx('meters')
            },
            metergroup?.ptm('meters')
        );

        return (
            <Component as={props.as || 'div'} {...metersProps}>
                {props.children}
            </Component>
        );
    }
});

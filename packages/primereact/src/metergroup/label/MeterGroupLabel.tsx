'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupLabel.props';

export const MeterGroupLabel = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const metergroup = getParent('MeterGroup');

        const labelProps = mergeProps(
            {
                className: metergroup?.cx('label')
            },
            metergroup?.ptm('label')
        );

        return (
            <Component as={props.as || 'li'} {...labelProps}>
                {props.children}
            </Component>
        );
    }
});

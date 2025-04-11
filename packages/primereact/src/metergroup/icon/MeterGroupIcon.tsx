'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupIcon.props';

export const MeterGroupIcon = withComponent({
    defaultProps,
    render: (instance) => {
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
            <Component as={props.as || 'span'} {...iconProps}>
                {props.children}
            </Component>
        );
    }
});

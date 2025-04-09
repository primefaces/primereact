'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupText.props';

export const MeterGroupText = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const metergroup = getParent('MeterGroup');

        const textProps = mergeProps(
            {
                className: metergroup?.cx('labeltext')
            },
            metergroup?.ptm('labeltext')
        );

        return (
            <Component as={props.as || 'span'} {...textProps}>
                {props.children}
            </Component>
        );
    }
});

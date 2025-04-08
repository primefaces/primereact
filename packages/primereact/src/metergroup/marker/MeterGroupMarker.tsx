'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './MeterGroupMarker.props';

export const MeterGroupMarker = withComponent({
    defaultProps,
    render: (instance) => {
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
            <Component as={props.as || 'span'} {...markerProps}>
                {props.children}
            </Component>
        );
    }
});

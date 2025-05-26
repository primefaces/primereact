'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultMarkerProps } from './MeterGroupMarker.props';

export const MeterGroupMarker = withComponent({
    name: 'MeterGroupMarker',
    defaultProps: defaultMarkerProps,
    setup() {
        const metergroup = useMeterGroupContext();

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('marker'),
                style: {
                    backgroundColor: props.color
                }
            },
            metergroup?.ptm('marker'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

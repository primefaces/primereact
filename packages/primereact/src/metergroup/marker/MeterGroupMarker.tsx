'use client';
import { Component } from '@primereact/core/component';
import { METERGROUP_DEFAULT_COLORS_TYPE } from '@primereact/types/shared/metergroup';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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
        const color = props.color ? metergroup?.colors?.[props.color as METERGROUP_DEFAULT_COLORS_TYPE] || props.color : Object.values(metergroup?.colors ?? {})[props.index ?? 0];

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('marker'),
                style: {
                    backgroundColor: color
                }
            },
            metergroup?.ptm('marker'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

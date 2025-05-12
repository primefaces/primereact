'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultIconProps } from './MeterGroupIcon.props';

export const MeterGroupIcon = withComponent({
    name: 'MeterGroupIcon',
    defaultProps: defaultIconProps,
    setup() {
        const metergroup = useMeterGroupContext();

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('labelIcon'),
                style: {
                    color: props.color
                }
            },
            metergroup?.ptm('labelIcon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

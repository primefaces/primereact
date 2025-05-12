'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultLabelsProps } from './MeterGroupLabels.props';

export const MeterGroupLabels = withComponent({
    name: 'MeterGroupLabels',
    defaultProps: defaultLabelsProps,
    setup() {
        const metergroup = useMeterGroupContext();

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('labelList', { orientation: props.orientation })
            },
            metergroup?.ptm('labelList'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

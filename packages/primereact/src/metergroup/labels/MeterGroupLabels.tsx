'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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
                className: metergroup?.cx('labels', { orientation: props.orientation })
            },
            metergroup?.ptm('labels'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

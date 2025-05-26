'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultLabelProps } from './MeterGroupLabel.props';

export const MeterGroupLabel = withComponent({
    name: 'MeterGroupLabel',
    defaultProps: defaultLabelProps,
    setup() {
        const metergroup = useMeterGroupContext();

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('label')
            },
            metergroup?.ptm('label'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

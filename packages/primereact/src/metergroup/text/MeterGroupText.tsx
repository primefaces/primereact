'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMeterGroupContext } from '../MeterGroup.context';
import { defaultTextProps } from './MeterGroupText.props';

export const MeterGroupText = withComponent({
    name: 'MeterGroupText',
    defaultProps: defaultTextProps,
    setup() {
        const metergroup = useMeterGroupContext();

        return { metergroup };
    },
    render(instance) {
        const { props, ptmi, metergroup } = instance;

        const rootProps = mergeProps(
            {
                className: metergroup?.cx('labelText')
            },
            metergroup?.ptm('labelText'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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
                className: metergroup?.cx('text')
            },
            metergroup?.ptm('text'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

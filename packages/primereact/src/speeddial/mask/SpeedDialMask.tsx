'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultMaskProps } from './SpeedDialMask.props';

export const SpeedDialMask = withComponent({
    name: 'SpeedDialMask',
    defaultProps: defaultMaskProps,
    setup() {
        const speeddial = useSpeedDialContext();

        return { speeddial };
    },
    render(instance) {
        const { props, ptmi, speeddial } = instance;

        const rootProps = mergeProps(
            {
                className: speeddial?.cx('mask')
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

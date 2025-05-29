'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { defaultControlProps } from 'primereact/switch';
import * as React from 'react';
import { useSwitchContext } from '../Switch.context';

export const SwitchControl = withComponent({
    name: 'SwitchControl',
    defaultProps: defaultControlProps,
    setup() {
        const switchContext = useSwitchContext();

        return { switch: switchContext };
    },
    render(instance) {
        const { props, ptmi, switch: switchContext } = instance;

        const rootProps = mergeProps(
            {
                className: switchContext?.cx('control')
            },
            switchContext?.ptm('control'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

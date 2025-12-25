'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePasswordContext } from '../Password.context';
import { defaultMeterProps } from './PasswordMeter.props';

export const PasswordMeter = withComponent({
    name: 'PasswordMeter',
    defaultProps: defaultMeterProps,
    setup() {
        const password = usePasswordContext();

        return { password };
    },
    render(instance) {
        const { props, ptmi, password } = instance;
        const strength = password?.state?.strength;
        const currentLevel = strength?.id ?? -1;

        const rootProps = mergeProps(
            {
                className: password?.cx('meter'),
                style: {
                    backgroundColor: (props.index as number) <= currentLevel ? 'var(--p-primary-color)' : 'var(--p-content-border-color)'
                }
            },
            password?.ptm('meter'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} />;
    }
});

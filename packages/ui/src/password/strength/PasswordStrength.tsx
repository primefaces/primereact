'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PasswordMeter } from '../meter';
import { usePasswordContext } from '../Password.context';
import { defaultStrengthProps } from './PasswordStrength.props';

export const PasswordStrength = withComponent({
    name: 'PasswordStrength',
    defaultProps: defaultStrengthProps,
    setup() {
        const password = usePasswordContext();

        return { password };
    },
    render(instance) {
        const { props, ptmi, password } = instance;
        const strength = password?.state?.strength;
        const levelsCount = password?.state?.levelsCount ?? 4;
        const currentLevel = strength?.id ?? -1;

        const rootProps = mergeProps(
            {
                className: password?.cx('strength')
            },
            password?.ptm('strength'),
            ptmi('root')
        );

        const createMeters = () => {
            return Array.from({ length: levelsCount }).map((_, index) => <PasswordMeter key={index} active={index <= currentLevel} index={index} />);
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? createMeters()} />;
    }
});

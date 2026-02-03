'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useToggleButtonGroupContext } from 'primereact/togglebuttongroup';
import * as React from 'react';
import { useToggleButtonContext } from '../ToggleButton.context';
import { defaultIndicatorProps } from './ToggleButtonIndicator.props';

export const ToggleButtonIndicator = withComponent({
    name: 'ToggleButton.Indicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const togglebutton = useToggleButtonContext();
        const group = useToggleButtonGroupContext();

        return {
            togglebutton,
            group
        };
    },
    render(instance) {
        const { props, ptmi, togglebutton, group } = instance;

        const disabled = togglebutton?.props.disabled ?? group?.props.disabled;
        const invalid = togglebutton?.props.invalid ?? group?.props.invalid;

        const rootProps = mergeProps(
            {
                className: togglebutton?.cx('indicator'),
                ...(togglebutton?.state.pressed && { 'data-pressed': '' }),
                ...(disabled && { 'data-disabled': '' }),
                ...(invalid && { 'data-invalid': '' })
            },
            togglebutton?.ptm('indicator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

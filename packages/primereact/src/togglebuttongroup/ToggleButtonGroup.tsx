'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToggleButtonGroup } from '@primereact/headless/togglebuttongroup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ToggleButtonGroupProvider } from './ToggleButtonGroup.context';
import { defaultProps } from './ToggleButtonGroup.props';

export const ToggleButtonGroup = withComponent({
    name: 'ToggleButton.Group',
    defaultProps,
    setup(instance) {
        const togglebuttongroup = useToggleButtonGroup(instance?.inProps);

        return togglebuttongroup;
    },
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                role: 'group',
                className: cx('root'),
                ...(props.disabled && { 'data-disabled': '' }),
                ...(props.invalid && { 'data-invalid': '' }),
                ...(props.multiple && { 'data-multiple': '' }),
                ...(props.allowEmpty && { 'data-allow-empty': '' })
            },
            ptmi('root')
        );

        return (
            <ToggleButtonGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToggleButtonGroupProvider>
        );
    }
});

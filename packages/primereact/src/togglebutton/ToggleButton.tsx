'use client';
import { Component } from '@primereact/core/component';
import { useToggleButton } from '@primereact/headless/togglebutton';
import { styles } from '@primereact/styles/togglebutton';
import type { ToggleButtonChangeEvent } from '@primereact/types/shared/togglebutton';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ToggleButtonGroup, useToggleButtonGroupContext } from './group';
import { ToggleButtonIndicator } from './indicator';
import { ToggleButtonProvider } from './ToggleButton.context';
import { defaultProps } from './ToggleButton.props';

export const ToggleButton = withComponent({
    name: 'ToggleButton',
    defaultProps,
    styles,
    setup(instance) {
        const { props, inProps } = instance;
        const group = useToggleButtonGroupContext();

        const useToggleButtonProps = group
            ? {
                  ...inProps,
                  pressed: group.isPressed(group.state.value, props.value),
                  defaultPressed: group.isPressed(group.props.defaultValue, props.value),
                  onPressedChange: group.updateChange ? (event: ToggleButtonChangeEvent) => group.updateChange!({ ...event, value: props.value }) : undefined
              }
            : {
                  ...inProps,
                  onPressedChange: props.onPressedChange ? (event: ToggleButtonChangeEvent) => props.onPressedChange!({ ...event, value: props.value }) : undefined
              };

        const togglebutton = useToggleButton(useToggleButtonProps);

        return {
            ...togglebutton,
            group
        };
    },
    render(instance) {
        const {
            id,
            props,
            state,
            ptmi,
            cx,
            group,
            // methods
            onChange
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                type: props.as === 'button' ? 'button' : undefined,
                disabled: props.disabled ?? group?.props.disabled,
                'aria-pressed': state.pressed,
                onClick: onChange
            },
            ptmi('root')
        );

        return (
            <ToggleButtonProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToggleButtonProvider>
        );
    },
    components: {
        Group: ToggleButtonGroup,
        Indicator: ToggleButtonIndicator
    }
});

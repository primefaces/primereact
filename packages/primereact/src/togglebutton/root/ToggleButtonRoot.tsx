'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToggleButton } from '@primereact/headless/togglebutton';
import type { ToggleButtonChangeEvent } from '@primereact/types/shared/togglebutton';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ToggleButtonProvider } from '../ToggleButton.context';
import { useToggleButtonGroupContext } from '../group';
import { defaultRootProps } from './ToggleButtonRoot.props';

export const ToggleButtonRoot = withComponent({
    name: 'ToggleButtonRoot',
    defaultProps: defaultRootProps,
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
    }
});

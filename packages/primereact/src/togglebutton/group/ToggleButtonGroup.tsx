'use client';
import { Component } from '@primereact/core/component';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { groupStyles } from '@primereact/styles/togglebutton';
import type { ToggleButtonGroupUpdateChangeEvent } from '@primereact/types/shared/togglebutton';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ToggleButtonGroupProvider } from './ToggleButtonGroup.context';
import { defaultGroupProps } from './ToggleButtonGroup.props';

export const ToggleButtonGroup = withComponent({
    name: 'ToggleButtonGroup',
    defaultProps: defaultGroupProps,
    styles: groupStyles,
    setup(instance) {
        const { value, defaultValue, onValueChange: onChange, multiple, allowEmpty } = instance.props;
        const [valueState, setValueState] = useControlledState({
            value,
            defaultValue,
            onChange
        });

        const state = {
            value: valueState
        };

        const updateChange = React.useCallback(
            (event: ToggleButtonGroupUpdateChangeEvent) => {
                let newValue = null;

                if (multiple) {
                    newValue = event.pressed ? [...((valueState as unknown[]) || []), event.value] : ((valueState as unknown[]) || []).filter((v) => v !== event.value);
                    if (!allowEmpty && newValue.length === 0) return;
                } else {
                    newValue = event.pressed ? event.value : null;
                    if (!allowEmpty && newValue === null) return;
                }

                setValueState?.([newValue, { originalEvent: event.originalEvent, value: newValue }]);
            },
            [valueState, setValueState]
        );

        const isPressed = (value: unknown | unknown[] | undefined, toggleButtonValue: unknown) => {
            if (value === undefined) return;

            return multiple ? (value as unknown[])?.includes(toggleButtonValue) : value === toggleButtonValue;
        };

        return {
            state,
            updateChange,
            isPressed
        };
    },
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                role: 'group',
                className: cx('root')
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

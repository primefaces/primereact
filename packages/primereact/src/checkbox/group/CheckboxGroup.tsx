'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { CheckboxGroupUpdateChangeEvent } from '@primereact/types/shared/checkbox';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CheckboxGroupProvider } from './CheckboxGroup.context';
import { defaultProps } from './CheckboxGroup.props';

export const CheckboxGroup = withComponent({
    name: 'CheckboxGroup',
    defaultProps,
    setup(instance) {
        const { value, defaultValue, onValueChange: onChange } = instance.props;
        const [valueState, setValueState] = useControlledState({
            value,
            defaultValue,
            onChange
        });

        const updateChange = React.useCallback(
            (event: CheckboxGroupUpdateChangeEvent) => {
                const newValue = event.checked ? [...(valueState || []), event.value] : (valueState || []).filter((v) => v !== event.value);

                setValueState?.([newValue, { originalEvent: event.originalEvent, value: newValue }]);
            },
            [valueState, setValueState]
        );

        return {
            updateChange
        };
    },
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <CheckboxGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CheckboxGroupProvider>
        );
    }
});

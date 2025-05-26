'use client';
import { Component } from '@primereact/core/component';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { groupStyles } from '@primereact/styles/checkbox';
import type { CheckboxGroupUpdateChangeEvent } from '@primereact/types/shared/checkbox';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { CheckboxGroupProvider } from './CheckboxGroup.context';
import { defaultGroupProps } from './CheckboxGroup.props';

export const CheckboxGroup = withComponent({
    name: 'CheckboxGroup',
    defaultProps: defaultGroupProps,
    styles: groupStyles,
    setup(instance) {
        const { value, defaultValue, onValueChange: onChange } = instance.props;
        const [valueState, setValueState] = useControlledState({
            value,
            defaultValue,
            onChange
        });

        const state = {
            value: valueState
        };

        const updateChange = React.useCallback(
            (event: CheckboxGroupUpdateChangeEvent) => {
                const newValue = event.checked ? [...(valueState || []), event.value] : (valueState || []).filter((v) => v !== event.value);

                setValueState?.([newValue, { originalEvent: event.originalEvent, value: newValue }]);
            },
            [valueState, setValueState]
        );

        return {
            state,
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

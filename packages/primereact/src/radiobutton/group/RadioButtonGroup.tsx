'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { groupStyles } from '@primereact/styles/radiobutton';
import { RadioButtonGroupUpdateChangeEvent } from '@primereact/types/shared/radiobutton';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { RadioButtonGroupProvider } from './RadioButtonGroup.context';
import { defaultProps } from './RadioButtonGroup.props';

export const RadioButtonGroup = withComponent({
    name: 'RadioButtonGroup',
    defaultProps,
    styles: groupStyles,
    setup(instance) {
        const { value, defaultValue, onValueChange: onChange } = instance.props;
        const [valueState, setValueState] = useControlledState({
            value,
            defaultValue,
            onChange
        });

        const updateChange = React.useCallback(
            (event: RadioButtonGroupUpdateChangeEvent) => {
                const newValue = event.checked ? event.value : undefined;

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
            <RadioButtonGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </RadioButtonGroupProvider>
        );
    }
});

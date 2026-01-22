'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useRadioButton } from '@primereact/headless/radiobutton';
import type { RadioButtonRootChangeEvent } from '@primereact/types/shared/radiobutton';
import { cn, equals, mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { RadioButtonProvider } from '../RadioButton.context';
import { defaultRootProps } from './RadioButtonRoot.props';
import { useRadioButtonGroupContext } from 'primereact/radiobuttongroup';

export const RadioButtonRoot = withComponent({
    name: 'RadioButtonRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const { props, inProps } = instance;
        const group = useRadioButtonGroupContext();

        const useRadioButtonProps = group
            ? {
                  ...inProps,
                  checked: equals(group.props.value, props.value),
                  defaultChecked: equals(group.props.defaultValue, props.value),
                  onCheckedChange: React.useCallback((event: RadioButtonRootChangeEvent) => group.updateChange({ ...event, value: props.value }), [group.updateChange])
              }
            : {
                  ...inProps,
                  onCheckedChange: React.useCallback((event: RadioButtonRootChangeEvent) => props.onCheckedChange?.({ ...event, value: props.value }), [props.onCheckedChange])
              };

        const radioButton = useRadioButton(useRadioButtonProps);

        return {
            ...radioButton,
            group
        };
    },
    render(instance) {
        const {
            id,
            props,
            state,
            ptmi,
            ptm,
            cx,
            group,
            // methods
            onChange
        } = instance;

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    type: 'radio',
                    style: props.inputStyle,
                    className: cn(cx('input'), props.inputClassName),
                    value: props.value,
                    name: props.name ?? group?.props.name,
                    checked: state.checked,
                    tabIndex: props.tabIndex,
                    disabled: props.disabled || group?.props.disabled,
                    readOnly: props.readOnly,
                    required: props.required,
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    'aria-invalid': props.invalid || group?.props.invalid || undefined,
                    onFocus: props.onFocus,
                    onBlur: props.onBlur,
                    onChange: !props.readOnly ? onChange : undefined,
                    ...(state.checked ? { 'data-checked': '' } : { 'data-unchecked': '' }),
                    ...(props.disabled && { 'data-disabled': '' }),
                    ...(props.invalid && { 'data-invalid': '' })
                },
                ptm('input')
            );

            return <input {...inputProps} />;
        };

        const input = createInputElement();

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <RadioButtonProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {input}
                    {resolve(props.children, instance)}
                </Component>
            </RadioButtonProvider>
        );
    }
});

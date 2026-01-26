'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCheckbox } from '@primereact/headless/checkbox';
import type { CheckboxRootChangeEvent } from '@primereact/types/shared/checkbox';
import { cn, mergeProps, resolve } from '@primeuix/utils';
import { useCheckboxGroupContext } from 'primereact/checkboxgroup';
import * as React from 'react';
import { CheckboxProvider } from '../Checkbox.context';
import { defaultRootProps } from './CheckboxRoot.props';

export const CheckboxRoot = withComponent({
    name: 'Checkbox.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const { props, inProps } = instance;
        const group = useCheckboxGroupContext();

        const useCheckboxProps = group
            ? {
                  ...inProps,
                  checked: group.props.value?.includes(props.value),
                  defaultChecked: group.props.defaultValue?.includes(props.value),
                  onCheckedChange: group.updateChange ? (event: CheckboxRootChangeEvent) => group.updateChange!({ ...event, value: props.value }) : undefined
              }
            : {
                  ...inProps,
                  onCheckedChange: props.onCheckedChange ? (event: CheckboxRootChangeEvent) => props.onCheckedChange!({ ...event, value: props.value }) : undefined
              };

        const checkbox = useCheckbox(useCheckboxProps);

        return {
            ...checkbox,
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
                    type: 'checkbox',
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
                    'aria-checked': state.indeterminate ? 'mixed' : undefined,
                    onFocus: props.onFocus,
                    onBlur: props.onBlur,
                    onChange: !props.readOnly ? onChange : undefined,
                    [state.checked ? 'data-checked' : 'data-unchecked']: '',
                    ...(props.disabled && { 'data-disabled': '' }),
                    ...(props.invalid && { 'data-invalid': '' }),
                    ...(props.indeterminate && { 'data-indeterminate': '' })
                },
                ptm('input')
            );

            return <input {...inputProps} />;
        };

        const input = createInputElement();

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                [state.checked ? 'data-checked' : 'data-unchecked']: '',
                ...(props.disabled && { 'data-disabled': '' }),
                ...(props.invalid && { 'data-invalid': '' }),
                ...(props.indeterminate && { 'data-indeterminate': '' })
            },
            ptmi('root')
        );

        return (
            <CheckboxProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {input}
                    {resolve(props.children, instance)}
                </Component>
            </CheckboxProvider>
        );
    }
});

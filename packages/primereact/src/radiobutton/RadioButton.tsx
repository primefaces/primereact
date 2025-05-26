'use client';
import { Component } from '@primereact/core/component';
import { useRadioButton } from '@primereact/headless/radiobutton';
import { styles } from '@primereact/styles/radiobutton';
import type { RadioButtonChangeEvent } from '@primereact/types/shared/radiobutton';
import { cn, equals, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { RadioButtonGroup, useRadioButtonGroupContext } from './group';
import { RadioButtonProvider } from './RadioButton.context';
import { defaultProps } from './RadioButton.props';

export const RadioButton = withComponent({
    name: 'RadioButton',
    defaultProps,
    styles,
    setup(instance) {
        const { props, inProps } = instance;
        const group = useRadioButtonGroupContext();

        const useRadioButtonProps = group
            ? {
                  ...inProps,
                  checked: equals(group.props.value, props.value),
                  defaultChecked: equals(group.props.defaultValue, props.value),
                  onCheckedChange: React.useCallback((event: RadioButtonChangeEvent) => group.updateChange({ ...event, value: props.value }), [group.updateChange])
              }
            : {
                  ...inProps,
                  onCheckedChange: React.useCallback((event: RadioButtonChangeEvent) => props.onCheckedChange?.({ ...event, value: props.value }), [props.onCheckedChange])
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
                    onChange
                },
                ptm('input')
            );

            return <input {...inputProps} />;
        };

        const createBoxElement = () => {
            const boxProps = mergeProps(
                {
                    className: cx('box')
                },
                ptm('box')
            );

            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                ptm('icon')
            );

            return (
                <div {...boxProps}>
                    <div {...iconProps} />
                </div>
            );
        };

        const input = createInputElement();
        const box = createBoxElement();

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
                    {box}
                </Component>
            </RadioButtonProvider>
        );
    },
    components: {
        Group: RadioButtonGroup
    }
});

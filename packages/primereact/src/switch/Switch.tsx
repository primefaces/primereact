'use client';
import { Component } from '@primereact/core/component';
import { useSwitch } from '@primereact/headless/switch';
import { styles } from '@primereact/styles/switch';
import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import { cn, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { SwitchControl } from './control';
import { SwitchProvider } from './Switch.context';
import { defaultProps } from './Switch.props';
import { SwitchThumb } from './thumb';

export const Switch = withComponent({
    name: 'Switch',
    defaultProps,
    styles,
    setup(instance) {
        const { props, inProps } = instance;

        const useSwitchButtonProps = {
            ...inProps,
            onCheckedChange: props.onCheckedChange ? (event: SwitchChangeEvent) => props.onCheckedChange!({ ...event, value: props.checked }) : undefined
        };

        const switchHook = useSwitch(useSwitchButtonProps);

        return { ...switchHook };
    },
    render(instance) {
        const {
            id,
            props,
            state,
            ptmi,
            ptm,
            cx,
            sx,
            // methods
            onChange
        } = instance;

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    type: 'checkbox',
                    role: 'switch',
                    className: cn(cx('input'), props.inputClassName),
                    style: props.inputStyle,
                    checked: state.checked,
                    tabIndex: props.tabIndex,
                    disabled: props.disabled,
                    'aria-checked': state.checked,
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    'aria-invalid': props.invalid || undefined,
                    onFocus: props.onFocus,
                    onBlur: props.onBlur,
                    onChange
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
                style: sx('root'),
                'data-p-checked': state.checked,
                'data-p-disabled': props.disabled || undefined
            },
            ptmi('root')
        );

        return (
            <SwitchProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {input}
                    {props.children}
                </Component>
            </SwitchProvider>
        );
    },
    components: {
        Control: SwitchControl,
        Thumb: SwitchThumb
    }
});

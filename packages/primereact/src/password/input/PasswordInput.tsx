'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePasswordContext } from '../Password.context';
import { defaultInputProps } from './PasswordInput.props';

export const PasswordInput = withComponent({
    name: 'PasswordInput',
    defaultProps: defaultInputProps,
    setup() {
        const password = usePasswordContext();

        return { password };
    },
    render(instance) {
        const { props, ptmi, password } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                id: password?.props.inputId,
                className: cn(password?.cx('input'), password?.props.inputClass),
                type: password?.state.inputType,
                defaultValue: password?.state.value,
                autoComplete: 'off',
                name: password?.props.name,
                size: password?.props.size,
                invalid: password?.props.invalid,
                variant: password?.props.variant,
                fluid: password?.props.fluid,
                required: password?.props.required,
                disabled: password?.props.disabled,
                'aria-expanded': password?.state.overlayVisible ? 'true' : undefined,
                'aria-haspopup': password?.state.overlayVisible ? 'true' : undefined,
                onChange: password?.onInputChange,
                onClick: password?.onInputClick,
                onFocus: password?.onFocus,
                onBlur: password?.onBlur
            },
            password?.ptm('pcInputText'),
            ptmi('root')
        );

        return <Component ref={password?.inputRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

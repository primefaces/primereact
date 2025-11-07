'use client';
import { Component } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { InputText } from 'primereact/inputtext';
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

        const rootProps = mergeProps(
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
            ptmi('root')
        );

        // @ts-expect-error: InputText expects a type prop, but we are using it as a password input.
        return <Component ref={password?.inputRef} as={InputText} instance={instance} attrs={{ ...props, ...rootProps }} pt={password?.ptm('input')} children={props.children} />;
    }
});

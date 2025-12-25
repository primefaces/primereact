'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultInputProps } from './InputTagsInput.props';

export const InputTagsInput = withComponent({
    name: 'InputTagsInput',
    defaultProps: defaultInputProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;

        const rootProps = mergeProps(
            {
                className: inputtags?.cx('input'),
                value: inputtags?.state.inputValue,
                name: inputtags?.props.name,
                invalid: inputtags?.props.invalid,
                variant: inputtags?.props.variant,
                fluid: inputtags?.props.fluid,
                disabled: inputtags?.props.disabled,
                onChange: inputtags?.onChange,
                onKeyDown: inputtags?.onKeyDown,
                onPaste: inputtags?.onPaste,
                onBlur: inputtags?.onBlur
            },
            ptmi('root')
        );

        // @ts-expect-error: InputText expects a type prop, but we are using it as a inputtags input.
        return <Component ref={inputtags?.inputRef} as={InputText} instance={instance} attrs={{ ...props, ...rootProps }} pt={inputtags?.ptm('pcInputText')} children={props.children} />;
    }
});

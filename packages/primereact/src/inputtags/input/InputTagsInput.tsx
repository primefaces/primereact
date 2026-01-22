'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultInputProps } from './InputTagsInput.props';

export const InputTagsInput = withComponent({
    name: 'InputTags.Input',
    defaultProps: defaultInputProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;
        const { as, ...restProps } = props;

        const hasDropdown = !!inputtags?.props.onComplete;
        const rootProps = mergeProps(
            restProps,
            {
                className: inputtags?.cx('input'),
                value: inputtags?.state.inputValue,
                name: inputtags?.props.name,
                invalid: inputtags?.props.invalid,
                variant: inputtags?.props.variant,
                fluid: inputtags?.props.fluid,
                disabled: inputtags?.props.disabled,
                role: hasDropdown ? 'combobox' : undefined,
                'aria-autocomplete': hasDropdown ? 'list' : undefined,
                'aria-haspopup': hasDropdown ? 'listbox' : undefined,
                'aria-expanded': hasDropdown ? inputtags?.state.overlayVisible : undefined,
                'aria-controls': hasDropdown && inputtags?.state.overlayVisible ? `${inputtags?.id}_list` : undefined,
                'aria-activedescendant': hasDropdown && inputtags?.state.overlayVisible ? inputtags?.getFocusedOptionId() : undefined,
                onChange: inputtags?.onChange,
                onKeyDown: inputtags?.onKeyDown,
                onPaste: inputtags?.onPaste,
                onFocus: inputtags?.onFocus,
                onBlur: inputtags?.onBlur
            },
            inputtags?.ptm('pcInputText'),
            ptmi('root')
        );

        return <Component ref={inputtags?.inputRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

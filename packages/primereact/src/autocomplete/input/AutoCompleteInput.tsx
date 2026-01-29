'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultInputProps } from './AutoCompleteInput.props';

export const AutoCompleteInput = withComponent({
    name: 'AutoComplete.Input',
    defaultProps: defaultInputProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: autocomplete?.cx('input'),
                tabIndex: autocomplete?.props.disabled ? -1 : autocomplete?.props.tabIndex,
                value: autocomplete?.state.inputValue ?? '',
                autoComplete: 'off',
                role: 'combobox',
                name: autocomplete?.props.name,
                size: autocomplete?.props.size,
                invalid: autocomplete?.props.invalid,
                variant: autocomplete?.props.variant,
                fluid: autocomplete?.props.fluid,
                required: autocomplete?.props.required,
                disabled: autocomplete?.props.disabled,
                'aria-autocomplete': 'list',
                'aria-haspopup': 'listbox',
                'aria-expanded': autocomplete?.state.opened,
                'aria-controls': autocomplete?.state.opened ? `${autocomplete?.id}_list` : undefined,
                'aria-activedescendant': autocomplete?.state.opened ? autocomplete?.getFocusedOptionId() : undefined,
                onChange: autocomplete?.onChange,
                onFocus: autocomplete?.onFocus,
                onBlur: autocomplete?.onBlur,
                onKeyDown: autocomplete?.onKeyDown,
                ref: autocomplete?.inputRef
            },
            autocomplete?.ptm('pcInputText'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

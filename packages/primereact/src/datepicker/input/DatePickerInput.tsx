'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultInputProps } from './DatePickerInput.props';

export const DatePickerInput = withComponent({
    name: 'DatePicker.Input',
    defaultProps: defaultInputProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                defaultValue: datepicker?.inputFieldValue,
                className: datepicker?.cx('input'),
                role: 'combobox',
                placeholder: datepicker?.props.placeholder,
                name: datepicker?.props.name,
                size: datepicker?.props.size,
                invalid: datepicker?.props.invalid,
                variant: datepicker?.props.variant,
                fluid: datepicker?.props.fluid,
                required: datepicker?.props.required,
                autoComplete: 'off',
                inputMode: 'none',
                disabled: datepicker?.props.disabled,
                readOnly: !datepicker?.props.manualInput || datepicker?.props.readOnly,
                tabIndex: 0,
                'aria-autocomplete': 'none',
                'aria-haspopup': 'dialog',
                'aria-expanded': datepicker?.state.opened,
                'aria-controls': datepicker?.state.opened ? datepicker?.id + '_panel' : undefined,
                'aria-labelledby': datepicker?.props.ariaLabelledby,
                'aria-label': datepicker?.props.ariaLabel,
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => datepicker?.onInput(event),
                onClick: datepicker?.onInputClick,
                onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => datepicker?.onInputKeyDown(event),
                onFocus: (event: React.FocusEvent<HTMLInputElement>) => datepicker?.onInputFocus(event),
                onBlur: (event: React.FocusEvent<HTMLInputElement>) => datepicker?.onInputBlur(event)
            },
            datepicker?.ptm('pcInputText'),
            ptmi('root')
        );

        return <Component ref={datepicker?.inputRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

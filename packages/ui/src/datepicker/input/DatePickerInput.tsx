'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultInputProps } from './DatePickerInput.props';

export const DatePickerInput = withComponent({
    name: 'DatePickerInput',
    defaultProps: defaultInputProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                defaultValue: datepicker?.inputFieldValue,
                id: datepicker?.props.inputId,
                className: cn(datepicker?.cx('input'), datepicker?.props.inputClass),
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
                'aria-expanded': datepicker?.state.overlayVisible,
                'aria-controls': datepicker?.state.overlayVisible ? datepicker?.id + '_panel' : undefined,
                'aria-labelledby': datepicker?.props.ariaLabelledby,
                'aria-label': datepicker?.props.ariaLabel,
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => datepicker?.onInput(event),
                onClick: datepicker?.onInputClick,
                onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => datepicker?.onInputKeyDown(event),
                onFocus: (event: React.FocusEvent<HTMLInputElement>) => datepicker?.onInputFocus(event),
                onBlur: (event: React.FocusEvent<HTMLInputElement>) => datepicker?.onInputBlur(event)
            },
            ptmi('root')
        );

        // @ts-expect-error: InputText expects a type prop, but we are using it as a input.
        return <Component ref={datepicker?.inputRef} as={InputText} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('pcInputText')} children={props.children} />;
    }
});

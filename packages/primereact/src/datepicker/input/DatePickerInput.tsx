'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { InputText } from 'primereact/inputtext';
import { usePopoverContext } from 'primereact/popover';
// import { Popover } from 'primereact/popover';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultInputProps } from './DatePickerInput.props';

export const DatePickerInput = withComponent({
    name: 'DatePickerInput',
    defaultProps: defaultInputProps,
    setup() {
        const datepicker = useDatePickerContext();
        const popover = usePopoverContext();

        return { datepicker, popover };
    },
    render(instance) {
        const { props, ptmi, datepicker, popover } = instance;

        const rootProps = mergeProps(
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
                'aria-expanded': datepicker?.state.overlayVisible,
                'aria-controls': datepicker?.state.overlayVisible ? datepicker?.panelId : undefined, //TODO:
                'aria-labelledby': datepicker?.props.ariaLabelledby,
                'aria-label': datepicker?.props.ariaLabel,
                onClick: () => {
                    //TODO:
                    if (!datepicker?.props.disabled) {
                        // datepicker?.showOverlay();
                        popover?.show?.();
                    }
                    // props.onClick?.(e);
                }
            },
            ptmi('root')
        );

        // if (datepicker?.props.inline) {
        //     return null;
        // }

        // @ts-expect-error: InputText expects a type prop, but we are using it as a input.
        return <Component ref={datepicker?.inputRef} as={InputText} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('input')} children={props.children} />;

        // return <Popover.Trigger ref={datepicker?.inputRef} as={InputText} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('input')} />;
    }
});

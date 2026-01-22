'use client';
import { Component, withComponent } from '@primereact/core/component';
import { InputText } from '@primereact/ui/inputtext';
import { mergeDefaultProps } from '@primeuix/utils';
import { DatePickerInput, defaultInputProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerInput = withComponent({
    name: 'DatePicker.Input',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={DatePickerInput} attrs={rootProps} />;
    }
});

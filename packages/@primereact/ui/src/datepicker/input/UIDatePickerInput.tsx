'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { InputText } from '@primereact/ui/inputtext';
import { DatePickerInput, defaultInputProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerInput = withComponent({
    name: 'UIDatePickerInput',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={DatePickerInput} attrs={rootProps} />;
    }
});

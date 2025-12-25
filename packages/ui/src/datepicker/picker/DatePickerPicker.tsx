'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { DatePickerPickerProvider } from './DatePickerPicker.context';
import { defaultPickerProps } from './DatePickerPicker.props';

export const DatePickerPicker = withComponent({
    name: 'DatePickerPicker',
    defaultProps: defaultPickerProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;
        const typeMap: Record<string, string> = {
            hour: 'hourPicker',
            minute: 'minutePicker',
            second: 'secondPicker',
            ampm: 'ampmPicker'
        };
        const pickerName = (props.type && typeMap[props.type]) || 'hourPicker';

        const rootProps = mergeProps(
            {
                className: datepicker?.cx(pickerName)
            },
            datepicker?.ptm(pickerName),
            ptmi('root')
        );

        return (
            <DatePickerPickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerPickerProvider>
        );
    }
});

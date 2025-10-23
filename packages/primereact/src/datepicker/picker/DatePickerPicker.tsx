'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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

        const rootProps = mergeProps(
            {
                className: props.type === 'minute' ? datepicker?.cx('minutePicker') : datepicker?.cx('hourPicker')
            },
            props.type === 'hour' && datepicker?.ptm('hourPicker'),
            props.type === 'minute' && datepicker?.ptm('minutePicker'),
            ptmi('root')
        );

        return (
            <DatePickerPickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerPickerProvider>
        );
    }
});

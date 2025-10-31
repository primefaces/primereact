'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { DatePickerTableBodyProvider } from './DatePickerTableBody.context';
import { defaultTableBodyProps } from './DatePickerTableBody.props';

export const DatePickerTableBody = withComponent({
    name: 'DatePickerTableBody',
    defaultProps: defaultTableBodyProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        if (datepicker?.state.currentView !== props.view) {
            return null;
        }

        const rootProps = mergeProps(datepicker?.ptm('tableBody'), ptmi('root'));

        return (
            <DatePickerTableBodyProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerTableBodyProvider>
        );
    }
});

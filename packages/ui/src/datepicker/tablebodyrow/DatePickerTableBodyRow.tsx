'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableBodyRowProps } from './DatePickerTableBodyRow.props';

export const DatePickerTableBodyRow = withComponent({
    name: 'DatePickerTableBodyRow',
    defaultProps: defaultTableBodyRowProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(datepicker?.ptm('tableBodyRow'), ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableHeadProps } from './DatePickerTableHead.props';

export const DatePickerTableHead = withComponent({
    name: 'DatePickerTableHead',
    defaultProps: defaultTableHeadProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(datepicker?.ptm('tableHeader'), ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

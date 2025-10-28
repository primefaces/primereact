'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableHeadRowProps } from './DatePickerTableHeadRow.props';

export const DatePickerTableHeadRow = withComponent({
    name: 'DatePickerTableHeadRow',
    defaultProps: defaultTableHeadRowProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        if (datepicker?.state.currentView !== 'date') {
            return null;
        }

        const rootProps = mergeProps(datepicker?.ptm('tableHeaderRow'), ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

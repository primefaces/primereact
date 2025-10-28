'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableProps } from './DatePickerTable.props';

export const DatePickerTable = withComponent({
    name: 'DatePickerTable',
    defaultProps: defaultTableProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;
        const currentView = datepicker?.state.currentView;
        const viewMap: Record<string, string> = {
            year: 'yearView',
            month: 'monthView',
            day: 'dayView'
        };
        const viewName = (currentView && viewMap[currentView]) || 'dayView';

        const rootProps = mergeProps(
            {
                className: datepicker?.cx(viewName),
                role: 'grid'
            },
            datepicker?.ptm(viewName),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

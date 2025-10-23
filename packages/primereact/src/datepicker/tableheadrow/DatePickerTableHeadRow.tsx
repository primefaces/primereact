'use client';
import { Component } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { DatePickerTableHeadCell } from '../tableheadcell';
import { DatePickerTableHeadWeekCell } from '../tableheadweekcell';
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

        if (datepicker?.state.current.view !== 'date') {
            return null;
        }

        const rootProps = mergeProps(datepicker?.ptm('tableHeaderRow'), ptmi('root'));

        return (
            <Component instance={instance} attrs={rootProps}>
                {props.children ? (
                    resolve(props.children, instance)
                ) : (
                    <>
                        {datepicker?.props.showWeek && <DatePickerTableHeadWeekCell>{datepicker?.weekHeaderLabel}</DatePickerTableHeadWeekCell>}
                        {datepicker?.weekDays?.map((day, index) => (
                            <DatePickerTableHeadCell key={index}>{day}</DatePickerTableHeadCell>
                        ))}
                    </>
                )}
            </Component>
        );
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableBodyWeekCellProps } from './DatePickerTableBodyWeekCell.props';

export const DatePickerTableBodyWeekCell = withComponent({
    name: 'DatePickerTableBodyWeekCell',
    defaultProps: defaultTableBodyWeekCellProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, ptm, datepicker } = instance;

        if (datepicker?.state.current.view !== 'date') {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('weekNumber')
            },
            datepicker?.ptm('weekNumber'),
            ptmi('root')
        );

        const createLabel = () => {
            return (
                <span className={datepicker?.cx('weekLabelContainer')} {...ptm('weekLabelContainer')}>
                    {resolve(props.children, instance)}
                </span>
            );
        };

        const label = createLabel();

        return <Component instance={instance} attrs={rootProps} children={label} />;
    }
});

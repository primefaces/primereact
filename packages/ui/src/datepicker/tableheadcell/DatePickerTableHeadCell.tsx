'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableHeadCellProps } from './DatePickerTableHeadCell.props';

export const DatePickerTableHeadCell = withComponent({
    name: 'DatePickerTableHeadCell',
    defaultProps: defaultTableHeadCellProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, ptm, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('weekDayCell'),
                scope: 'col'
            },
            datepicker?.ptm('weekDayCell'),
            ptmi('root')
        );

        const createLabel = () => {
            return (
                <span className={datepicker?.cx('weekDay')} {...ptm('weekDay')}>
                    {resolve(props.children, instance)}
                </span>
            );
        };

        const label = createLabel();

        return <Component instance={instance} attrs={rootProps} children={label} />;
    }
});

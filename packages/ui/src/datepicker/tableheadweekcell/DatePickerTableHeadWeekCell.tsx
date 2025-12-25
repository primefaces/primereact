'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTableHeadWeekCellProps } from './DatePickerTableHeadWeekCell.props';

export const DatePickerTableHeadWeekCell = withComponent({
    name: 'DatePickerTableHeadWeekCell',
    defaultProps: defaultTableHeadWeekCellProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, ptm, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('weekHeader'),
                scope: 'col'
            },
            datepicker?.ptm('weekHeader'),
            ptmi('root')
        );

        const createLabel = () => {
            return <span {...ptm('weekHeaderLabel')}>{resolve(props.children, instance)}</span>;
        };

        const label = createLabel();

        return <Component instance={instance} attrs={rootProps} children={label} />;
    }
});

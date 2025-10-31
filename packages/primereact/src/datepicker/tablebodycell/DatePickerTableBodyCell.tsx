'use client';
import { Component } from '@primereact/core/component';
import type { useDatePickerDateMeta, useDatePickerYearOptions } from '@primereact/types/shared/datepicker';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { useDatePickerTableBodyContext } from '../tablebody/DatePickerTableBody.context';
import { defaultTableBodyCellProps } from './DatePickerTableBodyCell.props';

export const DatePickerTableBodyCell = withComponent({
    name: 'DatePickerTableBodyCell',
    defaultProps: defaultTableBodyCellProps,
    setup() {
        const datepicker = useDatePickerContext();
        const datepickertablebody = useDatePickerTableBodyContext();

        return { datepicker, datepickertablebody };
    },
    render(instance) {
        const { props, ptmi, ptm, datepicker, datepickertablebody } = instance;
        const { view } = datepickertablebody?.props ?? { view: 'date' };

        const viewMap: Record<string, { cellName: string; context: Record<string, unknown> }> = {
            year: { cellName: 'yearCell', context: { year: props.year } },
            month: { cellName: 'monthCell', context: { month: props.month, index: props.index } },
            date: { cellName: 'dayCell', context: { date: props.date } }
        };

        const viewConfig = (view && viewMap[view]) || viewMap['date'];
        const context = viewConfig.context;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx(viewConfig.cellName, context),
                'aria-label': props?.date && props?.date.day,
                'data-p-today': props?.date && props?.date.today,
                'data-p-other-month': props?.date && props?.date.otherMonth
            },
            ptm(viewConfig.cellName),
            ptmi('root')
        );

        const createDayLabel = () => {
            const labelProps = mergeProps(
                {
                    className: datepicker?.cx('day', context),
                    draggable: false,
                    'aria-selected': props?.date && datepicker?.isSelected(props.date),
                    'aria-disabled': props?.date && !props.date.selectable,
                    'data-p-selected': props?.date && datepicker?.isSelected(props.date),
                    'data-p-disabled': props?.date && !props.date.selectable,
                    onClick: (event: React.MouseEvent<HTMLSpanElement>) => datepicker?.onDateSelect(event, props.date as useDatePickerDateMeta),
                    onKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => datepicker?.onDateCellKeydown(event, props.date as useDatePickerDateMeta, props.index as number),
                    onMouseEnter: () => datepicker?.onDateCellMouseEnter(props.date as useDatePickerDateMeta)
                },
                ptm('day')
            );

            return <span {...labelProps}>{resolve(props.children, instance)}</span>;
        };

        const createMonthLabel = () => {
            const labelProps = mergeProps(
                {
                    className: datepicker?.cx('month', context),
                    draggable: false,
                    'data-p-disabled': props.month && !props.month.selectable,
                    'data-p-selected': datepicker?.isMonthSelected(props.index as number),
                    onClick: (event: React.MouseEvent<HTMLSpanElement>) => datepicker?.onMonthSelect?.(event, props.index as number),
                    onKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => datepicker?.onMonthCellKeydown?.(event, props.index as number)
                },
                ptm('month')
            );

            return <span {...labelProps}>{resolve(props.children, instance)}</span>;
        };

        const createYearLabel = () => {
            const labelProps = mergeProps(
                {
                    className: datepicker?.cx('year', context),
                    draggable: false,
                    'data-p-disabled': props.year && !props.year.selectable,
                    'data-p-selected': datepicker?.isYearSelected((props.year as useDatePickerYearOptions).value),
                    onClick: (event: React.MouseEvent<HTMLSpanElement>) => datepicker?.onYearSelect?.(event, props.year as useDatePickerYearOptions),
                    onKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => datepicker?.onYearCellKeydown?.(event, props.year as useDatePickerYearOptions)
                },
                ptm('year')
            );

            return <span {...labelProps}>{resolve(props.children, instance)}</span>;
        };

        const createChildren = () => {
            if (datepickertablebody?.props.view === 'year') {
                return createYearLabel();
            } else if (datepickertablebody?.props.view === 'month') {
                return createMonthLabel();
            }

            return createDayLabel();
        };

        const children = createChildren();

        return <Component instance={instance} attrs={rootProps} children={children} />;
    }
});

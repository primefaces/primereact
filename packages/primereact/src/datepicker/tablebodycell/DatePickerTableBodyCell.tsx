// 'use client';
// import { Component } from '@primereact/core/component';
// import { mergeProps } from '@primeuix/utils';
// import { withComponent } from 'primereact/base';
// import * as React from 'react';
// import { useDatePickerContext } from '../DatePicker.context';
// import { defaultTableBodyCellProps } from './DatePickerTableBodyCell.props';

// export const DatePickerTableBodyCell = withComponent({
//     name: 'DatePickerTableBodyCell',
//     defaultProps: defaultTableBodyCellProps,
//     setup() {
//         const datepicker = useDatePickerContext();

//         return { datepicker };
//     },
//     render(instance) {
//         const { props, ptmi, ptm, datepicker } = instance;

//         const rootProps = mergeProps(
//             {
//                 className: datepicker?.cx('dayCell', { date: props.date })
//             },
//             datepicker?.ptm('dayCell'),
//             ptmi('root')
//         );

//         const createLabel = () => {
//             return (
//                 <span className={datepicker?.cx('day', { date: props.date })} {...ptm('day')}>
//                     {props.children}
//                 </span>
//             );
//         };

//         const label = createLabel();

//         return <Component instance={instance} attrs={rootProps} children={label} />;
//     }
// });

'use client';
import { Component } from '@primereact/core/component';
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

        const context = datepickertablebody?.props.view === 'year' ? { year: props.year } : datepickertablebody?.props.view === 'month' ? { month: props.month, index: props.index } : { date: props.date };

        const rootProps = mergeProps(
            {
                className: datepickertablebody?.props.view === 'year' ? datepicker?.cx('yearCell', context) : datepickertablebody?.props.view === 'month' ? datepicker?.cx('monthCell', context) : datepicker?.cx('dayCell', context),
                'aria-label': datepickertablebody?.props.view === 'date' && props.date.day,
                'data-p-today': datepickertablebody?.props.view === 'date' && props.date.today,
                'data-p-other-month': datepickertablebody?.props.view === 'date' && props.date.otherMonth
            },
            datepickertablebody?.props.view === 'year' ? ptm('yearCell') : datepickertablebody?.props.view === 'month' ? ptm('monthCell') : ptm('dayCell'),
            ptmi('root')
        );

        const createDayLabel = () => {
            const labelProps = mergeProps(
                {
                    className: datepicker?.cx('day', context),
                    draggable: false,
                    'aria-selected': datepicker?.isSelected?.(props.date),
                    'aria-disabled': !props.date.selectable,
                    'data-p-selected': datepicker?.isSelected?.(props.date),
                    'data-p-disabled': !props.date.selectable,
                    onClick: (event: React.MouseEvent<HTMLSpanElement>) => datepicker?.onDateSelect?.(event, props.date),
                    onKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => datepicker?.onDateCellKeydown?.(event, props.date, props.index)
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
                    'data-p-disabled': !props.month.selectable,
                    'data-p-selected': datepicker?.isMonthSelected?.(props.index),
                    onClick: (event: React.MouseEvent<HTMLSpanElement>) => datepicker?.onMonthSelect?.(event, props.index),
                    onKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => datepicker?.onMonthCellKeydown?.(event, props.index)
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
                    'data-p-disabled': !props.year.selectable,
                    'data-p-selected': datepicker?.isYearSelected?.(props.year.value),
                    onClick: (event: React.MouseEvent<HTMLSpanElement>) => datepicker?.onYearSelect?.(event, props.year),
                    onKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => datepicker?.onYearCellKeydown?.(event, props.year)
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

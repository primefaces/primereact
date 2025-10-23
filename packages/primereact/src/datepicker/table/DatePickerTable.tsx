// 'use client';
// import { Component } from '@primereact/core/component';
// import { mergeProps } from '@primeuix/utils';
// import { withComponent } from 'primereact/base';
// import * as React from 'react';
// import { useDatePickerContext } from '../DatePicker.context';
// import { defaultTableProps } from './DatePickerTable.props';

// export const DatePickerTable = withComponent({
//     name: 'DatePickerTable',
//     defaultProps: defaultTableProps,
//     setup() {
//         const datepicker = useDatePickerContext();

//         return { datepicker };
//     },
//     render(instance) {
//         const { props, ptmi, datepicker } = instance;

//         if (datepicker?.state.current.view !== 'date') {
//             return null;
//         }

//         const tableProps = mergeProps(
//             {
//                 className: datepicker?.cx('dayView'),
//                 role: 'grid'
//             },
//             datepicker?.ptm('dayView'),
//             ptmi('root')
//         );

//         return <Component instance={instance} attrs={tableProps} children={props.children} />;
//     }
// });

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

        const rootProps = mergeProps(
            {
                className: datepicker?.state.current.view === 'year' ? datepicker?.cx('yearView') : datepicker?.state.current.view === 'month' ? datepicker?.cx('monthView') : datepicker?.cx('dayView'),
                role: 'grid'
            },
            datepicker?.state.current.view === 'year' ? datepicker?.ptm('yearView') : datepicker?.state.current.view === 'month' ? datepicker?.ptm('monthView') : datepicker?.ptm('dayView'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

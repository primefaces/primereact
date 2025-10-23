'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultSelectMonthProps } from './DatePickerSelectMonth.props';

export const DatePickerSelectMonth = withComponent({
    name: 'DatePickerSelectMonth',
    defaultProps: defaultSelectMonthProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker, $primereact } = instance;

        if (datepicker?.state.current.view !== 'date') {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('selectmonth'),
                type: 'button',
                onClick: datepicker?.switchToMonthView,
                onKeyDown: datepicker?.onContainerButtonKeydown,
                disabled: datepicker?.switchViewButtonDisabled,
                'aria-label': $primereact?.config?.locale?.chooseMonth
            },
            datepicker?.ptm('selectmonth'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.getMonthName?.()}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
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
        const { props, ptmi, datepicker } = instance;

        if (datepicker?.state.currentView !== 'date') {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('selectMonth'),
                type: 'button',
                onClick: datepicker?.switchToMonthView,
                onKeyDown: datepicker?.onContainerButtonKeydown,
                disabled: datepicker?.switchViewButtonDisabled,
                'aria-label': 'Choose Month' //TODO:
            },
            datepicker?.ptm('selectMonth'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.getMonthName?.()}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

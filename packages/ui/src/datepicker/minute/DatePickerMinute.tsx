'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultMinuteProps } from './DatePickerMinute.props';

export const DatePickerMinute = withComponent({
    name: 'DatePickerMinute',
    defaultProps: defaultMinuteProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('minute')
            },
            datepicker?.ptm('minute'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.formattedCurrentMinute}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultHourProps } from './DatePickerHour.props';

export const DatePickerHour = withComponent({
    name: 'DatePickerHour',
    defaultProps: defaultHourProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('hour')
            },
            datepicker?.ptm('hour'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.formattedCurrentHour}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

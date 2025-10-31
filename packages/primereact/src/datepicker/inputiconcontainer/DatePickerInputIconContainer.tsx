'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { DatePickerInputIconContainerProvider } from './DatePickerInputIconContainer.context';
import { defaultInputIconContainerProps } from './DatePickerInputIconContainer.props';

export const DatePickerInputIconContainer = withComponent({
    name: 'DatePickerInputIconContainer',
    defaultProps: defaultInputIconContainerProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('inputIconContainer')
            },
            datepicker?.ptm('inputIconContainer'),
            ptmi('root')
        );

        return (
            <DatePickerInputIconContainerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerInputIconContainerProvider>
        );
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDatePicker } from '@primereact/headless/datepicker';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { DatePickerProvider } from '../DatePicker.context';
import { defaultRootProps } from './DatePickerRoot.props';

export const DatePickerRoot = withComponent({
    name: 'DatePickerRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const datepicker = useDatePicker(instance.inProps);

        return datepicker;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <DatePickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerProvider>
        );
    }
});

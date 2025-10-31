'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultButtonbarProps } from './DatePickerButtonbar.props';

export const DatePickerButtonbar = withComponent({
    name: 'DatePickerButtonbar',
    defaultProps: defaultButtonbarProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('buttonbar')
            },
            datepicker?.ptm('buttonbar'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultHeaderProps } from './DatePickerHeader.props';

export const DatePickerHeader = withComponent({
    name: 'DatePickerHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('header')
            },
            datepicker?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

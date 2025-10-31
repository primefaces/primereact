'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultContainerProps } from './DatePickerContainer.props';

export const DatePickerContainer = withComponent({
    name: 'DatePickerContainer',
    defaultProps: defaultContainerProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('container')
            },
            datepicker?.ptm('container'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

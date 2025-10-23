'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultSeparatorContainerProps } from './DatePickerSeparatorContainer.props';

export const DatePickerSeparatorContainer = withComponent({
    name: 'DatePickerSeparatorContainer',
    defaultProps: defaultSeparatorContainerProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('separatorContainer')
            },
            datepicker?.ptm('separatorcontainer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

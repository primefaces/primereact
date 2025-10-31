'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultFooterProps } from './DatePickerFooter.props';

export const DatePickerFooter = withComponent({
    name: 'DatePickerFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(datepicker?.ptm('footer'), ptmi('root'));

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultSeparatorProps } from './DatePickerSeparator.props';

export const DatePickerSeparator = withComponent({
    name: 'DatePickerSeparator',
    defaultProps: defaultSeparatorProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('separator')
            },
            datepicker?.ptm('separator'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.props.timeSeparator}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

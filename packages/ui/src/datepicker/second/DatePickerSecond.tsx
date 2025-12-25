'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultSecondProps } from './DatePickerSecond.props';

export const DatePickerSecond = withComponent({
    name: 'DatePickerSecond',
    defaultProps: defaultSecondProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('second')
            },
            datepicker?.ptm('second'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.formattedCurrentSecond}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

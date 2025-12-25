'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultAmPmProps } from './DatePickerAmPm.props';

export const DatePickerAmPm = withComponent({
    name: 'DatePickerAmPm',
    defaultProps: defaultAmPmProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('ampm')
            },
            datepicker?.ptm('ampm'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.ampmLabel}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultTodayProps } from './DatePickerToday.props';

export const DatePickerToday = withComponent({
    name: 'DatePickerToday',
    defaultProps: defaultTodayProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: datepicker?.cx('today'),
                onClick: datepicker?.onTodayButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            datepicker?.ptm('today'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.todayLabel}</>;
        };

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

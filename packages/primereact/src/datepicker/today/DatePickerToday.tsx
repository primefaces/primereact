'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
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

        const rootProps = mergeProps(
            {
                type: 'button',
                className: datepicker?.cx('today'),
                onClick: datepicker?.onTodayButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.todayLabel}</>;
        };

        // @ts-expect-error: Button expects a type prop, but we are using it as a today button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('today')} children={props.children ?? label()} />;
    }
});

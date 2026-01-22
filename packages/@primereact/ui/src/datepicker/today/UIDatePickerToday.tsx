'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { DatePickerToday, defaultTodayProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerToday = withComponent({
    name: 'DatePicker.Today',
    defaultProps: defaultTodayProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerToday} attrs={rootProps} />;
    }
});

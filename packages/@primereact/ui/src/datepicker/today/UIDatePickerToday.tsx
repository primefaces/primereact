'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DatePickerToday, defaultTodayProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerToday = withComponent({
    name: 'UIDatePickerToday',
    defaultProps: defaultTodayProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerToday} attrs={rootProps} />;
    }
});

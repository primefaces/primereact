'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { DatePickerIncrement, defaultIncrementProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerIncrement = withComponent({
    name: 'DatePicker.Increment',
    defaultProps: defaultIncrementProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerIncrement} attrs={rootProps} />;
    }
});

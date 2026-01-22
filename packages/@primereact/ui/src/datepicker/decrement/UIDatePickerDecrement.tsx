'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { DatePickerDecrement, defaultDecrementProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerDecrement = withComponent({
    name: 'DatePicker.Decrement',
    defaultProps: defaultDecrementProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerDecrement} attrs={rootProps} />;
    }
});

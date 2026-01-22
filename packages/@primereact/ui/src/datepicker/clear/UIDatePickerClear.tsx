'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { DatePickerClear, defaultClearProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerClear = withComponent({
    name: 'DatePicker.Clear',
    defaultProps: defaultClearProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerClear} attrs={rootProps} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DatePickerDecrement, defaultDecrementProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerDecrement = withComponent({
    name: 'UIDatePickerDecrement',
    defaultProps: defaultDecrementProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerDecrement} attrs={rootProps} />;
    }
});

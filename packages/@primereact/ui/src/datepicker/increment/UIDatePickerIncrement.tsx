'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DatePickerIncrement, defaultIncrementProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerIncrement = withComponent({
    name: 'UIDatePickerIncrement',
    defaultProps: defaultIncrementProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerIncrement} attrs={rootProps} />;
    }
});

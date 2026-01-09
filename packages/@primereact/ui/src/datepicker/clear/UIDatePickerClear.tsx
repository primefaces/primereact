'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DatePickerClear, defaultClearProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerClear = withComponent({
    name: 'UIDatePickerClear',
    defaultProps: defaultClearProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerClear} attrs={rootProps} />;
    }
});

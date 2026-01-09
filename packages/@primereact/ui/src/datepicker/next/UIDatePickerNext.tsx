'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DatePickerNext, defaultNextProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerNext = withComponent({
    name: 'UIDatePickerNext',
    defaultProps: defaultNextProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerNext} attrs={rootProps} />;
    }
});

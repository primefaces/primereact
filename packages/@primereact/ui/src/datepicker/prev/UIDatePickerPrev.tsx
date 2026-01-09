'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { Button } from '@primereact/ui/button';
import { DatePickerPrev, defaultPrevProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerPrev = withComponent({
    name: 'UIDatePickerPrev',
    defaultProps: defaultPrevProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={DatePickerPrev} attrs={rootProps} />;
    }
});

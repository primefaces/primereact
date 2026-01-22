'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/datepicker';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { DatePickerRoot, defaultRootProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerRoot = withComponent({
    name: 'DatePicker.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={DatePickerRoot} attrs={rootProps} />;
    }
});

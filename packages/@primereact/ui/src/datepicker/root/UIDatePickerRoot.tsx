'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/datepicker';
import { withComponent } from '@primereact/ui/base';
import { DatePickerRoot, defaultRootProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerRoot = withComponent({
    name: 'UIDatePickerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={DatePickerRoot} attrs={rootProps} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/datepicker';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { DatePickerRoot, defaultRootProps } from 'primereact/datepicker';
import * as React from 'react';

export const UIDatePickerRoot = withComponent({
    name: 'DatePickerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={DatePickerRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

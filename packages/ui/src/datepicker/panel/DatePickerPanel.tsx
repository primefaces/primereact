'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultPanelProps } from './DatePickerPanel.props';

export const DatePickerPanel = withComponent({
    name: 'DatePickerPanel',
    defaultProps: defaultPanelProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('panel')
            },
            datepicker?.ptm('panel'),
            ptmi('root')
        );

        return <Component ref={datepicker?.overlayRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

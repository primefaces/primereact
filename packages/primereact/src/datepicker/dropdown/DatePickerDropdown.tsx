'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultDropdownProps } from './DatePickerDropdown.props';

export const DatePickerDropdown = withComponent({
    name: 'DatePickerDropdown',
    defaultProps: defaultDropdownProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        if (datepicker?.props.inline) {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('dropdown'),
                type: 'button',
                disabled: datepicker?.props.disabled,
                'aria-label': 'Choose Date', //TODO:
                'aria-haspopup': 'dialog',
                'aria-expanded': datepicker?.state.overlayVisible,
                'aria-controls': datepicker?.id + '_panel',
                onClick: datepicker?.onButtonClick
            },
            datepicker?.ptm('dropdown'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

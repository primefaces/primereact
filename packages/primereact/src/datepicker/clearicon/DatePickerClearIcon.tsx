'use client';
import { TimesIcon } from '@primereact/icons/times';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultClearIconProps } from './DatePickerClearIcon.props';

export const DatePickerClearIcon = withComponent({
    name: 'DatePickerClearIcon',
    defaultProps: defaultClearIconProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { ptmi, datepicker } = instance;

        if (!datepicker?.state.showClearIcon) {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('clearIcon'),
                onClick: datepicker?.onClearClick
            },
            datepicker?.ptm('clearIcon'),
            ptmi('root')
        );

        return <TimesIcon {...rootProps} />;
    }
});

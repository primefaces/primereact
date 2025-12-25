'use client';
import { withComponent } from '@primereact/core/component';
import { CalendarIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { useDatePickerInputIconContainerContext } from '../inputiconcontainer/DatePickerInputIconContainer.context';
import { defaultDropdownIconProps } from './DatePickerDropdownIcon.props';

export const DatePickerDropdownIcon = withComponent({
    name: 'DatePickerDropdownIcon',
    defaultProps: defaultDropdownIconProps,
    setup() {
        const datepicker = useDatePickerContext();
        const datepickerinputiconcontainer = useDatePickerInputIconContainerContext();

        return { datepicker, datepickerinputiconcontainer };
    },
    render(instance) {
        const { ptmi, datepicker, datepickerinputiconcontainer } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('dropdownIcon'),
                onClick: datepickerinputiconcontainer ? datepicker?.onButtonClick : undefined
            },
            datepicker?.ptm('dropdownIcon'),
            ptmi('root')
        );

        return <CalendarIcon {...rootProps} />;
    }
});

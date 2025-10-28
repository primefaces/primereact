'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultSelectYearProps } from './DatePickerSelectYear.props';

export const DatePickerSelectYear = withComponent({
    name: 'DatePickerSelectYear',
    defaultProps: defaultSelectYearProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        if (datepicker?.state.currentView === 'year') {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('selectYear'),
                type: 'button',
                onClick: datepicker?.switchToYearView,
                onKeyDown: datepicker?.onContainerButtonKeydown,
                disabled: datepicker?.switchViewButtonDisabled,
                'aria-label': 'Choose Year' //TODO:
            },
            datepicker?.ptm('selectYear'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.getYear?.()}</>;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

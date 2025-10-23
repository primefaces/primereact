'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultDecadeProps } from './DatePickerDecade.props';

export const DatePickerDecade = withComponent({
    name: 'DatePickerDecade',
    defaultProps: defaultDecadeProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        if (datepicker?.state.current.view !== 'year') {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('decade')
            },
            datepicker?.ptm('decade'),
            ptmi('root')
        );

        const label = () => {
            return (
                <>
                    {datepicker?.yearPickerValues?.[0].value} - {datepicker?.yearPickerValues?.[datepicker?.yearPickerValues?.length - 1].value}
                </>
            );
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

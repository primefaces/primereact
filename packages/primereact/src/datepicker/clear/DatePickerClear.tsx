'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultClearProps } from './DatePickerClear.props';

export const DatePickerClear = withComponent({
    name: 'DatePickerClear',
    defaultProps: defaultClearProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: datepicker?.cx('clear'),
                onClick: datepicker?.onClearButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            datepicker?.ptm('clear'),
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.clearLabel}</>;
        };

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? label()} />;
    }
});

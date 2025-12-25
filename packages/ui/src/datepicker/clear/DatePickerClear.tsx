'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
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

        const rootProps = mergeProps(
            {
                type: 'button',
                className: datepicker?.cx('clear'),
                onClick: datepicker?.onClearButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            ptmi('root')
        );

        const label = () => {
            return <>{datepicker?.clearLabel}</>;
        };

        // @ts-expect-error: Button expects a type prop, but we are using it as a clear button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('clear')} children={props.children ?? label()} />;
    }
});

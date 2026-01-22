'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronDownIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { useDatePickerPickerContext } from '../picker/DatePickerPicker.context';
import { defaultDecrementProps } from './DatePickerDecrement.props';

export const DatePickerDecrement = withComponent({
    name: 'DatePicker.Decrement',
    defaultProps: defaultDecrementProps,
    setup() {
        const datepicker = useDatePickerContext();
        const picker = useDatePickerPickerContext();

        return { datepicker, picker };
    },
    render(instance) {
        const { props, ptmi, datepicker, picker } = instance;
        const { as, ...restProps } = props;

        const direction = picker?.props.type === 'hour' ? 0 : picker?.props.type === 'minute' ? 1 : 2;

        const eventHandlers =
            picker?.props.type !== 'ampm'
                ? {
                      onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => datepicker?.onTimePickerElementMouseDown(event, direction, -1),
                      onMouseUp: datepicker?.onTimePickerElementMouseUp,
                      onMouseLeave: datepicker?.onTimePickerElementMouseLeave,
                      onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => datepicker?.onTimePickerElementKeyDown(event, direction, -1),
                      onKeyUp: datepicker?.onTimePickerElementKeyUp
                  }
                : {
                      onClick: datepicker?.toggleAMPM,
                      onKeyDown: datepicker?.onContainerButtonKeydown
                  };

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: datepicker?.cx('decrement'),
                ...eventHandlers
            },
            datepicker?.ptm('decrement'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronDownIcon pt={datepicker?.ptm('decrementIcon')} />;
        };

        const icon = createIconElement();

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});

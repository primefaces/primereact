'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronUpIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { useDatePickerPickerContext } from '../picker/DatePickerPicker.context';
import { defaultIncrementProps } from './DatePickerIncrement.props';

export const DatePickerIncrement = withComponent({
    name: 'DatePicker.Increment',
    defaultProps: defaultIncrementProps,
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
                      onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => datepicker?.onTimePickerElementMouseDown(event, direction, 1),
                      onMouseUp: datepicker?.onTimePickerElementMouseUp,
                      onMouseLeave: datepicker?.onTimePickerElementMouseLeave,
                      onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => datepicker?.onTimePickerElementKeyDown(event, direction, 1),
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
                className: datepicker?.cx('increment'),
                ...eventHandlers
            },
            datepicker?.ptm('increment'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronUpIcon pt={datepicker?.ptm('incrementIcon')} />;
        };

        const icon = createIconElement();

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});

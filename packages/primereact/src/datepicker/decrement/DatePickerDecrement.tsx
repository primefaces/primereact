'use client';
import { Component } from '@primereact/core/component';
import { ChevronDownIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { useDatePickerPickerContext } from '../picker/DatePickerPicker.context';
import { defaultDecrementProps } from './DatePickerDecrement.props';

export const DatePickerDecrement = withComponent({
    name: 'DatePickerDecrement',
    defaultProps: defaultDecrementProps,
    setup() {
        const datepicker = useDatePickerContext();
        const picker = useDatePickerPickerContext();

        return { datepicker, picker };
    },
    render(instance) {
        const { props, ptmi, datepicker, picker } = instance;

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
            {
                type: 'button',
                className: datepicker?.cx('decrement'),
                ...eventHandlers
            },
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronDownIcon pt={datepicker?.ptm('decrementIcon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a previous button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('decrement')} children={props.children ?? icon} />;
    }
});

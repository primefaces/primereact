'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronUpIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { useDatePickerPickerContext } from '../picker/DatePickerPicker.context';
import { defaultIncrementProps } from './DatePickerIncrement.props';

export const DatePickerIncrement = withComponent({
    name: 'DatePickerIncrement',
    defaultProps: defaultIncrementProps,
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
            {
                type: 'button',
                className: datepicker?.cx('increment'),
                ...eventHandlers
            },
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronUpIcon pt={datepicker?.ptm('incrementIcon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a previous button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('increment')} children={props.children ?? icon} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { ChevronLeftIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultPrevProps } from './DatePickerPrev.props';

export const DatePickerPrev = withComponent({
    name: 'DatePickerPrev',
    defaultProps: defaultPrevProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: datepicker?.cx('prev'),
                onClick: datepicker?.onPrevButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronLeftIcon pt={datepicker?.ptm('prevIcon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a previous button.
        return <Component as={Button} ref={datepicker?.prevButtonRef} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('prev')} children={props.children ?? icon} />;
    }
});

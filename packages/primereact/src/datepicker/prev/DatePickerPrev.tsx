'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronLeftIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultPrevProps } from './DatePickerPrev.props';

export const DatePickerPrev = withComponent({
    name: 'DatePicker.Prev',
    defaultProps: defaultPrevProps,
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
                className: datepicker?.cx('prev'),
                onClick: datepicker?.onPrevButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            datepicker?.ptm('prev'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronLeftIcon pt={datepicker?.ptm('prevIcon')} />;
        };

        const icon = createIconElement();

        return <Component as={as} ref={datepicker?.prevButtonRef} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});

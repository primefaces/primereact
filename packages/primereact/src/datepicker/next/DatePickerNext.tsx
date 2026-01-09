'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronRightIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultNextProps } from './DatePickerNext.props';

export const DatePickerNext = withComponent({
    name: 'DatePickerNext',
    defaultProps: defaultNextProps,
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
                className: datepicker?.cx('next'),
                onClick: datepicker?.onNextButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            datepicker?.ptm('next'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronRightIcon pt={datepicker?.ptm('nextIcon')} />;
        };

        const icon = createIconElement();

        return <Component as={as} ref={datepicker?.nextButtonRef} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});

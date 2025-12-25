'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronRightIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
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

        const rootProps = mergeProps(
            {
                type: 'button',
                className: datepicker?.cx('next'),
                onClick: datepicker?.onNextButtonClick,
                onKeyDown: datepicker?.onContainerButtonKeydown
            },
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronRightIcon pt={datepicker?.ptm('nextIcon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a next button.
        return <Component as={Button} ref={datepicker?.nextButtonRef} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('next')} children={props.children ?? icon} />;
    }
});

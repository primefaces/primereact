'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
// import { Popover } from 'primereact/popover';
import * as React from 'react';
import { useDatePickerContext } from '../DatePicker.context';
import { defaultPortalProps } from './DatePickerPortal.props';

export const DatePickerPortal = withComponent({
    name: 'DatePickerPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const datepicker = useDatePickerContext();

        return { datepicker };
    },
    render(instance) {
        const { props, ptmi, datepicker } = instance;

        const rootProps = mergeProps(
            {
                className: datepicker?.cx('portal')
            },
            ptmi('root')
        );

        // @ts-expect-error: Popover.Portal expects a type prop, but we are using it as a portal.
        // return <Component as={Popover.Portal} instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('portal')} children={props.children} />;
        return <Component instance={instance} attrs={{ ...props, ...rootProps }} pt={datepicker?.ptm('portal')} children={props.children} />;
    }
});

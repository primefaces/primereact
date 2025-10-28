'use client';
import { Component } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Overlay } from 'primereact/overlay';
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

        return (
            <Component instance={instance} attrs={rootProps}>
                {datepicker?.props.inline ? (
                    resolve(props.children, instance)
                ) : (
                    <Overlay
                        appendTo={datepicker?.props.appendTo}
                        target={datepicker?.inputRef?.current?.elementRef?.current}
                        open={datepicker?.state.overlayVisible}
                        onOpenChange={({ value }: useOverlayOpenChangeEvent) => datepicker?.setOverlayVisibleState(value)}
                        onAfterEnter={() => datepicker?.updateFocus()}
                    >
                        {resolve(props.children, instance)}
                    </Overlay>
                )}
            </Component>
        );
    }
});

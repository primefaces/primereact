'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultTriggerProps } from './DialogTrigger.props';

export const DialogTrigger = withComponent({
    name: 'Dialog.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: dialog?.cx('trigger'),
                type: 'button',
                'aria-expanded': dialog?.state.opened,
                'aria-controls': dialog?.id,
                onClick: dialog?.onOpenStateChange
            },
            dialog?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

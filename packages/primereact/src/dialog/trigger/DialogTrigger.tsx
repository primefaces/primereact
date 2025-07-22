'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultTriggerProps } from './DialogTrigger.props';

export const DialogTrigger = withComponent({
    name: 'DialogTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const rootProps = mergeProps(
            {
                className: dialog?.cx('trigger'),
                type: 'button',
                'aria-expanded': dialog?.state.opened,
                'aria-controls': dialog?.id,
                onClick: dialog?.onOpenStateChange
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a trigger.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={dialog?.ptm('trigger')} children={props.children} />;
    }
});

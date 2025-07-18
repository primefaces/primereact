'use client';
import { Component } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultCloseProps } from './DialogClose.props';

export const DialogClose = withComponent({
    name: 'DialogClose',
    defaultProps: defaultCloseProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: dialog?.cx('close'),
                onClick: dialog?.close
            },
            dialog?.ptm('close'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <TimesIcon pt={dialog?.ptm('closeIcon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a close button.
        return <Component ref={dialog?.closeButtonRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={dialog?.ptm('close')} children={props.children ?? icon} />;
    }
});

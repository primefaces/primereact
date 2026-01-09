'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
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

        return <Component ref={dialog?.closeButtonRef} as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});

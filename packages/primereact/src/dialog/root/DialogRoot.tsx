'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDialog } from '@primereact/headless/dialog';
import type { DialogRootInstance } from '@primereact/types/shared/dialog';
import { mergeProps, omit } from '@primeuix/utils';
import * as React from 'react';
import { DialogProvider } from '../Dialog.context';
import { defaultRootProps } from './DialogRoot.props';

export const DialogRoot = withComponent({
    name: 'Dialog.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const dialogInstance = instance?.inProps?.dialogInstance as unknown as Record<PropertyKey, unknown> | undefined;
        const dialog = dialogInstance ?? useDialog(omit(instance?.inProps, 'dialogInstance'));

        if (dialogInstance?.props) {
            Object.assign(instance.props, dialogInstance.props);
        }

        return dialog;
    },
    render(instance) {
        const { id, props, state, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                'data-opened': state.opened ? '' : undefined,
                'data-maximized': state.maximized ? '' : undefined,
                'data-position': props.position
            },
            ptmi('root')
        );

        return (
            <DialogProvider value={instance as unknown as DialogRootInstance}>
                <Component instance={instance as unknown as DialogRootInstance} attrs={rootProps} children={props.children} />
            </DialogProvider>
        );
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultMaximizableProps } from './DialogMaximizable.props';

export const DialogMaximizable = withComponent({
    name: 'Dialog.Maximizable',
    defaultProps: defaultMaximizableProps,
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
                className: dialog?.cx('maximizable'),
                [dialog?.state.maximized ? 'data-maximized' : 'data-minimized']: '',
                onClick: dialog?.toggleMaximized
            },
            dialog?.ptm('maximizable'),
            ptmi('root')
        );

        return <Component ref={dialog?.maximizableButtonRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

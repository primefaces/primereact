'use client';
import { Component, withComponent } from '@primereact/core/component';
import { WindowMaximizeIcon, WindowMinimizeIcon } from '@primereact/icons';
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
                onClick: dialog?.toggleMaximized
            },
            dialog?.ptm('maximizable'),
            ptmi('root')
        );

        const createIconElement = () => {
            const iconProps = dialog?.ptm('maximizableIcon');

            return dialog?.state.maximized ? <WindowMinimizeIcon pt={iconProps} /> : <WindowMaximizeIcon pt={iconProps} />;
        };

        const icon = createIconElement();

        return <Component ref={dialog?.maximizableButtonRef} as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});

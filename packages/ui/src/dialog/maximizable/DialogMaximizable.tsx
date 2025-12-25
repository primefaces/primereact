'use client';
import { Component, withComponent } from '@primereact/core/component';
import { WindowMaximizeIcon, WindowMinimizeIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDialogContext } from '../Dialog.context';
import { defaultMaximizableProps } from './DialogMaximizable.props';

export const DialogMaximizable = withComponent({
    name: 'DialogMaximizable',
    defaultProps: defaultMaximizableProps,
    setup() {
        const dialog = useDialogContext();

        return { dialog };
    },
    render(instance) {
        const { props, ptmi, dialog } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: dialog?.cx('maximizable'),
                onClick: dialog?.toggleMaximized
            },
            ptmi('root')
        );

        const createIconElement = () => {
            const iconProps = dialog?.ptm('maximizableIcon');

            return dialog?.state.maximized ? <WindowMinimizeIcon pt={iconProps} /> : <WindowMaximizeIcon pt={iconProps} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a maximizable button.
        return <Component ref={dialog?.maximizableButtonRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={dialog?.ptm('maximizable')} children={props.children ?? icon} />;
    }
});

'use client';
import { Component } from '@primereact/core/component';
import { useConfirmPopup } from '@primereact/headless/confirmpopup';
import { styles } from '@primereact/styles/confirmpopup';
import { ConfirmPopupInstance } from '@primereact/types/shared/confirmpopup';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ConfirmPopupAccept } from './accept';
import { ConfirmPopupProvider } from './ConfirmPopup.context';
import { defaultProps } from './ConfirmPopup.props';
import { ConfirmPopupContent } from './content';
import { ConfirmPopupFooter } from './footer';
import { ConfirmPopupIcon } from './icon';
import { ConfirmPopupMessage } from './message';
import { ConfirmPopupPortal } from './portal';
import { ConfirmPopupReject } from './reject';
import { ConfirmPopupTrigger } from './trigger';

export const ConfirmPopup = withComponent({
    name: 'ConfirmPopup',
    defaultProps,
    styles,
    setup(instance) {
        const confirmpopup = useConfirmPopup(instance.inProps);

        return confirmpopup;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <ConfirmPopupProvider value={instance as ConfirmPopupInstance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ConfirmPopupProvider>
        );
    },
    components: {
        Accept: ConfirmPopupAccept,
        Content: ConfirmPopupContent,
        Footer: ConfirmPopupFooter,
        Icon: ConfirmPopupIcon,
        Message: ConfirmPopupMessage,
        Portal: ConfirmPopupPortal,
        Reject: ConfirmPopupReject,
        Trigger: ConfirmPopupTrigger
    }
});

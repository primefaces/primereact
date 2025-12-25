'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultMessageProps } from './ConfirmPopupMessage.props';

export const ConfirmPopupMessage = withComponent({
    name: 'ConfirmPopupMessage',
    defaultProps: defaultMessageProps,
    setup() {
        const confirmpopup = useConfirmPopupContext();

        return { confirmpopup };
    },
    render(instance) {
        const { props, ptmi, confirmpopup } = instance;

        const rootProps = mergeProps(
            {
                className: confirmpopup?.cx('message')
            },
            confirmpopup?.ptm('message'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useConfirmPopup } from '@primereact/headless/confirmpopup';
import { ConfirmPopupInstance } from '@primereact/types/shared/confirmpopup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ConfirmPopupProvider } from '../ConfirmPopup.context';
import { defaultRootProps } from './ConfirmPopupRoot.props';

export const ConfirmPopupRoot = withComponent({
    name: 'ConfirmPopupRoot',
    defaultProps: defaultRootProps,
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
    }
});

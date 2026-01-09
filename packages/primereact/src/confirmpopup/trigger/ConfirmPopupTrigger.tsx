'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultTriggerProps } from './ConfirmPopupTrigger.props';

export const ConfirmPopupTrigger = withComponent({
    name: 'ConfirmPopupTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const confirmpopup = useConfirmPopupContext();

        return { confirmpopup };
    },
    render(instance) {
        const { props, ptmi, confirmpopup } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: confirmpopup?.cx('trigger'),
                onClick: confirmpopup?.onOpenStateChange
            },
            confirmpopup?.ptm('trigger'),
            ptmi('root')
        );

        return <Component ref={confirmpopup?.triggerRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

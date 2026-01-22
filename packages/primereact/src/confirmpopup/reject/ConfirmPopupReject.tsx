'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultRejectProps } from './ConfirmPopupReject.props';

export const ConfirmPopupReject = withComponent({
    name: 'ConfirmPopup.Reject',
    defaultProps: defaultRejectProps,
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
                className: confirmpopup?.cx('reject'),
                onClick: confirmpopup?.close
            },
            confirmpopup?.ptm('reject'),
            ptmi('root')
        );

        return <Component ref={confirmpopup?.rejectRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

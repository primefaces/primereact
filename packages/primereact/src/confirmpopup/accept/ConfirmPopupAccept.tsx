'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultAcceptProps } from './ConfirmPopupAccept.props';

export const ConfirmPopupAccept = withComponent({
    name: 'ConfirmPopupAccept',
    defaultProps: defaultAcceptProps,
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
                className: confirmpopup?.cx('accept'),
                onClick: confirmpopup?.close
            },
            confirmpopup?.ptm('accept'),
            ptmi('root')
        );

        return <Component ref={confirmpopup?.acceptRef} as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});

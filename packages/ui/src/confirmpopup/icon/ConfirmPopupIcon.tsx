'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultIconProps } from './ConfirmPopupIcon.props';

export const ConfirmPopupIcon = withComponent({
    name: 'ConfirmPopupIcon',
    defaultProps: defaultIconProps,
    setup() {
        const confirmpopup = useConfirmPopupContext();

        return { confirmpopup };
    },
    render(instance) {
        const { props, ptmi, confirmpopup } = instance;

        const rootProps = mergeProps(
            {
                className: confirmpopup?.cx('icon')
            },
            confirmpopup?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

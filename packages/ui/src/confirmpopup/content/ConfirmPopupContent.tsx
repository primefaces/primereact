'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultContentProps } from './ConfirmPopupContent.props';

export const ConfirmPopupContent = withComponent({
    name: 'ConfirmPopupContent',
    defaultProps: defaultContentProps,
    setup() {
        const confirmpopup = useConfirmPopupContext();

        return { confirmpopup };
    },
    render(instance) {
        const { props, ptmi, confirmpopup } = instance;

        const rootProps = mergeProps(
            {
                className: confirmpopup?.cx('content')
            },
            confirmpopup?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
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

        const rootProps = mergeProps(
            {
                className: confirmpopup?.cx('accept'),
                onClick: confirmpopup?.close
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a accept.
        return <Component ref={confirmpopup?.acceptRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmpopup?.ptm('accept')} children={props.children} />;
    }
});

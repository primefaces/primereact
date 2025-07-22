'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useConfirmPopupContext } from '../ConfirmPopup.context';
import { defaultRejectProps } from './ConfirmPopupReject.props';

export const ConfirmPopupReject = withComponent({
    name: 'ConfirmPopupReject',
    defaultProps: defaultRejectProps,
    setup() {
        const confirmpopup = useConfirmPopupContext();

        return { confirmpopup };
    },
    render(instance) {
        const { props, ptmi, confirmpopup } = instance;

        const rootProps = mergeProps(
            {
                className: confirmpopup?.cx('reject'),
                onClick: confirmpopup?.close
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a reject.
        return <Component ref={confirmpopup?.rejectRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmpopup?.ptm('reject')} children={props.children} />;
    }
});

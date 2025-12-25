'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
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

        const rootProps = mergeProps(
            {
                className: confirmpopup?.cx('trigger'),
                onClick: confirmpopup?.onOpenStateChange
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a trigger.
        return <Component ref={confirmpopup?.triggerRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={confirmpopup?.ptm('trigger')} children={props.children} />;
    }
});

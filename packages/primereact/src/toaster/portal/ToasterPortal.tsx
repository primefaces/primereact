'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useToasterContext } from '../Toaster.context';
import { defaultPortalProps } from './ToasterPortal.props';

export const ToasterPortal = withComponent({
    name: 'Toaster.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const toaster = useToasterContext();

        return { toaster };
    },
    render(instance) {
        const { props, ptmi, toaster } = instance;

        const portalProps = mergeProps(toaster?.ptm('portal'), ptmi('root'));

        return (
            <Portal>
                <Component instance={instance} attrs={portalProps} children={props.children} />
            </Portal>
        );
    }
});

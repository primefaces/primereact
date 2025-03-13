'use client';
import { Component, ComponentProvider, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultFooterProps } from './PanelFooter.props';

export const PanelFooter = withComponent((inInstance, ref) => {
    const { props, parent: panel } = inInstance;

    const footerProps = mergeProps(
        {
            className: panel?.cx?.('footer')
        },
        panel?.ptm?.('footer')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'div'} {...footerProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
}, defaultFooterProps);

PanelFooter.displayName = 'PrimeReact.PanelFooter';

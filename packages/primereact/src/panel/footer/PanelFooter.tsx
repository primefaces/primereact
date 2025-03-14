'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { useComponent } from '@primereact/core/component/useComponent';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultFooterProps } from './PanelFooter.props';

export const PanelFooter = (inProps) => {
    const instance = useComponent(inProps, defaultFooterProps);
    const { props, getParent } = instance;
    const panel = getParent('Panel');

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
};

PanelFooter.displayName = 'PrimeReact.PanelFooter';

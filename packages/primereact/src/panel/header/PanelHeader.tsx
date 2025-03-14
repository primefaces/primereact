'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { useComponent } from '@primereact/core/component/useComponent';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultHeaderProps } from './PanelHeader.props';

export const PanelHeader = (inProps) => {
    const instance = useComponent(inProps, defaultHeaderProps);
    const { props, getParent } = instance;
    const panel = getParent('Panel');

    const headerProps = mergeProps(
        {
            className: panel?.cx?.('header')
        },
        panel?.ptm?.('header')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...headerProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

PanelHeader.displayName = 'PrimeReact.PanelHeader';

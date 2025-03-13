'use client';
import { Component, ComponentProvider, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultHeaderProps } from './PanelHeader.props';

export const PanelHeader = withComponent((inInstance, ref) => {
    const { props, parent: panel } = inInstance;

    const headerProps = mergeProps(
        {
            className: panel?.cx?.('header')
        },
        panel?.ptm?.('header')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'div'} {...headerProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
}, defaultHeaderProps);

PanelHeader.displayName = 'PrimeReact.PanelHeader';

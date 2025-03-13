'use client';
import { Component, ComponentProvider, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultContentProps } from './PanelContent.props';

export const PanelContent = withComponent((inInstance, ref) => {
    const { props, parent: panel } = inInstance;

    const contentProps = mergeProps(
        {
            className: panel?.cx?.('content')
        },
        panel?.ptm?.('content')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'div'} {...contentProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
}, defaultContentProps);

PanelContent.displayName = 'PrimeReact.PanelContent';

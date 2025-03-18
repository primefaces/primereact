'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { PanelContentProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultContentProps } from './PanelContent.props';

export const PanelContent = (inProps: PanelContentProps) => {
    const instance = useComponent(inProps, defaultContentProps);
    const { props, ptmi, getParent } = instance;
    const panel = getParent('Panel');

    const contentProps = mergeProps(
        {
            className: panel?.cx?.('content')
        },
        panel?.ptm?.('content'),
        ptmi('root')
    );

    return (
        <ComponentProvider pIf={props.pIf}>
            <Component as={props.as || 'div'} {...contentProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

PanelContent.displayName = 'PrimeReact.PanelContent';

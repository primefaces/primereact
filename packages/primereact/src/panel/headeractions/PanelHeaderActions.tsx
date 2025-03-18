'use client';
import { Component, ComponentProvider } from '@primereact/core/component';
import { useComponent } from '@primereact/core/component/useComponent';
import type { PanelHeaderActionsProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultHeaderActionsProps } from './PanelHeaderActions.props';

export const PanelHeaderActions = (inProps: PanelHeaderActionsProps) => {
    const instance = useComponent(inProps, defaultHeaderActionsProps);
    const { props, ptmi, getParent } = instance;
    const panel = getParent('Panel');

    const headerProps = mergeProps(
        {
            className: panel?.cx('headerActions')
        },
        panel?.ptm('headerActions'),
        ptmi('root')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...headerProps}>
                {props.children}
            </Component>
        </ComponentProvider>
    );
};

PanelHeaderActions.displayName = 'PrimeReact.PanelHeaderActions';

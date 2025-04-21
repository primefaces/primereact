'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { PanelHeaderProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultHeaderProps } from './PanelHeader.props';

export const PanelHeader = (inProps: PanelHeaderProps) => {
    const instance = useComponent('PanelHeader', { inProps, defaultProps: defaultHeaderProps });
    const { props, ptmi, getParent } = instance;
    const panel = getParent('Panel');

    const headerProps = mergeProps(
        {
            className: panel?.cx('header')
        },
        panel?.ptm('header'),
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

PanelHeader.displayName = 'PrimeReact.PanelHeader';

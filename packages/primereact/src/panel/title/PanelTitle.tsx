'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import type { PanelTitleProps } from '@primereact/types/shared/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultTitleProps } from './PanelTitle.props';

export const PanelTitle = (inProps: PanelTitleProps) => {
    const instance = useComponent('PanelTitle', { inProps, defaultProps: defaultTitleProps });
    const { props, ptmi, getParent } = instance;
    const panel = getParent('Panel');

    const headerProps = mergeProps(
        {
            className: panel?.cx('title')
        },
        panel?.ptm('title'),
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

PanelTitle.displayName = 'PrimeReact.PanelTitle';
